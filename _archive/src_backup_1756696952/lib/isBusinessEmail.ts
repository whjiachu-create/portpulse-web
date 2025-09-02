const FREE_EMAILS = new Set([
  "gmail.com","googlemail.com","yahoo.com","hotmail.com","outlook.com","live.com","msn.com","icloud.com","me.com",
  "aol.com","gmx.com","proton.me","protonmail.com","qq.com","126.com","163.com","yeah.net","foxmail.com",
  "sina.com","sohu.com","yandex.ru","yandex.com","mail.ru"
]);

/** 简单商务邮箱校验：拒绝常见免费域；保留本地/测试域名用于开发 */
export function isBusinessEmail(email: string): boolean {
  const m = email.trim().toLowerCase().match(/^[^@\s]+@([^@\s]+\.[a-z0-9\-\.]+)$/i);
  if (!m) return false;
  const domain = m[1];
  if (domain.endsWith(".local") || domain.endsWith(".test")) return true;
  if (FREE_EMAILS.has(domain)) return false;
  // 常见免费二级域的兜底：xxx.gmail.com 等（极少见，但保险）
  if (/(^|\.)gmail\.com$/.test(domain)) return false;
  return true;
}
