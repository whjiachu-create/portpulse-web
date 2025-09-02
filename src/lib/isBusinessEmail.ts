const FREE_DOMAINS = [
  // global majors
  "gmail.com","googlemail.com","yahoo.com","hotmail.com","outlook.com","live.com","msn.com",
  // Apple
  "icloud.com","me.com","mac.com",
  // Microsoft country
  "outlook.com","hotmail.co.uk","hotmail.fr","outlook.de",
  // Common EU/LatAm/SEA/ME/Africa free-mail
  "gmx.com","gmx.de","web.de","yandex.ru","yandex.com","mail.ru","libero.it","orange.fr","free.fr","laposte.net",
  "seznam.cz","wp.pl","o2.pl","interia.pl","onet.pl",
  "proton.me","protonmail.com","zoho.com","fastmail.com",
  // China free-mail
  "qq.com","163.com","126.com","sina.com","yeah.net",
  // Others
  "naver.com","daum.net","hanmail.net","rediffmail.com","bol.com.br","uol.com.br","terra.com.br"
];

export function isBusinessEmail(email: string): boolean {
  const m = String(email || "").trim().toLowerCase().match(/^[^@\s]+@([^@\s]+)$/);
  if (!m) return false;
  const domain = m[1];
  return !FREE_DOMAINS.some((d) => d === domain);
}
