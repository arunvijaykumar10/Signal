import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Archive,
  RefreshCw,
  Download,
  Search,
  Filter,
  Trash2,
  RotateCcw,
  Clock,
  AlertTriangle,
  FileText,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArchivedMemoryVault = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "archive"
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const navigate = useNavigate();

  // Mock data for archived items
  const archivedItems = [
    {
      id: "A-2845",
      title: "Old Brand Guidelines Prompt",
      type: "Prompt",
      lastUsed: "8 months ago",
      archiveDate: "2 months ago",
      deleteIn: "28 days",
    },
    {
      id: "A-2173",
      title: "2023 Holiday Campaign Snippets",
      type: "Snippet",
      lastUsed: "5 months ago",
      archiveDate: "1 month ago",
      deleteIn: "29 days",
    },
    {
      id: "A-2901",
      title: "Product Beta Launch Framework",
      type: "Prompt",
      lastUsed: "9 months ago",
      archiveDate: "3 weeks ago",
      deleteIn: "39 days",
    },
    {
      id: "A-1458",
      title: "Legacy Legal Disclaimers",
      type: "Snippet",
      lastUsed: "1 year ago",
      archiveDate: "2 months ago",
      deleteIn: "ready for deletion",
    },
    {
      id: "A-3045",
      title: "Q1 2023 Email Templates",
      type: "Snippet",
      lastUsed: "11 months ago",
      archiveDate: "3 days ago",
      deleteIn: "57 days",
    },
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === archivedItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(archivedItems.map((item) => item.id));
    }
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow mt-6 mb-8">
      {/* Archived Memory Vault Section */}
      <div className="p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("archive")}
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <button
              className="mr-3 text-gray-500 hover:text-gray-700"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={20} />
            </button>
            <Archive className="w-5 h-5 mr-2 text-blue-600" />
            Archived Memory Vault
          </h2>
          {expandedSection === "archive" ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {expandedSection === "archive" && (
          <div className="mt-4 space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Archive Information:</strong> Items are stored here
                    when removed from active memory. They will be permanently
                    deleted after 30 days unless restored.
                  </p>
                </div>
              </div>
            </div>

            {/* Filters and search */}
            <div className="flex flex-wrap gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search archived items..."
                />
              </div>

              <div className="w-40">
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>All Types</option>
                  <option>Snippets</option>
                  <option>Prompts</option>
                  <option>Conversations</option>
                </select>
              </div>

              <div className="w-44">
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>Archive Date</option>
                  <option>Delete Date</option>
                  <option>Last Used</option>
                </select>
              </div>

              <button className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                <Filter className="h-4 w-4 mr-2 text-gray-500" />
                More Filters
              </button>
            </div>

            {/* Archived Items Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-6 py-3 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    checked={selectedItems.length === archivedItems.length}
                    onChange={toggleSelectAll}
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    {selectedItems.length > 0
                      ? `${selectedItems.length} items selected`
                      : "Select All"}
                  </span>
                </div>

                {selectedItems.length > 0 && (
                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                      <RotateCcw className="h-3.5 w-3.5 mr-1 text-gray-500" />
                      Restore to Active
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-red-300 text-xs font-medium rounded text-red-700 bg-red-50 hover:bg-red-100">
                      <Trash2 className="h-3.5 w-3.5 mr-1 text-red-500" />
                      Delete Permanently
                    </button>
                  </div>
                )}
              </div>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Used
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Archived Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Delete In
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {archivedItems.map((item) => (
                    <tr
                      key={item.id}
                      className={`hover:bg-gray-50 ${
                        selectedItems.includes(item.id) ? "bg-blue-50" : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => toggleSelectItem(item.id)}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.type === "Prompt"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-gray-400" />
                        {item.lastUsed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.archiveDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.deleteIn === "ready for deletion"
                              ? "bg-red-100 text-red-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {item.deleteIn}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Preview
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          Restore
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Preview panel */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-gray-500" />
                  Content Preview
                </h4>
                <div className="bg-white border border-gray-200 rounded-md p-3 text-sm text-gray-500">
                  <p className="font-mono">
                    Select an item to preview its content before restoring or
                    permanent deletion.
                  </p>
                </div>
              </div>
            </div>

            {/* Export and Bulk Options */}
            <div className="flex justify-between items-center">
              <div className="space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <Download className="mr-2 h-4 w-4 text-gray-500" />
                  Export Archive
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <RefreshCw className="mr-2 h-4 w-4 text-gray-500" />
                  Refresh List
                </button>
              </div>

              <div>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                  Create Archive Report
                </button>
              </div>
            </div>

            {/* Compliance Information */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Compliance Information
              </h3>
              <p className="text-sm text-gray-500">
                Items in the archive remain available for compliance audits or
                regulatory requirements. Export the full archive for backup or
                migration to external vector stores.
              </p>
              <div className="mt-3 text-xs text-gray-400">
                Last full compliance backup: April 12, 2025 (10 days ago)
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchivedMemoryVault;
