export type CoilType = "H1" | "H4";

export interface Protocol {
  id: string;
  protocolName: string;
  condition: string;
  coils: CoilType[];
  type: string;
  createdBy: string;
  lastModified: string;
  frequency: number;
  mt: number;
  totalTime: string;
}

// Hardcoded protocols data - this will later be replaced with API calls
export const getProtocols = (): Protocol[] => {
  return [
    {
      id: "1",
      protocolName: "Depression",
      condition: "Depression",
      coils: ["H4"],
      type: "Standard",
      createdBy: "System",
      lastModified: "--",
      frequency: 10,
      mt: 120,
      totalTime: "00:37:02",
    },
    {
      id: "2",
      protocolName: "Depression iTBS",
      condition: "Depression",
      coils: ["H1", "H4"],
      type: "Theta burst",
      createdBy: "Olivia Ginsburg",
      lastModified: "--",
      frequency: 40,
      mt: 80,
      totalTime: "00:25:06",
    },
    {
      id: "3",
      protocolName: "OCD",
      condition: "OCD",
      coils: ["H1", "H4"],
      type: "Standard",
      createdBy: "Olivia Ginsburg",
      lastModified: "--",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "4",
      protocolName: "Smoking",
      condition: "Smoking",
      coils: ["H1", "H4"],
      type: "Standard",
      createdBy: "Olivia Ginsburg",
      lastModified: "--",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "5",
      protocolName: "Smoking_new",
      condition: "Smoking",
      coils: ["H4"],
      type: "Standard",
      createdBy: "Maya Schushan Orgad",
      lastModified: "Aug 15, 2024 | by Joan Ruth Bader",
      frequency: 20,
      mt: 120,
      totalTime: "00:34:22",
    },
    {
      id: "6",
      protocolName: "Smoking_new",
      condition: "Smoking",
      coils: ["H1", "H4"],
      type: "Standard",
      createdBy: "Olivia Ginsburg",
      lastModified: "Nov 17, 2024 | by Olivia Walsh",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "7",
      protocolName: "Smoking_new",
      condition: "Smoking",
      coils: ["H1", "H4"],
      type: "Standard",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "8",
      protocolName: "Smoking_new",
      condition: "Smoking",
      coils: ["H1", "H4"],
      type: "Standard",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "9",
      protocolName: "Smoking_new",
      condition: "Smoking",
      coils: ["H1", "H4"],
      type: "Standard",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "10",
      protocolName: "Smoking_new",
      condition: "Smoking",
      coils: ["H4"],
      type: "Standard",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
  ];
};

// Export the count for display
export const getProtocolsCount = (): number => {
  return getProtocols().length;
};
