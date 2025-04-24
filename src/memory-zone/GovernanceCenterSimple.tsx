import { SetStateAction, useState } from "react";

type ToneRule = {
  id: number;
  name: string;
  description: string;
  acceptableRange: [number, number];
  keywordsToAvoid: string[];
  keywordsToFavor: string[];
  applicableChannels: string[];
  lastModified: string;
  modifiedBy: string;
  status: "Active" | "Inactive";
  priority: "Low" | "Medium" | "High" | "Critical";
};

type FallbackRule = {
  id: number;
  trigger: string;
  action: string;
  description: string;
  lastTriggered: string;
  frequency: string;
};

type ApprovalStep = {
  role: string;
  action: string;
};

type ApprovalWorkflow = {
  id: number;
  name: string;
  steps: ApprovalStep[];
  contentTypes: string[];
  avgCompletionTime: string;
  status: "Active" | "Inactive";
};

const GovernanceCenter = () => {
  const [activeTab, setActiveTab] = useState("toneRules");
  const [selectedRule, setSelectedRule] = useState<ToneRule | FallbackRule | ApprovalWorkflow | null>(null);

  // Sample tone rule data
  const toneRules: ToneRule[] = [
    {
      id: 1,
      name: "Professional Brand Voice",
      description:
        "Ensures all content maintains our professional corporate voice",
      acceptableRange: [65, 90],
      keywordsToAvoid: ["cool", "awesome", "killer", "crazy", "basically"],
      keywordsToFavor: ["professional", "reliable", "solution", "expertise"],
      applicableChannels: ["Website", "Email", "White Papers"],
      lastModified: "April 14, 2025",
      modifiedBy: "Sarah T.",
      status: "Active",
      priority: "High",
    },
    {
      id: 2,
      name: "Legal Compliance - Financial",
      description: "Ensures content meets financial regulatory requirements",
      acceptableRange: [85, 100],
      keywordsToAvoid: [
        "guarantee",
        "promise",
        "risk-free",
        "certain",
        "always",
      ],
      keywordsToFavor: ["may", "consider", "potential", "historically"],
      applicableChannels: [
        "Legal Disclaimers",
        "Terms & Conditions",
        "Investment Materials",
      ],
      lastModified: "April 10, 2025",
      modifiedBy: "James L.",
      status: "Active",
      priority: "Critical",
    },
  ];

  // Sample fallback rules data
  const fallbackRules: FallbackRule[] = [
    {
      id: 1,
      trigger: "Tone Score < 50",
      action: "Flag to Legal",
      description: "Content with low tone score requires legal review",
      lastTriggered: "2 days ago",
      frequency: "18 times this month",
    },
    {
      id: 2,
      trigger: "Contains Restricted Keywords",
      action: "Auto-replace with approved alternatives",
      description: "Replace flagged words with pre-approved alternatives",
      lastTriggered: "Yesterday",
      frequency: "36 times this month",
    },
  ];

  // Sample approval workflows
  const approvalWorkflows: ApprovalWorkflow[] = [
    {
      id: 1,
      name: "Standard Content",
      steps: [
        { role: "AI Validator", action: "Automated Tone Check" },
        { role: "Copywriter", action: "Review & Edit" },
        { role: "Manager", action: "Final Approval" },
      ],
      contentTypes: ["Blog Posts", "Social Media", "Email Newsletters"],
      avgCompletionTime: "1.2 days",
      status: "Active",
    },
    {
      id: 2,
      name: "Regulatory Content",
      steps: [
        { role: "AI Validator", action: "Automated Compliance Check" },
        { role: "Copywriter", action: "Initial Draft" },
        { role: "Legal Team", action: "Compliance Review" },
        { role: "Compliance Officer", action: "Final Approval" },
      ],
      contentTypes: [
        "Terms & Conditions",
        "Privacy Policies",
        "Financial Disclosures",
      ],
      avgCompletionTime: "3.8 days",
      status: "Active",
    },
  ];

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
    setSelectedRule(null);
  };

  const handleRuleSelect = (rule: SetStateAction<null>) => {
    setSelectedRule(rule);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              Governance Center
            </h1>
          </div>
        </div>
        <p className="text-gray-500 mt-1">
          Control tone rules, fallback behavior, and approval workflows
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex px-6">
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === "toneRules"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => handleTabClick("toneRules")}
          >
            Tone Rule Builder
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === "fallbackBehavior"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => handleTabClick("fallbackBehavior")}
          >
            Fallback Behavior
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === "escalationLogic"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => handleTabClick("escalationLogic")}
          >
            Approval Logic Flow
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - List View */}
        <div className="w-1/3 border-r border-gray-200 bg-white flex flex-col">
          {/* Search & Add Controls */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder={`Search ${
                  activeTab === "toneRules"
                    ? "tone rules"
                    : activeTab === "fallbackBehavior"
                    ? "fallback rules"
                    : "approval workflows"
                }`}
                className="pl-3 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <button className="ml-3 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              +
            </button>
          </div>

          {/* Rules List */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === "toneRules" && (
              <>
                {toneRules.map((rule) => (
                  <div
                    key={rule.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      selectedRule?.id === rule.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => handleRuleSelect(rule)}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">{rule.name}</h3>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          rule.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {rule.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {rule.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">
                          Score Range: {rule.acceptableRange[0]}-
                          {rule.acceptableRange[1]}
                        </span>
                        <span
                          className={`px-1.5 py-0.5 text-xs rounded ${
                            rule.priority === "Critical"
                              ? "bg-red-100 text-red-800"
                              : rule.priority === "High"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {rule.priority}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        Modified {rule.lastModified}
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeTab === "fallbackBehavior" && (
              <>
                {fallbackRules.map((rule) => (
                  <div
                    key={rule.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      selectedRule?.id === rule.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => handleRuleSelect(rule)}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">
                        {rule.trigger}
                      </h3>
                      <span className="text-yellow-500">⚠</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {rule.description}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">
                        Action: {rule.action}
                      </span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-500">
                        Last triggered: {rule.lastTriggered}
                      </span>
                      <span className="text-xs text-gray-500">
                        {rule.frequency}
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeTab === "escalationLogic" && (
              <>
                {approvalWorkflows.map((workflow) => (
                  <div
                    key={workflow.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      selectedRule?.id === workflow.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => handleRuleSelect(workflow)}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">
                        {workflow.name}
                      </h3>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800">
                        {workflow.status}
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      {workflow.steps.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded">
                            {step.role}
                          </span>
                          {index < workflow.steps.length - 1 && (
                            <span className="mx-1 text-gray-400">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-500">
                        Applies to: {workflow.contentTypes.join(", ")}
                      </span>
                      <span className="text-xs text-gray-500">
                        Avg. time: {workflow.avgCompletionTime}
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Right Panel - Detail View */}
        <div className="w-2/3 bg-gray-50 flex flex-col">
          {selectedRule ? (
            <>
              {/* Rule Detail Header */}
              <div className="p-6 bg-white border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {"name" in selectedRule ? selectedRule.name : ""}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {activeTab === "toneRules"
                        ? selectedRule.description
                        : activeTab === "fallbackBehavior"
                        ? selectedRule.description
                        : `Workflow for ${selectedRule.contentTypes.join(
                            ", "
                          )}`}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                      Edit
                    </button>
                    <button className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded">
                      Delete
                    </button>
                  </div>
                </div>

                {activeTab === "toneRules" && (
                  <div className="mt-4 flex items-center">
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
                      Test this Rule
                    </button>
                    <div className="ml-4 flex items-center">
                      <span className="text-sm text-gray-600 mr-2">
                        Status:
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          selectedRule.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {selectedRule.status}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Rule Detail Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === "toneRules" && (
                  <>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                      <h3 className="text-gray-800 font-medium mb-3">
                        Acceptable Tone Range
                      </h3>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{
                              width: `${
                                selectedRule.acceptableRange[1] -
                                selectedRule.acceptableRange[0]
                              }%`,
                              marginLeft: `${selectedRule.acceptableRange[0]}%`,
                            }}
                          ></div>
                        </div>
                        <div className="ml-4 text-sm text-gray-600">
                          {selectedRule.acceptableRange[0]} -{" "}
                          {selectedRule.acceptableRange[1]} on scoring scale
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                        <h3 className="text-gray-800 font-medium mb-3">
                          Keywords to Avoid
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedRule.keywordsToAvoid.map(
                            (keyword, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-red-50 text-red-700 rounded text-sm"
                              >
                                {keyword}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                        <h3 className="text-gray-800 font-medium mb-3">
                          Keywords to Favor
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedRule.keywordsToFavor.map(
                            (keyword, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-green-50 text-green-700 rounded text-sm"
                              >
                                {keyword}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                      <h3 className="text-gray-800 font-medium mb-3">
                        Applicable Channels
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedRule.applicableChannels.map(
                          (channel, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm"
                            >
                              {channel}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "fallbackBehavior" && (
                  <>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                      <h3 className="text-gray-800 font-medium mb-3">
                        Trigger Condition
                      </h3>
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                        <p className="text-yellow-800">
                          IF {selectedRule.trigger}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                      <h3 className="text-gray-800 font-medium mb-3">
                        Action to Take
                      </h3>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                        <p className="text-blue-800">
                          THEN {selectedRule.action}
                        </p>
                      </div>
                      <p className="mt-3 text-sm text-gray-600">
                        {selectedRule.description}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                      <h3 className="text-gray-800 font-medium mb-3">
                        Trigger Statistics
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            Last Triggered
                          </p>
                          <p className="font-medium">
                            {selectedRule.lastTriggered}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Frequency</p>
                          <p className="font-medium">
                            {selectedRule.frequency}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "escalationLogic" && (
                  <>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                      <h3 className="text-gray-800 font-medium mb-3">
                        Approval Workflow
                      </h3>
                      <div className="relative">
                        {selectedRule.steps.map((step, index) => (
                          <div
                            key={index}
                            className="flex items-start mb-6 relative"
                          >
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-800 font-medium text-sm mr-3">
                              {index + 1}
                            </div>
                            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex-1">
                              <h4 className="font-medium text-gray-800">
                                {step.role}
                              </h4>
                              <p className="text-gray-600 text-sm mt-1">
                                {step.action}
                              </p>
                            </div>
                            {index < selectedRule.steps.length - 1 && (
                              <div className="absolute top-10 left-4 h-6 w-px bg-gray-300"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                      <h3 className="text-gray-800 font-medium mb-3">
                        Applicable Content Types
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedRule.contentTypes.map((type, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                      <h3 className="text-gray-800 font-medium mb-3">
                        Workflow Statistics
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            Average Completion Time
                          </p>
                          <p className="font-medium">
                            {selectedRule.avgCompletionTime}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Status</p>
                          <p className="font-medium flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
                            {selectedRule.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex justify-between">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-6 max-w-md">
                <h3 className="text-lg font-medium text-gray-700">
                  {activeTab === "toneRules"
                    ? "Select a tone rule to view or edit"
                    : activeTab === "fallbackBehavior"
                    ? "Select a fallback behavior to view or edit"
                    : "Select an approval workflow to view or edit"}
                </h3>
                <p className="text-gray-500 mt-2">
                  {activeTab === "toneRules"
                    ? "These rules determine acceptable tone ranges and keyword guidelines"
                    : activeTab === "fallbackBehavior"
                    ? "Fallback behaviors define what happens when content doesn't meet requirements"
                    : "Approval workflows define the process for content review and publishing"}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-flex items-center">
                  Create New{" "}
                  {activeTab === "toneRules"
                    ? "Tone Rule"
                    : activeTab === "fallbackBehavior"
                    ? "Fallback Behavior"
                    : "Approval Workflow"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GovernanceCenter;
