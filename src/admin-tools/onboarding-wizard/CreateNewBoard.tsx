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
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Tabs */}
      <div className="w-full bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-6 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`pb-2 text-sm font-medium ${
                  activeTab === tab.name
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 max-w-6xl mx-auto py-6 px-6">
        {tabs.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  );
};

export default CreateNewBoard;