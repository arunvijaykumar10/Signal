import { useState } from "react";
import BrandIdentitySetup from "./BrandIdentitySetup";
import ToneAndGovernanceSetup from "./ToneAndGovernanceSetup";
import GovernanceCenter from "../../memory-zone/GovernanceCenterSimple";
import PromptLibrary from "../../memory-zone/PromptLibraryFixed";
import SnippetManager from "../../memory-zone/SnippetManager";
import UserInvites from "./UserInvites";
import { Save } from "lucide-react";
import { useRole } from "../../context/RoleProvider";

const CreateNewBoard = () => {
  const { role } = useRole(); // Get the current role
  const [activeTab, setActiveTab] = useState("Brand Identity");
  const [isSaving, setIsSaving] = useState(false);
  const [saveCompleted, setSaveCompleted] = useState(false);

  // All possible tabs
  const allTabs = [
    { name: "Brand Identity", component: <BrandIdentitySetup /> },
    { name: "Tone & Governance", component: <ToneAndGovernanceSetup /> },
    { name: "Governance Center", component: <GovernanceCenter /> },
    { name: "Prompt Library", component: <PromptLibrary /> },
    { name: "Snippet Manager", component: <SnippetManager /> },
    { name: "Add User", component: <UserInvites /> },
  ];

  // Filter tabs based on role
  const getFilteredTabs = () => {
    switch (role) {
      case "admin":
      case "executive":
        return allTabs;
      case "designer":
        return [];
      case "legalflashqa":
        return allTabs.filter(
          (tab) =>
            tab.name == "Tone & Governance" || tab.name == "Governance Center"
        );
      case "strategist":
        return allTabs.filter((tab) => tab.name !== "Add User");
      case "copywriter":
        return allTabs.filter(
          (tab) =>
            tab.name === "Prompt Library" || tab.name === "Snippet Manager"
        );
      default:
        return [];
    }
  };

  const filteredTabs = getFilteredTabs();

  if (filteredTabs.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4">Access Restricted</h2>
          <p className="text-gray-600">
            You don't have permission to access this section.
          </p>
        </div>
      </div>
    );
  }

  if (!filteredTabs.some((tab) => tab.name === activeTab)) {
    setActiveTab(filteredTabs[0]?.name || "");
  }

  const handleSave = () => {
    setIsSaving(true);
    setSaveCompleted(false);
    setTimeout(() => {
      setIsSaving(false);
      setSaveCompleted(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header with Tabs */}
      <div className="w-full bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end">
            {/* Pills-style Tabs */}
            <div className="flex space-x-2 mt-4">
              {filteredTabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-all ${
                    activeTab === tab.name
                      ? "bg-white text-blue-600 border-t-2 border-x-2 border-gray-200 shadow-sm"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Save Button with icon - only show if there are tabs */}
            {filteredTabs.length > 0 && (
              <button
                className="flex items-center px-4 py-2 mb-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? (
                  <svg
                    className="animate-spin w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : saveCompleted ? (
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : null}
                <Save size={16} className="mr-2" />
                {isSaving
                  ? "Saving..."
                  : saveCompleted
                  ? "Changes Saved"
                  : "Save Changes"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tab Content with Card-style container */}
      <div className="flex-1 max-w-6xl w-full mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            {filteredTabs.find((tab) => tab.name === activeTab)?.component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewBoard;
