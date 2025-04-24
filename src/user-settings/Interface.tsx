import { useState } from "react";
import {
  Settings,
  Save,
  Eye,
  Layout,
  Layers,
  Monitor,
  Moon,
  Sun,
  Type,
  Grid,
  CheckSquare,
  Command,
  Clock,
} from "lucide-react";

const InterfacePreferencesWireframe = () => {
  const [theme, setTheme] = useState("light");
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      {/* Main Content */}
      <div className="flex gap-6">
        {/* Left Column - Settings */}
        <div className="flex-1">
          {/* Basic Interface Preferences */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <Monitor size={20} className="mr-2 text-blue-500" />
              Display Settings
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Landing Zone
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                  <option>Create Zone</option>
                  <option>Memory Zone</option>
                  <option>Publish Zone</option>
                  <option>Dashboard</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  This is the first screen you'll see after logging in
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme Mode
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <div
                    className={`border rounded-md p-3 flex flex-col items-center ${
                      theme === "light"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                    onClick={() => setTheme("light")}
                  >
                    <Sun size={24} className="mb-2 text-orange-400" />
                    <span className="text-sm">Light</span>
                  </div>
                  <div
                    className={`border rounded-md p-3 flex flex-col items-center ${
                      theme === "dark"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                    onClick={() => setTheme("dark")}
                  >
                    <Moon size={24} className="mb-2 text-indigo-600" />
                    <span className="text-sm">Dark</span>
                  </div>
                  <div
                    className={`border rounded-md p-3 flex flex-col items-center ${
                      theme === "auto"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                    onClick={() => setTheme("auto")}
                  >
                    <div className="relative mb-2">
                      <Sun size={20} className="text-orange-400" />
                      <Moon
                        size={16}
                        className="text-indigo-600 absolute -bottom-1 -right-1"
                      />
                    </div>
                    <span className="text-sm">Auto (System)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Layout Preferences */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <Layout size={20} className="mr-2 text-blue-500" />
              Text & Layout
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Size
                </label>
                <div className="flex items-center space-x-2">
                  <Type size={14} className="text-gray-400" />
                  <input
                    type="range"
                    min="1"
                    max="3"
                    step="1"
                    defaultValue="2"
                    className="w-full"
                  />
                  <Type size={20} className="text-gray-700" />
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Small</span>
                  <span>Medium</span>
                  <span>Large</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Accessibility enhancement
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Layout Density
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border rounded-md p-3 flex items-center border-blue-500 bg-blue-50">
                    <Grid size={20} className="mr-2 text-blue-500" />
                    <div>
                      <span className="text-sm font-medium">Compact</span>
                      <p className="text-xs text-gray-500">
                        Maximum content per screen
                      </p>
                    </div>
                  </div>
                  <div className="border rounded-md p-3 flex items-center border-gray-200">
                    <Layers size={20} className="mr-2 text-gray-500" />
                    <div>
                      <span className="text-sm font-medium">Comfortable</span>
                      <p className="text-xs text-gray-500">
                        More spacing between elements
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-start mb-4">
                  <div className="flex h-5 items-center">
                    <input
                      id="sidebar-collapse"
                      name="sidebar-collapse"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="sidebar-collapse"
                      className="font-medium text-gray-700"
                    >
                      Collapse Sidebar by Default
                    </label>
                    <p className="text-gray-500">
                      Maximize your workspace when you first login
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="flex h-5 items-center">
                    <input
                      id="show-tooltips"
                      name="show-tooltips"
                      type="checkbox"
                      defaultChecked={true}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="show-tooltips"
                      className="font-medium text-gray-700"
                    >
                      Show Enhanced Tooltips
                    </label>
                    <p className="text-gray-500">
                      Display helpful tips when hovering over elements
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="animations"
                      name="animations"
                      type="checkbox"
                      defaultChecked={true}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="animations"
                      className="font-medium text-gray-700"
                    >
                      Enable Animations
                    </label>
                    <p className="text-gray-500">
                      Smooth transitions between screens and actions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shortcuts & Advanced */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <Command size={20} className="mr-2 text-blue-500" />
              Shortcuts & Advanced Settings
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Keyboard Shortcuts
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="flex justify-between border rounded p-2 text-sm">
                  <span className="text-gray-700">Open Command Menu</span>
                  <div className="flex gap-1">
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
                      Cmd
                    </kbd>
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
                      K
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between border rounded p-2 text-sm">
                  <span className="text-gray-700">Toggle Memory Drawer</span>
                  <div className="flex gap-1">
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
                      Cmd
                    </kbd>
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
                      M
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between border rounded p-2 text-sm">
                  <span className="text-gray-700">Save Current Draft</span>
                  <div className="flex gap-1">
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
                      Cmd
                    </kbd>
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
                      S
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between border rounded p-2 text-sm">
                  <span className="text-gray-700">Toggle Sidebar</span>
                  <div className="flex gap-1">
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
                      Cmd
                    </kbd>
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
                      B
                    </kbd>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="text-blue-600 text-sm flex items-center">
                  <Settings size={14} className="mr-1" />
                  <span>Customize Shortcuts</span>
                </button>
              </div>

              <div className="mt-6 border-t pt-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Auto-save Interval
                  </label>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-gray-400" />
                    <select className="px-2 py-1 border border-gray-300 rounded-md">
                      <option>30 seconds</option>
                      <option>1 minute</option>
                      <option>5 minutes</option>
                      <option>Never</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cursor Behavior
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="cursor"
                        className="mr-2"
                        defaultChecked
                      />
                      <span className="text-sm">Standard editing behavior</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="cursor" className="mr-2" />
                      <span className="text-sm">
                        Retain cursor position between sections
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="w-80">
          <div className="bg-white rounded-lg shadow p-6 sticky top-6">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <Eye size={20} className="mr-2 text-blue-500" />
              Preview
            </h2>

            <div className="mb-4">
              <button
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md mb-3 flex items-center justify-center"
                onClick={() => setPreviewMode(!previewMode)}
              >
                <Eye size={16} className="mr-2" />
                {previewMode ? "Hide Preview" : "Show Live Preview"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                See how your settings will look
              </p>
            </div>

            {previewMode && (
              <div className="border rounded-md p-3 mb-4">
                <div
                  className={`text-center mb-2 ${
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
                  }`}
                >
                  <div className="h-6 w-full bg-gray-200 mb-2"></div>
                  <div className="flex justify-between px-2">
                    <div className="h-32 w-1/4 bg-gray-300"></div>
                    <div className="h-32 w-3/4 ml-2 bg-gray-100"></div>
                  </div>
                  <p className="text-xs mt-1">
                    Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </p>
                </div>
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Your Changes
              </h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li className="flex items-center text-green-600">
                  <CheckSquare size={14} className="mr-1" />
                  <span>
                    Theme set to:{" "}
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckSquare size={14} className="mr-1" />
                  <span>Font size: Medium</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare size={14} className="mr-1" />
                  <span>Layout: Compact</span>
                </li>
              </ul>
            </div>

            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md flex items-center justify-center">
              <Save size={16} className="mr-2" />
              Save Preferences
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Preview (optional toggle) */}
      <div className="bg-white rounded-lg shadow p-3 mt-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-3">
            <Smartphone size={20} className={undefined} />
          </div>
          <div>
            <h3 className="font-medium">Mobile App Preview</h3>
            <p className="text-sm text-gray-500">
              See how your preferences will look in the mobile app
            </p>
          </div>
        </div>
        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
          Preview
        </button>
      </div>
    </div>
  );
};

// Smartphone icon component
const Smartphone: React.FC<{ size: number; className?: string }> = ({
  size,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  );
};

export default InterfacePreferencesWireframe;
