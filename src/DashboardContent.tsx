import { Brain, Settings, Shield, User } from "lucide-react";

// Mock data for KPIs
const kpiData = [
  {
    title: "Drafts Created",
    value: "348",
    change: "+12%",
    period: "this month",
  },
  {
    title: "Tone Score Avg.",
    value: "86 / 100",
    change: "+3%",
    period: "vs last month",
  },
  {
    title: "Validator Issues",
    value: "52",
    change: "-8%",
    period: "flagged",
  },
  {
    title: "AI Token Usage",
    value: "3.2M",
    change: "+15%",
    period: "tokens",
  },
  {
    title: "Export Success Rate",
    value: "97%",
    change: "+2%",
    period: "success",
  },
];

// Mock data for role-based actions
const quickActions = {
  Copywriter: ["Start Draft", "View Prompts", "Resume Editing"],
  Strategist: ["Review Drift Dashboard", "Add Prompt"],
  "Legal/QA": ["View Pending Approvals", "Check Flagged Snippets"],
  Designer: ["Launch Visual Studio", "Upload Brand Kit"],
  Admin: ["Invite User", "Configure AI", "Sync Integrations"],
};

const userRole = "Copywriter"; // This would come from user auth context

// Mock recent activity
const recentActivity = [
  {
    type: "user",
    text: "Katie approved 'Spring Promo Email'",
    time: "1h ago",
  },
  {
    type: "system",
    text: "Auto-flag triggered in Validator – Tone Mismatch",
    time: "2h ago",
  },
  { type: "ai", text: "Draft rewritten with fallback model", time: "3h ago" },
  {
    type: "user",
    text: "Jonathan created new prompt template",
    time: "5h ago",
  },
];

// Mock alerts
const alerts = [
  {
    type: "pending",
    text: "3 drafts awaiting validation",
    priority: "medium",
  },
  { type: "validator", text: "2 escalated to Legal", priority: "high" },
  { type: "export", text: "1 failed sync to CMS", priority: "low" },
  {
    type: "deadline",
    text: "Q2 Campaign Brief due tomorrow",
    priority: "high",
  },
];
const DashboardContent = () => {
  return (
    <div>
      <main className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

        {/* Zone Access Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            {
              title: "Create Zone",
              description: "Generate and refine content",
              badge: "2 drafts pending",
            },
            {
              title: "Memory Zone",
              description: "Govern and reuse approved assets",
              badge: "3 drift alerts",
            },
            {
              title: "Publish Zone",
              description: "Export final content & connect tools",
              badge: null,
            },
          ].map((zone, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
            >
              <h3 className="text-lg font-medium text-indigo-700">
                {zone.title}
              </h3>
              <p className="text-gray-600 mt-1">{zone.description}</p>
              {zone.badge && (
                <span className="inline-block mt-3 text-xs font-medium px-2 py-1 bg-amber-100 text-amber-800 rounded">
                  {zone.badge}
                </span>
              )}
              <p className="text-gray-400 text-xs mt-3">
                Last accessed: Today, 10:42 AM
              </p>
            </div>
          ))}
        </div>

        {/* KPI Section */}
        <h2 className="text-lg font-medium mb-3">Key Metrics</h2>
        <div className="grid grid-cols-5 gap-4 mb-8">
          {kpiData.map((kpi, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow border border-gray-100"
            >
              <p className="text-sm text-gray-500">{kpi.title}</p>
              <div className="flex items-end mt-1">
                <p className="text-2xl font-semibold">{kpi.value}</p>
                <span
                  className={`ml-2 text-xs font-medium ${
                    kpi.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {kpi.change}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{kpi.period}</p>
            </div>
          ))}
        </div>

        {/* Two column layout for quick actions and activity */}
        <div className="grid grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="col-span-1">
            <h2 className="text-lg font-medium mb-3">Quick Actions</h2>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2">
                  <User size={16} />
                </div>
                <p className="font-medium">{userRole} Actions</p>
              </div>
              <div className="space-y-2">
                {quickActions[userRole]?.map((action, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left p-2 bg-gray-50 hover:bg-indigo-50 rounded text-sm"
                  >
                    {action}
                  </button>
                ))}
              </div>
              <button className="mt-3 text-xs text-indigo-600 flex items-center">
                <Settings size={12} className="mr-1" />
                Customize Shortcuts
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="col-span-1">
            <h2 className="text-lg font-medium mb-3">Recent Activity</h2>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 h-64 overflow-auto">
              <div className="space-y-3">
                {recentActivity.map((activity, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-100 pb-3 last:border-0"
                  >
                    <div className="flex items-start">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-0.5 ${
                          activity.type === "user"
                            ? "bg-blue-100 text-blue-600"
                            : activity.type === "system"
                            ? "bg-amber-100 text-amber-600"
                            : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {activity.type === "user" ? (
                          <User size={12} />
                        ) : activity.type === "system" ? (
                          <Shield size={12} />
                        ) : (
                          <Brain size={12} />
                        )}
                      </div>
                      <div>
                        <p className="text-sm">{activity.text}</p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-2 text-xs text-indigo-600">
                Show more
              </button>
            </div>
          </div>

          {/* Alerts */}
          <div className="col-span-1">
            <h2 className="text-lg font-medium mb-3">Alerts & Workflow</h2>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 h-64 overflow-auto">
              <div className="space-y-3">
                {alerts.map((alert, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-100 pb-3 last:border-0"
                  >
                    <div className="flex items-start">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 mt-1.5 ${
                          alert.priority === "high"
                            ? "bg-red-500"
                            : alert.priority === "medium"
                            ? "bg-amber-500"
                            : "bg-blue-500"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.text}</p>
                        <div className="mt-1">
                          <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded mr-1">
                            {alert.type === "pending"
                              ? "Review Now"
                              : alert.type === "validator"
                              ? "Resolve"
                              : alert.type === "export"
                              ? "Retry Export"
                              : "View"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Onboarding Progress (Conditional) */}
        <div className="mt-8 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
          <h2 className="text-lg font-medium mb-3">Workspace Setup</h2>
          <div className="flex items-center mb-4">
            <div className="flex-1 relative">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-indigo-600 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span className="text-xs mt-1">Branding</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span className="text-xs mt-1">Governance</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs">
                    3
                  </div>
                  <span className="text-xs mt-1">Integrations</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs">
                    4
                  </div>
                  <span className="text-xs mt-1">Invite Team</span>
                </div>
              </div>
            </div>
            <div className="ml-6">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded font-medium hover:bg-indigo-700">
                Resume Setup
              </button>
              <p className="text-xs text-gray-500 mt-1">
                ~5 mins to complete setup
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardContent;