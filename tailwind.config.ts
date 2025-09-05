import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: { floating: "0 10px 30px rgba(2,8,23,.08)" }
    }
  },
  plugins: []
} satisfies Config;
