import { useState } from "react";
import {
  Search,
  UserPlus,
  Filter,
  Download,
  Save,
  MoreHorizontal,
  ChevronDown,
  X,
  Info,
  Users,
} from "lucide-react";
import RoleDefinitionsDrawer from "./RoleDefenitionsDrawer";

const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showRoleDefinitions, setShowRoleDefinitions] = useState(false);

  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      role: "Copywriter",
      lastActive: "3h ago",
      status: "Active",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.c@company.com",
      role: "Strategist",
      lastActive: "Yesterday",
      status: "Active",
    },
    {
      id: 3,
      name: "Priya Patel",
      email: "priya.p@company.com",
      role: "Legal/QA",
      lastActive: "2d ago",
      status: "Active",
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      email: "carlos.r@company.com",
      role: "Designer",
      lastActive: "1h ago",
      status: "Active",
    },
    {
      id: 5,
      name: "Emma Wilson",
      email: "emma.w@company.com",
      role: "Admin",
      lastActive: "Just now",
      status: "Active",
    },
    {
      id: 6,
      name: "Alex Nguyen",
      email: "alex.n@company.com",
      role: "Copywriter",
      lastActive: "5d ago",
      status: "Pending Invite",
    },
    {
      id: 7,
      name: "James Walker",
      email: "james.w@company.com",
      role: "Executive",
      lastActive: "1w ago",
      status: "Deactivated",
    },
  ];

  // Filter members based on active tab
  const filteredMembers = teamMembers.filter((member) => {
    if (activeTab === "active") return member.status === "Active";
    if (activeTab === "pending") return member.status === "Pending Invite";
    if (activeTab === "deactivated") return member.status === "Deactivated";
    return true;
  });

  // Roles for dropdown
  const roles = [
    "Copywriter",
    "Strategist",
    "Legal/QA",
    "Designer",
    "Admin",
    "Executive",
    "Viewer",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top navigation bar */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Signal Studio</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={16} className="text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              EW
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Team Management</h2>
          <div className="flex items-center space-x-3">
            <button
              className="border border-gray-300 bg-white text-blue-600 px-3 py-2 rounded-md flex items-center text-sm"
              onClick={() => setShowRoleDefinitions(true)}
            >
              <Users size={16} className="mr-2" />
              Role Definitions
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
              onClick={() => setShowAddUserModal(true)}
            >
              <UserPlus size={18} className="mr-2" />
              Add New User
            </button>
          </div>
        </div>

        {/* Filters & controls row */}
        <div className="bg-white rounded-md shadow-sm p-4 mb-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <button className="flex items-center space-x-2 text-gray-600 border rounded-md px-3 py-2">
                <Filter size={16} />
                <span>Filter</span>
                <ChevronDown size={16} />
              </button>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search size={16} className="text-gray-400" />
                </span>
                <input
                  type="text"
                  placeholder="Find users..."
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-md text-sm"
                />
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 text-gray-700 border rounded-md px-3 py-2">
                <Download size={16} />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-700 border rounded-md px-3 py-2">
                <Save size={16} />
                <span>Save View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "active"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("active")}
          >
            Active Users (
            {teamMembers.filter((m) => m.status === "Active").length})
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "pending"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Invites (
            {teamMembers.filter((m) => m.status === "Pending Invite").length})
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "deactivated"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("deactivated")}
          >
            Deactivated (
            {teamMembers.filter((m) => m.status === "Deactivated").length})
          </button>
        </div>

        {/* Team Activity Summary (Optional Panel) */}
        <div className="bg-white rounded-md shadow-sm p-4 mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Team Activity Snapshot
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">
                Users Active This Week
              </div>
              <div className="flex justify-between items-end mt-1">
                <div className="text-xl font-semibold">12 of 28</div>
                <div className="text-xs text-green-600">+2 from last week</div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">Drafts Created</div>
              <div className="flex justify-between items-end mt-1">
                <div className="text-xl font-semibold">172</div>
                <div className="text-xs text-gray-500">by Sarah & team</div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">Pending Approvals</div>
              <div className="flex justify-between items-end mt-1">
                <div className="text-xl font-semibold">7</div>
                <div className="text-xs text-yellow-600">3 escalated</div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">Recent Joiners</div>
              <div className="flex justify-between items-end mt-1">
                <div className="text-xl font-semibold">3</div>
                <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                  View all
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-right">
            <a href="#" className="text-blue-600 hover:underline">
              View Full Team Analytics →
            </a>
          </div>
        </div>

        {/* Team member table */}
        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Active
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
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
              {filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {member.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      className="text-sm border rounded p-1 bg-transparent"
                      defaultValue={member.role}
                    >
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {member.lastActive}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        member.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : member.status === "Pending Invite"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="relative inline-block text-left">
                      <button className="text-gray-600 hover:text-gray-900 p-1">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add User Modal */}
        {showAddUserModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-lg font-medium text-gray-900">
                  Add New User
                </h3>
                <button
                  className="text-gray-400 hover:text-gray-500"
                  onClick={() => setShowAddUserModal(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6">
                <form>
                  {/* Bulk email input */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <textarea
                      className="w-full border rounded-md p-2 h-24 text-sm"
                      placeholder="Enter email addresses separated by commas or new lines"
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">
                      You can invite multiple users at once
                    </p>
                  </div>

                  {/* Role selector */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Assign Role
                    </label>
                    <select className="w-full border rounded-md p-2 text-sm">
                      <option value="">Select role for all users</option>
                      <option value="Copywriter">Copywriter</option>
                      <option value="Strategist">Strategist</option>
                      <option value="Legal/QA">Legal/QA</option>
                      <option value="Designer">Designer</option>
                      <option value="Admin">Admin</option>
                      <option value="Executive">Executive</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                  </div>

                  {/* Welcome note */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Welcome Note (Optional)
                    </label>
                    <textarea
                      className="w-full border rounded-md p-2 h-20 text-sm"
                      placeholder="Add a personalized message to the invite email"
                    ></textarea>
                  </div>

                  {/* License info */}
                  <div className="flex items-center p-3 bg-blue-50 rounded-md mb-4">
                    <Info
                      size={16}
                      className="text-blue-500 mr-2 flex-shrink-0"
                    />
                    <p className="text-xs text-blue-700">
                      You're currently using 5 of 10 available licenses. Adding
                      these users will consume additional licenses.
                    </p>
                  </div>

                  {/* Preview section */}
                  <div className="bg-gray-50 p-3 rounded-md mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Preview
                    </h4>
                    <p className="text-xs text-gray-600">
                      You're inviting{" "}
                      <span className="font-medium">3 users</span> as{" "}
                      <span className="font-medium">Copywriters</span>
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      onClick={() => setShowAddUserModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Send Invites
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Role Definitions side drawer */}
        <RoleDefinitionsDrawer
          isOpen={showRoleDefinitions}
          onClose={() => setShowRoleDefinitions(false)}
        />
      </div>
    </div>
  );
};

export default TeamManagement;
