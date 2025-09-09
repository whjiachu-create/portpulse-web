export type PortRow = {
  unlocode: string;
  name: string;
  country: string; // ISO2
  region: "North America" | "Europe" | "APAC" | "Middle East" | "LATAM" | "Africa";
  role: "G" | "H"; // G=Gateway, H=Hub
};

export const PORTS100: PortRow[] = [
  // --- Core 30 ---
  { unlocode: "USLAX", name: "Los Angeles", country: "US", region: "North America", role: "G" },
  { unlocode: "USLGB", name: "Long Beach", country: "US", region: "North America", role: "G" },
  { unlocode: "USNYC", name: "New York / New Jersey", country: "US", region: "North America", role: "G" },
  { unlocode: "USSAV", name: "Savannah", country: "US", region: "North America", role: "G" },
  { unlocode: "USCHS", name: "Charleston", country: "US", region: "North America", role: "G" },
  { unlocode: "USORF", name: "Norfolk / Virginia", country: "US", region: "North America", role: "G" },
  { unlocode: "USHOU", name: "Houston", country: "US", region: "North America", role: "G" },
  { unlocode: "USSEA", name: "Seattle (NWSA)", country: "US", region: "North America", role: "G" },
  { unlocode: "USOAK", name: "Oakland", country: "US", region: "North America", role: "G" },
  { unlocode: "USMIA", name: "Miami", country: "US", region: "North America", role: "G" },

  { unlocode: "NLRTM", name: "Rotterdam", country: "NL", region: "Europe", role: "G" },
  { unlocode: "BEANR", name: "Antwerp-Bruges", country: "BE", region: "Europe", role: "G" },
  { unlocode: "DEHAM", name: "Hamburg", country: "DE", region: "Europe", role: "G" },
  { unlocode: "DEBRV", name: "Bremerhaven", country: "DE", region: "Europe", role: "G" },
  { unlocode: "FRLEH", name: "Le Havre (HAROPA)", country: "FR", region: "Europe", role: "G" },
  { unlocode: "GBFXT", name: "Felixstowe", country: "GB", region: "Europe", role: "G" },
  { unlocode: "GBLGP", name: "London Gateway", country: "GB", region: "Europe", role: "G" },
  { unlocode: "ESVLC", name: "Valencia", country: "ES", region: "Europe", role: "G" },
  { unlocode: "ESALG", name: "Algeciras", country: "ES", region: "Europe", role: "H" },
  { unlocode: "GRPIR", name: "Piraeus", country: "GR", region: "Europe", role: "H" },

  { unlocode: "CNSHA", name: "Shanghai", country: "CN", region: "APAC", role: "G" },
  { unlocode: "CNNGB", name: "Ningbo-Zhoushan", country: "CN", region: "APAC", role: "G" },
  { unlocode: "CNSZX", name: "Shenzhen (Yantian/Shekou)", country: "CN", region: "APAC", role: "G" },
  { unlocode: "CNTAO", name: "Qingdao", country: "CN", region: "APAC", role: "G" },
  { unlocode: "KRPUS", name: "Busan", country: "KR", region: "APAC", role: "H" },
  { unlocode: "SGSIN", name: "Singapore", country: "SG", region: "APAC", role: "H" },
  { unlocode: "MYTPP", name: "Tanjung Pelepas", country: "MY", region: "APAC", role: "H" },
  { unlocode: "THLCH", name: "Laem Chabang", country: "TH", region: "APAC", role: "G" },
  { unlocode: "INNSA", name: "Nhava Sheva (JNPT)", country: "IN", region: "APAC", role: "G" },
  { unlocode: "INMUN", name: "Mundra", country: "IN", region: "APAC", role: "G" },

  // --- Priority 22 (到 52) ---
  { unlocode: "USTIW", name: "Tacoma (NWSA)", country: "US", region: "North America", role: "G" },
  { unlocode: "USBAL", name: "Baltimore", country: "US", region: "North America", role: "G" },
  { unlocode: "USPHL", name: "Philadelphia", country: "US", region: "North America", role: "G" },
  { unlocode: "USJAX", name: "Jacksonville", country: "US", region: "North America", role: "G" },
  { unlocode: "USMOB", name: "Mobile", country: "US", region: "North America", role: "G" },
  { unlocode: "CAVAN", name: "Vancouver", country: "CA", region: "North America", role: "G" },
  { unlocode: "CAPRR", name: "Prince Rupert", country: "CA", region: "North America", role: "G" },

  { unlocode: "ESBCN", name: "Barcelona", country: "ES", region: "Europe", role: "G" },
  { unlocode: "PLGDN", name: "Gdańsk", country: "PL", region: "Europe", role: "G" },
  { unlocode: "SEGOT", name: "Gothenburg", country: "SE", region: "Europe", role: "G" },
  { unlocode: "SIKOP", name: "Koper", country: "SI", region: "Europe", role: "H" },

  { unlocode: "CNXMN", name: "Xiamen", country: "CN", region: "APAC", role: "G" },
  { unlocode: "CNTNJ", name: "Tianjin / Xingang", country: "CN", region: "APAC", role: "G" },

  { unlocode: "JPTYO", name: "Tokyo", country: "JP", region: "APAC", role: "G" },
  { unlocode: "JPYOK", name: "Yokohama", country: "JP", region: "APAC", role: "G" },
  { unlocode: "JPNGO", name: "Nagoya", country: "JP", region: "APAC", role: "G" },

  { unlocode: "VNSGN", name: "Ho Chi Minh City (Cat Lai)", country: "VN", region: "APAC", role: "G" },
  { unlocode: "IDTPP", name: "Jakarta (Tanjung Priok)", country: "ID", region: "APAC", role: "G" },
  { unlocode: "PHMNL", name: "Manila", country: "PH", region: "APAC", role: "G" },

  { unlocode: "AEJEA", name: "Jebel Ali", country: "AE", region: "Middle East", role: "H" },
  { unlocode: "OMSLL", name: "Salalah", country: "OM", region: "Middle East", role: "H" },
  { unlocode: "LKCMB", name: "Colombo", country: "LK", region: "APAC", role: "H" },

  // --- Extras to 100 ---
  // North America (+6)
  { unlocode: "USMSY", name: "New Orleans", country: "US", region: "North America", role: "G" },
  { unlocode: "USEVR", name: "Port Everglades", country: "US", region: "North America", role: "G" },
  { unlocode: "USBOS", name: "Boston", country: "US", region: "North America", role: "G" },
  { unlocode: "CAMTR", name: "Montreal", country: "CA", region: "North America", role: "G" },
  { unlocode: "CAHAL", name: "Halifax", country: "CA", region: "North America", role: "G" },
  { unlocode: "CASJB", name: "Saint John", country: "CA", region: "North America", role: "G" },

  // Europe (+14)
  { unlocode: "ITGIT", name: "Gioia Tauro", country: "IT", region: "Europe", role: "H" },
  { unlocode: "ITTRS", name: "Trieste", country: "IT", region: "Europe", role: "H" },
  { unlocode: "ITSPE", name: "La Spezia", country: "IT", region: "Europe", role: "G" },
  { unlocode: "PTLEI", name: "Leixões", country: "PT", region: "Europe", role: "G" },
  { unlocode: "FRMRS", name: "Marseille", country: "FR", region: "Europe", role: "G" },
  { unlocode: "GBSOU", name: "Southampton", country: "GB", region: "Europe", role: "G" },
  { unlocode: "GBTIL", name: "Tilbury", country: "GB", region: "Europe", role: "G" },
  { unlocode: "BEZEE", name: "Zeebrugge", country: "BE", region: "Europe", role: "G" },
  { unlocode: "PLGDY", name: "Gdynia", country: "PL", region: "Europe", role: "G" },
  { unlocode: "LTKLP", name: "Klaipėda", country: "LT", region: "Europe", role: "G" },
  { unlocode: "TRMER", name: "Mersin", country: "TR", region: "Europe", role: "G" },
  { unlocode: "EETLL", name: "Tallinn", country: "EE", region: "Europe", role: "G" },
  { unlocode: "GBLIV", name: "Liverpool", country: "GB", region: "Europe", role: "G" },
  { unlocode: "NLAMS", name: "Amsterdam", country: "NL", region: "Europe", role: "G" },

  // APAC (+12)
  { unlocode: "CNDAL", name: "Dalian", country: "CN", region: "APAC", role: "G" },
  { unlocode: "HKHKG", name: "Hong Kong", country: "HK", region: "APAC", role: "H" },
  { unlocode: "TWKHH", name: "Kaohsiung", country: "TW", region: "APAC", role: "G" },
  { unlocode: "TWKEL", name: "Keelung", country: "TW", region: "APAC", role: "G" },
  { unlocode: "JPOSA", name: "Osaka", country: "JP", region: "APAC", role: "G" },
  { unlocode: "JPUKB", name: "Kobe", country: "JP", region: "APAC", role: "G" },
  { unlocode: "KRINC", name: "Incheon", country: "KR", region: "APAC", role: "G" },
  { unlocode: "VNHPP", name: "Haiphong", country: "VN", region: "APAC", role: "G" },
  { unlocode: "THBKK", name: "Bangkok", country: "TH", region: "APAC", role: "G" },
  { unlocode: "MYPKG", name: "Port Klang", country: "MY", region: "APAC", role: "G" },
  { unlocode: "IDSUB", name: "Surabaya", country: "ID", region: "APAC", role: "G" },
  { unlocode: "INMAA", name: "Chennai", country: "IN", region: "APAC", role: "G" },

  // Middle East (+5)
  { unlocode: "AEAUH", name: "Abu Dhabi", country: "AE", region: "Middle East", role: "G" },
  { unlocode: "OMSOH", name: "Sohar", country: "OM", region: "Middle East", role: "G" },
  { unlocode: "SADMM", name: "Dammam", country: "SA", region: "Middle East", role: "G" },
  { unlocode: "SAJED", name: "Jeddah", country: "SA", region: "Middle East", role: "G" },
  { unlocode: "QADOH", name: "Doha", country: "QA", region: "Middle East", role: "G" },

  // Africa (+4)
  { unlocode: "ZADUR", name: "Durban", country: "ZA", region: "Africa", role: "G" },
  { unlocode: "ZACPT", name: "Cape Town", country: "ZA", region: "Africa", role: "G" },
  { unlocode: "ZANGQ", name: "Ngqura", country: "ZA", region: "Africa", role: "G" },
  { unlocode: "MATNG", name: "Tanger-Med", country: "MA", region: "Africa", role: "H" },

  // LATAM (+8)
  { unlocode: "MXZLO", name: "Manzanillo", country: "MX", region: "LATAM", role: "G" },
  { unlocode: "MXLZC", name: "Lázaro Cárdenas", country: "MX", region: "LATAM", role: "G" },
  { unlocode: "MXVER", name: "Veracruz", country: "MX", region: "LATAM", role: "G" },
  { unlocode: "PABLB", name: "Balboa", country: "PA", region: "LATAM", role: "H" },
  { unlocode: "PAONX", name: "Colón", country: "PA", region: "LATAM", role: "H" },
  { unlocode: "BRSSZ", name: "Santos", country: "BR", region: "LATAM", role: "G" },
  { unlocode: "COCTG", name: "Cartagena", country: "CO", region: "LATAM", role: "H" },
  { unlocode: "PECLL", name: "Callao", country: "PE", region: "LATAM", role: "G" },
];
