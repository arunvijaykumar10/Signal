import { useState } from "react";
import BrandIdentitySetup from "./BrandIdentitySetup";
import ToneAndGovernanceSetup from "./ToneAndGovernanceSetup";
import GovernanceCenter from "../../memory-zone/GovernanceCenterSimple";
import PromptLibrary from "../../memory-zone/PromptLibraryFixed";
import SnippetManager from "../../memory-zone/SnippetManager";

const CreateNewBoard = () => {
  const [activeTab, setActiveTab] = useState("Brand Identity");

  const tabs = [
    { name: "Brand Identity", component: <BrandIdentitySetup /> },
    { name: "Tone & Governance", component: <ToneAndGovernanceSetup /> },
    { name: "Governance Center", component: <GovernanceCenter /> },
    { name: "Prompt Library", component: <PromptLibrary /> },
    { name: "Snippet Manager", component: <SnippetManager /> },
  ];

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
            <button className="flex items-center px-4 py-2 mb-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Save Changes
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