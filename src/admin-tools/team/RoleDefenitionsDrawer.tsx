import { useState } from "react";
import {
  X,
  CheckCircle,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";

interface RoleDefinitionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoleDefinitionsDrawer = ({ isOpen, onClose }: RoleDefinitionsDrawerProps) => {
  const [expandedSection, setExpandedSection] = useState("definitions"); // 'definitions', 'permissions', 'matrix'
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  // Role definitions
  const roles = [
    {
      id: "admin",
      name: "Admin",
      description: "Full access to settings, users, governance, exports",
      details:
        "Admins can configure AI settings, manage users, set up system-wide preferences, and have access to all zones and features. They typically handle onboarding and manage integrations.",
    },
    {
      id: "copywriter",
      name: "Copywriter",
      description: "Can generate/edit content but not validate or publish",
      details:
        "Copywriters focus on creating content using prompts and the Draft Editor. They can save drafts but need approval from QA or Admin users before content can be published.",
    },
    {
      id: "strategist",
      name: "Strategist",
      description: "Can configure prompts, tone rules, analyze drift",
      details:
        "Strategists define the brand voice and tone. They create and manage prompt templates, analyze content drift over time, and set up governance rules for content creation.",
    },
    {
      id: "legal-qa",
      name: "Legal/QA",
      description: "Review and approve drafts, edit governance rules",
      details:
        "Legal and QA users review content for compliance, tone, and brand adherence. They can approve or reject content, add comments, and manage escalation processes.",
    },
    {
      id: "designer",
      name: "Designer",
      description: "Access Visual Asset Studio and export assets",
      details:
        "Designers work with the Visual Asset Studio to create and manage visual content. They can define style presets and export visual assets for use in campaigns.",
    },
    {
      id: "executive",
      name: "Executive",
      description: "View summaries, approve content, voice interactions only",
      details:
        "Executives have a streamlined view of the platform. They can see dashboards, approve high-level content, and interact primarily through the voice assistant interface.",
    },
    {
      id: "viewer",
      name: "Viewer",
      description: "Read-only access across modules",
      details:
        "Viewers can see content but cannot edit or approve it. This role is typically used for stakeholders who need visibility into the content creation process.",
    },
  ];

  // Permission matrix for each zone by role
  const permissionMatrix = {
    create: {
      title: "Create Zone",
      modules: [
        "Signal Launcher",
        "Draft Editor",
        "Visual Asset Studio",
        "Brand Voice Assistant",
      ],
      roleAccess: {
        admin: {
          level: "full",
          description: "Full access to all creation tools",
        },
        copywriter: {
          level: "full",
          description: "Can use all creation tools",
        },
        strategist: {
          level: "partial",
          description: "Can create prompts but limited draft editing",
        },
        "legal-qa": {
          level: "limited",
          description: "Can view drafts and suggest edits",
        },
        designer: {
          level: "partial",
          description: "Full access to Visual Asset Studio only",
        },
        executive: {
          level: "limited",
          description: "Voice commands for content creation only",
        },
        viewer: { level: "none", description: "Can only view created content" },
      },
    },
    memory: {
      title: "Memory Zone",
      modules: ["Semantic Engine", "Governance", "Prompts", "Snippets"],
      roleAccess: {
        admin: {
          level: "full",
          description: "Full control over all memory systems",
        },
        copywriter: {
          level: "partial",
          description: "Can use but not configure memory",
        },
        strategist: {
          level: "full",
          description: "Can configure all memory aspects",
        },
        "legal-qa": {
          level: "partial",
          description: "Can edit governance rules only",
        },
        designer: {
          level: "limited",
          description: "Can access visual asset memory only",
        },
        executive: {
          level: "limited",
          description: "Read-only access to memory",
        },
        viewer: { level: "limited", description: "Read-only access to memory" },
      },
    },
    publish: {
      title: "Publish Zone",
      modules: ["Export Hub", "Integrations", "Protocol Viewer"],
      roleAccess: {
        admin: {
          level: "full",
          description: "Full publishing and integration control",
        },
        copywriter: { level: "none", description: "No publish access" },
        strategist: {
          level: "partial",
          description: "Can export but not configure integrations",
        },
        "legal-qa": {
          level: "partial",
          description: "Can approve for publishing",
        },
        designer: {
          level: "partial",
          description: "Can export visual assets only",
        },
        executive: {
          level: "limited",
          description: "Can approve publishing only",
        },
        viewer: { level: "none", description: "No publish access" },
      },
    },
    validator: {
      title: "Signal Validator",
      modules: ["QA Scorecard", "Escalation System"],
      roleAccess: {
        admin: {
          level: "full",
          description: "Full validator access and configuration",
        },
        copywriter: {
          level: "limited",
          description: "Can see validation results only",
        },
        strategist: {
          level: "partial",
          description: "Can configure validation rules",
        },
        "legal-qa": {
          level: "full",
          description: "Full validation capabilities",
        },
        designer: {
          level: "limited",
          description: "Limited to visual asset validation",
        },
        executive: {
          level: "limited",
          description: "Can see validation status only",
        },
        viewer: {
          level: "limited",
          description: "Can see validation status only",
        },
      },
    },
  };

  // Helper function to render access level badge
  const renderAccessBadge = (level: string) => {
    switch (level) {
      case "full":
        return (
          <div className="flex items-center text-green-700 bg-green-50 px-2 py-1 rounded text-xs">
            <CheckCircle size={12} className="mr-1" />
            Full Access
          </div>
        );
      case "partial":
        return (
          <div className="flex items-center text-blue-700 bg-blue-50 px-2 py-1 rounded text-xs">
            <CheckCircle size={12} className="mr-1" />
            Partial Access
          </div>
        );
      case "limited":
        return (
          <div className="flex items-center text-yellow-700 bg-yellow-50 px-2 py-1 rounded text-xs">
            <HelpCircle size={12} className="mr-1" />
            Limited Access
          </div>
        );
      case "none":
        return (
          <div className="flex items-center text-red-700 bg-red-50 px-2 py-1 rounded text-xs">
            <XCircle size={12} className="mr-1" />
            No Access
          </div>
        );
      default:
        return null;
    }
  };

  // Only render if drawer is open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 flex justify-end overflow-hidden">
      <div className="bg-white h-full max-w-md w-full shadow-xl flex flex-col animate-slideInRight">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Role Definitions & Permissions
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 pt-4 border-b border-gray-200">
          <div className="flex space-x-4">
            <button
              className={`pb-2 px-1 text-sm font-medium border-b-2 ${
                expandedSection === "definitions"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setExpandedSection("definitions")}
            >
              Role Definitions
            </button>
            <button
              className={`pb-2 px-1 text-sm font-medium border-b-2 ${
                expandedSection === "permissions"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setExpandedSection("permissions")}
            >
              Access by Zone
            </button>
            <button
              className={`pb-2 px-1 text-sm font-medium border-b-2 ${
                expandedSection === "matrix"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setExpandedSection("matrix")}
            >
              Permission Matrix
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4 flex-grow overflow-y-auto">
          {expandedSection === "definitions" && (
            <div className="space-y-4">
              <div className="flex items-center mb-4 bg-blue-50 p-3 rounded-md">
                <Info size={18} className="text-blue-500 mr-2" />
                <p className="text-sm text-blue-700">
                  Roles determine what users can see and do in Signal Studio.
                  Click on each role to learn more.
                </p>
              </div>

              {roles.map((role) => (
                <div
                  key={role.id}
                  className="border border-gray-200 rounded-md overflow-hidden"
                >
                  <div
                    className={`${
                      expandedRole === role.id ? "bg-gray-100" : "bg-gray-50"
                    } px-4 py-3 flex justify-between items-center cursor-pointer`}
                    onClick={() =>
                      setExpandedRole(expandedRole === role.id ? null : role.id)
                    }
                  >
                    <h3 className="font-medium text-gray-800">{role.name}</h3>
                    <button className="text-gray-400">
                      {expandedRole === role.id ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>
                  <div
                    className={`px-4 py-3 ${
                      expandedRole === role.id ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-sm text-gray-600 mb-2">
                      {role.description}
                    </p>
                    <p className="text-sm text-gray-700">{role.details}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {expandedSection === "permissions" && (
            <div className="space-y-6">
              {Object.entries(permissionMatrix).map(([zoneKey, zone]) => (
                <div
                  key={zoneKey}
                  className="border border-gray-200 rounded-md overflow-hidden"
                >
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-800">{zone.title}</h3>
                    <div className="text-xs text-gray-500 mt-1">
                      Modules: {zone.modules.join(", ")}
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {Object.entries(zone.roleAccess).map(([roleId, access]) => {
                      const role = roles.find((r) => r.id === roleId);
                      return (
                        <div
                          key={roleId}
                          className="px-4 py-3 flex justify-between items-center"
                        >
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">
                              {role?.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {access.description}
                            </p>
                          </div>
                          {renderAccessBadge(access.level)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {expandedSection === "matrix" && (
            <div>
              <div className="overflow-x-auto border border-gray-200 rounded-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Create
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Memory
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Publish
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Validator
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {roles.map((role) => (
                      <tr key={role.id} className="hover:bg-gray-50">
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">
                          {role.name}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm">
                          {renderAccessBadge(
                            permissionMatrix.create.roleAccess[role.id as keyof typeof permissionMatrix.create.roleAccess]
                              ?.level || "none"
                          )}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm">
                          {renderAccessBadge(
                            permissionMatrix.memory.roleAccess[role.id as keyof typeof permissionMatrix.memory.roleAccess]
                              ?.level || "none"
                          )}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm">
                          {renderAccessBadge(
                            permissionMatrix.publish.roleAccess[role.id as keyof typeof permissionMatrix.publish.roleAccess]
                              ?.level || "none"
                          )}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm">
                          {renderAccessBadge(
                            permissionMatrix.validator.roleAccess[role.id as keyof typeof permissionMatrix.validator.roleAccess]
                              ?.level || "none"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 mb-2 text-sm font-medium text-gray-700">
                Access Level Legend
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center">
                  {renderAccessBadge("full")}
                  <span className="ml-2 text-xs text-gray-600">
                    Full Access
                  </span>
                </div>
                <div className="flex items-center">
                  {renderAccessBadge("partial")}
                  <span className="ml-2 text-xs text-gray-600">
                    Partial Access
                  </span>
                </div>
                <div className="flex items-center">
                  {renderAccessBadge("limited")}
                  <span className="ml-2 text-xs text-gray-600">
                    Limited Access
                  </span>
                </div>
                <div className="flex items-center">
                  {renderAccessBadge("none")}
                  <span className="ml-2 text-xs text-gray-600">No Access</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleDefinitionsDrawer;
