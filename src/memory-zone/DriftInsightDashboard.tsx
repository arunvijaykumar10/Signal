import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  AlertTriangle,
  Calendar,
  ChevronDown,
  Download,
  Filter,
  RefreshCw,
  Settings,
  Zap,
} from "lucide-react";

// Sample data for charts
const toneData = [
  { date: "2025-01-01", score: 82, baseline: 85 },
  { date: "2025-01-15", score: 81, baseline: 85 },
  { date: "2025-02-01", score: 80, baseline: 85 },
  { date: "2025-02-15", score: 78, baseline: 85 },
  { date: "2025-03-01", score: 75, baseline: 85 },
  { date: "2025-03-15", score: 77, baseline: 85 },
  { date: "2025-04-01", score: 79, baseline: 85 },
  { date: "2025-04-15", score: 83, baseline: 85 },
];

const hallucinationData = [
  { date: "2025-01-01", factual: 3, citation: 1, relevance: 2 },
  { date: "2025-01-15", factual: 4, citation: 2, relevance: 1 },
  { date: "2025-02-01", factual: 2, citation: 3, relevance: 2 },
  { date: "2025-02-15", factual: 5, citation: 2, relevance: 3 },
  { date: "2025-03-01", factual: 6, citation: 4, relevance: 2 },
  { date: "2025-03-15", factual: 4, citation: 2, relevance: 1 },
  { date: "2025-04-01", factual: 3, citation: 1, relevance: 0 },
  { date: "2025-04-15", factual: 2, citation: 0, relevance: 1 },
];

const alerts = [
  {
    id: 1,
    title: "Tone drift detected in Product Launch emails",
    description:
      "5 content pieces have drifted below tone score threshold (75)",
    severity: "high",
    date: "2025-04-14T09:23:00",
    status: "active",
  },
  {
    id: 2,
    title: "Increased hallucination rate in Technical Documentation",
    description: "Factual hallucinations have increased by 40% this week",
    severity: "medium",
    date: "2025-04-13T14:45:00",
    status: "active",
  },
  {
    id: 3,
    title: "Snippet reuse declined by 30% last month",
    description:
      "Marketing team is creating more original content than reusing approved snippets",
    severity: "low",
    date: "2025-04-10T11:30:00",
    status: "resolved",
  },
  {
    id: 4,
    title: "Formal tone guardrails exceeded in Social Media content",
    description: "3 drafts exceeded tone guardrails and were auto-flagged",
    severity: "medium",
    date: "2025-04-08T16:20:00",
    status: "resolved",
  },
  {
    id: 5,
    title: "New prompt performance issue",
    description:
      "The 'Q2 Campaign Brief' prompt is generating below-quality content (score: 68)",
    severity: "medium",
    date: "2025-04-07T10:15:00",
    status: "active",
  },
];

const aiSuggestions = [
  {
    id: 1,
    suggestion: "Consider revising Product Launch prompt to improve clarity",
    reasoning:
      "Analyzing the 5 drifted content pieces reveals confusion around product specifications",
  },
  {
    id: 2,
    suggestion:
      "Add fallback for aggressive tone drift in Technical Documentation",
    reasoning:
      "This content type consistently shows tone issues when technical complexity increases",
  },
  {
    id: 3,
    suggestion: "Create new snippet for recurring legal disclaimer",
    reasoning:
      "Team is rewriting the same disclaimer with slight variations, causing inconsistency",
  },
];

