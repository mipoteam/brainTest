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

export interface Clinic {
  id: string;
  name: string;
  siteId: string;
  devices: number;
  address: string;
  phone: string;
  email: string;
  website: string;
  deviceList: DeviceInfo[];
}

export interface Organization {
  name: string;
  email: string;
  website: string;
}

export const organization: Organization = {
  name: "Complete Mind Care",
  email: "info@gmail.com",
  website: "www.clinicpsycme.com",
};

export const clinics: Clinic[] = [
  {
    id: "1",
    name: "CMC Brooklyn",
    siteId: "2223332",
    devices: 2,
    address: "742 Evergreen Avenue Brooklyn, NY 11221",
    phone: "+1 (217) 555-7890",
    email: "site1@email.com",
    website: "www.site1.com",
    deviceList: [
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
    ],
  },
  {
    id: "2",
    name: "Complete Mind Care: Philly",
    siteId: "2223333",
    devices: 3,
    address: "1824 W. Girard Avenue Philadelphia, PA 19130, USA",
    phone: "+1 (215) 555-1234",
    email: "philly@email.com",
    website: "www.cmcphilly.com",
    deviceList: [
      {
        name: "White room device",
        deviceId: "7782910AP",
        activity: {
          lastSync: "8:00am, today",
          lastTreatment: "Sep 27, 2024",
          lastProtocol: "Anxiety",
          treatmentCounts: 18,
        },
        coils: [
          { type: "H1", model: "HEL1112010" },
          { type: "H4", model: "HEL1112010" },
        ],
        software: {
          version: "2.1.0",
          dam: "2.1.0",
          mcu: "2.1.0",
          os1: "221114141",
          os2: "2252522401",
        },
      },
      {
        name: "Large right room device",
        deviceId: "8893021BP",
        activity: {
          lastSync: "7:30am, today",
          lastTreatment: "Sep 26, 2024",
          lastProtocol: "Depression",
          treatmentCounts: 35,
        },
        coils: [
          { type: "H4", model: "HEL1112011" },
          { type: "H7", model: "HEL1112011" },
        ],
        software: {
          version: "2.0.9",
          dam: "2.0.5",
          mcu: "2.0.9",
          os1: "221114130",
          os2: "2252522390",
        },
      },
      {
        name: "Left room device",
        deviceId: "9904132CP",
        activity: {
          lastSync: "9:00am, yesterday",
          lastTreatment: "Sep 25, 2024",
          lastProtocol: "OCD",
          treatmentCounts: 12,
        },
        coils: [{ type: "H7", model: "HEL1112012" }],
        software: {
          version: "2.1.0",
          dam: "2.1.0",
          mcu: "2.1.0",
          os1: "221114142",
          os2: "2252522402",
        },
      },
    ],
  },
  {
    id: "3",
    name: "Children clinic Queens",
    siteId: "2223334",
    devices: 1,
    address: "42-18 31st Avenue Astoria, NY 11103",
    phone: "+1 (718) 555-9876",
    email: "queens@email.com",
    website: "www.childrencliniqueens.com",
    deviceList: [
      {
        name: "White room device",
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
    ],
  },
];
