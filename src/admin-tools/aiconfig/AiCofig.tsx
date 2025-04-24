import {
  Settings,
  AlertTriangle,
  Check,
  ChevronDown,
  Edit,
  HelpCircle,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIConfig = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
      <header className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            AI Configuration Panel
          </h1>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 text-sm bg-gray-100 rounded-md text-gray-700 flex items-center gap-1"
              onClick={() =>
                navigate("/dashboard/admintools/aiconfig/settings")
              }
            >
              <Settings className="w-4 h-4" />
              System Settings
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md flex items-center gap-1">
              Save Changes
            </button>
          </div>
        </div>
        <p className="text-gray-600">
          Configure AI model settings, routing logic, and fallbacks for each
          module.
        </p>
      </header>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Module-Based AI Model Routing
          </h2>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <Info className="w-4 h-4" />
            Changes will apply on next module use
          </div>
        </div>

        <div className="bg-gray-50 p-1 rounded-md mb-4">
          <div className="flex text-sm font-medium text-gray-600">
            <div className="w-1/4 p-2">Module</div>
            <div className="w-1/4 p-2">Model</div>
            <div className="w-1/4 p-2">Status</div>
            <div className="w-1/4 p-2">Actions</div>
          </div>
        </div>

        {/* Draft Editor Module Row */}
        <div className="border rounded-md mb-2 hover:bg-gray-50 transition-colors">
          <div className="flex items-center p-3">
            <div className="w-1/4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Edit className="w-4 h-4" />
              </div>
              <div>
                <div className="font-medium">Draft Editor</div>
                <div className="text-xs text-gray-500">
                  Primary content creation
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="px-3 py-2 border rounded-md flex items-center justify-between cursor-pointer bg-white">
                <span>GPT-4</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  <Check className="w-3 h-3 mr-1" />
                  Model Active
                </span>
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
            </div>
            <div className="w-1/4">
              <button
                className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-md font-medium"
                onClick={() =>
                  navigate("/dashboard/admintools/aiconfig/configure")
                }
              >
                Configure
              </button>
            </div>
          </div>
        </div>

        {/* Assistant Module Row */}
        <div className="border rounded-md mb-2 hover:bg-gray-50 transition-colors">
          <div className="flex items-center p-3">
            <div className="w-1/4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <Settings className="w-4 h-4" />
              </div>
              <div>
                <div className="font-medium">Voice Assistant</div>
                <div className="text-xs text-gray-500">
                  Chat & voice interactions
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="px-3 py-2 border rounded-md flex items-center justify-between cursor-pointer bg-white">
                <span>Claude 2</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Fallback Active
                </span>
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
            </div>
            <div className="w-1/4">
              <button
                className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-md font-medium"
                onClick={() =>
                  navigate("/dashboard/admintools/aiconfig/configure")
                }
              >
                Configure
              </button>
            </div>
          </div>
        </div>

        {/* Validator Module Row */}
        <div className="border rounded-md mb-2 hover:bg-gray-50 transition-colors">
          <div className="flex items-center p-3">
            <div className="w-1/4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <div className="font-medium">Signal Validator</div>
                <div className="text-xs text-gray-500">
                  QA & tone verification
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="px-3 py-2 border rounded-md flex items-center justify-between cursor-pointer bg-white">
                <span>Mistral</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  <Settings className="w-3 h-3 mr-1" />
                  Custom Logic
                </span>
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
            </div>
            <div className="w-1/4">
              <button
                className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-md font-medium"
                onClick={() =>
                  navigate("/dashboard/admintools/aiconfig/configure")
                }
              >
                Configure
              </button>
            </div>
          </div>
        </div>

        {/* Export Formatter Module Row */}
        <div className="border rounded-md mb-2 hover:bg-gray-50 transition-colors">
          <div className="flex items-center p-3">
            <div className="w-1/4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Settings className="w-4 h-4" />
              </div>
              <div>
                <div className="font-medium">Export Formatter</div>
                <div className="text-xs text-gray-500">
                  Format & delivery prep
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="px-3 py-2 border rounded-md flex items-center justify-between cursor-pointer bg-white">
                <span>Gemini</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  <Check className="w-3 h-3 mr-1" />
                  Model Active
                </span>
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
            </div>
            <div className="w-1/4">
              <button
                className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-md font-medium"
                onClick={() =>
                  navigate("/dashboard/admintools/aiconfig/configure")
                }
              >
                Configure
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-4 flex items-center gap-1">
          <Info className="w-4 h-4" />
          Hover over model names to see latency and cost metrics
        </div>
      </section>

      {/* Panel for when "Configure" is clicked */}
      <section className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Edit className="w-3 h-3" />
            </div>
            Model Behavior Settings: Draft Editor
          </h2>
          <button className="text-sm text-gray-500">Cancel</button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Temperature (Creativity)
            </label>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Predictable</span>
                <span className="text-xs text-gray-500">Creative</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.1"
                defaultValue="0.7"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.1</span>
                <span>0.7</span>
                <span>1.0</span>
              </div>
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Tokens
            </label>
            <input
              type="number"
              defaultValue="4000"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model Version Pinning
            </label>
            <div className="flex items-center mb-4">
              <div className="px-3 py-2 border rounded-md flex items-center justify-between cursor-pointer bg-white w-full">
                <span>GPT-4-turbo</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="use-brand-memory"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                defaultChecked
              />
              <label
                htmlFor="use-brand-memory"
                className="text-sm text-gray-700"
              >
                Use Brand Memory
              </label>
              <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prompt Template (System Message)
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md h-48 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 font-mono text-sm"
              defaultValue="You are a confident B2B writer helping to create professional content. 
Your writing should be concise, formal, and align with our brand voice.
Always include a clear call-to-action.
Avoid using hyperbole or making claims that cannot be backed by data."
            ></textarea>

            <div className="border rounded-md bg-white p-3 mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Test Prompt
              </h3>
              <textarea
                className="w-full px-3 py-2 border rounded-md h-16 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 text-sm"
                placeholder="Enter a test prompt to see how your model settings work"
              ></textarea>
              <button className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-md font-medium">
                Test Output
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 text-sm bg-gray-100 rounded-md text-gray-700">
            Cancel
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md">
            Save Settings
          </button>
        </div>
      </section>

      {/* Fallback & Escalation Logic Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Fallback & Escalation Logic
        </h2>
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fallback Model
              </label>
              <div className="px-3 py-2 border rounded-md flex items-center justify-between cursor-pointer bg-white mb-4">
                <span>Claude 2</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Failure Triggers
                </label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="timeout"
                      className="w-4 h-4"
                      defaultChecked
                    />
                    <label htmlFor="timeout" className="text-sm text-gray-700">
                      API Timeout (3s)
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="token-limit"
                      className="w-4 h-4"
                      defaultChecked
                    />
                    <label
                      htmlFor="token-limit"
                      className="text-sm text-gray-700"
                    >
                      Token Limit Exceeded
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="hallucination"
                      className="w-4 h-4"
                      defaultChecked
                    />
                    <label
                      htmlFor="hallucination"
                      className="text-sm text-gray-700"
                    >
                      Hallucination Threshold (40%)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Escalation Routing
              </label>
              <div className="bg-white p-3 border rounded-md mb-4">
                <div className="text-sm text-gray-700 mb-2">
                  If Validator Confidence &lt; 60 → Escalate to Human QA
                </div>
                <button className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-md font-medium">
                  Edit Logic Flow
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  id="auto-retry"
                  className="w-4 h-4 text-blue-600"
                  defaultChecked
                />
                <label htmlFor="auto-retry" className="text-sm text-gray-700">
                  Auto-retry once with lower temperature
                </label>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <Info className="w-4 h-4" />
                  Alert Preview: "This output was generated using fallback model
                  due to latency timeout."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Summary & Cost Estimator */}
      <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Usage Summary & Cost Estimator
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-md border">
            <div className="text-sm text-gray-500 mb-1">
              Tokens Used (This Month)
            </div>
            <div className="text-xl font-semibold">1.42M tokens</div>
            <div className="text-xs text-gray-500 mt-1">
              +12% from last month
            </div>
          </div>

          <div className="bg-white p-4 rounded-md border">
            <div className="text-sm text-gray-500 mb-1">Estimated Cost</div>
            <div className="text-xl font-semibold">$97.40</div>
            <div className="text-xs text-gray-500 mt-1">
              GPT-4: $82.10, Claude: $15.30
            </div>
          </div>

          <div className="bg-white p-4 rounded-md border">
            <div className="text-sm text-gray-500 mb-1">Top Used Module</div>
            <div className="text-xl font-semibold">Draft Editor</div>
            <div className="text-xs text-gray-500 mt-1">62% of all tokens</div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Model Usage:</span> GPT-4 (62%),
            Claude (25%), Mistral (13%)
          </div>
          <button className="px-3 py-1.5 text-sm bg-gray-200 text-gray-700 rounded-md font-medium">
            View Full Analytics
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-3">
          <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-md flex items-center gap-1">
            <Settings className="w-4 h-4" />
            Cost-Optimized Mode
          </button>
          <button className="px-4 py-2 text-sm border border-purple-600 text-purple-600 rounded-md flex items-center gap-1">
            <Settings className="w-4 h-4" />
            Creative Mode
          </button>
          <button className="px-4 py-2 text-sm border border-gray-600 text-gray-600 rounded-md flex items-center gap-1">
            <Settings className="w-4 h-4" />
            Strict Compliance
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIConfig;
