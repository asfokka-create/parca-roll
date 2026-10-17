
window.PARTS = [
  // CPU
  {id:"cpu1",category:"CPU",brand:"AMD",model:"Ryzen 5 5600",priceTRY:6417,socket:"AM4",cores:6,threads:12,boostGHz:4.4,cacheL3MB:32,tdpW:65,memory:"DDR4"},
  {id:"cpu2",category:"CPU",brand:"AMD",model:"Ryzen 5 5500",priceTRY:null,socket:"AM4",cores:6,threads:12,boostGHz:4.2,cacheL3MB:16,tdpW:65,memory:"DDR4"},
  {id:"cpu3",category:"CPU",brand:"AMD",model:"Ryzen 7 5700X",priceTRY:null,socket:"AM4",cores:8,threads:16,boostGHz:4.6,cacheL3MB:32,tdpW:65,memory:"DDR4"},
  {id:"cpu4",category:"CPU",brand:"AMD",model:"Ryzen 7 5800X3D",priceTRY:null,socket:"AM4",cores:8,threads:16,boostGHz:4.5,cacheL3MB:96,tdpW:105,memory:"DDR4"},
  {id:"cpu5",category:"CPU",brand:"AMD",model:"Ryzen 5 7500F",priceTRY:6803,socket:"AM5",cores:6,threads:12,boostGHz:5,cacheL3MB:32,tdpW:65,memory:"DDR5"},
  {id:"cpu6",category:"CPU",brand:"AMD",model:"Ryzen 5 7600",priceTRY:8499,socket:"AM5",cores:6,threads:12,boostGHz:5.1,cacheL3MB:32,tdpW:65,memory:"DDR5"},
  {id:"cpu7",category:"CPU",brand:"AMD",model:"Ryzen 7 7800X3D",priceTRY:19968,socket:"AM5",cores:8,threads:16,boostGHz:5,cacheL3MB:96,tdpW:120,memory:"DDR5"},
  {id:"cpu8",category:"CPU",brand:"Intel",model:"Core i5-12400F",priceTRY:6461,socket:"LGA1700",cores:6,threads:12,boostGHz:4.4,cacheL3MB:18,tdpW:65,memory:"DDR4/DDR5"},
  {id:"cpu9",category:"CPU",brand:"Intel",model:"Core i5-13400F",priceTRY:6299,socket:"LGA1700",cores:10,threads:16,boostGHz:4.6,cacheL3MB:20,tdpW:65,memory:"DDR4/DDR5"},
  {id:"cpu10",category:"CPU",brand:"Intel",model:"Core i5-14600K",priceTRY:null,socket:"LGA1700",cores:14,threads:20,boostGHz:5.3,cacheL3MB:24,tdpW:125,memory:"DDR4/DDR5"},

  // GPU
  {id:"gpu1",category:"GPU",brand:"Gigabyte",model:"RTX 5050 WINDFORCE OC 8G",priceTRY:22499,vramGB:8,memoryType:"GDDR6",busBit:128},
  {id:"gpu2",category:"GPU",brand:"MSI",model:"RTX 5050 GAMING OC 8G",priceTRY:24139,vramGB:8,memoryType:"GDDR6",busBit:128},
  {id:"gpu3",category:"GPU",brand:"MSI",model:"RTX 5060 GAMING OC 8G",priceTRY:37060,vramGB:8,memoryType:"GDDR7",busBit:128},
  {id:"gpu4",category:"GPU",brand:"ASUS",model:"Dual RTX 5070 OC",priceTRY:45999,vramGB:12,memoryType:"GDDR7",busBit:192},
  {id:"gpu5",category:"GPU",brand:"MSI",model:"RTX 5090 VENTUS 3X OC",priceTRY:338818,vramGB:32,memoryType:"GDDR7",busBit:512},
  {id:"gpu6",category:"GPU",brand:"AMD",model:"Radeon RX 7600",priceTRY:9999,vramGB:8,memoryType:"GDDR6",busBit:128},
  {id:"gpu7",category:"GPU",brand:"AMD",model:"Radeon RX 7800 XT",priceTRY:null,vramGB:16,memoryType:"GDDR6",busBit:256},
  {id:"gpu8",category:"GPU",brand:"AMD",model:"Radeon RX 7900 XTX",priceTRY:null,vramGB:24,memoryType:"GDDR6",busBit:384},
  {id:"gpu9",category:"GPU",brand:"Intel",model:"Arc B580",priceTRY:null,vramGB:12,memoryType:"GDDR6",busBit:192},
  {id:"gpu10",category:"GPU",brand:"MSI",model:"RTX 5060 Ti GAMING TRIO WHITE 16G",priceTRY:null,vramGB:16,memoryType:"GDDR7",busBit:128},

  // Motherboards
  {id:"mb1",category:"Motherboard",brand:"MSI",model:"B550M PRO-VDH WIFI",priceTRY:null,socket:"AM4",memory:"DDR4",formFactor:"mATX",chipset:"B550"},
  {id:"mb2",category:"Motherboard",brand:"ASUS",model:"TUF GAMING B550-PLUS",priceTRY:null,socket:"AM4",memory:"DDR4",formFactor:"ATX",chipset:"B550"},
  {id:"mb3",category:"Motherboard",brand:"Gigabyte",model:"B550 AORUS ELITE V2",priceTRY:null,socket:"AM4",memory:"DDR4",formFactor:"ATX",chipset:"B550"},
  {id:"mb4",category:"Motherboard",brand:"MSI",model:"PRO B650M-A WIFI",priceTRY:4299,socket:"AM5",memory:"DDR5",formFactor:"mATX",chipset:"B650"},
  {id:"mb5",category:"Motherboard",brand:"MSI",model:"PRO B650M-E",priceTRY:4599,socket:"AM5",memory:"DDR5",formFactor:"mATX",chipset:"B650"},
  {id:"mb6",category:"Motherboard",brand:"Gigabyte",model:"B850M FORCE WIFI6E",priceTRY:8177,socket:"AM5",memory:"DDR5",formFactor:"mATX",chipset:"B850"},
  {id:"mb7",category:"Motherboard",brand:"MSI",model:"B850 GAMING PLUS WIFI",priceTRY:12569,socket:"AM5",memory:"DDR5",formFactor:"ATX",chipset:"B850"},
  {id:"mb8",category:"Motherboard",brand:"ASUS",model:"B850 MAX GAMING WIFI",priceTRY:9779,socket:"AM5",memory:"DDR5",formFactor:"ATX",chipset:"B850"},
  {id:"mb9",category:"Motherboard",brand:"Gigabyte",model:"B840M H",priceTRY:4199,socket:"AM5",memory:"DDR5",formFactor:"mATX",chipset:"B840"},
  {id:"mb10",category:"Motherboard",brand:"Gigabyte",model:"X870 AORUS ELITE WIFI7 ICE",priceTRY:null,socket:"AM5",memory:"DDR5",formFactor:"ATX",chipset:"X870"},

  // RAM
  {id:"ram1",category:"RAM",brand:"Kingston",model:"FURY Beast 16GB DDR4-3200",priceTRY:null,capacityGB:16,memoryType:"DDR4",speedMTs:3200,cl:16,kit:"1x16GB"},
  {id:"ram2",category:"RAM",brand:"Corsair",model:"Vengeance LPX 32GB DDR4-3600 CL18",priceTRY:null,capacityGB:32,memoryType:"DDR4",speedMTs:3600,cl:18,kit:"2x16GB"},
  {id:"ram3",category:"RAM",brand:"G.Skill",model:"Ripjaws V 16GB DDR4-3200",priceTRY:null,capacityGB:16,memoryType:"DDR4",speedMTs:3200,cl:16,kit:"2x8GB"},
  {id:"ram4",category:"RAM",brand:"Kingston",model:"FURY Beast 32GB DDR5-6000 CL30",priceTRY:null,capacityGB:32,memoryType:"DDR5",speedMTs:6000,cl:30,kit:"2x16GB"},
  {id:"ram5",category:"RAM",brand:"Corsair",model:"Vengeance 32GB DDR5-6400 CL36",priceTRY:32999,capacityGB:32,memoryType:"DDR5",speedMTs:6400,cl:36,kit:"2x16GB"},
  {id:"ram6",category:"RAM",brand:"V-Color",model:"Manta XSky RGB 16GB DDR5-6000 CL30",priceTRY:16399,capacityGB:16,memoryType:"DDR5",speedMTs:6000,cl:30,kit:"1x16GB"},
  {id:"ram7",category:"RAM",brand:"G.Skill",model:"Trident Z5 Royal 64GB DDR5-6400 CL32",priceTRY:null,capacityGB:64,memoryType:"DDR5",speedMTs:6400,cl:32,kit:"2x32GB"},
  {id:"ram8",category:"RAM",brand:"Patriot",model:"Viper Venom 32GB DDR5-6000 CL30",priceTRY:null,capacityGB:32,memoryType:"DDR5",speedMTs:6000,cl:30,kit:"2x16GB"},
  {id:"ram9",category:"RAM",brand:"ADATA XPG",model:"Lancer RGB 48GB DDR5",priceTRY:null,capacityGB:48,memoryType:"DDR5",speedMTs:null,cl:null,kit:"2x24GB"},
  {id:"ram10",category:"RAM",brand:"Kingston",model:"FURY Impact 16GB DDR5-4800",priceTRY:null,capacityGB:16,memoryType:"DDR5",speedMTs:4800,cl:null,formFactor:"SO-DIMM"},

  // Storage
  {id:"ssd1",category:"Storage",brand:"Kingston",model:"NV2 1TB NVMe",priceTRY:null,capacityGB:1000,interface:"M.2 NVMe PCIe 4.0",readMBs:3500,writeMBs:2100,tbw:null},
  {id:"ssd2",category:"Storage",brand:"Samsung",model:"990 PRO 1TB",priceTRY:null,capacityGB:1000,interface:"M.2 NVMe PCIe 4.0",readMBs:7450,writeMBs:6900,tbw:600},
  {id:"ssd3",category:"Storage",brand:"WD",model:"Green SN3000 500GB",priceTRY:null,capacityGB:500,interface:"M.2 NVMe PCIe 4.0",readMBs:5000,writeMBs:4100,tbw:null},
  {id:"ssd4",category:"Storage",brand:"MSI",model:"SPATIUM M560 1TB",priceTRY:null,capacityGB:1000,interface:"M.2 NVMe PCIe 5.0",readMBs:10300,writeMBs:8700,tbw:null},
  {id:"ssd5",category:"Storage",brand:"WD",model:"Black SN850X 2TB",priceTRY:null,capacityGB:2000,interface:"M.2 NVMe PCIe 4.0",readMBs:7300,writeMBs:6600,tbw:1200},
  {id:"ssd6",category:"Storage",brand:"Samsung",model:"870 EVO 1TB",priceTRY:null,capacityGB:1000,interface:"SATA",readMBs:560,writeMBs:530,tbw:600},
  {id:"ssd7",category:"Storage",brand:"Crucial",model:"MX500 1TB",priceTRY:null,capacityGB:1000,interface:"SATA",readMBs:560,writeMBs:510,tbw:360},
  {id:"ssd8",category:"Storage",brand:"Lexar",model:"NQ790 1TB",priceTRY:null,capacityGB:1000,interface:"M.2 NVMe PCIe 4.0",readMBs:7000,writeMBs:6000,tbw:null},
  {id:"ssd9",category:"Storage",brand:"Seagate",model:"BarraCuda 2TB",priceTRY:null,capacityGB:2000,interface:"3.5-inch SATA",rpm:7200},
  {id:"ssd10",category:"Storage",brand:"WD",model:"Blue 4TB HDD",priceTRY:null,capacityGB:4000,interface:"3.5-inch SATA",rpm:5400},

  // PSU
  {id:"psu1",category:"PSU",brand:"MSI",model:"MAG A750BN PCIE5 III",priceTRY:3669,wattageW:750,efficiency:"80 PLUS Bronze"},
  {id:"psu2",category:"PSU",brand:"ASUS",model:"TUF GAMING 750B",priceTRY:4179,wattageW:750,efficiency:"80 PLUS Bronze"},
  {id:"psu3",category:"PSU",brand:"ASUS",model:"TUF GAMING 750G Gold",priceTRY:5049,wattageW:750,efficiency:"80 PLUS Gold",modular:true},
  {id:"psu4",category:"PSU",brand:"Rampage",model:"MATE M750-80PB",priceTRY:3199,wattageW:750},
  {id:"psu5",category:"PSU",brand:"Archon",model:"ARC-750",priceTRY:1899,wattageW:750},
  {id:"psu6",category:"PSU",brand:"Corsair",model:"RM850x",priceTRY:null,wattageW:850,efficiency:"80 PLUS Gold",modular:true},
  {id:"psu7",category:"PSU",brand:"Seasonic",model:"FOCUS GX-850",priceTRY:null,wattageW:850,efficiency:"80 PLUS Gold",modular:true},
  {id:"psu8",category:"PSU",brand:"be quiet!",model:"Pure Power 12 M 750W",priceTRY:null,wattageW:750,efficiency:"80 PLUS Gold",standard:"ATX 3.0"},
  {id:"psu9",category:"PSU",brand:"MSI",model:"MAG A850GL PCIE5",priceTRY:null,wattageW:850,efficiency:"80 PLUS Gold",standard:"ATX 3.0"},
  {id:"psu10",category:"PSU",brand:"Cooler Master",model:"MWE 650 Bronze V2",priceTRY:null,wattageW:650,efficiency:"80 PLUS Bronze"},

  // Cases
  {id:"case1",category:"Case",brand:"Revenge",model:"Nova 3 ARGB",priceTRY:1499,formFactor:"mATX",fansIncluded:3},
  {id:"case2",category:"Case",brand:"Thermaltake",model:"View 380 ARGB",priceTRY:7046,formFactor:"Mid Tower",fansIncluded:4},
  {id:"case3",category:"Case",brand:"MSI",model:"MAG PANO 130R PZ",priceTRY:4821,formFactor:"Mid Tower"},
  {id:"case4",category:"Case",brand:"Rampage",model:"ARES V2",priceTRY:3499,formFactor:"Mid Tower",fansIncluded:7},
  {id:"case5",category:"Case",brand:"Lian Li",model:"O11 Vision Compact",priceTRY:null,formFactor:"Mid Tower"},
  {id:"case6",category:"Case",brand:"Corsair",model:"4000D Airflow",priceTRY:null,formFactor:"Mid Tower"},
  {id:"case7",category:"Case",brand:"NZXT",model:"H6 Flow",priceTRY:null,formFactor:"Mid Tower"},
  {id:"case8",category:"Case",brand:"Fractal Design",model:"North",priceTRY:null,formFactor:"Mid Tower"},
  {id:"case9",category:"Case",brand:"Cooler Master",model:"TD500 Mesh V2",priceTRY:null,formFactor:"Mid Tower"},
  {id:"case10",category:"Case",brand:"Sharkoon",model:"TG4 RGB",priceTRY:null,formFactor:"Mid Tower"},

  // Air coolers
  {id:"air1",category:"AirCooler",brand:"Cooler Master",model:"Hyper 212 Black Edition",priceTRY:2209,sockets:["AM4","AM5","LGA1700"],fanMM:120},
  {id:"air2",category:"AirCooler",brand:"Cooler Master",model:"V4 Alpha 3DHP",priceTRY:3810,sockets:["AM4","AM5","LGA1700","LGA1851"],fanMM:120},
  {id:"air3",category:"AirCooler",brand:"Scythe",model:"Mugen 6",priceTRY:2999,sockets:["AM4","AM5","LGA1700"],fanMM:120},
  {id:"air4",category:"AirCooler",brand:"Fazeon",model:"A2120TRA",priceTRY:401,fanMM:90},
  {id:"air5",category:"AirCooler",brand:"Zalman",model:"CNPS10X OPTIMA II White RGB",priceTRY:3029,fanMM:120},
  {id:"air6",category:"AirCooler",brand:"DeepCool",model:"AK400",priceTRY:null,sockets:["AM4","AM5","LGA1700"],fanMM:120},
  {id:"air7",category:"AirCooler",brand:"Thermalright",model:"Peerless Assassin 120 SE",priceTRY:null,sockets:["AM4","AM5","LGA1700"],fanMM:120},
  {id:"air8",category:"AirCooler",brand:"Noctua",model:"NH-D15",priceTRY:null,sockets:["AM4","AM5","LGA1700"],fanMM:140},
  {id:"air9",category:"AirCooler",brand:"Arctic",model:"Freezer 36",priceTRY:null,sockets:["AM4","AM5","LGA1700"],fanMM:120},
  {id:"air10",category:"AirCooler",brand:"be quiet!",model:"Dark Rock Pro 5",priceTRY:null,sockets:["AM4","AM5","LGA1700"],fanMM:135},

  // Liquid coolers
  {id:"aio1",category:"LiquidCooler",brand:"Cooler Master",model:"MasterLiquid ML120L V2 RGB",priceTRY:5694,radiatorMM:120},
  {id:"aio2",category:"LiquidCooler",brand:"Lian Li",model:"HydroShift II LCD-C 360 White",priceTRY:9999,radiatorMM:360},
  {id:"aio3",category:"LiquidCooler",brand:"Thermalright",model:"Frozen Magic 360 Digital ARGB V2",priceTRY:5056,radiatorMM:360},
  {id:"aio4",category:"LiquidCooler",brand:"PCCOOLER",model:"CPS DA360",priceTRY:3299,radiatorMM:360},
  {id:"aio5",category:"LiquidCooler",brand:"MSI",model:"MAG CORELIQUID A15 360",priceTRY:7239,radiatorMM:360},
  {id:"aio6",category:"LiquidCooler",brand:"ASUS",model:"Prime LC 240 ARGB",priceTRY:7341,radiatorMM:240},
  {id:"aio7",category:"LiquidCooler",brand:"Corsair",model:"iCUE H100i 240mm",priceTRY:null,radiatorMM:240},
  {id:"aio8",category:"LiquidCooler",brand:"Arctic",model:"Liquid Freezer III 360",priceTRY:null,radiatorMM:360},
  {id:"aio9",category:"LiquidCooler",brand:"NZXT",model:"Kraken 360",priceTRY:null,radiatorMM:360},
  {id:"aio10",category:"LiquidCooler",brand:"TRYX",model:"PANORAMA SE 360 White",priceTRY:null,radiatorMM:360},

  // Fans
  {id:"fan1",category:"Fan",brand:"Arctic",model:"P12 Silent",priceTRY:607,sizeMM:120,pwm:false,argb:false},
  {id:"fan2",category:"Fan",brand:"Rampage",model:"7C-120B ARGB White 2-pack",priceTRY:999,sizeMM:120,argb:true},
  {id:"fan3",category:"Fan",brand:"MSI",model:"MPG EZ120 ARGB White 3-pack",priceTRY:6315,sizeMM:120,pwm:true,argb:true},
  {id:"fan4",category:"Fan",brand:"Arctic",model:"P12 PWM PST",priceTRY:null,sizeMM:120,pwm:true,airflowCFM:56.3},
  {id:"fan5",category:"Fan",brand:"Arctic",model:"P14 PWM PST",priceTRY:null,sizeMM:140,pwm:true,airflowCFM:72.8},
  {id:"fan6",category:"Fan",brand:"Noctua",model:"NF-A12x25 PWM",priceTRY:null,sizeMM:120,pwm:true,airflowCFM:60.1},
  {id:"fan7",category:"Fan",brand:"Lian Li",model:"UNI FAN SL120",priceTRY:null,sizeMM:120,pwm:true,argb:true},
  {id:"fan8",category:"Fan",brand:"Corsair",model:"iCUE AF120 RGB ELITE",priceTRY:null,sizeMM:120,pwm:true,argb:true,airflowCFM:65.6},
  {id:"fan9",category:"Fan",brand:"be quiet!",model:"Light Wings 120mm PWM",priceTRY:null,sizeMM:120,pwm:true,argb:true},
  {id:"fan10",category:"Fan",brand:"Thermaltake",model:"TOUGHFAN 12",priceTRY:null,sizeMM:120,pwm:true,airflowCFM:58.35}
];
window.PARTS = window.PARTS.map(p => ({
  ...p,
  name: p.model,
  emoji: ({
    CPU: "🧠",
    GPU: "🎮",
    Motherboard: "🛠️",
    RAM: "🧩",
    Storage: "💾",
    PSU: "🔌",
    Case: "🖥️",
    AirCooler: "🌀",
    LiquidCooler: "❄️",
    Fan: "🌪️"
  })[p.category] || "🧩",
  rarity: ({
    CPU: "common",
    RAM: "common",
    Storage: "rare",
    PSU: "rare",
    Motherboard: "rare",
    Case: "epic",
    AirCooler: "epic",
    Fan: "epic",
    LiquidCooler: "legendary",
    GPU: "legendary"
  })[p.category] || "common"
}));
