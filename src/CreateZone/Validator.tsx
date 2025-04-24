import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Validator = () => {
  // Mock validation scores based on wireframe specs
  const [validationScore] = useState({
    tone: 86,
    compliance: 92,
    length: 75,
    cta: 60,
  });

  const [activeIssue, setActiveIssue] = useState<any>(null);
  const navigate = useNavigate();

  // Mock validation issues
  const issues = [
    {
      id: 1,
      type: "tone",
      severity: "medium",
      title: "Tone mismatch in introduction",
      description:
        "The introductory paragraph uses more casual language than our brand guidelines recommend.",
      location: "Paragraph 1, Sentence 2",
      recommendation: "Consider revising to use more professional terminology.",
    },
    {
      id: 2,
      type: "compliance",
      severity: "low",
      title: "Missing disclaimer reference",
      description:
        "Product descriptions should include reference to terms & conditions.",
      location: "Final paragraph",
      recommendation: "Add standard T&C reference from snippet library.",
    },
    {
      id: 3,
      type: "cta",
      severity: "high",
      title: "Call-to-action lacks urgency",
      description: "The primary CTA doesn't include a time-sensitive element.",
      location: "Final CTA button",
      recommendation: 'Add time-bound incentive (e.g., "Sign up today").',
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* <button className="mr-3 text-gray-500 hover:text-gray-700">
            <ArrowLeft size={20} />
          </button> */}
          <h1 className="text-xl font-semibold">Signal Validator</h1>
          <span className="ml-4 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">
            Welcome Email Draft
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
            Send Back
          </button>
          <button className="px-4 py-2 border border-amber-300 bg-amber-50 text-amber-700 rounded hover:bg-amber-100">
            Escalate
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => navigate("/dashboard/createzone/assistant")}
          >
            Approve
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Content Preview Area */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-3xl mx-auto">
            {/* QA Scorecard as shown in wireframe */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h2 className="font-semibold mb-4">QA Scorecard</h2>

              <div className="grid grid-cols-4 gap-4">
                {Object.entries(validationScore).map(([category, score]) => (
                  <div
                    key={category}
                    className="bg-gray-50 p-3 rounded border border-gray-200"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          score >= 80
                            ? "text-green-600"
                            : score >= 60
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      >
                        {score}/100
                      </span>
                    </div>

                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full rounded-full ${
                          score >= 80
                            ? "bg-green-500"
                            : score >= 60
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Overall Assessment</span>

                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                    <span className="text-sm font-medium">
                      Needs Minor Revisions
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  This content requires minor adjustments before approval. The
                  primary concerns are related to tone consistency and CTA
                  effectiveness.
                </p>
              </div>
            </div>

            {/* Document Preview */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-medium">Content Preview</h2>
              </div>

              <div className="p-6">
                <div className="prose max-w-none">
                  <h1>Welcome to Signal Studio</h1>
                  <p>
                    Thank you for joining our platform. We're{" "}
                    <span className="bg-amber-100 px-1 rounded">excited</span>{" "}
                    to have you on board!
                  </p>

                  <h2>Getting Started</h2>
                  <p>Here are some quick tips to help you get started:</p>

                  <ol>
                    <li>Explore the dashboard</li>
                    <li>Set up your profile</li>
                    <li>Connect your first integration</li>
                  </ol>

                  <p>
                    If you have any questions, our support team is here to help.
                  </p>

                  <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded">
                    <span className="bg-red-100 px-1 rounded">Sign up now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Issues Sidebar */}
        <div className="w-80 border-l border-gray-200 bg-white overflow-auto">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-medium">Validation Issues</h2>
            <p className="text-sm text-gray-500 mt-1">3 issues found</p>
          </div>

          <div className="p-2">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className={`p-3 mb-2 rounded border cursor-pointer ${
                  activeIssue?.id === issue.id
                    ? "bg-indigo-50 border-indigo-300"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setActiveIssue(issue)}
              >
                <div className="flex items-start">
                  <div
                    className={`w-2 h-2 rounded-full mt-1.5 mr-2 ${
                      issue.severity === "high"
                        ? "bg-red-500"
                        : issue.severity === "medium"
                        ? "bg-amber-500"
                        : "bg-blue-500"
                    }`}
                  ></div>

                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-sm">{issue.title}</span>
                      <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                        {issue.type}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {issue.description}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Location: {issue.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeIssue && (
            <div className="p-4 border-t border-gray-200">
              <h3 className="font-medium">Issue Details</h3>

              <div className="mt-3 space-y-3">
                <div>
                  <span className="text-xs font-medium text-gray-500">
                    Description
                  </span>
                  <p className="text-sm mt-1">{activeIssue.description}</p>
                </div>

                <div>
                  <span className="text-xs font-medium text-gray-500">
                    Recommendation
                  </span>
                  <p className="text-sm mt-1">{activeIssue.recommendation}</p>
                </div>

                <div className="pt-2">
                  <button className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
                    Fix Automatically
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Validator;
