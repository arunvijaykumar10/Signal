import { ChevronDown, Save, Settings, Upload, User } from "lucide-react";

const ProfileWireframe = () => {
  return (
    <div>
      {/* Profile Overview Panel */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-medium">Profile Overview</h2>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm flex items-center">
            <Settings size={16} className="mr-1" />
            Edit Info
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mb-3 flex items-center justify-center text-gray-500 relative">
              <User size={48} />
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
                <Upload size={16} />
              </button>
            </div>
            <span className="text-sm text-gray-500">Crop tool available</span>
          </div>

          {/* Form Fields */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value="Sarah Johnson"
                  disabled
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-200 rounded-md bg-gray-50"
                  value="sarah.johnson@company.com"
                  disabled
                  readOnly
                />
                <span className="text-xs text-gray-500">
                  Assigned at invite
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Copywriter
                  </span>
                  <div className="relative ml-3">
                    <button className="text-xs text-gray-500 flex items-center">
                      Change <ChevronDown size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Timezone
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                  <option>(UTC-08:00) Pacific Time (US & Canada)</option>
                  <option>(UTC-05:00) Eastern Time (US & Canada)</option>
                  <option>(UTC+00:00) UTC</option>
                  <option>(UTC+01:00) Central European Time</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Language
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                  <option>English (default)</option>
                  <option>French</option>
                  <option>Spanish</option>
                  <option>German</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mr-3 flex items-center">
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interface Preferences */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">Interface Preferences</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Landing Zone
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
              <option>Create Zone</option>
              <option>Memory Zone</option>
              <option>Publish Zone</option>
            </select>
            <span className="text-xs text-gray-500">
              First page you'll see after login
            </span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme Mode
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="theme" checked className="mr-2" />
                <span>Light</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="theme" className="mr-2" />
                <span>Dark</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="theme" className="mr-2" />
                <span>Auto (system-based)</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Font Size
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="font-size" className="mr-2" />
                <span>Small</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="font-size" checked className="mr-2" />
                <span>Medium</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="font-size" className="mr-2" />
                <span>Large</span>
              </label>
            </div>
            <span className="text-xs text-gray-500">
              Accessibility enhancement
            </span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Layout Density
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="layout" checked className="mr-2" />
                <span>Compact</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="layout" className="mr-2" />
                <span>Comfortable</span>
              </label>
            </div>
            <span className="text-xs text-gray-500">
              Affects spacing in tables and cards
            </span>
          </div>

          <div className="col-span-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Collapse Sidebar by Default
              </span>
            </label>
            <span className="text-xs text-gray-500 block ml-5">
              Personal workspace preference
            </span>
          </div>
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Preview changes immediately
            </span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
              <Save size={16} className="mr-2" />
              Save Preferences
            </button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">Notification Settings</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notification Channels
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" checked className="mr-2" />
                <span>Email</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked className="mr-2" />
                <span>In-App</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Slack</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frequency
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="frequency" checked className="mr-2" />
                <span>Real-time</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="frequency" className="mr-2" />
                <span>Daily Digest</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="frequency" className="mr-2" />
                <span>Weekly Summary</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Types
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <label className="flex items-center">
                <input type="checkbox" checked className="mr-2" />
                <span>Approvals</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked className="mr-2" />
                <span>Comments</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked className="mr-2" />
                <span>Drift Alerts</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Integration Errors</span>
              </label>
            </div>
          </div>

          <div>
            <label className="flex items-center">
              <input type="checkbox" checked className="mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Sound / Toast Alerts
              </span>
            </label>
            <span className="text-xs text-gray-500 block ml-5">
              For in-app desktop popups
            </span>
          </div>

          <div className="flex space-x-3">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              Preview Notification
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              Mute for 24 hours
            </button>
          </div>
        </div>
      </div>

      {/* Connected Accounts & Integrations */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">
          Connected Accounts & Integrations
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 border rounded-md">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center text-purple-600 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 15a3 3 0 100-6 3 3 0 000 6zm0 3a6 6 0 100-12 6 6 0 000 12zm12-3a3 3 0 100-6 3 3 0 000 6zm0 3a6 6 0 100-12 6 6 0 000 12z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Slack Account</h3>
                <p className="text-sm text-gray-500">
                  Status: Connected as @sarah.johnson
                </p>
              </div>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
              Disconnect
            </button>
          </div>

          <div className="flex justify-between items-center p-3 border rounded-md">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email Sync</h3>
                <p className="text-sm text-gray-500">
                  Auto-send exports to my inbox
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex justify-between items-center p-3 border rounded-md">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-md flex items-center justify-center text-red-600 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Google Drive</h3>
                <p className="text-sm text-gray-500">
                  For asset export or attachment upload
                </p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
              Connect
            </button>
          </div>

          <div className="text-sm text-gray-500 italic">
            Integration History: Last Sync: April 16, 9:42 AM
          </div>

          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm mt-2">
            Test Connections
          </button>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium mb-4">Activity Summary</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 border rounded-md">
            <h3 className="text-sm font-medium text-gray-700">
              Last Draft Edited
            </h3>
            <p className="text-lg">Summer Campaign Email</p>
            <p className="text-xs text-gray-500">Today, 11:23 AM</p>
          </div>

          <div className="p-3 border rounded-md">
            <h3 className="text-sm font-medium text-gray-700">
              Approvals Submitted
            </h3>
            <p className="text-lg">5 this week</p>
            <div className="flex items-center text-xs text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              <span>Up 25% from last week</span>
            </div>
          </div>

          <div className="p-3 border rounded-md">
            <h3 className="text-sm font-medium text-gray-700">
              Most Used Prompt
            </h3>
            <p className="text-lg">Product Description</p>
            <p className="text-xs text-gray-500">Used 12 times</p>
          </div>

          <div className="p-3 border rounded-md">
            <h3 className="text-sm font-medium text-gray-700">
              Active Campaigns
            </h3>
            <ul className="text-sm mt-1">
              <li className="flex items-center text-blue-600 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>Summer Promotion 2025</span>
              </li>
              <li className="flex items-center text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>Product Launch: Model X</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Optional UX Add-ons */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Additional Settings
          </h3>

          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" checked className="mr-2" />
              <span className="text-sm">
                AI Personal Assistant: Enable proactive suggestions in chat +
                editor
              </span>
            </label>

            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">
                Custom Shortcuts Panel: Add/remove dashboard quick links
              </span>
            </label>

            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">
                Mobile Notifications: Enable for companion app
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWireframe;
