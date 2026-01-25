export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  patientId: string;
  age: number;
  gender: string;
  conditions: string[];
  protocols: string[];
  site: string;
  sessionNo: number;
  lastDate: string;
}

// Hardcoded patients data - this will later be replaced with API calls
export const getPatients = (): Patient[] => {
  const basePatients: Patient[] = [
    {
      id: "1",
      firstName: "Adam",
      lastName: "Ginsburg",
      patientId: "3452345678",
      age: 33,
      gender: "Female",
      conditions: ["Depression"],
      protocols: ["Depression iTBS"],
      site: "Springfield Medical Center",
      sessionNo: 15,
      lastDate: "Sep 26, 2024",
    },
    {
      id: "2",
      firstName: "Aria",
      lastName: "Sullivan",
      patientId: "1234567890",
      age: 17,
      gender: "Female",
      conditions: ["OCD", "Anxiety"],
      protocols: ["OCD_New"],
      site: "Miami Downtown Clinic",
      sessionNo: 3,
      lastDate: "00:25:06",
    },
    {
      id: "3",
      firstName: "Brad",
      lastName: "Pitt",
      patientId: "6591827467",
      age: 55,
      gender: "Male",
      conditions: ["Depression"],
      protocols: ["Depression 3", "Depression iTBS"],
      site: "Miami Downtown Clinic",
      sessionNo: 34,
      lastDate: "00:34:22",
    },
    {
      id: "4",
      firstName: "Jenna",
      lastName: "Johnson",
      patientId: "3276865421",
      age: 34,
      gender: "Male",
      conditions: ["Smoking"],
      protocols: ["Smoking"],
      site: "Springfield Medical Center",
      sessionNo: 11,
      lastDate: "00:25:06",
    },
    {
      id: "5",
      firstName: "Josh",
      lastName: "Johnson",
      patientId: "1654321467",
      age: 67,
      gender: "Female",
      conditions: ["Depression"],
      protocols: ["Depression"],
      site: "Springfield Medical Center",
      sessionNo: 8,
      lastDate: "00:25:06",
    },
    {
      id: "6",
      firstName: "Maggie",
      lastName: "Smoking",
      patientId: "1535784321",
      age: 59,
      gender: "Female",
      conditions: ["Depression"],
      protocols: ["Depression iTBS"],
      site: "Springfield Medical Center",
      sessionNo: 27,
      lastDate: "00:25:06",
    },
    {
      id: "7",
      firstName: "Olivia",
      lastName: "Smoking",
      patientId: "6542356785",
      age: 19,
      gender: "Female",
      conditions: ["OCD", "Anxiety", "Panic"],
      protocols: ["OCD_New"],
      site: "Springfield Medical Center",
      sessionNo: 22,
      lastDate: "00:25:06",
    },
    {
      id: "8",
      firstName: "Sarah",
      lastName: "Williams",
      patientId: "9876543210",
      age: 28,
      gender: "Female",
      conditions: ["Depression"],
      protocols: ["Depression iTBS", "Depression 3", "TMS"],
      site: "Springfield Medical Center",
      sessionNo: 19,
      lastDate: "Oct 12, 2024",
    },
  ];

  // Double the patients by duplicating them twice with new IDs
  const duplicatedPatients1 = basePatients.map((patient) => ({
    ...patient,
    id: (parseInt(patient.id) + 10).toString(),
    patientId: (parseInt(patient.patientId) + 1000000).toString(),
  }));

  const duplicatedPatients2 = basePatients.map((patient) => ({
    ...patient,
    id: (parseInt(patient.id) + 20).toString(),
    patientId: (parseInt(patient.patientId) + 2000000).toString(),
  }));

  return [...basePatients, ...duplicatedPatients1, ...duplicatedPatients2];
};

// Export the count for display
export const getPatientsCount = (): number => {
  return getPatients().length;
};

// Get total patients count (including filtered)
export const getTotalPatientsCount = (): number => {
  return 156; // Total in database
};
