import { useState } from "react";
import BrandIdentitySetup from "./BrandIdentitySetup";
import ToneAndGovernanceSetup from "./ToneAndGovernanceSetup";
import GovernanceCenter from "../../memory-zone/GovernanceCenterSimple";
import PromptLibrary from "../../memory-zone/PromptLibraryFixed";
import SnippetManager from "../../memory-zone/SnippetManager";
import RoleBasedAccessControl from "../access-control/RoleBasedAccessControl";
import UserInvites from "./UserInvites";

const CreateNewBoard = () => {
  const [activeTab, setActiveTab] = useState("Brand Identity");
  const [isSaving, setIsSaving] = useState(false); // State for loading
  const [saveCompleted, setSaveCompleted] = useState(false); // State for save completion

  const tabs = [
    { name: "Brand Identity", component: <BrandIdentitySetup /> },
    { name: "Tone & Governance", component: <ToneAndGovernanceSetup /> },
    { name: "Governance Center", component: <GovernanceCenter /> },
    { name: "Prompt Library", component: <PromptLibrary /> },
    { name: "Snippet Manager", component: <SnippetManager /> },
    { name: "User Invite", component: <UserInvites /> },
  ];

  const handleSave = () => {
    setIsSaving(true); // Start loading
    setSaveCompleted(false); // Reset save completion state
    setTimeout(() => {
      setIsSaving(false); // Stop loading after 2 seconds
      setSaveCompleted(true); // Mark save as completed
    }, 2000); // Simulate a save operation
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header with Tabs */}
      <div className="w-full bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end">
            {/* Pills-style Tabs */}
            <div className="flex space-x-2 mt-4">
              {tabs.map((tab) => (
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

            {/* Save Button with icon */}
            <button
              className="flex items-center px-4 py-2 mb-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={handleSave}
              disabled={isSaving} // Disable button while saving
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
              {isSaving
                ? "Saving..."
                : saveCompleted
                ? "Changes Saved"
                : "Save Changes"}
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content with Card-style container */}
      <div className="flex-1 max-w-6xl w-full mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            {tabs.find((tab) => tab.name === activeTab)?.component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewBoard;
