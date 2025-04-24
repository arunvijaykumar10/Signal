import {
  Bell,
  Settings,
  ChevronDown,
  Users,
  FileText,
  BarChart4,
  CheckCircle,
  Zap,
  AlertTriangle,
  Clock,
  RefreshCw,
  RotateCcw,
  Calendar,
  Image,
  Brain,
  X,
  ExternalLink,
} from "lucide-react";

const SystemOverview = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                System Overview Panel
              </h1>
              <div className="flex space-x-3">
                <button className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-sm flex items-center">
                  <RefreshCw className="h-4 w-4 mr-1.5" /> Refresh
                </button>
                <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm">
                  Run Setup Wizard
                </button>
              </div>
            </div>

            {/* Top-Level Metrics (KPI Tiles) */}
            <div className="w-full p-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-bold mb-6 text-gray-800">
                System Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {/* Active Users Tile */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-blue-600">
                        Active Users (30 days)
                      </p>
                      <h3 className="text-2xl font-bold mt-1">28</h3>
                      <p className="text-xs text-blue-700 mt-1">
                        +14% from last month
                      </p>
                    </div>
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Drafts Created Tile */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-100 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-green-600">
                        Drafts Created (This Month)
                      </p>
                      <h3 className="text-2xl font-bold mt-1">172</h3>
                      <p className="text-xs text-green-700 mt-1">
                        +8% from last month
                      </p>
                    </div>
                    <div className="bg-green-100 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* Avg Tone Score Tile */}
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-purple-600">
                        Avg. Tone Score
                      </p>
                      <h3 className="text-2xl font-bold mt-1">88 / 100</h3>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-purple-100 p-2 rounded-full">
                      <BarChart4 className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                </div>

                {/* Export Success Rate Tile */}
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-yellow-600">
                        Export Success Rate
                      </p>
                      <h3 className="text-2xl font-bold mt-1">97% success</h3>
                      <p className="flex items-center text-xs text-yellow-700 mt-1">
                        <CheckCircle className="h-3 w-3 mr-1" /> All systems
                        operational
                      </p>
                    </div>
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                  </div>
                </div>

                {/* Top Module Usage Tile */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-100 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-red-600">
                        Top Module Usage
                      </p>
                      <h3 className="text-lg font-bold mt-1">
                        Structured Draft Editor
                      </h3>
                      <p className="text-xs text-red-700 mt-1">
                        386 uses this month
                      </p>
                    </div>
                    <div className="bg-red-100 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Status Panel */}
            <div className="w-full p-6 bg-white rounded-lg shadow mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  System Status
                </h2>
                <button className="text-sm text-blue-600 flex items-center">
                  <RefreshCw className="h-4 w-4 mr-1" /> Refresh
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Status and Error Count */}
                <div className="space-y-4">
                  {/* Current Status */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">
                          Current Status
                        </p>
                        <p className="text-sm text-gray-600">
                          🟢 All systems operational
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Error Count */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <div className="bg-amber-100 p-2 rounded-full mr-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">
                          Error Count (Today)
                        </p>
                        <div className="flex space-x-4 text-sm">
                          <span className="text-amber-600">
                            2 failed exports
                          </span>
                          <span className="text-gray-500">1 model timeout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Latency Graph and Last Sync */}
                <div className="space-y-4">
                  {/* Latency Graph */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="font-medium text-gray-700 mb-2">
                      Latency Graph (last 24h)
                    </p>
                    <div className="h-12 w-full bg-white rounded border border-gray-200 overflow-hidden">
                      {/* Simplified latency chart representation */}
                      <div className="flex items-end h-full w-full pl-1 pr-1 pt-1 space-x-1">
                        {[
                          40, 35, 45, 30, 25, 35, 40, 38, 45, 50, 55, 45, 40,
                          42, 40, 38, 42, 40, 38, 35,
                        ].map((height, i) => (
                          <div
                            key={i}
                            className="bg-blue-500 w-full rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Avg. response time: 280ms
                    </p>
                  </div>

                  {/* Last Sync */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">
                          Last Sync (Integrations)
                        </p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <span className="text-gray-600">
                            CMS sync completed 5 mins ago
                          </span>
                          <span className="text-gray-600">
                            Slack notifications working normally
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Platform Changes */}
            <div className="w-full p-6 bg-white rounded-lg shadow mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Recent Platform Changes
                </h2>
                <div className="flex space-x-2">
                  <button className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                    Last 24h <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <button className="text-sm text-blue-600 flex items-center">
                    View Full Audit Log
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {/* Change Item 1 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <div className="bg-blue-500 h-3 w-3 rounded-full"></div>
                    </div>
                    <div className="h-full w-0.5 bg-gray-200 mt-1"></div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">
                        Validator rules updated
                      </h3>
                      <div className="text-sm text-gray-500">
                        Today, 10:42 AM
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Memory Zone → Governance Center
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                      <img
                        src="/api/placeholder/32/32"
                        alt="User"
                        className="h-5 w-5 rounded-full mr-2"
                      />
                      <span>Jonathan Miller (Admin)</span>
                      <button className="ml-auto text-xs text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md">
                        <RotateCcw className="h-3 w-3 inline mr-1" /> Revert
                      </button>
                    </div>
                  </div>
                </div>

                {/* Change Item 2 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="bg-purple-100 p-1 rounded-full">
                      <div className="bg-purple-500 h-3 w-3 rounded-full"></div>
                    </div>
                    <div className="h-full w-0.5 bg-gray-200 mt-1"></div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">
                        New prompt templates added
                      </h3>
                      <div className="text-sm text-gray-500">
                        Today, 09:15 AM
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Memory Zone → Prompt Library
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                      <img
                        src="/api/placeholder/32/32"
                        alt="User"
                        className="h-5 w-5 rounded-full mr-2"
                      />
                      <span>Sarah Chen (Strategist)</span>
                      <button className="ml-auto text-xs text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md">
                        <RotateCcw className="h-3 w-3 inline mr-1" /> Revert
                      </button>
                    </div>
                  </div>
                </div>

                {/* Change Item 3 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="bg-green-100 p-1 rounded-full">
                      <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                    </div>
                    <div className="h-full w-0.5 bg-gray-200 mt-1"></div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">
                        Model fallback rules configured
                      </h3>
                      <div className="text-sm text-gray-500">
                        Yesterday, 4:23 PM
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Admin Panel → AI Configuration
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                      <img
                        src="/api/placeholder/32/32"
                        alt="User"
                        className="h-5 w-5 rounded-full mr-2"
                      />
                      <span>Jonathan Miller (Admin)</span>
                      <button className="ml-auto text-xs text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md">
                        <RotateCcw className="h-3 w-3 inline mr-1" /> Revert
                      </button>
                    </div>
                  </div>
                </div>

                {/* Show More Button */}
                <div className="flex justify-center mt-2">
                  <button className="text-sm text-blue-600 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" /> Show more changes
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Access Cards */}
            <div className="w-full p-6 bg-white rounded-lg shadow mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Quick Access
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* User Management Card */}
                <div className="bg-blue-50 rounded-lg border border-blue-100 p-4 flex flex-col hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-blue-700">
                      User Management
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-4">
                    Manage team access, roles and permissions
                  </p>
                  <button className="mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Manage Roles
                  </button>
                </div>

                {/* Brand Settings Card */}
                <div className="bg-purple-50 rounded-lg border border-purple-100 p-4 flex flex-col hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Image className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-medium text-purple-700">
                      Brand Settings
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-4">
                    Update logos, colors, and brand identity
                  </p>
                  <button className="mt-auto bg-purple-600 text-white text-sm py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                    Upload Logo
                  </button>
                </div>

                {/* AI Model Config Card */}
                <div className="bg-green-50 rounded-lg border border-green-100 p-4 flex flex-col hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Brain className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-medium text-green-700">
                      AI Model Config
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-4">
                    Configure model routing and fallback settings
                  </p>
                  <button className="mt-auto bg-green-600 text-white text-sm py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                    Update Defaults
                  </button>
                </div>

                {/* Export Health Card */}
                <div className="bg-amber-50 rounded-lg border border-amber-100 p-4 flex flex-col hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <AlertTriangle className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-medium text-amber-700">
                      Export Health
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 mb-4">
                    Monitor export success rates and failures
                  </p>
                  <button className="mt-auto bg-amber-600 text-white text-sm py-2 px-4 rounded-md hover:bg-amber-700 transition-colors">
                    View Failed Jobs
                  </button>
                </div>
              </div>

              {/* Stacked Buttons */}
              <div className="flex flex-wrap mt-4 gap-2">
                <button className="flex items-center bg-gray-100 text-gray-700 text-sm py-1.5 px-3 rounded-md hover:bg-gray-200 transition-colors">
                  <Settings className="h-4 w-4 mr-1.5" /> System Settings
                </button>
                <button className="flex items-center bg-gray-100 text-gray-700 text-sm py-1.5 px-3 rounded-md hover:bg-gray-200 transition-colors">
                  <Users className="h-4 w-4 mr-1.5" /> Users
                </button>
                <button className="flex items-center bg-gray-100 text-gray-700 text-sm py-1.5 px-3 rounded-md hover:bg-gray-200 transition-colors">
                  <Brain className="h-4 w-4 mr-1.5" /> AI Routing
                </button>
              </div>
            </div>

            {/* Notifications / System Warnings Bar */}
            <div className="w-full mt-6 space-y-3">
              <h2 className="text-xl font-bold text-gray-800">
                System Warnings
              </h2>

              {/* Warning Banner 1 - Validator Failure */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-md p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-medium text-amber-800">
                      ⚠️ 12% of content failed QA yesterday
                    </p>
                    <p className="text-sm text-amber-700 mt-0.5">
                      Validator detected tone issues across multiple drafts -
                      check Validator rules
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-sm text-amber-700 border border-amber-300 px-3 py-1 rounded-md hover:bg-amber-100 transition-colors">
                    View Details
                  </button>
                  <button className="p-1 text-amber-600 hover:bg-amber-100 rounded">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Warning Banner 2 - Slack Integration */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-md p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium text-red-800">
                      ❌ Slack integration needs re-authentication
                    </p>
                    <p className="text-sm text-red-700 mt-0.5">
                      Token expired 2 hours ago - notifications are not being
                      delivered
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-sm bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors">
                    Reconnect
                  </button>
                  <button className="p-1 text-red-600 hover:bg-red-100 rounded">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Warning Banner 3 - Export Retry Queue */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-md p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-blue-800">
                      🔔 4 exports pending retries — investigate now
                    </p>
                    <p className="text-sm text-blue-700 mt-0.5">
                      JSON formatting errors detected in CMS export jobs
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-sm text-blue-700 border border-blue-300 px-3 py-1 rounded-md hover:bg-blue-100 transition-colors">
                    View Failed Jobs
                  </button>
                  <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Snooze Controls and Activity Feed Preview */}
              <div className="flex justify-between mt-4">
                <button className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1.5" /> Snooze all warnings for 4
                  hours
                </button>
                <button className="flex items-center text-sm text-blue-600">
                  <ExternalLink className="h-4 w-4 mr-1.5" /> View all system
                  notifications
                </button>
              </div>

              {/* Mini Activity Feed */}
              <div className="bg-gray-50 border border-gray-200 rounded-md mt-4 p-3">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Recent Activity
                </h3>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">
                    • Katie uploaded 2 new prompts (10 minutes ago)
                  </p>
                  <p className="text-xs text-gray-600">
                    • Vasanth updated tone guardrails (35 minutes ago)
                  </p>
                  <p className="text-xs text-gray-600">
                    • System tone analysis completed for 28 drafts (1 hour ago)
                  </p>
                </div>
              </div>
            </div>

            {/* AI Assistant Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow mt-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  AI Assistant
                </h2>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-gray-700 mb-3">
                  Ask me anything about system performance or how to optimize
                  your workspace:
                </p>

                <div className="flex">
                  <input
                    type="text"
                    placeholder="e.g., 'Show me users who haven't logged in this month'"
                    className="flex-grow bg-white border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                    Ask
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <button className="bg-white text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50">
                    Show inactive users
                  </button>
                  <button className="bg-white text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50">
                    Suggest reviewers for Q2 campaign
                  </button>
                  <button className="bg-white text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50">
                    Analyze tone drift
                  </button>
                </div>
              </div>
            </div>

            {/* System Health Indicator */}
            <div className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-600">
                    Memory Index: 83% healthy | 12% unused | 5% flagged for
                    cleanup
                  </p>
                </div>
                <button className="text-xs text-blue-600 border border-blue-200 px-2 py-1 rounded">
                  Run Cleanup
                </button>
              </div>
            </div>

            {/* Footer with License Information */}
            <div className="mt-10 mb-6 text-center text-sm text-gray-500">
              <p>Signal Studio Admin Dashboard | Version 1.4.2</p>
              <p className="mt-1">
                Your workspace is using 9 of 10 licenses |{" "}
                <a href="#" className="text-blue-600">
                  Upgrade Plan
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SystemOverview;
