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
  port: string; country: string;
  region: typeof regions[number]["id"];
  status: typeof statuses[number];
  metrics: Array<"Congestion"|"Throughput"|"Momentum">;
  freshness: "≤2h"|"≤6h"|"Daily";
  notes?: string; unlocode?: string;
};

export const PORTS_COVERAGE: PortItem[] = [
  { port:"Los Angeles", country:"USA", region:"NA", status:"Live", metrics:["Congestion","Throughput"], freshness:"≤2h", unlocode:"USLAX" },
  { port:"New York / New Jersey", country:"USA", region:"NA", status:"Live", metrics:["Congestion","Throughput"], freshness:"≤2h", unlocode:"USNYC" },
  { port:"Singapore", country:"Singapore", region:"APAC", status:"Live", metrics:["Congestion","Throughput","Momentum"], freshness:"≤2h", unlocode:"SGSIN" },
  { port:"Long Beach", country:"USA", region:"NA", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Rotterdam", country:"Netherlands", region:"EU", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Antwerp-Bruges", country:"Belgium", region:"EU", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Shanghai", country:"China", region:"APAC", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Ningbo", country:"China", region:"APAC", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Busan", country:"Korea", region:"APAC", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Jebel Ali", country:"UAE", region:"ME", status:"On-request", metrics:["Congestion","Throughput"], freshness:"≤6h" },
  { port:"Santos", country:"Brazil", region:"LATAM", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Durban", country:"South Africa", region:"AFR", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Oakland", country:"USA", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Seattle", country:"USA", region:"NA", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Valencia", country:"Spain", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Barcelona", country:"Spain", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Le Havre", country:"France", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Gdańsk", country:"Poland", region:"EU", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Ho Chi Minh City (Cat Lai)", country:"Vietnam", region:"APAC", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
  { port:"Tanger-Med", country:"Morocco", region:"AFR", status:"On-request", metrics:["Congestion"], freshness:"Daily" },
];
