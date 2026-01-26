import { useState, useMemo } from "react";
import { MainLayout } from "@/components/MainLayout";
import { DataTable, Column } from "@/components/DataTable";
import {
  getProtocols,
  Protocol,
  CoilType,
} from "@/services/protocolsService";
import { Plus, X, MessageSquare } from "lucide-react";
import { CoilTags } from "@/components/CoilTag";
import { SearchFilter } from "@/components/filters/SearchFilter";
import { MultiSelectFilter, FilterOption } from "@/components/filters/MultiSelectFilter";

export default function Protocols() {
  const allProtocols = getProtocols();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedCoils, setSelectedCoils] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Extract unique filter options from data
  const conditionOptions: FilterOption[] = useMemo(() => {
    const conditions = Array.from(
      new Set(allProtocols.map((p) => p.condition))
    ).sort();
    return conditions.map((c) => ({ value: c, label: c }));
  }, [allProtocols]);

  const coilOptions: FilterOption[] = [
    { value: "H1", label: "H1" },
    { value: "H4", label: "H4" },
  ];

  const typeOptions: FilterOption[] = useMemo(() => {
    const types = Array.from(new Set(allProtocols.map((p) => p.type))).sort();
    return types.map((t) => ({ value: t, label: t }));
  }, [allProtocols]);

  // Apply filters
  const filteredProtocols = useMemo(() => {
    return allProtocols.filter((protocol) => {
      // Search filter
      if (
        searchQuery &&
        !protocol.protocolName.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Condition filter
      if (
        selectedConditions.length > 0 &&
        !selectedConditions.includes(protocol.condition)
      ) {
        return false;
      }

      // Coil filter
      if (selectedCoils.length > 0) {
        const hasSelectedCoil = protocol.coils.some((coil) =>
          selectedCoils.includes(coil)
        );
        if (!hasSelectedCoil) {
          return false;
        }
      }

      // Type filter
      if (selectedTypes.length > 0 && !selectedTypes.includes(protocol.type)) {
        return false;
      }

      return true;
    });
  }, [allProtocols, searchQuery, selectedConditions, selectedCoils, selectedTypes]);

  const totalCount = allProtocols.length;
  const filteredCount = filteredProtocols.length;

  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedConditions([]);
    setSelectedCoils([]);
    setSelectedTypes([]);
  };

  const hasActiveFilters =
    searchQuery ||
    selectedConditions.length > 0 ||
    selectedCoils.length > 0 ||
    selectedTypes.length > 0;

  const columns: Column<Protocol>[] = [
    {
      key: "protocolName",
      header: "Protocol name",
      width: "162px",
      sortable: true,
    },
    {
      key: "condition",
      header: "Condition",
      width: "145px",
      sortable: true,
    },
    {
      key: "coils",
      header: "Coil",
      width: "110px",
      sortable: false,
      render: (coils: CoilType[]) => <CoilTags coils={coils} />,
    },
    {
      key: "type",
      header: "Type",
      width: "121px",
      sortable: true,
    },
    {
      key: "createdBy",
      header: "Created by",
      width: "224px",
      sortable: true,
    },
    {
      key: "lastModified",
      header: "Last modified",
      width: "311px",
      sortable: true,
    },
    {
      key: "frequency",
      header: "Freq. (Hz)",
      width: "110px",
      sortable: true,
    },
    {
      key: "mt",
      header: "MT (%)",
      width: "110px",
      sortable: true,
    },
    {
      key: "totalTime",
      header: "Total time",
      width: "110px",
      sortable: true,
    },
  ];

  const handleCopy = (protocol: Protocol) => {
    console.log("Copy protocol:", protocol);
  };

  const handleDelete = (protocol: Protocol) => {
    console.log("Delete protocol:", protocol);
  };

  const handleRowClick = (protocol: Protocol) => {
    console.log("Row clicked:", protocol);
  };

  const handleNoteClick = (protocol: Protocol, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Note clicked for:", protocol);
  };

  return (
    <MainLayout>
      <div className="px-4 md:px-10 py-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-8">
            <h1 className="text-brand-text-secondary text-2xl font-medium leading-[30px]">
              Protocols
            </h1>
          </div>
          <div className="flex items-center gap-3.5">
            <button className="h-10 px-4 flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 rounded-lg transition-colors">
              <Plus className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium leading-5 tracking-[0.5px] capitalize">
                Create protocol
              </span>
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="inline-flex items-center gap-4 mb-4 h-10">
          {/* Search Filter */}
          <SearchFilter value={searchQuery} onChange={setSearchQuery} />

          {/* Condition Filter */}
          <MultiSelectFilter
            label="Condition"
            options={conditionOptions}
            selected={selectedConditions}
            onChange={setSelectedConditions}
          />

          {/* Coil Filter */}
          <MultiSelectFilter
            label="Coil"
            options={coilOptions}
            selected={selectedCoils}
            onChange={setSelectedCoils}
          />

          {/* Type Filter */}
          <MultiSelectFilter
            label="Type"
            options={typeOptions}
            selected={selectedTypes}
            onChange={setSelectedTypes}
          />

          {/* Right Section */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Clear All */}
            {hasActiveFilters && (
              <button
                onClick={handleClearAll}
                className="flex items-center gap-1.5 py-2.5 pr-0 pl-2.5 hover:opacity-80 transition-opacity"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 9L15 15"
                    stroke="#777786"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9L9 15"
                    stroke="#777786"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#777786] font-normal text-base leading-5">
                  Clear all
                </span>
              </button>
            )}

            {/* Divider */}
            <div className="h-6 w-px bg-[#B8B8C0]"></div>

            {/* Count */}
            <span className="text-brand-text-secondary font-normal text-base leading-5 py-2.5 pr-0 pl-2.5">
              Protocols {filteredCount}/{totalCount}
            </span>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.12)] p-6">
          <DataTable
            columns={columns}
            data={filteredProtocols}
            onRowClick={handleRowClick}
            actions={{
              onCopy: handleCopy,
              onDelete: handleDelete,
            }}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            showLockColumn={true}
            showNoteColumn={true}
          />
        </div>
      </div>
    </MainLayout>
  );
}
