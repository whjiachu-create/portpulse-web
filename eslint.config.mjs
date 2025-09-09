// eslint.config.mjs
import next from "eslint-config-next";

export default [
  ...next(),
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "public/**",

      // 你的备份/快照目录（大量误报都来自这里）
      "backup/**",
      "backups/**",
      "**/workspace/**",

      // 工具生成文件
      "next-env.d.ts",
    ],
    rules: {
      // 把 <img> 提示降级或直接关掉： "off" 也可以
      "@next/next/no-img-element": "warn",

      // 避免把 'use client' 误判成“无用表达式”
      "@typescript-eslint/no-unused-expressions": ["warn", {
        allowShortCircuit: true,
        allowTernary: true,
        enforceForJSX: true,
        allowTaggedTemplates: true,
      }],
    },
  },
];