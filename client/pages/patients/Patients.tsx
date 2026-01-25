import { useState } from "react";
import { MainLayout } from "@/components/MainLayout";
import { DataTable, Column } from "@/components/DataTable";
import {
  getPatients,
  getPatientsCount,
  getTotalPatientsCount,
  Patient,
} from "@/services/patientsService";
import { Download, Plus, X, Filter, Search, ChevronDown } from "lucide-react";
import { AddPatientModal, PatientFormData } from "./AddPatientModal";

export default function Patients() {
  const [patients, setPatients] = useState<Patient[]>(getPatients());
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 15;

  // Filter patients based on search query
  const filteredPatients = patients.filter((patient) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      patient.firstName.toLowerCase().includes(query) ||
      patient.lastName.toLowerCase().includes(query) ||
      patient.patientId.startsWith(query) // Match ID from the beginning only
    );
  });

  // Calculate counts based on filtered data
  const totalCount = filteredPatients.length;
  const visibleCount = Math.min(
    itemsPerPage,
    totalCount - (currentPage - 1) * itemsPerPage,
  );

  const [selectedSite, setSelectedSite] = useState("All sites");

  const columns: Column<Patient>[] = [
    {
      key: "firstName",
      header: "First Name",
      width: "162px",
      sortable: true,
    },
    {
      key: "lastName",
      header: "Last Name",
      width: "145px",
      sortable: true,
    },
    {
      key: "patientId",
      header: "ID",
      width: "137px",
    },
    {
      key: "age",
      header: "Age",
      width: "89px",
      sortable: true,
    },
    {
      key: "gender",
      header: "Gender",
      width: "106px",
    },
    {
      key: "conditions",
      header: "Condition",
      width: "172px",
      render: (value: string[], row) => (
        <div className="flex items-center gap-2">
          <span>{value[0]}</span>
          {value.length > 1 && (
            <div className="flex h-6 items-center gap-1 rounded-lg border border-brand-blue bg-[#ECF7FB] px-2 py-0.5">
              <span className="text-xs font-medium leading-4 text-brand-blue">
                + {value.length - 1}
              </span>
            </div>
          )}
        </div>
      ),
    },
    {
      key: "protocols",
      header: "Protocol",
      width: "188px",
      render: (value: string[], row) => (
        <div className="flex items-center gap-2">
          <span>{value[0]}</span>
          {value.length > 1 && (
            <div className="flex h-6 items-center gap-1 rounded-lg border border-brand-blue bg-[#ECF7FB] px-2 py-0.5">
              <span className="text-xs font-medium leading-4 text-brand-blue">
                + {value.length - 1}
              </span>
            </div>
          )}
        </div>
      ),
    },
    {
      key: "site",
      header: "Site",
      width: "266px",
    },
    {
      key: "sessionNo",
      header: "Session No.",
      width: "127px",
      sortable: true,
    },
    {
      key: "lastDate",
      header: "Last Date",
      width: "187px",
      sortable: true,
    },
  ];

  const handleRowClick = (patient: Patient) => {
    console.log("Row clicked:", patient);
  };

  const handleSavePatient = (formData: PatientFormData) => {
    // Calculate age from date of birth
    const birthDate = new Date(formData.dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    const newPatient: Patient = {
      id: (patients.length + 1).toString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      patientId: formData.id,
      age: age,
      gender: formData.gender,
      conditions: [formData.condition],
      protocols: [formData.protocol],
      site: formData.sites.join(", "),
      sessionNo: 0,
      lastDate: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
    };
    setPatients([newPatient, ...patients]); // Add at the beginning so user sees it immediately
    setCurrentPage(1); // Reset to page 1
  };

  return (
    <MainLayout>
      <div className="px-4 md:px-10 py-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-8">
            <h1 className="text-brand-text-secondary text-2xl font-medium leading-[30px]">
              Patients ({totalCount})
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-brand-gray-600 text-base font-normal leading-5">
                Site
              </span>
              <div className="relative">
                <button className="flex h-10 w-[156px] items-center justify-between gap-2 rounded-lg border border-[#E1E1E4] bg-white px-3">
                  <span className="text-brand-text-secondary text-base font-normal leading-5">
                    {selectedSite}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[#B8B8C0]" />
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="h-10 px-4 flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium leading-5 tracking-[0.5px] capitalize">
              Add patient
            </span>
          </button>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4 flex-wrap flex-1">
            {/* Search */}
            <div className="relative w-full sm:w-[380px]">
              <div className="flex h-10 items-center gap-2 rounded-lg border border-[#E1E1E4] bg-white px-3">
                <Search className="w-5 h-5 text-brand-gray-600" />
                <input
                  type="text"
                  placeholder="Enter name or ID"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // Reset to page 1 when searching
                  }}
                  className="flex-1 bg-transparent text-base font-normal leading-5 text-brand-text-secondary placeholder:text-[#B8B8C0] outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setCurrentPage(1);
                    }}
                    className="p-2 hover:bg-gray-100 rounded transition-colors"
                  >
                    <X className="w-4 h-4 text-[#B8B8C0]" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Button */}
            <button className="h-10 px-4 flex items-center gap-2 border border-[#E1E1E4] bg-white rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5 text-brand-gray-600" />
              <span className="text-brand-text-secondary text-base font-normal leading-5">
                Filter by
              </span>
            </button>

            {/* Clear Filters */}
            <button className="flex items-center gap-1 text-brand-gray-600 hover:text-brand-gray-600/80 transition-colors">
              <X className="w-5 h-5" />
              <span className="text-base font-normal leading-5">Clear all</span>
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-[#B8B8C0]"></div>

            {/* Count */}
            <span className="text-brand-text-secondary text-base font-normal leading-5">
              {totalCount} ({visibleCount}) Patients
            </span>
          </div>

          {/* Export Button */}
          <button className="h-10 px-4 flex items-center gap-1.5 hover:bg-gray-100 rounded transition-colors">
            <Download className="w-5 h-5 text-brand-blue" />
            <span className="text-brand-blue text-sm font-medium leading-[18px]">
              Export
            </span>
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.12)] p-6">
          <DataTable
            columns={columns}
            data={filteredPatients}
            onRowClick={handleRowClick}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>

        {/* Add Patient Modal */}
        <AddPatientModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSavePatient}
        />
      </div>
    </MainLayout>
  );
}
