export type Region = "North America" | "Europe" | "APAC" | "Middle East" | "LATAM" | "Africa";
export type Status = "Live" | "On-request" | "In-progress";

export interface PortRow {
  port: string;
  country: string;
  region: Region;
  status: Status;
  metrics: string[];          // e.g. ["Congestion","Dwell","Trend","Momentum"]
  freshness: string;          // e.g. "≤2h" | "≤6h" | "Daily"
  notes?: string;
}

export const PORTS: PortRow[] = [
  // NA
  { port: "Los Angeles", country: "USA", region: "North America", status: "Live", metrics: ["Congestion","Dwell","Trend"], freshness: "≤2h" },
  { port: "New York / New Jersey", country: "USA", region: "North America", status: "Live", metrics: ["Congestion","Trend"], freshness: "≤2h" },
  { port: "Long Beach", country: "USA", region: "North America", status: "On-request", metrics: ["Congestion","Throughput"], freshness: "≤6h" },
  { port: "Oakland", country: "USA", region: "North America", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Seattle", country: "USA", region: "North America", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Tacoma", country: "USA", region: "North America", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Houston", country: "USA", region: "North America", status: "On-request", metrics: ["Congestion","Throughput"], freshness: "≤6h" },
  { port: "Savannah", country: "USA", region: "North America", status: "On-request", metrics: ["Congestion","Throughput"], freshness: "≤6h" },
  { port: "Charleston", country: "USA", region: "North America", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Norfolk", country: "USA", region: "North America", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Vancouver", country: "Canada", region: "North America", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Montreal", country: "Canada", region: "North America", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Veracruz", country: "Mexico", region: "North America", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Manzanillo", country: "Mexico", region: "North America", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },

  // Europe
  { port: "Rotterdam", country: "Netherlands", region: "Europe", status: "Live", metrics: ["Congestion","Trend"], freshness: "≤2h" },
  { port: "Antwerp-Bruges", country: "Belgium", region: "Europe", status: "Live", metrics: ["Congestion","Trend"], freshness: "≤2h" },
  { port: "Hamburg", country: "Germany", region: "Europe", status: "On-request", metrics: ["Congestion","Trend"], freshness: "≤6h" },
  { port: "Bremerhaven", country: "Germany", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Felixstowe", country: "UK", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "London Gateway", country: "UK", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Le Havre", country: "France", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Marseille / Fos", country: "France", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Valencia", country: "Spain", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Barcelona", country: "Spain", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Algeciras", country: "Spain", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Gioia Tauro", country: "Italy", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Gdańsk", country: "Poland", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Koper", country: "Slovenia", region: "Europe", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },

  // APAC
  { port: "Singapore", country: "Singapore", region: "APAC", status: "Live", metrics: ["Congestion","Dwell","Trend","Momentum"], freshness: "≤2h" },
  { port: "Tanjung Pelepas", country: "Malaysia", region: "APAC", status: "On-request", metrics: ["Congestion","Trend"], freshness: "≤6h" },
  { port: "Port Klang", country: "Malaysia", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Shanghai", country: "China", region: "APAC", status: "On-request", metrics: ["Congestion","Trend"], freshness: "≤6h" },
  { port: "Ningbo", country: "China", region: "APAC", status: "On-request", metrics: ["Congestion","Trend"], freshness: "≤6h" },
  { port: "Shenzhen", country: "China", region: "APAC", status: "On-request", metrics: ["Congestion","Trend"], freshness: "≤6h" },
  { port: "Qingdao", country: "China", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Xiamen", country: "China", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Tianjin", country: "China", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Hong Kong", country: "China (SAR)", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Busan", country: "Korea", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Tokyo", country: "Japan", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Yokohama", country: "Japan", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Laem Chabang", country: "Thailand", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Ho Chi Minh City / Cat Lai", country: "Vietnam", region: "APAC", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },

  // Middle East
  { port: "Jebel Ali", country: "UAE", region: "Middle East", status: "On-request", metrics: ["Congestion","Trend"], freshness: "≤6h" },
  { port: "Khalifa / Abu Dhabi", country: "UAE", region: "Middle East", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Sohar", country: "Oman", region: "Middle East", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Salalah", country: "Oman", region: "Middle East", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Dammam (King Abdulaziz)", country: "Saudi Arabia", region: "Middle East", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Jeddah Islamic Port", country: "Saudi Arabia", region: "Middle East", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },

  // LATAM
  { port: "Santos", country: "Brazil", region: "LATAM", status: "On-request", metrics: ["Congestion","Trend"], freshness: "≤6h" },
  { port: "Paranaguá", country: "Brazil", region: "LATAM", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Callao", country: "Peru", region: "LATAM", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "San Antonio", country: "Chile", region: "LATAM", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Buenaventura", country: "Colombia", region: "LATAM", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Colón / Manzanillo", country: "Panama", region: "LATAM", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Montevideo", country: "Uruguay", region: "LATAM", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },

  // Africa
  { port: "Tanger-Med", country: "Morocco", region: "Africa", status: "On-request", metrics: ["Congestion","Trend"], freshness: "≤6h" },
  { port: "Casablanca", country: "Morocco", region: "Africa", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Port Said", country: "Egypt", region: "Africa", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Alexandria", country: "Egypt", region: "Africa", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Durban", country: "South Africa", region: "Africa", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Cape Town", country: "South Africa", region: "Africa", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
  { port: "Mombasa", country: "Kenya", region: "Africa", status: "On-request", metrics: ["Congestion"], freshness: "Daily" },
];

export const regions: Region[] = ["North America","Europe","APAC","Middle East","LATAM","Africa"];
