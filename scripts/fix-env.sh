#!/usr/bin/env bash
set -euo pipefail
ENV_FILE=".env.local"

cd "$(dirname "$0")/.."

if [[ ! -f "$ENV_FILE" ]]; then
  echo "❌ $ENV_FILE not found in $(pwd)" >&2
  exit 1
fi

ts="$(date +%Y%m%d%H%M%S)"
cp -v "$ENV_FILE" "${ENV_FILE}.bak.${ts}"

# 1) 去 BOM + 统一为 LF
# 使用 awk 便携处理：去 BOM；把 CRLF 转 LF
awk 'NR==1{sub(/^\xef\xbb\xbf/,"")} {gsub(/\r$/,""); print}' "$ENV_FILE" > "${ENV_FILE}.norm"

# 2) 逐行规范：
# - 忽略纯空/注释行
# - 去首尾空白
# - 等号两侧压缩为空
# - 去掉值两侧成对引号（"..." 或 '\''...'\''）
# - 仅保留形如 KEY=VALUE 的行
awk '
function trim(s){ sub(/^[ \t]+/,"",s); sub(/[ \t]+$/,"",s); return s }
{
  raw=$0
  # 忽略空行与注释（允许前置空格）
  if (raw ~ /^[ \t]*$/) next
  if (raw ~ /^[ \t]*#/)  { print raw; next }

  # 拆分 KEY=VALUE
  n=split(raw, parts, "=")
  if (n < 2) { print raw; next }  # 非赋值行照抄（例如注释或其它语句）

  key=trim(parts[1])
  # 重新拼接 value（防止值内也有等号）
  value=substr(raw, index(raw, "=")+1)
  value=trim(value)

  # 等号两侧不能有空白：后续写回时我们去掉空白
  # 去值两端成对引号
  if (value ~ /^".*"$/) { sub(/^"/,"",value); sub(/"$/,"",value) }
  else if (value ~ /^'\''.*'\''$/) { sub(/^'\''/,"",value); sub(/'\''$/,"",value) }

  # 回写：KEY=VALUE（无空格）
  print key "=" value
}' "${ENV_FILE}.norm" > "${ENV_FILE}.clean"

mv -v "${ENV_FILE}.clean" "$ENV_FILE"
rm -f "${ENV_FILE}.norm"

echo "✅ Cleaned $ENV_FILE"
echo "---- Preview ----"
sed -n '1,120p' "$ENV_FILE" | nl -ba
