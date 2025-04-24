import { useState } from "react";
import {
  ChevronRight,
  Check,
  Plus,
  User,
  Users,
  Mail,
  Trash2,
  AlertCircle,
} from "lucide-react";

const TeamInvitesSetup = () => {
  const [inviteEmails, setInviteEmails] = useState([""]);
  const [selectedRoles, setSelectedRoles] = useState(["Copywriter"]);
  const [message, setMessage] = useState(
    "Hey team! I've set up Signal Studio for our content creation. Please accept this invite to join our workspace."
  );
  const [bulkEmailInput, setBulkEmailInput] = useState("");
  const [isBulkMode, setIsBulkMode] = useState(false);

  // Available roles
  const availableRoles = [
    "Copywriter",
    "Strategist",
    "Legal/QA",
    "Designer",
    "Executive",
    "Admin",
    "Viewer",
  ];

  // Add an empty row for a new invite
  const addInviteRow = () => {
    setInviteEmails([...inviteEmails, ""]);
    setSelectedRoles([...selectedRoles, "Copywriter"]);
  };

  // Remove an invite row
  const removeInviteRow = (index: number) => {
    const newEmails = [...inviteEmails];
    const newRoles = [...selectedRoles];

    newEmails.splice(index, 1);
    newRoles.splice(index, 1);

    setInviteEmails(newEmails);
    setSelectedRoles(newRoles);
  };

  // Update email at specific index
  const updateEmail = (index: number, value: string) => {
    const newEmails = [...inviteEmails];
    newEmails[index] = value;
    setInviteEmails(newEmails);
  };

  // Update role at specific index
  const updateRole = (index: number, value: string) => {
    const newRoles = [...selectedRoles];
    newRoles[index] = value;
    setSelectedRoles(newRoles);
  };

  // Handle bulk email processing
  const processBulkEmails = () => {
    if (!bulkEmailInput.trim()) return;

    // Split by commas, semicolons, or newlines and trim whitespace
    const emails = bulkEmailInput
      .split(/[,;\n]/)
      .map((email) => email.trim())
      .filter((email) => email.length > 0);

    setInviteEmails(emails);
    setSelectedRoles(emails.map(() => "Copywriter"));
    setIsBulkMode(false);
    setBulkEmailInput("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Progress tracker */}
      <div className="w-full bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center">
              <div className="bg-green-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <Check className="h-4 w-4" />
              </div>
              <span className="ml-2 font-medium text-green-600">
                Brand Identity
              </span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-green-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <Check className="h-4 w-4" />
              </div>
              <span className="ml-2 font-medium text-green-600">
                Tone & Governance
              </span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-green-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <Check className="h-4 w-4" />
              </div>
              <span className="ml-2 font-medium text-green-600">
                Prompt Import
              </span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-green-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <Check className="h-4 w-4" />
              </div>
              <span className="ml-2 font-medium text-green-600">
                Integrations
              </span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-indigo-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <span>5</span>
              </div>
              <span className="ml-2 font-medium text-indigo-600">
                Team Invites
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Invite Your Team</h1>
          <p className="mt-2 text-gray-600">
            Add team members and assign their roles in Signal Studio.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Team Members
            </h2>
            <div className="flex space-x-2">
              <button
                className={`flex items-center px-3 py-1.5 text-sm font-medium rounded-md ${
                  !isBulkMode ? "bg-indigo-50 text-indigo-700" : "text-gray-500"
                }`}
                onClick={() => setIsBulkMode(false)}
              >
                <User className="mr-1 h-4 w-4" />
                Individual
              </button>
              <button
                className={`flex items-center px-3 py-1.5 text-sm font-medium rounded-md ${
                  isBulkMode ? "bg-indigo-50 text-indigo-700" : "text-gray-500"
                }`}
                onClick={() => setIsBulkMode(true)}
              >
                <Users className="mr-1 h-4 w-4" />
                Bulk Add
              </button>
            </div>
          </div>

          {!isBulkMode ? (
            <div>
              <div className="grid grid-cols-12 gap-4 mb-2 text-sm font-medium text-gray-700">
                <div className="col-span-7">Email Address</div>
                <div className="col-span-4">Role</div>
                <div className="col-span-1"></div>
              </div>

              <div className="space-y-3">
                {inviteEmails.map((email, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 items-center"
                  >
                    <div className="col-span-7">
                      <div className="flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => updateEmail(index, e.target.value)}
                          placeholder="colleague@company.com"
                          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="col-span-4">
                      <select
                        value={selectedRoles[index]}
                        onChange={(e) => updateRole(index, e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        {availableRoles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      {index === 0 && inviteEmails.length === 1 ? (
                        <button
                          type="button"
                          onClick={addInviteRow}
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => removeInviteRow(index)}
                          className="inline-flex items-center p-1 border border-transparent rounded-full text-gray-400 hover:text-red-500 focus:outline-none"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {inviteEmails.length > 0 &&
                inviteEmails[inviteEmails.length - 1] !== "" && (
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={addInviteRow}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Another
                    </button>
                  </div>
                )}
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bulk Add Emails
                </label>
                <textarea
                  rows={5}
                  value={bulkEmailInput}
                  onChange={(e) => setBulkEmailInput(e.target.value)}
                  placeholder="Enter multiple email addresses separated by commas, semicolons, or new lines:"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Role for All
                </label>
                <select
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue="Copywriter"
                >
                  {availableRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  You can change individual roles after processing the list.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={processBulkEmails}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                >
                  Process Email List
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Welcome Message
          </h2>
          <div>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">
              This message will be included in the invitation emails. Keep it
              brief and friendly.
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              License Information
            </h2>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              3 of 10 seats used
            </span>
          </div>

          <div className="bg-indigo-50 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-indigo-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-indigo-700">
                  You're inviting{" "}
                  <span className="font-medium">
                    {inviteEmails.filter((e) => e.trim() !== "").length}
                  </span>{" "}
                  new members. You'll have
                  <span className="font-medium">
                    {" "}
                    {Math.max(
                      0,
                      7 - inviteEmails.filter((e) => e.trim() !== "").length
                    )}
                  </span>{" "}
                  seats remaining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInvitesSetup;
