#!/usr/bin/env bash
set -euo pipefail

# --- 基本信息 ---
TS="$(date +%Y%m%d-%H%M)"
BKDIR="backup/${TS}-snapshot"
WS="${BKDIR}/workspace"
BUNDLE="${BKDIR}/repo.bundle"
TAR="${BKDIR}.tgz"

echo "==> Creating snapshot at: ${BKDIR}"

# 目录/文件检查（粗校验）
test -f package.json || { echo "❌ 未找到 package.json，请在项目根目录运行"; exit 1; }
mkdir -p "${BKDIR}" "${WS}"

# --- Git 元数据 & bundle（完整仓库历史 + 分支/Tag）---
if command -v git >/dev/null 2>&1; then
  echo "==> Capturing git status/log and bundling repo"
  ( git rev-parse --is-inside-work-tree >/dev/null 2>&1 ) || { echo "❌ 不是 git 仓库（可忽略，但将无 bundle）"; } 
  {
    git rev-parse HEAD && \
    git status -sb && \
    git log --graph --decorate --oneline -n 100
  } > "${BKDIR}/git-info.txt" 2>/dev/null || true

  # 未提交改动也一并保存成 patch（不改变工作区）
  git diff > "${BKDIR}/uncommitted.patch" 2>/dev/null || true

  # 生成完整 bundle（包含所有引用）
  git bundle create "${BUNDLE}" --all >/dev/null 2>&1 || { echo "⚠️ 生成 bundle 失败（可能非 git 仓库），跳过"; rm -f "${BUNDLE}"; }
else
  echo "⚠️ 未安装 git，跳过 bundle"
fi

# --- 复制工作区（排除构建/缓存/依赖）---
echo "==> Rsync workspace"
rsync -a ./ "${WS}/" \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.turbo' \
  --exclude 'backup' \
  --exclude 'dist' \
  --exclude 'coverage' \
  --exclude '.DS_Store' \
  >/dev/null

# 额外：若存在环境文件，单独快照（含敏感信息，注意保管）
for f in .env .env.local .env.production .env.development; do
  if [ -f "$f" ]; then
    cp "$f" "${BKDIR}/$f"
  fi
done

# NPM/Pnpm/Yarn 锁文件快照
for f in package-lock.json pnpm-lock.yaml yarn.lock; do
  [ -f "$f" ] && cp "$f" "${BKDIR}/$f"
done

# --- 打包压缩 & 校验和 ---
echo "==> Archiving to ${TAR}"
tar -czf "${TAR}" -C "backup" "$(basename "${BKDIR}")"

# macOS 使用 shasum；Linux 也可兼容
if command -v shasum >/dev/null 2>&1; then
  shasum -a 256 "${TAR}" > "${TAR}.sha256"
elif command -v sha256sum >/dev/null 2>&1; then
  sha256sum "${TAR}" > "${TAR}.sha256"
fi

# --- 可选：打 Tag（不改变代码，仅增加轻量标签）---
if command -v git >/dev/null 2>&1 && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  TAG="bk-${TS}"
  git tag -a "${TAG}" -m "backup snapshot ${TS}" >/dev/null 2>&1 || true
  echo "==> Git tag: ${TAG}  (本地标签，若需可 push)"
fi

echo "✅ Snapshot done."
echo "📦 目录：${BKDIR}"
echo "🗜 归档：${TAR}"
echo "🧾 校验：${TAR}.sha256"
