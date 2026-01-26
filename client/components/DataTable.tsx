import { useState, useEffect } from "react";
import { Copy, Trash2, Lock, MessageSquare } from "lucide-react";
import { Pagination } from "./Pagination";

// Delete functionality for table row

export interface Column<T> {
  key: keyof T | string;
  header: string;
  width?: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  actions?: {
    onCopy?: (row: T) => void;
    onDelete?: (row: T) => void;
  };
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  showLockColumn?: boolean;
  showNoteColumn?: boolean;
}

export function DataTable<T extends { id: string; isLocked?: boolean; hasNote?: boolean }>({
  columns,
  data,
  onRowClick,
  actions,
  itemsPerPage,
  currentPage: externalCurrentPage,
  onPageChange: externalOnPageChange,
  showLockColumn = true,
  showNoteColumn = false,
}: DataTableProps<T>) {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [displayedData, setDisplayedData] = useState<T[]>(data);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);

  // Sync displayedData with incoming data prop
  useEffect(() => {
    setDisplayedData(data);
  }, [data]);

  // Use external control if provided, otherwise use internal state
  const isControlled = externalCurrentPage !== undefined;
  const currentPage = isControlled ? externalCurrentPage : internalCurrentPage;

  const handlePageChange = (page: number) => {
    if (isControlled && externalOnPageChange) {
      externalOnPageChange(page);
    } else {
      setInternalCurrentPage(page);
    }
  };

  // Calculate pagination
  const totalPages = itemsPerPage
    ? Math.ceil(displayedData.length / itemsPerPage)
    : 1;
  const startIndex = (currentPage - 1) * (itemsPerPage || displayedData.length);
  const endIndex = startIndex + (itemsPerPage || displayedData.length);

  const handleSort = (columnKey: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === columnKey &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key: columnKey, direction });
  };

  const getValue = (obj: any, path: string): any => {
    return path.split(".").reduce((current, key) => current?.[key], obj);
  };

  const handleDelete = (row: T) => {
    // Remove the row from displayed data
    setDisplayedData((prevData) =>
      prevData.filter((item) => item.id !== row.id),
    );
    // Call the custom delete handler if provided
    actions?.onDelete?.(row);
  };

  // Sort the data based on sortConfig
  const sortedData = [...displayedData].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = getValue(a, sortConfig.key);
    const bValue = getValue(b, sortConfig.key);

    if (aValue == null || bValue == null) return 0;

    const aCompare = typeof aValue === "string" ? aValue.toLowerCase() : aValue;
    const bCompare = typeof bValue === "string" ? bValue.toLowerCase() : bValue;

    if (aCompare < bCompare) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aCompare > bCompare) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Apply pagination to sorted data
  const paginatedData = itemsPerPage
    ? sortedData.slice(startIndex, endIndex)
    : sortedData;

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="border-b border-[#B8B8C0]">
              <th className="w-12 h-12 px-3">
                <div className="flex items-center justify-center">
                  <Lock className="w-5 h-5 text-brand-blue" />
                </div>
              </th>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="h-12 px-3 text-left"
                  style={{ width: column.width }}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-[#777786] font-normal text-base">
                      {column.header}
                    </span>
                    {column.sortable && (
                      <button
                        onClick={() => handleSort(column.key as string)}
                        className="ml-1 w-6 h-6 flex items-center justify-center flex-shrink-0"
                      >
                        <div className="relative w-1.5 h-3">
                          <svg
                            width="6"
                            height="13"
                            viewBox="0 0 6 13"
                            fill="none"
                            className="absolute left-0 top-0"
                          >
                            <path
                              d="M2.67236 0.160714C2.81798 -0.0535713 3.18202 -0.0535715 3.32764 0.160714L5.94875 4.01786C6.09437 4.23214 5.91235 4.5 5.62111 4.5L0.378889 4.5C0.0876548 4.5 -0.094367 4.23214 0.0512503 4.01786L2.67236 0.160714Z"
                              fill={
                                sortConfig?.key === column.key &&
                                sortConfig?.direction === "asc"
                                  ? "#101128"
                                  : "#B7BABA"
                              }
                            />
                            <path
                              d="M3.32764 12.8393C3.18202 13.0536 2.81798 13.0536 2.67236 12.8393L0.0512505 8.98214C-0.0943667 8.76786 0.0876543 8.5 0.378889 8.5L5.62111 8.5C5.91235 8.5 6.09437 8.76786 5.94875 8.98214L3.32764 12.8393Z"
                              fill={
                                sortConfig?.key === column.key &&
                                sortConfig?.direction === "desc"
                                  ? "#101128"
                                  : "#B7BABA"
                              }
                            />
                          </svg>
                        </div>
                      </button>
                    )}
                  </div>
                </th>
              ))}
              {actions && <th className="w-20"></th>}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => {
              const isHovered = hoveredRow === row.id;
              return (
                <tr
                  key={row.id}
                  className={`border-b border-[#A7A7B1] cursor-pointer transition-colors ${
                    isHovered ? "bg-[#ECF7FB]" : ""
                  }`}
                  onMouseEnter={() => setHoveredRow(row.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  onClick={() => onRowClick?.(row)}
                >
                  <td
                    className={`h-12 px-3 ${isHovered ? "bg-[#ECF7FB]" : ""}`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Empty lock column cell */}
                    </div>
                  </td>
                  {columns.map((column, colIndex) => {
                    const value = getValue(row, column.key as string);
                    return (
                      <td key={colIndex} className="h-12 px-3">
                        <div className="text-[#101128] font-normal text-base overflow-hidden text-ellipsis whitespace-nowrap">
                          {column.render ? column.render(value, row) : value}
                        </div>
                      </td>
                    );
                  })}
                  {actions && (
                    <td className="h-12">
                      {isHovered && (
                        <div className="flex items-center">
                          {actions.onCopy && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                actions.onCopy?.(row);
                              }}
                              className="w-10 h-12 flex items-center justify-center hover:bg-brand-gray-100 transition-colors"
                            >
                              <Copy className="w-5 h-5 text-[#777786]" />
                            </button>
                          )}
                          {actions?.onDelete && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(row);
                              }}
                              className="w-10 h-12 flex items-center justify-center hover:bg-brand-gray-100 transition-colors"
                            >
                              <Trash2 className="w-5 h-5 text-[#777786]" />
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
