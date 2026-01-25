export interface Protocol {
  id: string;
  protocolName: string;
  condition: string;
  createdBy: string;
  lastModified: string;
  type: string;
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
      createdBy: "System",
      lastModified: "Nov 17, 2023 | by Alexandria Smith",
      type: "Standard",
      frequency: 10,
      mt: 120,
      totalTime: "00:37:02",
    },
    {
      id: "2",
      protocolName: "Depression iTBS",
      condition: "Depression",
      createdBy: "Olivia Ginsburg",
      lastModified: "Nov 15, 2023 | by Alexandria Smith",
      type: "Theta burst",
      frequency: 40,
      mt: 80,
      totalTime: "00:25:06",
    },
    {
      id: "3",
      protocolName: "OCD",
      condition: "OCD",
      createdBy: "Maya Schushan Orgad",
      lastModified: "Nov 17, 2024 | by Olivia Walsh",
      type: "Standard",
      frequency: 20,
      mt: 120,
      totalTime: "00:34:22",
    },
    {
      id: "4",
      protocolName: "Smoking",
      condition: "Smoking",
      createdBy: "Olivia Ginsburg",
      lastModified: "Jul 12, 2021",
      type: "Standard",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "5",
      protocolName: "Smoking_new",
      condition: "Smoking",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024",
      type: "Standard",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "6",
      protocolName: "Smoking_new",
      condition: "Smoking",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024",
      type: "Standard",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "7",
      protocolName: "Smoking_new",
      condition: "Smoking",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024",
      type: "Standard",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "8",
      protocolName: "Smoking_new",
      condition: "Smoking",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024",
      type: "Standard",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "9",
      protocolName: "Smoking_new",
      condition: "Smoking",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024 | by Joan Ruth Bader",
      type: "Standard",
      frequency: 10,
      mt: 120,
      totalTime: "00:25:06",
    },
    {
      id: "10",
      protocolName: "Smoking_new",
      condition: "Smoking",
      createdBy: "Olivia Ginsburg",
      lastModified: "Aug 15, 2024",
      type: "Standard",
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
