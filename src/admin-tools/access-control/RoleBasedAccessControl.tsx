import { useState } from "react";
import {
  Search,
  Save,
  UserPlus,
  Filter,
  Settings,
  Info,
} from "lucide-react";

const RoleBasedAccessControl = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // Mock data
  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      role: "Copywriter",
      lastLogin: "3h ago",
      status: "Active",
    },
    {
      id: 2,
      name: "Michael Lee",
      email: "michael.l@company.com",
      role: "Strategist",
      lastLogin: "Yesterday",
      status: "Active",
    },
    {
      id: 3,
      name: "Jessica Chen",
      email: "j.chen@company.com",
      role: "Legal/QA",
      lastLogin: "1d ago",
      status: "Active",
    },
    {
      id: 4,
      name: "Thomas Wright",
      email: "t.wright@company.com",
      role: "Designer",
      lastLogin: "4h ago",
      status: "Active",
    },
    {
      id: 5,
      name: "Amanda Patel",
      email: "a.patel@company.com",
      role: "Admin",
      lastLogin: "Just now",
      status: "Active",
    },
    {
      id: 6,
      name: "Carlos Rodriguez",
      email: "c.rodriguez@company.com",
      role: "Executive",
      lastLogin: "2d ago",
      status: "Active",
    },
    {
      id: 7,
      name: "Emily Turner",
      email: "e.turner@company.com",
      role: "Copywriter",
      lastLogin: "1w ago",
      status: "Pending Invite",
    },
    {
      id: 8,
      name: "David Smith",
      email: "d.smith@company.com",
      role: "Viewer",
      lastLogin: "5d ago",
      status: "Deactivated",
    },
  ];

  const roles = [
    "Admin",
    "Copywriter",
    "Strategist",
    "Legal/QA",
    "Designer",
    "Executive",
    "Viewer",
  ];

  const modules = [
    { name: "Create Zone", permissions: ["View", "Edit", "Approve", "Export"] },
    { name: "Memory Zone", permissions: ["View", "Edit", "Approve", "Export"] },
    {
      name: "Publish Zone",
      permissions: ["View", "Edit", "Approve", "Export"],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending Invite":
        return "bg-yellow-100 text-yellow-800";
      case "Deactivated":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col h-full bg-white p-6 rounded-lg shadow">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Role-Based Access Control
        </h1>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-md font-medium hover:bg-indigo-100 transition">
            <Settings className="w-4 h-4 mr-2" />
            Role Settings
          </button>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition">
            <UserPlus className="w-4 h-4 mr-2" />
            Add New User
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search users by name or email"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>

        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All Roles</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Pending Invite">Pending Invite</option>
            <option value="Deactivated">Deactivated</option>
          </select>

          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2 text-gray-500" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Main Content - User Table */}
      <div className="flex-grow overflow-auto border border-gray-200 rounded-md">
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
            {users.map((user) => (
              <tr
                key={user.id}
                className={`${
                  selectedUser?.id === user.id
                    ? "bg-indigo-50"
                    : "hover:bg-gray-50"
                } cursor-pointer`}
                onClick={() => setSelectedUser(user)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-medium">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    className="text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue={user.role}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      View Activity
                    </button>
                    <button
                      className="text-gray-600 hover:text-gray-900"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Reset Password
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {user.status === "Deactivated"
                        ? "Reactivate"
                        : "Deactivate"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Permission Matrix Panel - shown when user is selected */}
      {selectedUser && (
        <div className="mt-6 border border-gray-200 rounded-md p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">
              Permissions for {selectedUser.name} ({selectedUser.role})
            </h2>
            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Module
                  </th>
                  {["View", "Edit", "Approve", "Export"].map((perm) => (
                    <th
                      key={perm}
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {perm}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {modules.map((module) => (
                  <tr key={module.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {module.name}
                    </td>
                    {module.permissions.map((perm) => (
                      <td
                        key={`${module.name}-${perm}`}
                        className="px-6 py-4 whitespace-nowrap text-center"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          defaultChecked={
                            selectedUser.role === "Admin" ||
                            (selectedUser.role === "Legal/QA" &&
                              perm === "Approve")
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start text-sm text-gray-500">
            <Info className="flex-shrink-0 h-5 w-5 mr-2 text-gray-400" />
            <p>
              The {selectedUser.role} role has default permissions that can be
              customized. Changes made here will only affect this user, not the
              overall role definition.
            </p>
          </div>
        </div>
      )}

      {/* Role Definitions Panel */}
      <div className="mt-6 border border-gray-200 rounded-md p-6 bg-white">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Role Definitions Reference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div key={role} className="border border-gray-200 rounded-md p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{role}</h3>
                <span
                  className={`px-2 py-1 text-xs leading-4 font-semibold rounded-full ${
                    role === "Admin"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {role === "Admin" ? "Full Access" : "Limited Access"}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                {role === "Admin" &&
                  "Full access to settings, users, governance, exports"}
                {role === "Copywriter" &&
                  "Can generate/edit content but not validate or publish"}
                {role === "Strategist" &&
                  "Can configure prompts, tone rules, analyze drift"}
                {role === "Legal/QA" &&
                  "Review and approve drafts, edit governance rules"}
                {role === "Designer" &&
                  "Access Visual Asset Studio and export assets"}
                {role === "Executive" &&
                  "View summaries, approve content, voice interactions only"}
                {role === "Viewer" && "Read-only access across modules"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleBasedAccessControl;
