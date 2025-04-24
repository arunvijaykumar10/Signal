import { useState } from "react";
import { User, Settings, Bell, FileText } from "lucide-react";
import ProfileWireframe from "./ProfileSettings";
import InterfacePreferencesWireframe from "./Interface";
import NotificationSettingsWireframe from "./Notifications";
import ConnectedAccountsTab from "./ConnectedAccounts";

const UserProfileWireframe = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileWireframe />;
      case "Interface":
        return <InterfacePreferencesWireframe />;
      case "Notifications":
        return <NotificationSettingsWireframe />;
      case "Connected Accounts":
        return <ConnectedAccountsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Profile & Preferences</h1>

        {/* Tab Navigation */}
        <div className="flex mb-6 border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === "Profile"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600"
            } font-medium flex items-center`}
            onClick={() => setActiveTab("Profile")}
          >
            <User size={18} className="mr-2" />
            <span>Profile</span>
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Interface"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600"
            } font-medium flex items-center`}
            onClick={() => setActiveTab("Interface")}
          >
            <Settings size={18} className="mr-2" />
            <span>Interface</span>
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Notifications"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600"
            } font-medium flex items-center`}
            onClick={() => setActiveTab("Notifications")}
          >
            <Bell size={18} className="mr-2" />
            <span>Notifications</span>
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Connected Accounts"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600"
            } font-medium flex items-center`}
            onClick={() => setActiveTab("Connected Accounts")}
          >
            <FileText size={18} className="mr-2" />
            <span>Connected Accounts</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow p-6">
          {renderActiveTab()}
        </div>
      </div>
    </div>
  );
};

export default UserProfileWireframe;
