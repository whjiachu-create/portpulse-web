// Flat config for ESLint 9 (no shareable config, register plugin directly)
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "public/**",
      "backup/**",
      "backups/**",
      "**/workspace/**",
      "next-env.d.ts",
      "**/*.backup.ts",
      "**/*.backup.tsx",
    ],
  },

  js.configs.recommended,
  // 非 type-aware 的 TS 推荐配置（避免 parserOptions.project 报错）
  ...tseslint.configs.recommended,

  {
    plugins: {
      // 以 "@next/next" 注册，才能识别文件里的禁用指令
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parserOptions: { project: null },
    },
    rules: {
      // 关掉图片规则（文件里若有 disable 指令也不会再报“未找到规则”）
      "@next/next/no-img-element": "off",

      // 这些在你的代码里噪音较多，暂时关闭；需要时再逐步收紧
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",

      "@typescript-eslint/no-unused-expressions": ["warn", {
        allowShortCircuit: true,
        allowTernary: true,
        enforceForJSX: true,
        allowTaggedTemplates: true,
      }],
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
    },
  },
];
