import { SetStateAction, useState } from "react";
import {
  PlusCircle,
  Search,
  ChevronDown,
  Filter,
  CheckSquare,
  Square,
  Mail,
  AlertTriangle,
  X,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  RotateCcw,
  Trash2,
} from "lucide-react";

const DeactivatedPendingTabs = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState("pending"); // 'pending', 'deactivated'

  // Filter and search states
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date"); // 'date', 'name', 'role'

  // Selected items for bulk actions
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  // Modal states
  const [showResendModal, setShowResendModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showReactivateModal, setShowReactivateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserForAction, setSelectedUserForAction] = useState<null | {
    id: number;
    name: string;
    email: string;
    role: string;
    inviteSent?: string;
    expiresIn?: string;
    deactivationDate?: string;
    deactivatedBy?: string;
    lastActive?: string;
    status: string;
  }>(null);

  // Sample data for pending invites
  const pendingInvites = [
    {
      id: 1,
      name: "Emily Brown",
      email: "emily.b@company.com",
      role: "Copywriter",
      inviteSent: "2 days ago",
      expiresIn: "5 days",
      status: "Pending",
    },
    {
      id: 2,
      name: "Thomas Wright",
      email: "thomas.w@company.com",
      role: "Designer",
      inviteSent: "3 days ago",
      expiresIn: "4 days",
      status: "Pending",
    },
    {
      id: 3,
      name: "Jessica Parker",
      email: "jessica.p@company.com",
      role: "Strategist",
      inviteSent: "1 day ago",
      expiresIn: "6 days",
      status: "Pending",
    },
  ];

  // Sample data for deactivated users
  const deactivatedUsers = [
    {
      id: 4,
      name: "Daniel Kim",
      email: "daniel.k@company.com",
      role: "Legal/QA",
      deactivationDate: "Apr 10, 2025",
      deactivatedBy: "Amanda Lee (Admin)",
      lastActive: "15 days ago",
      status: "Deactivated",
    },
    {
      id: 5,
      name: "Jennifer Lopez",
      email: "jennifer.l@company.com",
      role: "Executive",
      deactivationDate: "Apr 8, 2025",
      deactivatedBy: "System (Inactivity)",
      lastActive: "45 days ago",
      status: "Deactivated",
    },
    {
      id: 6,
      name: "Michael Stevens",
      email: "michael.s@company.com",
      role: "Copywriter",
      deactivationDate: "Apr 12, 2025",
      deactivatedBy: "Amanda Lee (Admin)",
      lastActive: "10 days ago",
      status: "Deactivated",
    },
  ];

  // Available roles
  const roles = [
    "Copywriter",
    "QA",
    "Designer",
    "Strategist",
    "Admin",
    "Legal/QA",
    "Executive",
    "Viewer",
  ];

  // Helper function to get current data based on active tab
  const getCurrentData = () => {
    return activeTab === "pending" ? pendingInvites : deactivatedUsers;
  };

  // Filtered data based on search and filters
  const filteredData = getCurrentData().filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = roleFilter === "All" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  // Toggle user selection for bulk actions
  const toggleUserSelection = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  // Toggle select all
  const toggleSelectAll = () => {
    if (filteredData.length === selectedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredData.map((user) => user.id));
    }
  };

  // Handle action on single user
  const handleAction = (
    action: string,
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
      inviteSent?: string;
      expiresIn?: string;
      deactivationDate?: string;
      deactivatedBy?: string;
      lastActive?: string;
      status: string;
    }
  ) => {
    setSelectedUserForAction(user);

    switch (action) {
      case "resend":
        setShowResendModal(true);
        break;
      case "cancel":
        setShowCancelModal(true);
        break;
      case "reactivate":
        setShowReactivateModal(true);
        break;
      case "delete":
        setShowDeleteModal(true);
        break;
      default:
        break;
    }
  };

  // Handle bulk action
  const handleBulkAction = (action: string) => {
    // In a real app, this would handle multiple users
    // For the demo, we'll just show the same modals
    switch (action) {
      case "resend":
        setShowResendModal(true);
        break;
      case "cancel":
        setShowCancelModal(true);
        break;
      case "reactivate":
        setShowReactivateModal(true);
        break;
      case "delete":
        setShowDeleteModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Tabs Navigation */}
      <div className="pt-4 px-6">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "pending"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => {
                setActiveTab("pending");
                setSelectedUsers([]);
              }}
            >
              Pending Invites
              <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
                {pendingInvites.length}
              </span>
            </button>
            <button
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "deactivated"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => {
                setActiveTab("deactivated");
                setSelectedUsers([]);
              }}
            >
              Deactivated Users
              <span className="ml-2 bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs">
                {deactivatedUsers.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="px-6 py-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search by name or email"
              className="border border-gray-300 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="All">All Roles</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>

            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="role">Sort by Role</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>

            <button className="text-gray-500 border border-gray-300 rounded-md p-2">
              <Filter size={16} />
            </button>
          </div>
        </div>

        {/* Bulk actions - only show when items are selected */}
        {selectedUsers.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200 flex items-center gap-3">
            <span className="text-sm text-gray-600">
              {selectedUsers.length}{" "}
              {selectedUsers.length === 1 ? "user" : "users"} selected
            </span>

            <div className="flex gap-2">
              {activeTab === "pending" && (
                <>
                  <button
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 text-sm font-medium"
                    onClick={() => handleBulkAction("resend")}
                  >
                    Resend Invite
                  </button>
                  <button
                    className="px-3 py-1 bg-red-50 text-red-700 rounded hover:bg-red-100 text-sm font-medium"
                    onClick={() => handleBulkAction("cancel")}
                  >
                    Cancel Invite
                  </button>
                </>
              )}

              {activeTab === "deactivated" && (
                <>
                  <button
                    className="px-3 py-1 bg-green-50 text-green-700 rounded hover:bg-green-100 text-sm font-medium"
                    onClick={() => handleBulkAction("reactivate")}
                  >
                    Reactivate
                  </button>
                  <button
                    className="px-3 py-1 bg-red-50 text-red-700 rounded hover:bg-red-100 text-sm font-medium"
                    onClick={() => handleBulkAction("delete")}
                  >
                    Remove Permanently
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Table */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 text-left">
                  <div className="flex items-center">
                    <button
                      onClick={toggleSelectAll}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      {filteredData.length > 0 &&
                      filteredData.length === selectedUsers.length ? (
                        <CheckSquare size={18} className="text-blue-600" />
                      ) : (
                        <Square size={18} />
                      )}
                    </button>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>

                {activeTab === "pending" ? (
                  <>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Invite Sent
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Expires In
                    </th>
                  </>
                ) : (
                  <>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Deactivation Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Deactivated By
                    </th>
                  </>
                )}

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.length > 0 ? (
                filteredData.map((user) => (
                  <tr
                    key={user.id}
                    className={`hover:bg-gray-50 ${
                      selectedUsers.includes(user.id) ? "bg-blue-50" : ""
                    }`}
                  >
                    <td className="px-3 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleUserSelection(user.id)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        {selectedUsers.includes(user.id) ? (
                          <CheckSquare size={18} className="text-blue-600" />
                        ) : (
                          <Square size={18} />
                        )}
                      </button>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.role}</div>
                    </td>

                    {activeTab === "pending" ? (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock size={14} className="mr-1 text-gray-400" />
                            {"inviteSent" in user ? user.inviteSent : ""}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar
                              size={14}
                              className="mr-1 text-gray-400"
                            />
                            {"expiresIn" in user ? user.expiresIn : ""}
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {"deactivationDate" in user
                              ? user.deactivationDate
                              : ""}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {"deactivatedBy" in user ? user.deactivatedBy : ""}
                          </div>
                        </td>
                      </>
                    )}

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {activeTab === "pending" && (
                        <div className="flex space-x-2">
                          <button
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => handleAction("resend", user)}
                          >
                            Resend
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleAction("cancel", user)}
                          >
                            Cancel
                          </button>
                        </div>
                      )}

                      {activeTab === "deactivated" && (
                        <div className="flex space-x-2">
                          <button
                            className="text-green-600 hover:text-green-800"
                            onClick={() => handleAction("reactivate", user)}
                          >
                            Reactivate
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleAction("delete", user)}
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    {activeTab === "pending"
                      ? "No pending invites found."
                      : "No deactivated users found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Panel for Pending Invites */}
      {activeTab === "pending" && (
        <div className="px-6 pb-6">
          <div className="bg-blue-50 rounded-lg p-4 flex items-start">
            <AlertTriangle size={20} className="text-blue-500 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-700">
                About Pending Invites
              </h3>
              <p className="text-sm text-blue-600 mt-1">
                Invites expire after 7 days. Users will receive an email with a
                link to set up their account. You can resend invites or cancel
                them if needed. Cancelled invites will invalidate the invitation
                link.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Info Panel for Deactivated Users */}
      {activeTab === "deactivated" && (
        <div className="px-6 pb-6">
          <div className="bg-blue-50 rounded-lg p-4 flex items-start">
            <AlertTriangle size={20} className="text-blue-500 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-700">
                About Deactivated Users
              </h3>
              <p className="text-sm text-blue-600 mt-1">
                Deactivated users cannot log in, but their content and activity
                history are preserved. You can reactivate a user at any time, or
                permanently remove them from the system. Permanent removal
                cannot be undone and will delete all user-specific data.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      {/* Resend Invite Modal */}
      {showResendModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Resend Invitation
              </h3>
              <button
                onClick={() => setShowResendModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">
                Are you sure you want to resend the invitation to:
              </p>

              {selectedUserForAction && (
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      {selectedUserForAction.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">
                        {selectedUserForAction.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {selectedUserForAction.email}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Message (Optional)
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Add a personal note to the invitation email..."
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowResendModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle resend logic here
                  setShowResendModal(false);
                }}
                className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
              >
                Resend Invitation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Invite Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Cancel Invitation
              </h3>
              <button
                onClick={() => setShowCancelModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-center bg-red-50 rounded-full w-12 h-12 mx-auto mb-4">
                <XCircle size={24} className="text-red-500" />
              </div>

              <p className="text-gray-600 text-center">
                Are you sure you want to cancel this invitation? The invite link
                will be invalidated immediately.
              </p>

              {selectedUserForAction && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      {selectedUserForAction.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">
                        {selectedUserForAction.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {selectedUserForAction.email}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Go Back
              </button>
              <button
                onClick={() => {
                  // Handle cancel logic here
                  setShowCancelModal(false);
                }}
                className="px-4 py-2 bg-red-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700"
              >
                Cancel Invitation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reactivate User Modal */}
      {showReactivateModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Reactivate User
              </h3>
              <button
                onClick={() => setShowReactivateModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-center bg-green-50 rounded-full w-12 h-12 mx-auto mb-4">
                <RotateCcw size={24} className="text-green-500" />
              </div>

              <p className="text-gray-600 text-center">
                This will reactivate the user account and restore their access
                to Signal Studio.
              </p>

              {selectedUserForAction && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      {selectedUserForAction.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">
                        {selectedUserForAction.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {selectedUserForAction.email}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <div className="flex">
                  <AlertTriangle
                    size={16}
                    className="text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-blue-700">
                    A notification email will be sent to the user informing them
                    that their account has been reactivated.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowReactivateModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle reactivation logic here
                  setShowReactivateModal(false);
                }}
                className="px-4 py-2 bg-green-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-green-700"
              >
                Reactivate User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete User Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Permanently Remove User
              </h3>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-center bg-red-50 rounded-full w-12 h-12 mx-auto mb-4">
                <Trash2 size={24} className="text-red-500" />
              </div>

              <p className="text-gray-600 text-center font-medium">
                Warning: This action cannot be undone.
              </p>

              <p className="text-gray-600 text-center mt-2">
                Permanently removing this user will delete all their account
                information. Their content, comments, and activity history will
                be anonymized but retained.
              </p>

              {selectedUserForAction && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      {selectedUserForAction.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">
                        {selectedUserForAction.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {selectedUserForAction.email}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I understand this action cannot be reversed
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle permanent deletion logic here
                  setShowDeleteModal(false);
                }}
                className="px-4 py-2 bg-red-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700"
              >
                Permanently Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty State for Pending Invites - Shown when there are no pending invites */}
      {activeTab === "pending" &&
        filteredData.length === 0 &&
        searchTerm === "" &&
        roleFilter === "All" && (
          <div className="px-6 py-10">
            <div className="text-center">
              <Mail className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No pending invites
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                You don't have any pending invitations at the moment.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <PlusCircle
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Invite New Users
                </button>
              </div>
            </div>
          </div>
        )}

      {/* Empty State for Deactivated Users - Shown when there are no deactivated users */}
      {activeTab === "deactivated" &&
        filteredData.length === 0 &&
        searchTerm === "" &&
        roleFilter === "All" && (
          <div className="px-6 py-10">
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No deactivated users
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                All users are currently active.
              </p>
            </div>
          </div>
        )}

      {/* Bulk Action Success Toast - Example of a success message after bulk action */}
      <div className="fixed bottom-4 right-4 bg-green-50 border border-green-200 rounded-lg shadow-lg p-4 flex items-start max-w-sm">
        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
        <div>
          <h3 className="text-sm font-medium text-green-800">Success</h3>
          <p className="mt-1 text-sm text-green-700">
            3 invitations have been resent successfully.
          </p>
          <div className="mt-2 flex space-x-3">
            <button className="text-sm text-green-700 font-medium hover:text-green-800">
              Undo
            </button>
            <button className="text-sm text-green-500 hover:text-green-600">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeactivatedPendingTabs;
