import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Database,
  Settings,
  HardDrive,
  Clock,
  BarChart3,
  Trash2,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MemoryManagement = () => {
  const [expandedSection, setExpandedSection] = useState("overview");
  const navigate = useNavigate();

  // Mock data
  const memoryStats = {
    totalItems: 2463,
    indexedPrompts: 158,
    indexedSnippets: 967,
    unusedItems: 328,
    capacityUsed: 73,
  };

  const topMemoryItems = [
    {
      id: "M-2845",
      title: "Q1 Email Campaign Intro",
      type: "Snippet",
      lastUsed: "2 days ago",
      isPinned: true,
    },
    {
      id: "M-2173",
      title: "Legal Disclaimer Template",
      type: "Snippet",
      lastUsed: "Yesterday",
      isPinned: true,
    },
    {
      id: "M-2901",
      title: "Product Launch Framework",
      type: "Prompt",
      lastUsed: "4 hours ago",
      isPinned: false,
    },
    {
      id: "M-1458",
      title: "Customer Support Response",
      type: "Snippet",
      lastUsed: "1 week ago",
      isPinned: false,
    },
  ];

  const toggleSection = (section: any) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Database className="mr-3 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Memory Management
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md font-medium flex items-center">
              <HardDrive className="w-4 h-4 mr-2" />
              Database Connection
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Health indicator bar */}
      <div className="px-6 py-3 bg-blue-50">
        <div className="flex items-center text-sm">
          <span className="font-medium text-gray-700">Memory Health: </span>
          <span className="ml-2 font-medium text-emerald-600">
            {`${(
              100 -
              (memoryStats.unusedItems / memoryStats.totalItems) * 100
            ).toFixed(0)}% healthy`}
          </span>

          <span className="mx-2 text-gray-400">|</span>
          <span className="font-medium text-amber-600">
            {((memoryStats.unusedItems / memoryStats.totalItems) * 100).toFixed(
              0
            )}
            % unused
          </span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="font-medium text-red-600">
            5% flagged for cleanup
          </span>
        </div>
      </div>

      {/* Vector Memory Overview Section */}
      <div className="p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("overview")}
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <Database className="w-5 h-5 mr-2 text-blue-600" />
            Vector Memory Overview
          </h2>
          {expandedSection === "overview" ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {expandedSection === "overview" && (
          <div className="mt-4 space-y-6">
            {/* Summary stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-500">Total Memory Items</div>
                <div className="text-2xl font-bold mt-1">
                  {memoryStats.totalItems}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Across all content types
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-500">Indexed Resources</div>
                <div className="text-2xl font-bold mt-1">
                  {memoryStats.indexedPrompts}{" "}
                  <span className="text-sm font-normal">prompts</span>,{" "}
                  {memoryStats.indexedSnippets}{" "}
                  <span className="text-sm font-normal">snippets</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Used across all modules
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-500">Database Type</div>
                <div className="text-2xl font-bold mt-1">Pinecone</div>
                <div className="text-xs text-green-500 mt-1 flex items-center">
                  <span className="rounded-full bg-green-100 w-2 h-2 mr-1"></span>
                  Connected & Healthy
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-500">Vector DB Capacity</div>
                <div className="text-2xl font-bold mt-1">
                  {memoryStats.capacityUsed}% Used
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className={`bg-blue-600 h-2 rounded-full`}
                    style={{ width: `${memoryStats.capacityUsed}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Top used memory items */}
            <div className="mt-8">
              <h3 className="text-md font-medium text-gray-700 mb-3">
                Top Used Memory Items
              </h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
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
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {topMemoryItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                          {item.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.lastUsed}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.isPinned ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Pinned
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              Active
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">
                            View
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Usage by module chart placeholder */}
            <div className="mt-8 grid grid-cols-5 gap-4">
              <div className="col-span-3 bg-gray-50 rounded-lg p-4 border border-gray-200 h-64 flex flex-col">
                <h3 className="text-md font-medium text-gray-700 mb-2">
                  Memory Usage by Module
                </h3>
                <div className="flex-1 flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-gray-300" />
                  <div className="ml-4 text-gray-400 text-sm">
                    Pie chart showing distribution across modules
                  </div>
                </div>
              </div>
              <div className="col-span-2 bg-gray-50 rounded-lg p-4 border border-gray-200 h-64">
                <h3 className="text-md font-medium text-gray-700 mb-2">
                  Quick Actions
                </h3>
                <div className="space-y-3 mt-4">
                  <button className="w-full py-2 px-4 bg-white hover:bg-gray-50 border border-gray-200 rounded-md text-left flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Schedule Memory Cleanup</span>
                  </button>
                  <button className="w-full py-2 px-4 bg-white hover:bg-gray-50 border border-gray-200 rounded-md text-left flex items-center">
                    <Trash2 className="w-4 h-4 mr-2 text-amber-600" />
                    <span>Bulk Delete Unused Items</span>
                  </button>
                  <button className="w-full py-2 px-4 bg-white hover:bg-gray-50 border border-gray-200 rounded-md text-left flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Analyze Memory Health</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Manage connection button */}
            <div className="flex justify-end mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Manage DB Connection
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Additional sections would be added here */}
      <div className="px-6 pb-6">
        <button
          className="w-full py-3 border border-dashed border-gray-300 rounded-lg text-gray-500 flex items-center justify-center hover:bg-gray-50"
          onClick={() =>
            navigate("/dashboard/admintools/memorymanageement/retention")
          }
        >
          <span className="text-sm">Show Data Retention & Expiry Rules</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default MemoryManagement;
