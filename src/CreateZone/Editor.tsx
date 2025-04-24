import {
  AlertTriangle,
  BarChart,
  // ArrowLeft,
  Bold,
  CheckCircle,
  Edit,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  RefreshCw,
  Send,
  Settings,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FeedbackCategory = "tone" | "structure" | "brand";

const Editor = () => {
  const [content, setContent] = useState(`# Welcome to Signal Studio

Thank you for joining our platform. We're excited to have you on board!

## Getting Started

Here are some quick tips to help you get started:

1. Explore the dashboard
2. Set up your profile
3. Connect your first integration

If you have any questions, our support team is here to help.`);

  const navigate = useNavigate();

  const [toneScore] = useState(83);
  const [activeFeedback, setActiveFeedback] = useState("tone");

  // Mock feedback items based on the wireframe spec
  const feedbackItems: Record<
    FeedbackCategory,
    { text: string; type: string }[]
  > = {
    tone: [
      { text: "Slightly off-tone: too casual", type: "warning" },
      { text: "Usage of 'excited' aligns with brand voice", type: "success" },
    ],
    structure: [
      { text: "Good use of headers and lists", type: "success" },
      { text: "Consider adding a call-to-action", type: "info" },
    ],
    brand: [
      { text: "Missing product name in second paragraph", type: "warning" },
      { text: "Correct logo and trademark usage", type: "success" },
    ],
  };

  // Sidebar actions based on the wireframe spec
  const sidebarActions = [
    { name: "Rephrase", icon: RefreshCw },
    { name: "Shorten", icon: BarChart },
    { name: "Make more formal", icon: Edit },
  ];

  // Mock prompt history for sidebar
  const promptHistory = [
    {
      title: "Welcome Email",
      timestamp: "10:42 AM",
      description:
        "Create a welcome email for new users of our platform with a friendly tone...",
    },
    {
      title: "Previous Version",
      timestamp: "10:38 AM",
      description:
        "First draft was too formal, requested more casual approach...",
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* <button className="mr-3 text-gray-500 hover:text-gray-700">
            <ArrowLeft size={20} />
          </button> */}
          <h1 className="text-xl font-semibold">Structured Draft Editor</h1>
          <span className="ml-4 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">
            Welcome Email
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded">
            <Edit size={18} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded">
            <Settings size={18} />
          </button>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex items-center"
            onClick={() => navigate("/dashboard/createzone/visualstudio")}
          >
            <Send size={16} className="mr-1.5" />
            Send for Review
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Editor Area */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-3xl mx-auto">
            {/* Tone Score Overlay */}
            <div className="mb-6 bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-medium">Tone Score</h2>
                <span className="text-sm text-gray-500">
                  Last updated: 2 mins ago
                </span>
              </div>

              <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full ${
                    toneScore > 80
                      ? "bg-green-500"
                      : toneScore > 60
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${toneScore}%` }}
                ></div>
              </div>

              <div className="flex justify-between mt-1">
                <span className="text-xs font-medium">{toneScore}/100</span>
                <span className="text-xs font-medium">
                  {toneScore > 80
                    ? "On-brand"
                    : toneScore > 60
                    ? "Needs Improvement"
                    : "Off-brand"}
                </span>
              </div>

              <div className="flex border-b mt-3">
                {["tone", "structure", "brand"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-3 py-2 text-sm font-medium ${
                      activeFeedback === tab
                        ? "border-b-2 border-indigo-500 text-indigo-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveFeedback(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mt-3 space-y-2">
                {feedbackItems[
                  activeFeedback as keyof typeof feedbackItems
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    {item.type === "success" && (
                      <CheckCircle
                        size={16}
                        className="text-green-500 mt-0.5 mr-2"
                      />
                    )}
                    {item.type === "warning" && (
                      <AlertTriangle
                        size={16}
                        className="text-yellow-500 mt-0.5 mr-2"
                      />
                    )}
                    {item.type === "info" && (
                      <Zap size={16} className="text-blue-500 mt-0.5 mr-2" />
                    )}
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Editor */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-2 border-b border-gray-200">
                <div className="flex space-x-1">
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <Bold size={16} />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <Italic size={16} />
                  </button>
                  <span className="mx-1 border-r border-gray-300"></span>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <List size={16} />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <ListOrdered size={16} />
                  </button>
                  <span className="mx-1 border-r border-gray-300"></span>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <Link size={16} />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded">
                    <Image size={16} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full min-h-[400px] border-0 focus:ring-0 resize-none bg-white"
                  style={{ outline: "none" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-64 border-l border-gray-200 bg-white overflow-auto">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-medium">Actions</h2>
          </div>

          <div className="p-4 space-y-2">
            {sidebarActions.map((action, idx) => (
              <button
                key={idx}
                className="w-full flex items-center p-2 text-left text-sm hover:bg-gray-100 rounded"
              >
                <action.icon size={16} className="mr-2" />
                {action.name}
              </button>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <h2 className="font-medium mb-3">Prompt History</h2>
            <div className="space-y-3">
              {promptHistory.map((item, idx) => (
                <div
                  key={idx}
                  className="text-sm p-2 bg-gray-50 rounded border border-gray-200"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-xs text-gray-500">
                      {item.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full mt-3 text-xs text-indigo-600 hover:text-indigo-800">
              View All History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
