import { ChevronDown, Save, Settings, Upload, User } from "lucide-react";

const ProfileWireframe = () => {
  return (
    <div>
      {/* Profile Overview Panel */}
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
              <span className="text-xs text-gray-500">Assigned at invite</span>
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
  );
};

export default ProfileWireframe;
