import React, { useState } from "react";
import {
  Search,
  Filter,
  Edit,
  Check,
  X,
  Eye,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Clock,
  AlertTriangle,
  User,
  FileText,
  ExternalLink,
  MessageCircle,
  Activity,
  Link,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContentManagementWorkspace = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");
  const [viewMode, setViewMode] = useState("table");
  const navigate = useNavigate();

  // Sample data
  const contentItems = [
    {
      id: 1,
      title: "Summer Launch Email",
      type: "Email",
      campaign: "Summer 2025 Collection",
      lastEdited: "2 hours ago",
      editedBy: "Amanda Chen",
      status: "In Review",
      toneScore: 87,
      approvalStage: "Waiting for Legal",
      tags: ["Email", "Promotional", "Q3"],
    },
    {
      id: 2,
      title: "Product Page - Fitness Tracker",
      type: "Product Copy",
      campaign: "New Product Releases",
      lastEdited: "Yesterday",
      editedBy: "David Wilson",
      status: "Draft",
      toneScore: 72,
      approvalStage: "Not Started",
      tags: ["Product", "Technical", "Featured"],
    },
    {
      id: 3,
      title: "Customer Welcome Sequence",
      type: "Email Sequence",
      campaign: "Onboarding Flow",
      lastEdited: "April 22, 2025",
      editedBy: "Sarah Johnson",
      status: "Approved",
      toneScore: 94,
      approvalStage: "Complete",
      tags: ["Email", "Onboarding", "Automated"],
    },
    {
      id: 4,
      title: "Summer Sale Banner Copy",
      type: "Web Banner",
      campaign: "Summer 2025 Collection",
      lastEdited: "April 23, 2025",
      editedBy: "Amanda Chen",
      status: "Needs Revision",
      toneScore: 65,
      approvalStage: "Rejected by Marketing",
      tags: ["Banner", "Promotional", "Q3"],
    },
    {
      id: 5,
      title: "Blog Post: 10 Summer Trends",
      type: "Blog Post",
      campaign: "Content Marketing",
      lastEdited: "April 21, 2025",
      editedBy: "Thomas Lee",
      status: "Ready to Publish",
      toneScore: 89,
      approvalStage: "Complete",
      tags: ["Blog", "SEO", "Trends"],
    },
  ];

  // Filter content based on active tab
  const filteredContent = contentItems.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "drafts") return item.status === "Draft";
    if (activeTab === "review") return item.status === "In Review";
    if (activeTab === "approved")
      return item.status === "Approved" || item.status === "Ready to Publish";
    if (activeTab === "rejected") return item.status === "Needs Revision";
    return true;
  });

  // Sort content
  const sortedContent = [...filteredContent].sort((a, b) => {
    if (sortBy === "date") {
      // Simplified for demo purposes
      return sortDirection === "asc" ? a.id - b.id : b.id - a.id;
    }
    if (sortBy === "title") {
      return sortDirection === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    if (sortBy === "score") {
      return sortDirection === "asc"
        ? a.toneScore - b.toneScore
        : b.toneScore - a.toneScore;
    }
    return 0;
  });

  // Toggle sort direction
  const toggleSort = (field: React.SetStateAction<string>) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("desc");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Draft":
        return "bg-gray-200 text-gray-800";
      case "In Review":
        return "bg-blue-100 text-blue-800";
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Ready to Publish":
        return "bg-green-100 text-green-800";
      case "Needs Revision":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 75) return "text-blue-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const renderSortIcon = (field: string) => {
    if (sortBy !== field) return null;
    return sortDirection === "asc" ? (
      <ArrowUp size={14} />
    ) : (
      <ArrowDown size={14} />
    );
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Content Management
          </h1>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <FileText size={16} />
              <span>New Draft</span>
            </button>
            <div className="flex border border-gray-300 rounded-md">
              <button
                className={`px-3 py-1 ${
                  viewMode === "table" ? "bg-gray-100" : "bg-white"
                }`}
                onClick={() => setViewMode("table")}
              >
                Table
              </button>
              <button
                className={`px-3 py-1 ${
                  viewMode === "kanban" ? "bg-gray-100" : "bg-white"
                }`}
                onClick={() => setViewMode("kanban")}
              >
                Kanban
              </button>
              <button
                className={`px-3 py-1 ${
                  viewMode === "calendar" ? "bg-gray-100" : "bg-white"
                }`}
                onClick={() => setViewMode("calendar")}
              >
                Calendar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and search */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            <button
              className={`px-4 py-2 font-medium rounded-md ${
                activeTab === "all"
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Content
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-md ${
                activeTab === "drafts"
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("drafts")}
            >
              Drafts
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-md ${
                activeTab === "review"
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("review")}
            >
              In Review
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-md ${
                activeTab === "approved"
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("approved")}
            >
              Approved
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-md ${
                activeTab === "rejected"
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("rejected")}
            >
              Needs Revision
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search content..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-md bg-white">
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content table */}
      <div className="flex-1 p-6 overflow-auto">
        {viewMode === "table" && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  >
                    <div
                      className="flex items-center space-x-1"
                      onClick={() =>
                        navigate("signals/contentmanagement/details")
                      }
                    >
                      <span>Content</span>
                      {renderSortIcon("title")}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Campaign
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => toggleSort("date")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Last Edited</span>
                      {renderSortIcon("date")}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => toggleSort("score")}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Tone Score</span>
                      {renderSortIcon("score")}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Approval
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedContent.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className="text-sm font-medium text-indigo-600"
                        onClick={() =>
                          navigate("/dashboard/contentmanagement/details")
                        }
                      >
                        {item.title}
                      </div>

                      <div className="text-xs text-gray-500">
                        Edited by {item.editedBy}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.campaign}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex items-center">
                        <Clock size={14} className="text-gray-400 mr-1" />
                        {item.lastEdited}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`text-sm font-medium ${getScoreColor(
                          item.toneScore
                        )}`}
                      >
                        {item.toneScore}/100
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.approvalStage}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Edit size={18} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Eye size={18} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {viewMode === "kanban" && (
          <div className="flex space-x-4 h-full overflow-x-auto pb-4">
            {/* Draft column */}
            <div className="flex-shrink-0 w-80">
              <div className="bg-gray-100 rounded-lg p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">Draft</h3>
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {contentItems.filter((i) => i.status === "Draft").length}
                  </span>
                </div>
                <div className="space-y-3">
                  {contentItems
                    .filter((i) => i.status === "Draft")
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-white p-3 rounded-md shadow-sm border border-gray-200"
                      >
                        <h4 className="font-medium text-indigo-600 mb-1">
                          {item.title}
                        </h4>
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>{item.type}</span>
                          <span>Score: {item.toneScore}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                            {item.campaign}
                          </div>
                          <div className="flex space-x-1">
                            <button className="text-gray-400 hover:text-gray-600">
                              <Edit size={14} />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                              <MoreHorizontal size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* In Review column */}
            <div className="flex-shrink-0 w-80">
              <div className="bg-blue-50 rounded-lg p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-blue-700">In Review</h3>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                    {
                      contentItems.filter((i) => i.status === "In Review")
                        .length
                    }
                  </span>
                </div>
                <div className="space-y-3">
                  {contentItems
                    .filter((i) => i.status === "In Review")
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-white p-3 rounded-md shadow-sm border border-gray-200"
                      >
                        <h4 className="font-medium text-indigo-600 mb-1">
                          {item.title}
                        </h4>
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>{item.type}</span>
                          <span>Score: {item.toneScore}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                            {item.approvalStage}
                          </div>
                          <div className="flex space-x-1">
                            <button className="text-gray-400 hover:text-gray-600">
                              <Check size={14} />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Needs Revision column */}
            <div className="flex-shrink-0 w-80">
              <div className="bg-red-50 rounded-lg p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-red-700">Needs Revision</h3>
                  <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                    {
                      contentItems.filter((i) => i.status === "Needs Revision")
                        .length
                    }
                  </span>
                </div>
                <div className="space-y-3">
                  {contentItems
                    .filter((i) => i.status === "Needs Revision")
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-white p-3 rounded-md shadow-sm border border-gray-200"
                      >
                        <h4 className="font-medium text-indigo-600 mb-1">
                          {item.title}
                        </h4>
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>{item.type}</span>
                          <span className="text-red-600">
                            Score: {item.toneScore}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs bg-red-100 px-2 py-1 rounded text-red-600">
                            <AlertTriangle size={10} className="inline mr-1" />
                            {item.approvalStage}
                          </div>
                          <div className="flex space-x-1">
                            <button className="text-gray-400 hover:text-gray-600">
                              <Edit size={14} />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                              <MessageCircle size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Approved column */}
            <div className="flex-shrink-0 w-80">
              <div className="bg-green-50 rounded-lg p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-green-700">Approved</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    {
                      contentItems.filter(
                        (i) =>
                          i.status === "Approved" ||
                          i.status === "Ready to Publish"
                      ).length
                    }
                  </span>
                </div>
                <div className="space-y-3">
                  {contentItems
                    .filter(
                      (i) =>
                        i.status === "Approved" ||
                        i.status === "Ready to Publish"
                    )
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-white p-3 rounded-md shadow-sm border border-gray-200"
                      >
                        <h4 className="font-medium text-indigo-600 mb-1">
                          {item.title}
                        </h4>
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>{item.type}</span>
                          <span className="text-green-600">
                            Score: {item.toneScore}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs bg-green-100 px-2 py-1 rounded text-green-600">
                            <Check size={10} className="inline mr-1" />
                            Complete
                          </div>
                          <div className="flex space-x-1">
                            <button className="text-gray-400 hover:text-gray-600">
                              <Eye size={14} />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                              <ExternalLink size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick stats footer */}
      <div className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-between text-sm text-gray-500">
          <div>
            <span className="font-medium">{contentItems.length} items</span> in
            workspace
          </div>
          <div className="flex space-x-6">
            <div>
              <span className="font-medium">
                {contentItems.filter((i) => i.status === "Draft").length}
              </span>{" "}
              Drafts
            </div>
            <div>
              <span className="font-medium">
                {contentItems.filter((i) => i.status === "In Review").length}
              </span>{" "}
              In Review
            </div>
            <div>
              <span className="font-medium">
                {
                  contentItems.filter((i) => i.status === "Needs Revision")
                    .length
                }
              </span>{" "}
              Need Revision
            </div>
            <div>
              <span className="font-medium">
                {
                  contentItems.filter(
                    (i) =>
                      i.status === "Approved" || i.status === "Ready to Publish"
                  ).length
                }
              </span>{" "}
              Approved
            </div>
            <div>
              <span className="font-medium">
                {Math.round(
                  contentItems.reduce((acc, item) => acc + item.toneScore, 0) /
                    contentItems.length
                )}
              </span>{" "}
              Avg. Tone Score
            </div>
          </div>
        </div>
      </div>

      {/* Right sidebar for content details (hidden by default) */}
      <div className="hidden fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-800">Content Details</h3>
          <button className="text-gray-500 hover:text-gray-700">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-medium text-indigo-600">
              Summer Launch Email
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Last edited 2 hours ago by Amanda Chen
            </p>
          </div>

          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              In Review
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
              Email
            </span>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-700 mb-2">
              Approval Status
            </h5>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-700">Waiting for Legal</span>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-700 mb-2">
              Tone Score
            </h5>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">
                87/100
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-700 mb-2">Tags</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                Email
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                Promotional
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                Q3
              </span>
              <button className="px-2 py-1 border border-dashed border-gray-300 text-gray-500 text-xs rounded-full">
                + Add
              </button>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-700 mb-2">
              Content Preview
            </h5>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-700">
              <p>Subject: Summer is here! Check out our new collection</p>
              <p className="mt-2">Hi [Customer Name],</p>
              <p className="mt-1">
                The sun is shining and our Summer Collection has just dropped...
              </p>
              <button className="mt-2 text-indigo-600 text-xs font-medium">
                View full content →
              </button>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-700 mb-2">
              Approval History
            </h5>
            <div className="space-y-3">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check size={12} className="text-white" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">
                    Approved by Marketing
                  </p>
                  <p className="text-xs text-gray-500">April 23, 9:30 AM</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <Clock size={12} className="text-white" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">
                    Waiting for Legal
                  </p>
                  <p className="text-xs text-gray-500">
                    Since April 23, 10:15 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <button className="flex-1 bg-indigo-600 text-white py-2 rounded-md text-sm">
                Edit Content
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md text-sm">
                Submit for Approval
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comment sidebar */}
      <div className="hidden fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-200 overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">
            Comments & Feedback
          </h3>
          <button className="text-gray-500 hover:text-gray-700">
            <X size={18} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <User size={16} className="text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-900">
                  Sarah Johnson
                </p>
                <p className="text-xs text-gray-500">Yesterday, 2:34 PM</p>
              </div>
              <p className="text-sm text-gray-700 mt-1">
                The tone is too casual for our enterprise customers. Let's
                revise the opening paragraph to be more professional.
              </p>
              <div className="mt-2">
                <button className="text-xs text-indigo-600 font-medium">
                  Reply
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 pl-8">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <User size={16} className="text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-900">Amanda Chen</p>
                <p className="text-xs text-gray-500">Yesterday, 3:15 PM</p>
              </div>
              <p className="text-sm text-gray-700 mt-1">
                Good point! I've updated the intro to be more formal.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
              <User size={16} className="text-yellow-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-900">
                  David Wilson
                </p>
                <p className="text-xs text-gray-500">Today, 9:07 AM</p>
              </div>
              <p className="text-sm text-gray-700 mt-1">
                The legal disclaimer needs to be updated with our new terms. Can
                we add the standard template from the Snippet Library?
              </p>
              <div className="mt-2">
                <button className="text-xs text-indigo-600 font-medium">
                  Reply
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <textarea
              placeholder="Add a comment..."
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows={3}
            ></textarea>
            <div className="flex justify-end mt-2">
              <button className="bg-indigo-600 text-white px-3 py-1 text-sm rounded-md">
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Timeline sidebar */}
      <div className="hidden fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-200 overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">
            Activity Timeline
          </h3>
          <button className="text-gray-500 hover:text-gray-700">
            <X size={18} />
          </button>
        </div>

        <div className="p-4">
          <div className="flex space-x-2 mb-6">
            <button className="px-3 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-md">
              All Activity
            </button>
            <button className="px-3 py-1 text-xs text-gray-500 rounded-md">
              Edits
            </button>
            <button className="px-3 py-1 text-xs text-gray-500 rounded-md">
              Approvals
            </button>
            <button className="px-3 py-1 text-xs text-gray-500 rounded-md">
              Comments
            </button>
          </div>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-6">
              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center z-10">
                    <Edit size={12} className="text-indigo-600" />
                  </div>
                </div>
                <div className="ml-10">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">
                      Amanda Chen edited content
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Today, 10:42 AM
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Updated introduction paragraph and CTA button text.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center z-10">
                    <Clock size={12} className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-10">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">
                      Sent for review
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Today, 10:45 AM
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Content sent to Legal team for review.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center z-10">
                    <Check size={12} className="text-green-600" />
                  </div>
                </div>
                <div className="ml-10">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">
                      Marketing team approved
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Today, 9:30 AM</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Approved by Sarah Johnson
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center z-10">
                    <MessageCircle size={12} className="text-purple-600" />
                  </div>
                </div>
                <div className="ml-10">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">
                      David Wilson commented
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Today, 9:07 AM</p>
                  <p className="text-sm text-gray-700 mt-2">
                    The legal disclaimer needs to be updated with our new
                    terms...
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center z-10">
                    <Activity size={12} className="text-yellow-600" />
                  </div>
                </div>
                <div className="ml-10">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">
                      Tone analysis completed
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Yesterday, 4:32 PM
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Tone score: 87/100 (Aligned with brand voice)
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center z-10">
                    <Edit size={12} className="text-indigo-600" />
                  </div>
                </div>
                <div className="ml-10">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">
                      Draft created
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Yesterday, 2:15 PM
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Initial draft created by Amanda Chen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagementWorkspace;
