export type Region = "NAM" | "EUR" | "APAC" | "MEA" | "LATAM";
export type Role = "G" | "H" | "G/H";
export type Bucket = "core" | "supp";

export type Port = {
  unlocode: string;
  name: string;
  country: string;
  region: Region;
  role: Role;
  bucket: Bucket;
  note?: string;
  aliases?: string[];
};

/**
 * M1 全量 100 港口
 * - Core 30：P1 即用
 * - 其余：supp（可按需要升级为 core）
 */
export const PORTS_M1: Port[] = [
  // --- Core 30 ---
  { unlocode: "USLAX", name: "Los Angeles", country: "US", region: "NAM", role: "G", bucket: "core" },
  { unlocode: "USLGB", name: "Long Beach", country: "US", region: "NAM", role: "G", bucket: "core" },
  { unlocode: "USNYC", name: "New York / New Jersey", country: "US", region: "NAM", role: "G", bucket: "core", note: "Port Newark/Elizabeth in NY/NJ" },
  { unlocode: "USSAV", name: "Savannah", country: "US", region: "NAM", role: "G", bucket: "core" },
  { unlocode: "USCHS", name: "Charleston", country: "US", region: "NAM", role: "G", bucket: "core" },
  { unlocode: "USORF", name: "Norfolk / Virginia", country: "US", region: "NAM", role: "G", bucket: "core" },
  { unlocode: "USHOU", name: "Houston", country: "US", region: "NAM", role: "G", bucket: "core" },
  { unlocode: "USSEA", name: "Seattle (NWSA)", country: "US", region: "NAM", role: "G", bucket: "core", note: "paired with Tacoma (USTIW)" },
  { unlocode: "USOAK", name: "Oakland", country: "US", region: "NAM", role: "G", bucket: "core" },
  { unlocode: "USMIA", name: "Miami", country: "US", region: "NAM", role: "G", bucket: "core" },

  { unlocode: "NLRTM", name: "Rotterdam", country: "NL", region: "EUR", role: "G/H", bucket: "core" },
  { unlocode: "BEANR", name: "Antwerp-Bruges (Antwerp)", country: "BE", region: "EUR", role: "G/H", bucket: "core", note: "Zeebrugge = BEZEE" },
  { unlocode: "DEHAM", name: "Hamburg", country: "DE", region: "EUR", role: "G", bucket: "core" },
  { unlocode: "DEBRV", name: "Bremerhaven", country: "DE", region: "EUR", role: "G", bucket: "core" },
  { unlocode: "FRLEH", name: "Le Havre (HAROPA)", country: "FR", region: "EUR", role: "G", bucket: "core" },
  { unlocode: "GBFXT", name: "Felixstowe", country: "GB", region: "EUR", role: "G", bucket: "core" },
  { unlocode: "GBLGP", name: "London Gateway", country: "GB", region: "EUR", role: "G", bucket: "core" },
  { unlocode: "ESVLC", name: "Valencia", country: "ES", region: "EUR", role: "G", bucket: "core" },
  { unlocode: "ESALG", name: "Algeciras", country: "ES", region: "EUR", role: "H", bucket: "core" },
  { unlocode: "GRPIR", name: "Piraeus", country: "GR", region: "EUR", role: "H", bucket: "core" },

  { unlocode: "CNSHA", name: "Shanghai", country: "CN", region: "APAC", role: "G", bucket: "core" },
  { unlocode: "CNNGB", name: "Ningbo-Zhoushan", country: "CN", region: "APAC", role: "G", bucket: "core" },
  { unlocode: "CNSZX", name: "Shenzhen (Yantian/Shekou)", country: "CN", region: "APAC", role: "G", bucket: "core", aliases: ["CNYTN", "CNSHK"] },
  { unlocode: "CNTAO", name: "Qingdao", country: "CN", region: "APAC", role: "G", bucket: "core" },
  { unlocode: "KRPUS", name: "Busan", country: "KR", region: "APAC", role: "H", bucket: "core" },
  { unlocode: "SGSIN", name: "Singapore", country: "SG", region: "APAC", role: "H", bucket: "core" },
  { unlocode: "MYTPP", name: "Tanjung Pelepas", country: "MY", region: "APAC", role: "H", bucket: "core" },
  { unlocode: "THLCH", name: "Laem Chabang", country: "TH", region: "APAC", role: "G", bucket: "core" },
  { unlocode: "INNSA", name: "Nhava Sheva / JNPT", country: "IN", region: "APAC", role: "G", bucket: "core" },
  { unlocode: "INMUN", name: "Mundra", country: "IN", region: "APAC", role: "G", bucket: "core" },

  // --- Priority 22（原有）---
  { unlocode: "USTIW", name: "Tacoma (NWSA)", country: "US", region: "NAM", role: "G", bucket: "supp" },
  { unlocode: "USBAL", name: "Baltimore", country: "US", region: "NAM", role: "G", bucket: "supp" },
  { unlocode: "USPHL", name: "Philadelphia", country: "US", region: "NAM", role: "G", bucket: "supp" },
  { unlocode: "USJAX", name: "Jacksonville", country: "US", region: "NAM", role: "G", bucket: "supp" },
  { unlocode: "USMOB", name: "Mobile", country: "US", region: "NAM", role: "G", bucket: "supp" },
  { unlocode: "CAVAN", name: "Vancouver", country: "CA", region: "NAM", role: "G", bucket: "supp" },
  { unlocode: "CAPRR", name: "Prince Rupert", country: "CA", region: "NAM", role: "G", bucket: "supp" },

  { unlocode: "ESBCN", name: "Barcelona", country: "ES", region: "EUR", role: "G", bucket: "supp" },
  { unlocode: "PLGDN", name: "Gdańsk", country: "PL", region: "EUR", role: "G", bucket: "supp" },
  { unlocode: "SEGOT", name: "Gothenburg", country: "SE", region: "EUR", role: "G", bucket: "supp" },
  { unlocode: "SIKOP", name: "Koper", country: "SI", region: "EUR", role: "H", bucket: "supp" },

  { unlocode: "CNXMN", name: "Xiamen", country: "CN", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "CNTNJ", name: "Tianjin / Xingang", country: "CN", region: "APAC", role: "G", bucket: "supp", aliases: ["CNTSN"] },
  { unlocode: "JPTYO", name: "Tokyo", country: "JP", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "JPYOK", name: "Yokohama", country: "JP", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "JPNGO", name: "Nagoya", country: "JP", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "VNSGN", name: "Ho Chi Minh City", country: "VN", region: "APAC", role: "G", bucket: "supp", note: "Cat Lai terminal" },
  { unlocode: "IDTPP", name: "Jakarta (Tanjung Priok)", country: "ID", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "PHMNL", name: "Manila", country: "PH", region: "APAC", role: "G", bucket: "supp" },

  { unlocode: "AEJEA", name: "Jebel Ali", country: "AE", region: "MEA", role: "H", bucket: "supp" },
  { unlocode: "OMSLL", name: "Salalah", country: "OM", region: "MEA", role: "H", bucket: "supp" },
  { unlocode: "LKCMB", name: "Colombo", country: "LK", region: "APAC", role: "H", bucket: "supp" },

  // --- 新增 48：补足到 100 ---
  // Americas（20）
  { unlocode: "USEVG", name: "Port Everglades", country: "US", region: "NAM", role: "G", bucket: "supp" },
  { unlocode: "USMSY", name: "New Orleans", country: "US", region: "NAM", role: "G", bucket: "supp" },
  { unlocode: "USBOS", name: "Boston", country: "US", region: "NAM", role: "G", bucket: "supp" },

  { unlocode: "CAMTR", name: "Montréal", country: "CA", region: "NAM", role: "G", bucket: "supp" },
  { unlocode: "CAHAL", name: "Halifax", country: "CA", region: "NAM", role: "G", bucket: "supp" },

  { unlocode: "MXZLO", name: "Manzanillo", country: "MX", region: "LATAM", role: "G", bucket: "supp" },
  { unlocode: "MXLZC", name: "Lázaro Cárdenas", country: "MX", region: "LATAM", role: "G", bucket: "supp" },
  { unlocode: "MXVER", name: "Veracruz", country: "MX", region: "LATAM", role: "G", bucket: "supp" },
  { unlocode: "MXATM", name: "Altamira", country: "MX", region: "LATAM", role: "G", bucket: "supp" },

  { unlocode: "PABLB", name: "Balboa", country: "PA", region: "LATAM", role: "H", bucket: "supp" },
  { unlocode: "PACOL", name: "Colón", country: "PA", region: "LATAM", role: "H", bucket: "supp" },

  { unlocode: "BRSSZ", name: "Santos", country: "BR", region: "LATAM", role: "G", bucket: "supp" },
  { unlocode: "BRPNG", name: "Paranaguá", country: "BR", region: "LATAM", role: "G", bucket: "supp" },

  { unlocode: "COCTG", name: "Cartagena", country: "CO", region: "LATAM", role: "H", bucket: "supp" },
  { unlocode: "COBUN", name: "Buenaventura", country: "CO", region: "LATAM", role: "G", bucket: "supp" },
  { unlocode: "PECLL", name: "Callao", country: "PE", region: "LATAM", role: "G", bucket: "supp" },
  { unlocode: "CLSAI", name: "San Antonio", country: "CL", region: "LATAM", role: "G", bucket: "supp" },
  { unlocode: "ARBUE", name: "Buenos Aires", country: "AR", region: "LATAM", role: "G", bucket: "supp" },
  { unlocode: "UYMVD", name: "Montevideo", country: "UY", region: "LATAM", role: "G", bucket: "supp" },
  { unlocode: "JMKIN", name: "Kingston", country: "JM", region: "LATAM", role: "H", bucket: "supp" },

  // APAC（14）
  { unlocode: "HKHKG", name: "Hong Kong", country: "HK", region: "APAC", role: "H", bucket: "supp" },
  { unlocode: "TWKHH", name: "Kaohsiung", country: "TW", region: "APAC", role: "G/H", bucket: "supp" },
  { unlocode: "TWKEL", name: "Keelung", country: "TW", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "MYPKG", name: "Port Klang", country: "MY", region: "APAC", role: "H", bucket: "supp" },

  { unlocode: "VNCMT", name: "Cai Mep–Thi Vai", country: "VN", region: "APAC", role: "G/H", bucket: "supp" },
  { unlocode: "VNHPH", name: "Hai Phong", country: "VN", region: "APAC", role: "G", bucket: "supp" },

  { unlocode: "IDSUB", name: "Surabaya (Tanjung Perak)", country: "ID", region: "APAC", role: "G", bucket: "supp" },

  { unlocode: "KRKAN", name: "Gwangyang", country: "KR", region: "APAC", role: "H", bucket: "supp" },
  { unlocode: "KRINC", name: "Incheon", country: "KR", region: "APAC", role: "G", bucket: "supp" },

  { unlocode: "AUSYD", name: "Sydney (Port Botany)", country: "AU", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "AUMEL", name: "Melbourne", country: "AU", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "AUBNE", name: "Brisbane", country: "AU", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "AUFRE", name: "Fremantle", country: "AU", region: "APAC", role: "G", bucket: "supp" },
  { unlocode: "NZAKL", name: "Auckland", country: "NZ", region: "APAC", role: "G", bucket: "supp" },

  // Europe / MEA（14）
  { unlocode: "BEZEE", name: "Zeebrugge", country: "BE", region: "EUR", role: "H", bucket: "supp" },
  { unlocode: "FRDKK", name: "Dunkirk", country: "FR", region: "EUR", role: "G", bucket: "supp" },
  { unlocode: "DEWVN", name: "Wilhelmshaven (JadeWeser)", country: "DE", region: "EUR", role: "G", bucket: "supp" },

  { unlocode: "ITGIT", name: "Gioia Tauro", country: "IT", region: "EUR", role: "H", bucket: "supp" },
  { unlocode: "ITTRS", name: "Trieste", country: "IT", region: "EUR", role: "H", bucket: "supp" },
  { unlocode: "ITLSP", name: "La Spezia", country: "IT", region: "EUR", role: "G", bucket: "supp" },
  { unlocode: "ITGOA", name: "Genoa", country: "IT", region: "EUR", role: "G", bucket: "supp" },

  { unlocode: "FRMRS", name: "Marseille Fos", country: "FR", region: "EUR", role: "G", bucket: "supp" },
  { unlocode: "PTSIE", name: "Sines", country: "PT", region: "EUR", role: "G", bucket: "supp" },
  { unlocode: "ESBIO", name: "Bilbao", country: "ES", region: "EUR", role: "G", bucket: "supp" },

  { unlocode: "GBLIV", name: "Liverpool", country: "GB", region: "EUR", role: "G", bucket: "supp" },
  { unlocode: "GBSOU", name: "Southampton", country: "GB", region: "EUR", role: "G", bucket: "supp" },
  { unlocode: "NLAMS", name: "Amsterdam", country: "NL", region: "EUR", role: "G", bucket: "supp" },

  { unlocode: "MATNG", name: "Tanger-Med", country: "MA", region: "MEA", role: "H", bucket: "supp" }
];
