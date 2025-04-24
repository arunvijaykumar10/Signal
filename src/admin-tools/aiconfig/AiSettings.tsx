import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Edit,
  HelpCircle,
  Info,
  Plus,
  Save,
  Settings,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AiSettings = () => {
  const [showLogicBuilder, setShowLogicBuilder] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto border border-gray-200">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              Fallback & Escalation Logic
            </h1>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded text-gray-600 flex items-center gap-1">
              <Settings className="w-4 h-4" />
              Global Defaults
            </button>
            <button className="px-3 py-1.5 text-sm bg-blue-50 border border-blue-200 rounded text-blue-600 flex items-center gap-1">
              <Info className="w-4 h-4" />
              View Logs
            </button>
          </div>
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          Configure how the system should respond when AI models fail or produce
          potentially risky content.
        </p>
      </header>

      <section className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Active Module: Draft Editor
          </h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Also apply to:</span>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-1 pl-3 pr-8 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="none">No other modules</option>
                <option value="all">All modules</option>
                <option value="assistant">Voice Assistant</option>
                <option value="validator">Signal Validator</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Fallback Settings */}
          <div>
            <div className="mb-5">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Primary Model
                </label>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <div className="px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Settings className="w-3 h-3" />
                  </div>
                  <span>GPT-4</span>
                </div>
                <div className="text-xs text-gray-500">
                  Configured in Model Settings
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Fallback Model
                </label>
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="claude2">Claude 2</option>
                  <option value="gpt35">GPT-3.5-Turbo</option>
                  <option value="mistral">Mistral</option>
                  <option value="none">No fallback (fail gracefully)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Used when primary model fails or exceeds thresholds
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Failure Triggers
              </label>
              <div className="space-y-2 bg-white p-3 border border-gray-200 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="timeout"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <label htmlFor="timeout" className="text-sm text-gray-700">
                      API Timeout
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">Threshold:</span>
                    <input
                      type="text"
                      className="w-12 px-2 py-1 text-xs border border-gray-300 rounded"
                      defaultValue="3s"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="token-limit"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <label
                      htmlFor="token-limit"
                      className="text-sm text-gray-700"
                    >
                      Token Limit Exceeded
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">Limit:</span>
                    <input
                      type="text"
                      className="w-16 px-2 py-1 text-xs border border-gray-300 rounded"
                      defaultValue="8,192"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="hallucination"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <label
                      htmlFor="hallucination"
                      className="text-sm text-gray-700"
                    >
                      Hallucination Threshold
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">Confidence:</span>
                    <div className="relative">
                      <select className="appearance-none bg-white border border-gray-300 rounded text-xs py-1 pl-2 pr-6 w-24">
                        <option value="low">Low (&lt;40%)</option>
                        <option value="medium">Medium (&lt;60%)</option>
                        <option value="high">High (&lt;80%)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="content-policy"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <label
                      htmlFor="content-policy"
                      className="text-sm text-gray-700"
                    >
                      Content Policy Violation
                    </label>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">
                      Always enabled
                    </span>
                  </div>
                </div>

                <button className="w-full mt-2 px-3 py-1.5 text-xs bg-gray-100 border border-gray-200 rounded text-gray-700 flex items-center justify-center gap-1">
                  <Plus className="w-3 h-3" />
                  Add Custom Trigger
                </button>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Retry Behavior
              </label>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="retry-none"
                    name="retry-behavior"
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="retry-none" className="text-sm text-gray-700">
                    No retry (go straight to fallback)
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="retry-once"
                    name="retry-behavior"
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor="retry-once" className="text-sm text-gray-700">
                    Retry once with lower temperature
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="retry-custom"
                    name="retry-behavior"
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="retry-custom"
                    className="text-sm text-gray-700"
                  >
                    Custom retry logic
                  </label>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Up to 2 total attempts before fallback model is used
              </div>
            </div>
          </div>

          {/* Right Column - Escalation Settings */}
          <div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Escalation Routing
                </label>
                <button
                  className="text-xs text-blue-600 flex items-center gap-1"
                  onClick={() => setShowLogicBuilder(!showLogicBuilder)}
                >
                  <Edit className="w-3 h-3" />
                  Edit Logic Flow
                </button>
              </div>

              {!showLogicBuilder ? (
                <div className="bg-white border border-gray-200 rounded-md p-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 flex-shrink-0">
                        1
                      </div>
                      <div className="p-2 border border-gray-200 rounded bg-gray-50 flex-grow">
                        If Validator Confidence &lt; 60%
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                      <div className="p-2 border border-blue-200 rounded bg-blue-50 text-blue-700">
                        Escalate to Human QA
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 flex-shrink-0">
                        2
                      </div>
                      <div className="p-2 border border-gray-200 rounded bg-gray-50 flex-grow">
                        If content contains regulated terms
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                      <div className="p-2 border border-orange-200 rounded bg-orange-50 text-orange-700">
                        Route to Legal Review
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 flex-shrink-0">
                        3
                      </div>
                      <div className="p-2 border border-gray-200 rounded bg-gray-50 flex-grow">
                        If Tone Score &lt; 70
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                      <div className="p-2 border border-purple-200 rounded bg-purple-50 text-purple-700">
                        Flag for Brand Review
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-3 px-3 py-1.5 text-xs bg-gray-100 border border-gray-200 rounded text-gray-700 flex items-center justify-center gap-1">
                    <Plus className="w-3 h-3" />
                    Add Escalation Rule
                  </button>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-md bg-white">
                  <div className="p-3 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700">
                      Logic Flow Builder
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex flex-col">
                        <label className="text-xs font-medium text-gray-700 mb-1">
                          Rule #1
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="text-xs text-gray-700">IF</div>
                          <div className="relative flex-grow">
                            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                              <option>Validator Confidence</option>
                              <option>Tone Score</option>
                              <option>Content contains</option>
                              <option>Model used</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="relative w-24">
                            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                              <option>&lt;</option>
                              <option>&gt;</option>
                              <option>=</option>
                              <option>≠</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                          <input
                            type="text"
                            className="w-20 px-3 py-1.5 text-sm border border-gray-300 rounded-md"
                            defaultValue="60%"
                          />
                          <div className="text-xs text-gray-700">THEN</div>
                          <div className="relative flex-grow">
                            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                              <option>Escalate to Human QA</option>
                              <option>Route to Legal Review</option>
                              <option>Flag for Brand Review</option>
                              <option>Auto-correct</option>
                              <option>Reject</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Additional rules would be repeated here */}

                      <button className="w-full px-3 py-1.5 text-xs bg-gray-100 border border-gray-200 rounded text-gray-700 flex items-center justify-center gap-1">
                        <Plus className="w-3 h-3" />
                        Add Rule
                      </button>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        className="px-3 py-1.5 text-xs bg-white border border-gray-300 rounded text-gray-700"
                        onClick={() => setShowLogicBuilder(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-3 py-1.5 text-xs bg-blue-600 rounded text-white"
                        onClick={() => setShowLogicBuilder(false)}
                      >
                        Apply Rules
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Human review workflows are configured in Team Settings
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Notification
              </label>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="notify-user"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="notify-user"
                    className="text-sm text-gray-700"
                  >
                    Show fallback notification to user
                  </label>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Preview:
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-2 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-yellow-800 font-medium">
                        Using fallback model
                      </p>
                      <p className="text-xs text-yellow-700">
                        This output was generated using the fallback model due
                        to a timeout with the primary model.
                      </p>
                    </div>
                  </div>

                  <button className="mt-2 text-xs text-blue-600 flex items-center gap-1">
                    <Edit className="w-3 h-3" />
                    Customize Message
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admin Alerting
              </label>
              <div className="bg-white border border-gray-200 rounded-md p-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="alert-slack"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <label
                      htmlFor="alert-slack"
                      className="text-sm text-gray-700"
                    >
                      Post to #ai-alerts Slack channel
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="alert-email"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <label
                      htmlFor="alert-email"
                      className="text-sm text-gray-700"
                    >
                      Email AI admin team
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="alert-dashboard"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <label
                      htmlFor="alert-dashboard"
                      className="text-sm text-gray-700"
                    >
                      Add to System Alerts dashboard
                    </label>
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <div className="text-xs text-gray-500">
                      Minimum severity level:
                    </div>
                    <div className="relative w-32">
                      <select className="w-full appearance-none bg-white border border-gray-300 rounded text-xs py-1 pl-2 pr-6">
                        <option value="low">Low (All issues)</option>
                        <option value="medium">Medium</option>
                        <option value="high">High (Critical only)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Testing & Monitoring
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Test Fallback Logic
            </h3>
            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="test-timeout"
                  name="test-scenario"
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  defaultChecked
                />
                <label htmlFor="test-timeout" className="text-sm text-gray-700">
                  Simulate API Timeout
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="test-hallucination"
                  name="test-scenario"
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="test-hallucination"
                  className="text-sm text-gray-700"
                >
                  Simulate Hallucination Detection
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="test-token-limit"
                  name="test-scenario"
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="test-token-limit"
                  className="text-sm text-gray-700"
                >
                  Simulate Token Limit Exceeded
                </label>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
              Run Test
            </button>

            <div className="mt-4 p-3 bg-gray-100 border border-gray-200 rounded-md text-xs text-gray-500">
              Test results will appear here...
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Recent Fallbacks
              </h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span>API Timeout (3.8s)</span>
                  </div>
                  <span className="text-xs text-gray-500">3 mins ago</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <span>Hallucination detected (42%)</span>
                  </div>
                  <span className="text-xs text-gray-500">25 mins ago</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span>API Timeout (3.2s)</span>
                  </div>
                  <span className="text-xs text-gray-500">1 hour ago</span>
                </div>
              </div>

              <div className="mt-2 text-xs text-right">
                <a href="#" className="text-blue-600">
                  View all (12 events)
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Fallback Performance
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-2 rounded border border-gray-200">
                  <div className="text-xs text-gray-500">Success Rate</div>
                  <div className="text-lg font-medium text-gray-800">94%</div>
                  <div className="flex items-center text-xs text-green-600">
                    <span>↑ 3%</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-2 rounded border border-gray-200">
                  <div className="text-xs text-gray-500">
                    Avg. Fallback Time
                  </div>
                  <div className="text-lg font-medium text-gray-800">1.2s</div>
                  <div className="flex items-center text-xs text-green-600">
                    <span>↓ 0.3s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          System-Wide Fallback Statistics
        </h2>

        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">
                Fallbacks (30 days)
              </div>
              <div className="text-xl font-bold text-gray-800">157</div>
              <div className="flex items-center text-xs text-red-600">
                <span>↑ 12%</span>
                <span className="text-gray-500 ml-1">vs. last month</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Escalations</div>
              <div className="text-xl font-bold text-gray-800">36</div>
              <div className="flex items-center text-xs text-green-600">
                <span>↓ 8%</span>
                <span className="text-gray-500 ml-1">vs. last month</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">
                Avg. Recovery Time
              </div>
              <div className="text-xl font-bold text-gray-800">4.2s</div>
              <div className="flex items-center text-xs text-green-600">
                <span>↓ 0.6s</span>
                <span className="text-gray-500 ml-1">vs. last month</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Service Impact</div>
              <div className="text-xl font-bold text-green-600">Low</div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <span>99.7% availability</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700">
                  Fallback Triggers by Type
                </h3>
                <div className="text-xs text-gray-500">Last 30 days</div>
              </div>

              <div className="h-40 bg-gray-50 border border-gray-200 rounded p-2">
                {/* Placeholder for chart */}
                <div className="h-full flex items-center justify-center text-sm text-gray-400">
                  [Bar chart showing fallback distribution by trigger type]
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700">
                  Top Resolution Paths
                </h3>
                <div className="text-xs text-gray-500">% of incidents</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span>Fallback model success</span>
                  </div>
                  <div className="text-sm font-medium">68%</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span>Auto-correction</span>
                  </div>
                  <div className="text-sm font-medium">14%</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                    <span>Human review</span>
                  </div>
                  <div className="text-sm font-medium">12%</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <span>Failed completely</span>
                  </div>
                  <div className="text-sm font-medium">6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500 flex items-center gap-1 justify-end">
          <Info className="w-3 h-3" />
          <span>
            View comprehensive analytics in the{" "}
            <a href="#" className="text-blue-600">
              Usage Dashboard
            </a>
          </span>
        </div>
      </section>

      <section className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Advanced Settings
          </h2>
          <button className="text-xs text-gray-500 flex items-center gap-1">
            <Settings className="w-3 h-3" />
            Show Advanced Options
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                id="auto-improve"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="auto-improve" className="text-sm text-gray-700">
                Auto-improve fallback strategies based on performance
              </label>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                id="learn-patterns"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                defaultChecked
              />
              <label htmlFor="learn-patterns" className="text-sm text-gray-700">
                Learn from failure patterns to improve primary model
              </label>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                id="rolling-update"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="rolling-update" className="text-sm text-gray-700">
                Enable rolling model updates (experimental)
              </label>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">
              Configuration Export/Import
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-xs bg-white border border-gray-300 rounded text-gray-700">
                Export Settings
              </button>
              <button className="px-3 py-1.5 text-xs bg-white border border-gray-300 rounded text-gray-700">
                Import Settings
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Use for backup or cross-module configuration sync
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200">
        <button
          className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          onClick={() => navigate("/dashboard/admintools/aiconfig")}
        >
          Cancel
        </button>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1">
          <Save className="w-4 h-4" />
          Save Configuration
        </button>
      </div>
    </div>
  );
};

export default AiSettings;
