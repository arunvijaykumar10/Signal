import {
  AlertTriangle,
  ChevronDown,
  HelpCircle,
  Info,
  PlayCircle,
  Save,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AiConfigure = () => {
  const [activeTab, setActiveTab] = useState("general");
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto border border-gray-200">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Settings className="w-4 h-4" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              Model Behavior Settings: Draft Editor
            </h1>
          </div>
          <button
            className="text-sm text-gray-500 hover:text-gray-700"
            onClick={() => navigate("/dashboard/admintools/aiconfig")}
          >
            × Close
          </button>
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          Configure how the AI model behaves when generating content in the
          Draft Editor module.
        </p>
      </header>

      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-6">
          <button
            className={`px-1 py-3 text-sm font-medium border-b-2 ${
              activeTab === "general"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("general")}
          >
            General Settings
          </button>
          <button
            className={`px-1 py-3 text-sm font-medium border-b-2 ${
              activeTab === "advanced"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("advanced")}
          >
            Advanced Options
          </button>
          <button
            className={`px-1 py-3 text-sm font-medium border-b-2 ${
              activeTab === "testing"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("testing")}
          >
            Testing & Preview
          </button>
        </nav>
      </div>

      {activeTab === "general" && (
        <div className="grid grid-cols-2 gap-8">
          <section>
            <div className="mb-5">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  AI Model
                </label>
                <span className="text-xs text-blue-600 cursor-pointer">
                  View model details
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative flex-grow">
                  <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="gpt4">GPT-4</option>
                    <option value="claude2">Claude 2</option>
                    <option value="mistral">Mistral</option>
                    <option value="gemini">Gemini</option>
                    <option value="custom">Custom via OpenRouter</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs whitespace-nowrap">
                  High precision
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Latency: ~2.1s</span>
                <span>Cost: $0.03/1K tokens</span>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Temperature (Creativity)
                </label>
                <div className="text-sm font-medium text-gray-900">0.7</div>
              </div>
              <div className="mb-1">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Predictable (0.1)</span>
                  <span>Creative (1.0)</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.1"
                  defaultValue="0.7"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Lower values produce more consistent, deterministic outputs
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Max Tokens
                </label>
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
              <input
                type="number"
                defaultValue="4000"
                min="1"
                max="8192"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-xs text-gray-500 mt-1">
                Limits output length. 1,000 tokens ≈ 750 words.
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Model Version Pinning
                </label>
                <div className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">
                  Recommended
                </div>
              </div>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="gpt4-turbo">GPT-4-turbo</option>
                  <option value="gpt4-standard">GPT-4-standard</option>
                  <option value="gpt4-vision">GPT-4-vision</option>
                  <option value="latest">
                    Always use latest (not recommended)
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-yellow-600" />
                Lock to specific version for consistent output quality
              </div>
            </div>
          </section>

          <section>
            <div className="mb-5">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Prompt Template (System Message)
                </label>
                <div className="text-xs text-blue-600 cursor-pointer flex items-center gap-1">
                  <Save className="w-3 h-3" />
                  Save as template
                </div>
              </div>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-60 font-mono text-sm"
                defaultValue={`You are a professional content creator for a B2B SaaS company.

Your writing should follow these guidelines:
- Use a formal but approachable tone
- Focus on benefits, not features
- Include specific, actionable advice
- Maintain our brand voice: confident, helpful, expert
- Avoid hyperbole or unverifiable claims
- Always conclude with a clear call-to-action

User will provide a topic or headline, and you'll generate draft content.`}
              ></textarea>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Sets the AI's "persona" context for all outputs in this module
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="use-brand-memory"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  defaultChecked
                />
                <label
                  htmlFor="use-brand-memory"
                  className="ml-2 text-sm text-gray-700"
                >
                  Use Brand Memory
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="auto-correct"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  defaultChecked
                />
                <label
                  htmlFor="auto-correct"
                  className="ml-2 text-sm text-gray-700"
                >
                  Auto-correct formatting
                </label>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === "advanced" && (
        <div className="grid grid-cols-2 gap-8">
          <section>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Top P (Nucleus Sampling)
              </label>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.1"
                defaultValue="0.9"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Focused (0.1)</span>
                <span>0.9</span>
                <span>Diverse (1.0)</span>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequency Penalty
              </label>
              <input
                type="range"
                min="0"
                max="2.0"
                step="0.1"
                defaultValue="0.5"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Repetitive (0)</span>
                <span>0.5</span>
                <span>Varied (2.0)</span>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Presence Penalty
              </label>
              <input
                type="range"
                min="0"
                max="2.0"
                step="0.1"
                defaultValue="0.3"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Focused (0)</span>
                <span>0.3</span>
                <span>Exploratory (2.0)</span>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Response Format
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="text">Freeform text (default)</option>
                  <option value="json">JSON</option>
                  <option value="markdown">Markdown</option>
                  <option value="html">HTML</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Enforces specific output format for structured data needs
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Stop Sequences
                </label>
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-20 font-mono text-sm"
                placeholder="Enter sequences to stop generation (one per line)"
              ></textarea>
              <div className="text-xs text-gray-500 mt-1">
                Model will stop generating when it produces these sequences
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Advanced Configuration JSON
              </h3>
              <div className="text-xs text-gray-700 bg-white p-2 rounded border border-gray-200 font-mono h-24 overflow-y-auto">
                {`{
  "temperature": 0.7,
  "max_tokens": 4000,
  "top_p": 0.9,
  "frequency_penalty": 0.5,
  "presence_penalty": 0.3,
  "stop": [],
  "model_version": "gpt-4-turbo",
  "response_format": { "type": "text" }
}`}
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === "testing" && (
        <div>
          <section className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Test Your Configuration
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-24 text-sm"
                  placeholder="Enter a test prompt to see how your model behaves with current settings"
                  defaultValue="Write a brief introduction paragraph for our new cloud security platform that helps enterprises protect sensitive data."
                ></textarea>
                <div className="flex mt-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium flex items-center gap-1">
                    <PlayCircle className="w-4 h-4" />
                    Run Test
                  </button>
                  <div className="ml-3 flex items-center gap-1 text-xs text-gray-500">
                    <Info className="w-3 h-3" />
                    Test runs won't count toward token usage
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-md p-3 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-700">
                    Output Preview
                  </div>
                  <div className="text-xs text-gray-500">
                    Token estimate: ~120
                  </div>
                </div>
                <div className="text-sm text-gray-800 bg-white p-2 rounded border border-gray-200 h-20 overflow-y-auto">
                  Output will appear here after running the test...
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Compare Models
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-md p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">GPT-4</div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    Current
                  </div>
                </div>
                <div className="text-xs text-gray-700 h-16 overflow-y-auto">
                  Introducing SecureCloud — our enterprise-grade cloud security
                  platform designed to safeguard your most sensitive data with
                  military-grade encryption and real-time threat monitoring.
                  Gain complete visibility and control over your cloud
                  environment with our intuitive dashboard.
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>Latency: 2.1s</span>
                  <span>Cost: $0.048</span>
                </div>
              </div>
              <div className="border rounded-md p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">Claude 2</div>
                  <div className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    Alternative
                  </div>
                </div>
                <div className="text-xs text-gray-700 h-16 overflow-y-auto">
                  Meet SecureCloud, the comprehensive security solution that
                  empowers enterprises to protect their valuable data across
                  cloud environments. Our platform offers end-to-end encryption,
                  continuous monitoring, and intelligent threat detection to
                  keep your most sensitive information safe from evolving
                  threats.
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>Latency: 2.8s</span>
                  <span>Cost: $0.032</span>
                </div>
              </div>
              <div className="border rounded-md p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">Mistral</div>
                  <div className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    Alternative
                  </div>
                </div>
                <div className="text-xs text-gray-700 h-16 overflow-y-auto">
                  SecureCloud delivers robust protection for your enterprise's
                  sensitive data across all cloud environments. Our platform
                  combines advanced encryption, continuous monitoring, and
                  AI-driven threat detection to ensure your information remains
                  secure, compliant, and accessible only to authorized users.
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>Latency: 1.9s</span>
                  <span>Cost: $0.016</span>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Performance Comparison
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-50 p-3 rounded-md border">
                <div className="text-xs text-gray-500 mb-1">Quality Score</div>
                <div className="flex items-end gap-1">
                  <div className="text-lg font-semibold">92</div>
                  <div className="text-xs text-green-600 flex items-center">
                    <span>↑ 4</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-green-600 h-1.5 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md border">
                <div className="text-xs text-gray-500 mb-1">Latency</div>
                <div className="flex items-end gap-1">
                  <div className="text-lg font-semibold">2.1s</div>
                  <div className="text-xs text-yellow-600 flex items-center">
                    <span>↑ 0.3s</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-yellow-500 h-1.5 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md border">
                <div className="text-xs text-gray-500 mb-1">Token Cost</div>
                <div className="flex items-end gap-1">
                  <div className="text-lg font-semibold">$0.03</div>
                  <div className="text-xs text-red-600 flex items-center">
                    <span>↑ $0.01</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md border">
                <div className="text-xs text-gray-500 mb-1">
                  Brand Alignment
                </div>
                <div className="flex items-end gap-1">
                  <div className="text-lg font-semibold">89%</div>
                  <div className="text-xs text-green-600 flex items-center">
                    <span>↑ 7%</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-green-500 h-1.5 rounded-full"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

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

export default AiConfigure;
