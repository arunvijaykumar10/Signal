import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  Eye,
  Filter,
  ShieldAlert,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DataRetentionExpiry = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "retention"
  );
  const navigate = useNavigate();

  const toggleSection = (section: string) => {
    setExpandedSection((prevState) => (prevState === section ? null : section));
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow mt-6">
      {/* Data Retention & Expiry Rules Section */}
      <div className="p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("retention")}
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <button
              className="mr-3 text-gray-500 hover:text-gray-700"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={20} />
            </button>
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Data Retention & Expiry Rules
          </h2>
          {expandedSection === "retention" ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {expandedSection === "retention" && (
          <div className="mt-4 space-y-6">
            {/* Alert banner */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-amber-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    <strong>Notice:</strong> 86 snippets are scheduled to expire
                    next week.
                    <button className="underline ml-1">Review items</button>
                  </p>
                </div>
              </div>
            </div>

            {/* Default Retention Period */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-md font-medium text-gray-700 mb-4">
                Default Retention Period
              </h3>
              <div className="flex items-center mb-6">
                <div className="w-64">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Global Retention Setting
                  </label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option>30 days</option>
                    <option>60 days</option>
                    <option selected>90 days</option>
                    <option>180 days</option>
                    <option>1 year</option>
                    <option>Custom</option>
                  </select>
                </div>
                <div className="ml-8 text-sm text-gray-500">
                  <p>
                    All memory items will expire after this period unless
                    overridden by type-specific rules.
                  </p>
                </div>
              </div>

              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Type-Based Retention Rules
              </h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Content Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Retention Period
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Last Updated
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
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Snippets
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        180 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2 weeks ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-800">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Prompts
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        365 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2 weeks ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-800">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Chat Conversations
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        60 days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2 weeks ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-800">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50 border-t border-gray-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            + Add New Type Rule
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional settings */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-md font-medium text-gray-700 mb-4">
                  Expiry Triggers
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-700 flex items-center">
                      <span>Expire only if unused for set period</span>
                      <button className="ml-1">
                        <Eye className="h-4 w-4 text-gray-400" />
                      </button>
                    </label>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        name="toggle"
                        id="unused-toggle"
                        checked
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        htmlFor="unused-toggle"
                        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-700 flex items-center">
                      <span>Auto-archive expired items</span>
                      <button className="ml-1">
                        <Eye className="h-4 w-4 text-gray-400" />
                      </button>
                    </label>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        name="toggle"
                        id="archive-toggle"
                        checked
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        htmlFor="archive-toggle"
                        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-700 flex items-center">
                      <span>Hard delete after 30 days in archive</span>
                      <button className="ml-1">
                        <Eye className="h-4 w-4 text-gray-400" />
                      </button>
                    </label>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        name="toggle"
                        id="delete-toggle"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        htmlFor="delete-toggle"
                        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-md font-medium text-gray-700 mb-4">
                  Compliance Mode
                </h3>
                <div className="flex items-center mb-4">
                  <ShieldAlert className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-700">
                    Audit-Safe Compliance Mode
                  </span>
                  <div className="ml-4 relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="compliance-toggle"
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="compliance-toggle"
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
                <div className="bg-gray-50 rounded p-3 text-xs text-gray-500">
                  When enabled, all memory is preserved for 7 years in a
                  secured, immutable storage layer for compliance with HIPAA,
                  SOX, or ISO requirements.
                </div>

                <div className="mt-4">
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    Configure Retention Schedule
                  </button>
                </div>
              </div>
            </div>

            {/* Preview rule impact */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm text-gray-700">
                  Based on current rules:{" "}
                  <strong>86 snippets will expire next week</strong>
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
                Review Items
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Manual Memory Cleanup button */}
      <div className="px-6 pb-6">
        <button
          className="w-full py-3 border border-dashed border-gray-300 rounded-lg text-gray-500 flex items-center justify-center hover:bg-gray-50"
          onClick={() =>
            navigate("/dashboard/admintools/memorymanageement/manualmemory")
          }
        >
          <span className="text-sm">Show Manual Memory Cleanup</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default DataRetentionExpiry;
