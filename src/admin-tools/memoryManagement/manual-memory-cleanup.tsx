import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Trash2,
  Archive,
  Tag,
  Star,
  Search,
  Filter,
  Clock,
  AlertTriangle,
  CheckSquare,
  RefreshCw,
  Download,
  Brain,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManualMemoryCleanup = () => {
  const [expandedSection, setExpandedSection] = useState("cleanup");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const navigate = useNavigate();

  // Mock data for memory items
  const memoryItems = [
    {
      id: "M-1234",
      title: "Holiday Campaign Intro",
      type: "Snippet",
      category: "Email",
      lastUsed: "3 months ago",
      usageCount: 2,
      confidence: "Low relevance",
    },
    {
      id: "M-1235",
      title: "Product Feature List",
      type: "Snippet",
      category: "Product",
      lastUsed: "45 days ago",
      usageCount: 5,
      confidence: "Frequently used",
    },
    {
      id: "M-1236",
      title: "Legal Disclaimer v1",
      type: "Snippet",
      category: "Legal",
      lastUsed: "8 months ago",
      usageCount: 0,
      confidence: "Low relevance",
    },
    {
      id: "M-1237",
      title: "Customer Journey Template",
      type: "Prompt",
      category: "Strategy",
      lastUsed: "2 months ago",
      usageCount: 3,
      confidence: "Medium relevance",
    },
    {
      id: "M-1238",
      title: "Technical Support Response",
      type: "Snippet",
      category: "Support",
      lastUsed: "1 month ago",
      usageCount: 12,
      confidence: "Frequently used",
    },
    {
      id: "M-1239",
      title: "Onboarding Email Sequence",
      type: "Snippet",
      category: "Email",
      lastUsed: "2 weeks ago",
      usageCount: 8,
      confidence: "Potential duplication",
    },
  ];

  const toggleSection = (section: any) => {
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
    if (selectedItems.length === memoryItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(memoryItems.map((item) => item.id));
    }
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow mt-6">
      {/* Manual Memory Cleanup Section */}
      <div className="p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("cleanup")}
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <button
              className="mr-3 text-gray-500 hover:text-gray-700"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={20} />
            </button>
            <Trash2 className="w-5 h-5 mr-2 text-blue-600" />
            Manual Memory Cleanup
          </h2>
          {expandedSection === "cleanup" ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {expandedSection === "cleanup" && (
          <div className="mt-4 space-y-6">
            {/* Filters and search */}
            <div className="flex flex-wrap gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search memory items..."
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
                  <option>Date Added</option>
                  <option>Last Used</option>
                  <option>Usage Count</option>
                </select>
              </div>

              <button className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                <Filter className="h-4 w-4 mr-2 text-gray-500" />
                More Filters
              </button>

              <button className="inline-flex items-center px-4 py-2 border border-blue-600 bg-blue-50 text-sm font-medium text-blue-700 hover:bg-blue-100 rounded-md">
                <Brain className="h-4 w-4 mr-2 text-blue-600" />
                AI Suggest Cleanup
              </button>
            </div>

            {/* Memory Items Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-6 py-3 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    checked={selectedItems.length === memoryItems.length}
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
                      <Archive className="h-3.5 w-3.5 mr-1 text-gray-500" />
                      Archive
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                      <Tag className="h-3.5 w-3.5 mr-1 text-gray-500" />
                      Retag
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                      <Star className="h-3.5 w-3.5 mr-1 text-gray-500" />
                      Pin
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-red-300 text-xs font-medium rounded text-red-700 bg-red-50 hover:bg-red-100">
                      <Trash2 className="h-3.5 w-3.5 mr-1 text-red-500" />
                      Delete
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
                      Category
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
                      Usage
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Relevance
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {memoryItems.map((item) => (
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-gray-400" />
                        {item.lastUsed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.usageCount} times
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.confidence === "Low relevance"
                              ? "bg-amber-100 text-amber-800"
                              : item.confidence === "Frequently used"
                              ? "bg-green-100 text-green-800"
                              : item.confidence === "Potential duplication"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item.confidence}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          View
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Preview panel */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Preview Panel
                </h4>
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">
                    Select an item to preview its content, tags, and source
                  </div>
                  <div>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Open full preview
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Safe Mode and Suggestions */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-md font-medium text-gray-700 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" />
                    Safe Mode
                  </h3>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="safe-mode-toggle"
                      checked
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="safe-mode-toggle"
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Safe Mode prevents deletion of any memory items that are
                  linked to active content or referenced in live templates.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-md font-medium text-gray-700 mb-3 flex items-center">
                  <RefreshCw className="w-4 h-4 mr-2 text-blue-500" />
                  Auto-Suggestions
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                    Replace outdated legal snippets with newer versions
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                    Merge 3 potential duplicate product descriptions
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-between">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Download className="mr-2 h-4 w-4 text-gray-500" />
                Export Selected
              </button>

              <div className="space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                  Apply Suggested Actions
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Memory Optimization Settings button */}
      <div className="px-6 pb-6">
        <button
          className="w-full py-3 border border-dashed border-gray-300 rounded-lg text-gray-500 flex items-center justify-center hover:bg-gray-50"
          onClick={() =>
            navigate(
              "/dashboard/admintools/memorymanageement/memoryoptimization"
            )
          }
        >
          <span className="text-sm">
            Show Memory Optimization Settings (Advanced)
          </span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ManualMemoryCleanup;
