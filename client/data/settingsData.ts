export type CoilType = "H1" | "H4" | "H7";

export interface CoilInfo {
  type: CoilType;
  model: string;
}

export interface ActivityInfo {
  lastSync: string;
  lastTreatment: string;
  lastProtocol: string;
  treatmentCounts: number;
}

export interface SoftwareDetails {
  version: string;
  dam: string;
  mcu: string;
  os1: string;
  os2: string;
}

export interface DeviceInfo {
  name: string;
  deviceId: string;
  activity: ActivityInfo;
  coils: CoilInfo[];
  software: SoftwareDetails;
}

export interface SiteInfo {
  name: string;
  siteId: string;
  phone: string;
  email: string;
  address: string;
  website: string;
}

export const siteInfo: SiteInfo = {
  name: "CMC Brooklyn",
  siteId: "2223332",
  phone: "+1 (217) 555-7890",
  email: "site1@email.com",
  address: "123 Main Street, Springfield, IL 62701, USA",
  website: "www.site1.com",
};

export const devices: DeviceInfo[] = [
  {
    name: "White room device",
    deviceId: "3336734BW",
    activity: {
      lastSync: "9:45am, yesterday",
      lastTreatment: "Sep 26, 2024",
      lastProtocol: "Depression",
      treatmentCounts: 10,
    },
    coils: [
      { type: "H1", model: "HEL1112004" },
      { type: "H4", model: "HEL1112004" },
      { type: "H7", model: "HEL1112004" },
    ],
    software: {
      version: "2.1.0",
      dam: "2.1.0",
      mcu: "2.1.0",
      os1: "221114140",
      os2: "2252522400",
    },
  },
  {
    name: "Large right room device",
    deviceId: "4471829CR",
    activity: {
      lastSync: "10:15am, today",
      lastTreatment: "Sep 27, 2024",
      lastProtocol: "OCD",
      treatmentCounts: 24,
    },
    coils: [
      { type: "H1", model: "HEL1112005" },
      { type: "H7", model: "HEL1112005" },
    ],
    software: {
      version: "2.1.0",
      dam: "2.0.5",
      mcu: "2.1.0",
      os1: "221114140",
      os2: "2252522400",
    },
  },
  {
    name: "Left room device",
    deviceId: "5582930DL",
    activity: {
      lastSync: "8:00am, yesterday",
      lastTreatment: "Sep 25, 2024",
      lastProtocol: "Anxiety",
      treatmentCounts: 7,
    },
    coils: [
      { type: "H4", model: "HEL1112006" },
      { type: "H7", model: "HEL1112006" },
    ],
    software: {
      version: "2.0.9",
      dam: "2.0.5",
      mcu: "2.0.9",
      os1: "221114130",
      os2: "2252522390",
    },
  },
];
