import { useState } from "react";

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

const GovernanceCenter = () => {
  const [selectedRule, setSelectedRule] = useState<ToneRule | null>(null);
  const [escalationPreference, setEscalationPreference] =
    useState("flag-to-legal");

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

  const handleRuleSelect = (rule: ToneRule) => {
    setSelectedRule(rule);
  };

  return (
    <>
   
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Tone Rule Builder
        </h1>
        <p className="text-gray-500 mt-1">
          Control tone rules to ensure content meets brand guidelines.
        </p>
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
                placeholder="Search tone rules"
                className="pl-3 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <button className="ml-3 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              +
            </button>
          </div>

          {/* Rules List */}
          <div className="flex-1 overflow-y-auto">
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
                <p className="text-sm text-gray-600 mt-1">{rule.description}</p>
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
          </div>
        </div>

        {/* Right Panel - Detail View */}
        <div className="w-2/3 bg-gray-50 flex flex-col">
          {selectedRule ? (
            <>
              {/* Rule Detail Header */}
              <div className="p-6 bg-white border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">
                  {selectedRule.name}
                </h2>
                <p className="text-gray-600 mt-1">{selectedRule.description}</p>
              </div>

              {/* Rule Detail Content */}
              <div className="flex-1 overflow-y-auto p-6">
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
                      {selectedRule.keywordsToAvoid.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-red-50 text-red-700 rounded text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                    <h3 className="text-gray-800 font-medium mb-3">
                      Keywords to Favor
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRule.keywordsToFavor.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-50 text-green-700 rounded text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                  <h3 className="text-gray-800 font-medium mb-3">
                    Applicable Channels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRule.applicableChannels.map((channel, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-6 max-w-md">
                <h3 className="text-lg font-medium text-gray-700">
                  Select a tone rule to view or edit
                </h3>
                <p className="text-gray-500 mt-2">
                  These rules determine acceptable tone ranges and keyword
                  guidelines.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-flex items-center">
                  Create New Tone Rule
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6  " >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Escalation Preference
        </h2>
        <p className="text-gray-600 mb-4">
          Choose what happens when content doesn't meet your tone guidelines or
          contains restricted words.
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <input
              id="flag-to-legal"
              name="escalation"
              type="radio"
              checked={escalationPreference === "flag-to-legal"}
              onChange={() => setEscalationPreference("flag-to-legal")}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label htmlFor="flag-to-legal" className="ml-3">
              <div className="text-gray-900 font-medium">Flag to Legal</div>
              <p className="text-sm text-gray-500">
                Send to legal team for manual review
              </p>
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="auto-correct"
              name="escalation"
              type="radio"
              checked={escalationPreference === "auto-correct"}
              onChange={() => setEscalationPreference("auto-correct")}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label htmlFor="auto-correct" className="ml-3">
              <div className="text-gray-900 font-medium">
                Rewrite with Softer Tone
              </div>
              <p className="text-sm text-gray-500">
                Automatically adjust content to comply with guidelines
              </p>
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="auto-approve"
              name="escalation"
              type="radio"
              checked={escalationPreference === "auto-approve"}
              onChange={() => setEscalationPreference("auto-approve")}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label htmlFor="auto-approve" className="ml-3">
              <div className="text-gray-900 font-medium">
                Auto-approve if Tone Score 80%
              </div>
              <p className="text-sm text-gray-500">
                Only flag severe violations, allow minor deviations
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GovernanceCenter;
