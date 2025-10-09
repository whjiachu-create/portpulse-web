#!/usr/bin/env bash
set -euo pipefail

# === Config（按需改） ===
BASE_BRANCH="main"
FEATURE_PREFIX="release/beta-cta"
MSG_COMMIT='feat(beta): public beta CTA & footer notice'
MSG_TAG='Production snapshot before beta CTA'

# === Pre-flight ===
command -v git >/dev/null || { echo "git not found"; exit 1; }
ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
[ -n "${ROOT:-}" ] || { echo "Not inside a git repo"; exit 1; }
cd "$ROOT"

echo "📦 Repo: $ROOT"

# 确保工作区干净（你也可以改成自动 commit）
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "❌ Working tree not clean. Please commit/stash first."
  exit 1
fi

# 同步主干
echo "🔄 Fetch & update $BASE_BRANCH..."
git fetch origin
git checkout "$BASE_BRANCH"
git pull --ff-only origin "$BASE_BRANCH"

# 打生产快照 TAG + 备份分支（回滚用）
STAMP="$(date +%Y%m%d-%H%M%S)"
TAG="prod-$STAMP"
BACKUP="backup/$TAG"

echo "🏷  Tag: $TAG"
git tag -a "$TAG" -m "$MSG_TAG"
git push origin "$TAG"

echo "🧵  Backup branch: $BACKUP"
git branch "$BACKUP"
git push origin "$BACKUP"

# 创建发布分支
REL="$FEATURE_PREFIX-$STAMP"
echo "🌿  Release branch: $REL"
git checkout -b "$REL"

# 这里假设你已在本地完成修改；若没有修改，直接退出
if git diff --quiet && git diff --cached --quiet; then
  echo "ℹ️  No local changes to commit. If you expected changes, commit them now and rerun."
else
  git add -A
  git commit -m "$MSG_COMMIT"
fi

git push -u origin HEAD

# 尝试自动创建 PR（可选，需安装 GitHub CLI）
if command -v gh >/dev/null; then
  echo "🪄 Creating PR via gh..."
  gh pr create --base "$BASE_BRANCH" --head "$REL" --title "$MSG_COMMIT" --body "Automated release: $REL"
else
  ORIGIN_URL="$(git remote get-url origin)"
  # 粗略拼个 PR 地址（GitHub 远程）
  if [[ "$ORIGIN_URL" =~ github\.com[:/](.+)/(.+)\.git ]]; then
    USER="${BASH_REMATCH[1]}"; REPO="${BASH_REMATCH[2]}"
    echo "🔗 Open PR: https://github.com/$USER/$REPO/compare/$BASE_BRANCH...$REL?expand=1"
  else
    echo "ℹ️  Open a PR from $REL to $BASE_BRANCH on your git hosting."
  fi
fi

echo "✅ Done. Tag=$TAG  Backup=$BACKUP  Branch=$REL"