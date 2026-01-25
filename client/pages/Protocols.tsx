import { useState } from "react";
import { MainLayout } from "@/components/MainLayout";
import { DataTable, Column } from "@/components/DataTable";
import {
  getProtocols,
  getProtocolsCount,
  Protocol,
} from "@/services/protocolsService";
import { Download, Plus, X, Filter } from "lucide-react";

export default function Protocols() {
  const [protocols] = useState<Protocol[]>(getProtocols());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const totalCount = protocols.length;
  const visibleCount = Math.min(
    itemsPerPage,
    totalCount - (currentPage - 1) * itemsPerPage,
  );

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
    },
    {
      key: "createdBy",
      header: "Created by",
      width: "224px",
    },
    {
      key: "lastModified",
      header: "Last modified",
      width: "320px",
      sortable: true,
    },
    {
      key: "type",
      header: "Type",
      width: "168px",
    },
    {
      key: "frequency",
      header: "Frequency (Hz)",
      width: "154px",
    },
    {
      key: "mt",
      header: "MT (%)",
      width: "129px",
    },
    {
      key: "totalTime",
      header: "Total time",
      width: "138px",
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

  return (
    <MainLayout>
      <div className="px-4 md:px-10 py-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-8">
            <h1 className="text-brand-text-secondary text-2xl font-medium leading-[30px]">
              Protocols ({totalCount})
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4 flex-wrap">
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
              {totalCount} ({visibleCount}) Protocols
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
            data={protocols}
            onRowClick={handleRowClick}
            actions={{
              onCopy: handleCopy,
              onDelete: handleDelete,
            }}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </MainLayout>
  );
}
