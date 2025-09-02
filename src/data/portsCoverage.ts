export const regions = [
  { id: "NA", name: "North America" },
  { id: "EU", name: "Europe" },
  { id: "APAC", name: "APAC" },
  { id: "ME", name: "Middle East" },
  { id: "LATAM", name: "LATAM" },
  { id: "AFR", name: "Africa" },
] as const;

export const statuses = ["Live","In-progress","On-request"] as const;

export type PortItem = {
  port: string;
  country: string;
  region: typeof regions[number]["id"];
  status: typeof statuses[number];
  metrics: Array<"Congestion"|"Throughput"|"Momentum">;
  freshness: "≤2h"|"≤6h"|"Daily";
  notes?: string;
  unlocode?: string;
};

export const PORTS_COVERAGE: PortItem[] = [
  // === Live（示例：真实以后端为准，可随时增补） ===
  { port:"Los Angeles", country:"USA", region:"NA", status:"Live", metrics:["Congestion","Throughput"], freshness:"≤2h", unlocode:"USLAX" },
  { port:"New York / New Jersey", country:"USA", region:"NA", status:"Live", metrics:["Congestion","Throughput"], freshness:"≤2h", unlocode:"USNYC" },
  { port:"Singapore", country:"Singapore", region:"APAC", status:"Live", metrics:["Congestion","Throughput","Momentum"], freshness:"≤2h", unlocode:"SGSIN" },

  // === NA ===
  { port:"Long Beach", country:"USA", region:"NA", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Oakland", country:"USA", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Seattle", country:"USA", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Tacoma", country:"USA", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Houston", country:"USA", region:"NA", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Savannah", country:"USA", region:"NA", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Charleston", country:"USA", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Norfolk", country:"USA", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Vancouver", country:"Canada", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Montreal", country:"Canada", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Veracruz", country:"Mexico", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Manzanillo", country:"Mexico", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },

  // === EU ===
  { port:"Rotterdam", country:"Netherlands", region:"EU", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Antwerp-Bruges", country:"Belgium", region:"EU", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Hamburg", country:"Germany", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Bremerhaven", country:"Germany", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Felixstowe", country:"UK", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"London Gateway", country:"UK", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Le Havre", country:"France", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Marseille / Fos", country:"France", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Valencia", country:"Spain", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Barcelona", country:"Spain", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Algeciras", country:"Spain", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Gioia Tauro", country:"Italy", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Gdańsk", country:"Poland", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Koper", country:"Slovenia", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },

  // === APAC ===
  { port:"Tanjung Pelepas", country:"Malaysia", region:"APAC", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Port Klang", country:"Malaysia", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Shanghai", country:"China", region:"APAC", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Ningbo", country:"China", region:"APAC", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Shenzhen", country:"China", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Qingdao", country:"China", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Xiamen", country:"China", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Tianjin", country:"China", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Hong Kong", country:"China SAR", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Busan", country:"Korea", region:"APAC", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Tokyo", country:"Japan", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Yokohama", country:"Japan", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Laem Chabang", country:"Thailand", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Ho Chi Minh City (Cat Lai)", country:"Vietnam", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },

  // === ME ===
  { port:"Jebel Ali", country:"UAE", region:"ME", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Khalifa / Abu Dhabi", country:"UAE", region:"ME", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Sohar", country:"Oman", region:"ME", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Salalah", country:"Oman", region:"ME", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Dammam (King Abdulaziz)", country:"Saudi Arabia", region:"ME", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Jeddah Islamic Port", country:"Saudi Arabia", region:"ME", status:"On-request", metrics:["Congestion"], freshness:"Daily" },

  // === LATAM ===
  { port:"Santos", country:"Brazil", region:"LATAM", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Paranaguá", country:"Brazil", region:"LATAM", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Callao", country:"Peru", region:"LATAM", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"San Antonio", country:"Chile", region:"LATAM", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Buenaventura", country:"Colombia", region:"LATAM", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Colón / Manzanillo", country:"Panama", region:"LATAM", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Montevideo", country:"Uruguay", region:"LATAM", status:"On-request", metrics:["Congestion"], freshness:"Daily" },

  // === AFR ===
  { port:"Tanger-Med", country:"Morocco", region:"AFR", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Casablanca", country:"Morocco", region:"AFR", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Port Said", country:"Egypt", region:"AFR", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Alexandria", country:"Egypt", region:"AFR", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Durban", country:"South Africa", region:"AFR", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Cape Town", country:"South Africa", region:"AFR", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Mombasa", country:"Kenya", region:"AFR", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
];
