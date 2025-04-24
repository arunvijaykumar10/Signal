import {
  AlertTriangle,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Database,
  Globe,
  MessageSquare,
  RefreshCw,
  Sliders,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MemoryOptimizationSettings = () => {
  const [expandedSection, setExpandedSection] = useState("optimization");
  const navigate = useNavigate();

  const toggleSection = (section: any) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow mt-6 mb-8">
      {/* Memory Optimization Settings Section */}
      <div className="p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("optimization")}
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <button
              className="mr-3 text-gray-500 hover:text-gray-700"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={20} />
            </button>
            <Sliders className="w-5 h-5 mr-2 text-blue-600" />
            Memory Optimization Settings (Advanced)
          </h2>
          {expandedSection === "optimization" ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {expandedSection === "optimization" && (
          <div className="mt-4 space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    <strong>Advanced Settings:</strong> Changes to these
                    parameters may affect memory recall quality and AI
                    performance. Changes are recorded in the audit log.
                  </p>
                </div>
              </div>
            </div>

            {/* Similarity Threshold */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-md font-medium text-gray-700">
                  Similarity Threshold
                </h3>
                <span className="text-sm text-blue-600">Current: 0.75</span>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">
                  Controls how similar content must be to match in the vector
                  database. Higher values mean stricter matching.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500">Loose (0.3)</span>
                  <div className="relative flex-grow">
                    <input
                      type="range"
                      min="0.3"
                      max="0.9"
                      step="0.05"
                      defaultValue="0.75"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <span className="text-xs text-gray-500">Strict (0.9)</span>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded text-sm text-blue-700 mb-3">
                <div className="flex">
                  <MessageSquare className="h-4 w-4 mt-0.5 mr-2" />
                  <div>
                    Your current configuration finds{" "}
                    <span className="font-medium">78%</span> matching prompts on
                    queries like:{" "}
                    <span className="italic">"customer service welcome"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Settings Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Embedding Refresh Policy */}
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-md font-medium text-gray-700 mb-4">
                  Embedding Refresh Policy
                </h3>
                <div className="space-y-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      name="refresh-policy"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Manual Refresh Only
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      name="refresh-policy"
                      checked
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Monthly Auto-Refresh
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      name="refresh-policy"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Refresh On Edit
                    </span>
                  </label>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-500">
                    Determines when embeddings are recalculated to ensure
                    optimal vector representations.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                    <RefreshCw className="h-3.5 w-3.5 mr-1" />
                    Manually Refresh All Embeddings
                  </button>
                </div>
              </div>

              {/* Language Scope */}
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-md font-medium text-gray-700 mb-4 flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-gray-500" />
                  Language Scope
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="en"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked
                    />
                    <label
                      htmlFor="en"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      English (EN)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="fr"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked
                    />
                    <label
                      htmlFor="fr"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      French (FR)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="es"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked
                    />
                    <label
                      htmlFor="es"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Spanish (ES)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="de"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="de"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      German (DE)
                    </label>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    + Add Additional Languages
                  </button>
                </div>
              </div>
            </div>

            {/* Token Limit Guard */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex justify-between">
                <h3 className="text-md font-medium text-gray-700 flex items-center">
                  <Database className="w-4 h-4 mr-2 text-gray-500" />
                  Token Limit Guard
                </h3>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="token-guard-toggle"
                    checked
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="token-guard-toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Warning Threshold
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                      placeholder="3000"
                      defaultValue="3000"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      tokens
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alert Threshold
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                      placeholder="4000"
                      defaultValue="4000"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      tokens
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-sm text-gray-500">
                <p>
                  Monitors model context window usage and alerts when memory
                  usage approaches limits.
                </p>
              </div>
            </div>

            {/* Button row */}
            <div className="flex justify-between items-center">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Restore Defaults
              </button>

              <div className="space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Test Configuration
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Save Advanced Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Archived Memory Vault button */}
      <div className="px-6 pb-6">
        <button
          className="w-full py-3 border border-dashed border-gray-300 rounded-lg text-gray-500 flex items-center justify-center hover:bg-gray-50"
          onClick={() =>
            navigate("/dashboard/admintools/memorymanageement/archivedmemory")
          }
        >
          <span className="text-sm">Access Archived Memory Vault</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default MemoryOptimizationSettings;
