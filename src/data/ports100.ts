// src/data/ports100.ts
export type Region =
  | "North America"
  | "Europe"
  | "APAC"
  | "Middle East"
  | "LATAM"
  | "Africa";

export type PortRow = {
  name: string;
  code: string;        // UN/LOCODE
  country: string;
  region: Region;
  status: "live" | "beta";
};

export const PORTS100: PortRow[] = [
  /* ------------------------------- APAC (27) ------------------------------- */
  { name: "Shanghai", code: "CNSHA", country: "China", region: "APAC", status: "live" },
  { name: "Ningbo-Zhoushan", code: "CNNGB", country: "China", region: "APAC", status: "live" },
  { name: "Shenzhen (Yantian/Shekou)", code: "CNSZX", country: "China", region: "APAC", status: "live" },
  { name: "Xiamen", code: "CNXMN", country: "China", region: "APAC", status: "live" },
  { name: "Qingdao", code: "CNTAO", country: "China", region: "APAC", status: "live" },
  { name: "Tianjin", code: "CNTJN", country: "China", region: "APAC", status: "live" },
  { name: "Dalian", code: "CNDLC", country: "China", region: "APAC", status: "beta" },
  { name: "Busan", code: "KRPUS", country: "Korea", region: "APAC", status: "live" },
  { name: "Incheon", code: "KRINC", country: "Korea", region: "APAC", status: "beta" },
  { name: "Singapore", code: "SGSIN", country: "Singapore", region: "APAC", status: "live" },
  { name: "Tanjung Pelepas", code: "MYTPP", country: "Malaysia", region: "APAC", status: "live" },
  { name: "Port Klang", code: "MYPKG", country: "Malaysia", region: "APAC", status: "live" },
  { name: "Laem Chabang", code: "THLCH", country: "Thailand", region: "APAC", status: "live" },
  { name: "Ho Chi Minh City (Cat Lai)", code: "VNSGN", country: "Vietnam", region: "APAC", status: "live" },
  { name: "Haiphong", code: "VNHPP", country: "Vietnam", region: "APAC", status: "beta" },
  { name: "Manila", code: "PHMNL", country: "Philippines", region: "APAC", status: "live" },
  { name: "Jakarta / Tanjung Priok", code: "IDJKT", country: "Indonesia", region: "APAC", status: "live" },
  { name: "Surabaya / Tanjung Perak", code: "IDSUB", country: "Indonesia", region: "APAC", status: "beta" },
  { name: "Colombo", code: "LKCMB", country: "Sri Lanka", region: "APAC", status: "live" },
  { name: "Chittagong", code: "BDCGP", country: "Bangladesh", region: "APAC", status: "beta" },
  { name: "Nhava Sheva (JNPT)", code: "INNSA", country: "India", region: "APAC", status: "live" },
  { name: "Mundra", code: "INMUN", country: "India", region: "APAC", status: "live" },
  { name: "Chennai", code: "INMAA", country: "India", region: "APAC", status: "beta" },
  { name: "Tokyo", code: "JPTYO", country: "Japan", region: "APAC", status: "live" },
  { name: "Yokohama", code: "JPYOK", country: "Japan", region: "APAC", status: "live" },
  { name: "Nagoya", code: "JPNGO", country: "Japan", region: "APAC", status: "beta" },
  { name: "Kaohsiung", code: "TWKHH", country: "Taiwan", region: "APAC", status: "live" },
  { name: "Hong Kong", code: "HKHKG", country: "Hong Kong, China", region: "APAC", status: "live" },

  /* ------------------------------ Europe (23) ------------------------------ */
  { name: "Rotterdam", code: "NLRTM", country: "Netherlands", region: "Europe", status: "live" },
  { name: "Antwerp-Bruges (Antwerp)", code: "BEANR", country: "Belgium", region: "Europe", status: "live" },
  { name: "Hamburg", code: "DEHAM", country: "Germany", region: "Europe", status: "live" },
  { name: "Bremerhaven", code: "DEBRV", country: "Germany", region: "Europe", status: "live" },
  { name: "Felixstowe", code: "GBFXT", country: "United Kingdom", region: "Europe", status: "live" },
  { name: "London Gateway", code: "GBLGP", country: "United Kingdom", region: "Europe", status: "beta" },
  { name: "Southampton", code: "GBSOU", country: "United Kingdom", region: "Europe", status: "live" },
  { name: "Gothenburg", code: "SEGOT", country: "Sweden", region: "Europe", status: "live" },
  { name: "Aarhus", code: "DKARH", country: "Denmark", region: "Europe", status: "beta" },
  { name: "Algeciras", code: "ESALG", country: "Spain", region: "Europe", status: "live" },
  { name: "Valencia", code: "ESVLC", country: "Spain", region: "Europe", status: "live" },
  { name: "Barcelona", code: "ESBCN", country: "Spain", region: "Europe", status: "live" },
  { name: "Piraeus", code: "GRPIR", country: "Greece", region: "Europe", status: "live" },
  { name: "Gioia Tauro", code: "ITGIT", country: "Italy", region: "Europe", status: "live" },
  { name: "Trieste", code: "ITTRS", country: "Italy", region: "Europe", status: "beta" },
  { name: "Koper", code: "SIKOP", country: "Slovenia", region: "Europe", status: "live" },
  { name: "Gdańsk", code: "PLGDN", country: "Poland", region: "Europe", status: "live" },
  { name: "Le Havre", code: "FRLEH", country: "France", region: "Europe", status: "live" },
  { name: "Marseille", code: "FRMRS", country: "France", region: "Europe", status: "beta" },
  { name: "Dublin", code: "IEDUB", country: "Ireland", region: "Europe", status: "beta" },
  { name: "Zeebrugge", code: "BEZEE", country: "Belgium", region: "Europe", status: "live" },
  { name: "Constanța", code: "ROCND", country: "Romania", region: "Europe", status: "beta" },
  { name: "Oslo", code: "NOOSL", country: "Norway", region: "Europe", status: "beta" },

  /* ------------------------- North America (20) --------------------------- */
  { name: "Los Angeles", code: "USLAX", country: "United States", region: "North America", status: "live" },
  { name: "Long Beach", code: "USLGB", country: "United States", region: "North America", status: "live" },
  { name: "Oakland", code: "USOAK", country: "United States", region: "North America", status: "beta" },
  { name: "Seattle", code: "USSEA", country: "United States", region: "North America", status: "live" },
  { name: "Tacoma", code: "USTIW", country: "United States", region: "North America", status: "beta" },
  { name: "Vancouver", code: "CAVAN", country: "Canada", region: "North America", status: "live" },
  { name: "Prince Rupert", code: "CAPRR", country: "Canada", region: "North America", status: "live" },
  { name: "New York / New Jersey", code: "USNYC", country: "United States", region: "North America", status: "live" },
  { name: "Norfolk", code: "USORF", country: "United States", region: "North America", status: "live" },
  { name: "Savannah", code: "USSAV", country: "United States", region: "North America", status: "live" },
  { name: "Charleston", code: "USCHS", country: "United States", region: "North America", status: "live" },
  { name: "Houston", code: "USHOU", country: "United States", region: "North America", status: "live" },
  { name: "Miami", code: "USMIA", country: "United States", region: "North America", status: "beta" },
  { name: "Baltimore", code: "USBAL", country: "United States", region: "North America", status: "live" },
  { name: "Jacksonville", code: "USJAX", country: "United States", region: "North America", status: "beta" },
  { name: "Montréal", code: "CAMTR", country: "Canada", region: "North America", status: "live" },
  { name: "Halifax", code: "CAHAL", country: "Canada", region: "North America", status: "beta" },
  { name: "Veracruz", code: "MXVER", country: "Mexico", region: "North America", status: "live" },
  { name: "Manzanillo", code: "MXZLO", country: "Mexico", region: "North America", status: "live" },
  { name: "Lázaro Cárdenas", code: "MXLZC", country: "Mexico", region: "North America", status: "beta" },

  /* ---------------------------- Middle East (10) --------------------------- */
  { name: "Jebel Ali", code: "AEJEA", country: "United Arab Emirates", region: "Middle East", status: "live" },
  { name: "Khor Fakkan", code: "AEKLF", country: "United Arab Emirates", region: "Middle East", status: "live" },
  { name: "Dammam", code: "SADMM", country: "Saudi Arabia", region: "Middle East", status: "live" },
  { name: "Jeddah", code: "SAJED", country: "Saudi Arabia", region: "Middle East", status: "live" },
  { name: "King Abdullah Port", code: "SAKAC", country: "Saudi Arabia", region: "Middle East", status: "beta" },
  { name: "Hamad", code: "QAHMD", country: "Qatar", region: "Middle East", status: "live" },
  { name: "Salalah", code: "OMSLL", country: "Oman", region: "Middle East", status: "live" },
  { name: "Sohar", code: "OMSOH", country: "Oman", region: "Middle East", status: "beta" },
  { name: "Duqm", code: "OMDUQ", country: "Oman", region: "Middle East", status: "beta" },
  { name: "Shuwaikh", code: "KWSWK", country: "Kuwait", region: "Middle East", status: "beta" },

  /* ------------------------------ LATAM (12) ------------------------------ */
  { name: "Santos", code: "BRSSZ", country: "Brazil", region: "LATAM", status: "live" },
  { name: "Paranaguá", code: "BRPNG", country: "Brazil", region: "LATAM", status: "beta" },
  { name: "Montevideo", code: "UYMVD", country: "Uruguay", region: "LATAM", status: "live" },
  { name: "Buenos Aires", code: "ARBUE", country: "Argentina", region: "LATAM", status: "live" },
  { name: "Callao", code: "PECLL", country: "Peru", region: "LATAM", status: "live" },
  { name: "Guayaquil", code: "ECGYE", country: "Ecuador", region: "LATAM", status: "live" },
  { name: "San Antonio", code: "CLSAI", country: "Chile", region: "LATAM", status: "live" },
  { name: "Valparaíso", code: "CLVAP", country: "Chile", region: "LATAM", status: "beta" },
  { name: "Colón / MIT", code: "PAONX", country: "Panama", region: "LATAM", status: "live" },
  { name: "Balboa", code: "PABLB", country: "Panama", region: "LATAM", status: "live" },
  { name: "Kingston", code: "JMKIN", country: "Jamaica", region: "LATAM", status: "live" },
  { name: "Cartagena", code: "COCTG", country: "Colombia", region: "LATAM", status: "live" },

  /* ------------------------------ Africa (8) ------------------------------- */
  { name: "Abidjan", code: "CIABJ", country: "Côte d’Ivoire", region: "Africa", status: "live" },
  { name: "Cape Town", code: "ZACPT", country: "South Africa", region: "Africa", status: "live" },
  { name: "Durban", code: "ZADUR", country: "South Africa", region: "Africa", status: "live" },
  { name: "Mombasa", code: "KEMBA", country: "Kenya", region: "Africa", status: "live" },
  { name: "Dar es Salaam", code: "TZDAR", country: "Tanzania", region: "Africa", status: "live" },
  { name: "Djibouti", code: "DJJIB", country: "Djibouti", region: "Africa", status: "live" },
  { name: "Lagos (Apapa/Tin Can)", code: "NGLAG", country: "Nigeria", region: "Africa", status: "live" },
  { name: "Tema", code: "GHTEM", country: "Ghana", region: "Africa", status: "live" },
];

export default PORTS100;