const DriftInsightDashboard = () => {
  const [timeRange, setTimeRange] = useState("3m");
  const [selectedView, setSelectedView] = useState("campaign");
  const [alertFilter, setAlertFilter] = useState("all");

  // Format date for display
  const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Format the tooltip date for the charts
  const formatTooltipDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Format the alert time
  const formatAlertTime = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  // Get color for alert severity
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredAlerts = alerts.filter((alert) => {
    if (alertFilter === "all") return true;
    if (alertFilter === "active") return alert.status === "active";
    if (alertFilter === "resolved") return alert.status === "resolved";
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b shadow-sm py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Drift & Insight Dashboard
        </h1>
        <p className="text-gray-600">
          Monitor tone drift, hallucinations, and content performance trends
        </p>
      </div>

      {/* Controls */}
      <div className="p-6">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex space-x-3">
            <div className="inline-flex items-center bg-white border rounded-lg overflow-hidden">
              <button
                className={`px-4 py-2 ${
                  timeRange === "1m"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setTimeRange("1m")}
              >
                1M
              </button>
              <button
                className={`px-4 py-2 ${
                  timeRange === "3m"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setTimeRange("3m")}
              >
                3M
              </button>
              <button
                className={`px-4 py-2 ${
                  timeRange === "6m"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setTimeRange("6m")}
              >
                6M
              </button>
              <button
                className={`px-4 py-2 ${
                  timeRange === "ytd"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setTimeRange("ytd")}
              >
                YTD
              </button>
            </div>

            <div className="inline-flex items-center bg-white border rounded-lg">
              <button className="px-4 py-2 text-gray-600 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Custom
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>

          <div className="flex space-x-3 mt-3 md:mt-0">
            <div className="inline-flex items-center bg-white border rounded-lg overflow-hidden">
              <button
                className={`px-4 py-2 ${
                  selectedView === "campaign"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setSelectedView("campaign")}
              >
                Campaign
              </button>
              <button
                className={`px-4 py-2 ${
                  selectedView === "module"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setSelectedView("module")}
              >
                Module
              </button>
            </div>

            <button className="p-2 bg-white border rounded-lg text-gray-600">
              <Download className="h-5 w-5" />
            </button>

            <button className="p-2 bg-white border rounded-lg text-gray-600">
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="xl:col-span-2 space-y-6">
            {/* Tone Drift Chart */}
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">
                  Tone Drift Over Time
                </h2>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Filter className="h-5 w-5" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={toneData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={formatDate}
                      stroke="#9ca3af"
                    />
                    <YAxis
                      domain={[60, 100]}
                      stroke="#9ca3af"
                      tickFormatter={(value: any) => `${value}`}
                    />
                    <Tooltip
                      labelFormatter={(value: string | number | Date) =>
                        formatTooltipDate(value)
                      }
                      formatter={(value: number) => [
                        `${value}`,
                        value === toneData[0].baseline
                          ? "Brand Baseline"
                          : "Actual Score",
                      ]}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="baseline"
                      stroke="#9333ea"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                      name="Brand Baseline"
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#2563eb"
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                      name="Actual Score"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    Current Trend:{" "}
                    <span className="text-yellow-600 font-medium">
                      -2.3% variance
                    </span>
                  </span>
                  <span>
                    Average Score:{" "}
                    <span className="font-medium">79.4 / 100</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Hallucination Count Chart */}
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">
                  Hallucination Count & Types
                </h2>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Filter className="h-5 w-5" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={hallucinationData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={formatDate}
                      stroke="#9ca3af"
                    />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      labelFormatter={(value: string | number | Date) =>
                        formatTooltipDate(value)
                      }
                      formatter={(value: any, name: string | number) => {
                        const displayName = {
                          factual: "Factual Error",
                          citation: "Citation Error",
                          relevance: "Relevance Error",
                        };
                        return [
                          value,
                          displayName[name as keyof typeof displayName] || name,
                        ];
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="factual"
                      name="Factual Error"
                      fill="#ef4444"
                      barSize={20}
                    />
                    <Bar
                      dataKey="citation"
                      name="Citation Error"
                      fill="#f97316"
                      barSize={20}
                    />
                    <Bar
                      dataKey="relevance"
                      name="Relevance Error"
                      fill="#eab308"
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    Total Count:{" "}
                    <span className="font-medium">43 hallucinations</span>
                  </span>
                  <span>
                    Trend:{" "}
                    <span className="text-green-600 font-medium">
                      -18% this month
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Alerts & AI Suggestions */}
          <div className="space-y-6">
            {/* Alert Summary */}
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">
                  Alert Summary
                </h2>
                <div className="inline-flex rounded-md border">
                  <button
                    className={`px-3 py-1 text-sm ${
                      alertFilter === "all"
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600"
                    }`}
                    onClick={() => setAlertFilter("all")}
                  >
                    All
                  </button>
                  <button
                    className={`px-3 py-1 text-sm ${
                      alertFilter === "active"
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600"
                    }`}
                    onClick={() => setAlertFilter("active")}
                  >
                    Active
                  </button>
                  <button
                    className={`px-3 py-1 text-sm ${
                      alertFilter === "resolved"
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600"
                    }`}
                    onClick={() => setAlertFilter("resolved")}
                  >
                    Resolved
                  </button>
                </div>
              </div>

              <div className="space-y-3 max-h-80 overflow-y-auto">
                {filteredAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="border rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-full mt-0.5 ${getSeverityColor(
                          alert.severity
                        )}`}
                      >
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-gray-900">
                            {alert.title}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {formatAlertTime(alert.date)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {alert.description}
                        </p>
                        <div className="flex justify-between mt-2">
                          <div className="flex space-x-2">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${getSeverityColor(
                                alert.severity
                              )}`}
                            >
                              {alert.severity.charAt(0).toUpperCase() +
                                alert.severity.slice(1)}
                            </span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                alert.status === "active"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {alert.status.charAt(0).toUpperCase() +
                                alert.status.slice(1)}
                            </span>
                          </div>
                          <button className="text-xs text-blue-600 hover:text-blue-800">
                            {alert.status === "active"
                              ? "Resolve"
                              : "View Details"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  View All Alerts
                </button>
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">
                  AI Suggestions
                </h2>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Refresh
                </button>
              </div>

              <div className="space-y-4">
                {aiSuggestions.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 border rounded-lg bg-blue-50 border-blue-100"
                  >
                    <div className="flex gap-3">
                      <div className="p-2 rounded-full bg-blue-100 mt-0.5">
                        <Zap className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {item.suggestion}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.reasoning}
                        </p>
                        <div className="mt-2 flex space-x-2">
                          <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                            Apply
                          </button>
                          <button className="text-xs bg-white text-gray-600 px-3 py-1 rounded border hover:bg-gray-50">
                            Dismiss
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
      </div>
    </div>
  );
};

export default DriftInsightDashboard;
