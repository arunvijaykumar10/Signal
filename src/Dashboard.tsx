import { useEffect, useState } from "react";
import {
  Search,
  User,
  ChevronDown,
  Settings,
  Brain,
  Send,
  BarChart,
  Wand2,
  Home,
  Bookmark,
  Clock,
  ExternalLink,
  Filter,
  Hash,
  Paperclip,
  Pin,
  PlusCircle,
  Star,
  X,
  Signal,
  Code,
} from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import NotificationPopover from "./NotificationPopover";
import Assistant from "./CreateZone/Assistant";
import { useRole } from "./context/RoleProvider";

const Dashboard = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("Dashboard");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { role, setRole, rolePermissions } = useRole();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAssistantDrawerOpen, setIsAssistantDrawerOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");

  const [pinnedItems, setPinnedItems] = useState([
    {
      id: "pin1",
      title: "Welcome Email Template",
      type: "snippet",
      lastUsed: "2d ago",
      toneScore: 92,
      tags: ["email", "onboarding"],
    },
    {
      id: "pin2",
      title: "Legal Disclaimer v2",
      type: "snippet",
      lastUsed: "5d ago",
      toneScore: 95,
      tags: ["legal", "compliance"],
    },
  ]);

  const memoryItems = [
    {
      id: "mem1",
      title: "Q2 Campaign Headline",
      type: "snippet",
      lastUsed: "3h ago",
      toneScore: 87,
      tags: ["headline", "promotion"],
    },
    {
      id: "mem2",
      title: "Product Feature Description",
      type: "snippet",
      lastUsed: "Yesterday",
      toneScore: 82,
      tags: ["product", "features"],
    },
    {
      id: "mem3",
      title: "Customer Pain Points",
      type: "prompt",
      lastUsed: "2d ago",
      toneScore: 88,
      tags: ["research", "customer"],
    },
    {
      id: "mem4",
      title: "Brand Voice Guidelines",
      type: "asset",
      lastUsed: "1w ago",
      toneScore: 90,
      tags: ["brand", "tone"],
    },
    {
      id: "mem5",
      title: "Email Signature Generator",
      type: "prompt",
      lastUsed: "3d ago",
      toneScore: 85,
      tags: ["email", "signature"],
    },
    {
      id: "mem6",
      title: "Social Media CTA Examples",
      type: "snippet",
      lastUsed: "6h ago",
      toneScore: 89,
      tags: ["social", "cta"],
    },
    {
      id: "mem7",
      title: "Compliance Checklist",
      type: "asset",
      lastUsed: "4d ago",
      toneScore: 94,
      tags: ["legal", "compliance"],
    },
    {
      id: "mem8",
      title: "Customer Testimonial Template",
      type: "snippet",
      lastUsed: "5d ago",
      toneScore: 86,
      tags: ["testimonial", "customer"],
    },
  ];

  const filteredItems = searchQuery
    ? memoryItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : memoryItems;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleAssistantDrawer = () => {
    setIsAssistantDrawerOpen(!isAssistantDrawerOpen);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "prompt":
        return <Hash className="w-4 h-4 text-purple-500" />;
      case "snippet":
        return <Paperclip className="w-4 h-4 text-blue-500" />;
      case "asset":
        return <Bookmark className="w-4 h-4 text-green-500" />;
      default:
        return <Paperclip className="w-4 h-4 text-gray-500" />;
    }
  };

  const handlePinItem = (item: {
    id: string;
    title?: string;
    type?: string;
    lastUsed?: string;
    toneScore?: number;
    tags?: string[];
  }) => {
    const isPinned = pinnedItems.some(
      (pinnedItem) => pinnedItem.id === item.id
    );

    if (isPinned) {
      setPinnedItems(
        pinnedItems.filter((pinnedItem) => pinnedItem.id !== item.id)
      );
    } else {
      setPinnedItems([
        ...pinnedItems,
        {
          id: item.id,
          title: item.title || "",
          type: item.type || "",
          lastUsed: item.lastUsed || "",
          toneScore: item.toneScore || 0,
          tags: item.tags || [],
        },
      ]);
    }
  };

  const isItemPinned = (itemId: string) => {
    return pinnedItems.some((item) => item.id === itemId);
  };

  // Sidebar items with updated role-based visibility
  const sidebarItems = [
    {
      title: "Dashboard",
      icon: <Home size={18} className="mr-2" />,
      path: "userdashboard",
      roles: ["designer", "copywriter"],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} className="mr-2" />,
      path: "/dashboard/drift",
      roles: ["legalflashqa", "strategist"],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} className="mr-2" />,
      path: "analytics",
      roles: ["admin", "executive"],
    },
    {
      title: "Visual Studio",
      icon: <Code size={18} className="mr-2" />,
      path: "visualstudio",
      roles: ["designer", "admin", "executive"],
    },
    {
      title: "Publish Zone",
      icon: <Send size={18} className="mr-2" />,
      path: "publishzone/export",
      roles: ["copywriter", "admin", "executive"],
      subItems: [
        {
          title: "Export Hub",
          path: "/publishzone/export",
          roles: ["copywriter", "admin", "executive"],
        },
        {
          title: "CLI/SDK",
          path: "/publishzone/cli",
          roles: ["copywriter", "admin", "executive"],
        },
        {
          title: "Protocol Viewer",
          path: "/publishzone/protocol",
          roles: ["copywriter", "admin", "executive"],
        },
      ],
    },
    {
      title: "Admin Tools",
      icon: <Settings size={18} className="mr-2" />,
      path: "admintools/aiconfig",
      roles: ["admin", "executive"],
      subItems: [
        {
          title: "AI Config",
          path: "/admintools/aiconfig",
          roles: ["admin", "executive"],
        },
        {
          title: "Access Control",
          path: "/admintools/access",
          roles: ["admin", "executive"],
        },
      ],
    },
    {
      title: "Signals",
      icon: <Signal size={18} className="mr-2" />,
      path: "signals/contentmanagement",
      roles: [
        "designer",
        "legalflashqa",
        "strategist",
        "copywriter",
        "admin",
        "executive",
      ],
    },
  ];

  // Filter sidebar items based on role
  const filteredSidebarItems = sidebarItems.filter((item) =>
    item.roles.includes(role)
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Memory Drawer Toggle Button */}
      {rolePermissions.canManageContent && (
        <button
          className={`fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-indigo-600 text-white rounded-l-md shadow-md transition hover:bg-indigo-700 z-10 ${
            isDrawerOpen ? "hidden" : "flex"
          }`}
          onClick={toggleDrawer}
          aria-label="Open Memory Drawer"
        >
          <Brain className="w-6 h-6" />
        </button>
      )}

      {/* Assistant Drawer Toggle Button */}
      <button
        className={`fixed right-0 top-[calc(50%+4rem)] transform -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-green-600 text-white rounded-l-md shadow-md transition hover:bg-green-700 z-10 ${
          isAssistantDrawerOpen ? "hidden" : "flex"
        }`}
        onClick={toggleAssistantDrawer}
        aria-label="Open Assistant Drawer"
      >
        <Wand2 className="w-6 h-6" />
      </button>

      {/* Semantic Memory Drawer */}
      {rolePermissions.canManageContent && (
        <div
          className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-20 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                <Brain className="w-5 h-5 text-indigo-600 mr-2" />
                <h2 className="text-lg font-medium text-gray-800">
                  Memory Drawer
                </h2>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleDrawer}
                aria-label="Close Memory Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search snippets, prompts, assets..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>

              {!searchQuery && (
                <div className="mt-2 flex flex-wrap gap-2">
                  <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-gray-200">
                    Find last quarter's welcome email intro
                  </button>
                  <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-gray-200">
                    Show legal disclaimers
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-3 text-sm font-medium text-center ${
                  activeTab === "recent"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("recent")}
              >
                <div className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1.5" />
                  Recent
                </div>
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium text-center ${
                  activeTab === "pinned"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("pinned")}
              >
                <div className="flex items-center justify-center">
                  <Pin className="w-4 h-4 mr-1.5" />
                  Pinned
                </div>
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium text-center ${
                  activeTab === "all"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("all")}
              >
                <div className="flex items-center justify-center">
                  <Filter className="w-4 h-4 mr-1.5" />
                  All Memory
                </div>
              </button>
            </div>

            {/* Memory Content */}
            <div className="flex-grow overflow-y-auto p-4">
              {activeTab === "pinned" && (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-700">
                      Pinned Items
                    </h3>
                    <span className="text-xs text-gray-500">
                      {pinnedItems.length} items
                    </span>
                  </div>

                  {pinnedItems.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Pin className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p>No pinned items yet</p>
                      <p className="text-sm mt-1">
                        Pin frequently used items for quick access
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {pinnedItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer group"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {getTypeIcon(item.type)}
                          </div>
                          <div className="ml-3 flex-grow min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900 truncate">
                                {item.title}
                              </h4>
                              <button
                                className="text-yellow-500 hover:text-yellow-600"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePinItem(item);
                                }}
                              >
                                <Star className="w-4 h-4 fill-current" />
                              </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Last used: {item.lastUsed} • Tone:{" "}
                              {item.toneScore}/100
                            </p>
                            <div className="mt-1.5 flex flex-wrap gap-1">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {(activeTab === "recent" ||
                activeTab === "all" ||
                searchQuery) && (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-700">
                      {searchQuery
                        ? "Search Results"
                        : activeTab === "recent"
                        ? "Recently Used"
                        : "All Memory Items"}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {filteredItems.length} items
                    </span>
                  </div>

                  {filteredItems.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p>No items found</p>
                      <p className="text-sm mt-1">
                        Try different search terms or filters
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {(activeTab === "recent"
                        ? filteredItems.slice(0, 5)
                        : filteredItems
                      ).map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer group"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {getTypeIcon(item.type)}
                          </div>
                          <div className="ml-3 flex-grow min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900 truncate">
                                {item.title}
                              </h4>
                              <button
                                className={`${
                                  isItemPinned(item.id)
                                    ? "text-yellow-500"
                                    : "text-gray-400 opacity-0 group-hover:opacity-100"
                                } hover:text-yellow-600`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePinItem(item);
                                }}
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    isItemPinned(item.id) ? "fill-current" : ""
                                  }`}
                                />
                              </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Last used: {item.lastUsed} • Tone:{" "}
                              {item.toneScore}/100
                            </p>
                            <div className="mt-1.5 flex flex-wrap gap-1">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "recent" &&
                    filteredItems.length > 5 &&
                    !searchQuery && (
                      <div className="mt-4 text-center">
                        <button
                          className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                          onClick={() => setActiveTab("all")}
                        >
                          View all {filteredItems.length} items
                        </button>
                      </div>
                    )}
                </>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="border-t border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium text-gray-700">
                  <PlusCircle className="w-4 h-4 mr-1.5" />
                  Create Snippet
                </button>
                <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium text-gray-700">
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  Memory Zone
                </button>
              </div>

              {/* AI Suggestions */}
              <div className="mt-4 border-t border-gray-200 pt-3">
                <div className="text-xs text-gray-500 mb-2">AI Suggestions</div>
                <div className="text-sm text-gray-700">
                  You've reused this asset 4 times—want to refresh it?
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-indigo-700">Signal Studio</h1>
        </div>

        <nav className="p-2">
          <ul>
            {filteredSidebarItems.map((item) => (
              <li key={item.title} className="mb-1">
                <button
                  className={`flex items-center w-full p-2 rounded text-left ${
                    activeSidebarItem === item.title
                      ? "bg-indigo-100 text-indigo-700"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setActiveSidebarItem(item.title);
                    navigate(item.path);
                  }}
                >
                  {item.icon}
                  {item.title}
                </button>

                {activeSidebarItem === item.title && item.subItems && (
                  <ul className="ml-6 mt-1">
                    {item.subItems
                      .filter((subItem) => subItem.roles.includes(role))
                      .map((subItem) => (
                        <li key={subItem.title} className="mb-1">
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() =>
                              navigate(`/dashboard${subItem.path}`)
                            }
                          >
                            {subItem.title}
                          </button>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Assistant Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-20 ${
          isAssistantDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <Wand2 className="w-5 h-5 text-green-600 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">Assistant</h2>
            </div>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleAssistantDrawer}
              aria-label="Close Assistant Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <Assistant />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-4">
            {/* General Motors Dropdown */}
            <div className="relative">
              <button
                className="flex items-center px-3 py-2 bg-white border rounded-md shadow-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                General Motors
                <ChevronDown size={16} className="ml-2 text-gray-500" />
              </button>

              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <ul>
                    {(role === "admin" || role === "executive") && (
                      <li
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          navigate("/dashboard/admintools/access/wizard");
                          setDropdownOpen(false);
                        }}
                      >
                        <PlusCircle
                          size={16}
                          className="mr-2 text-indigo-500"
                        />
                        Create New Board
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Edit Button - Only visible to admins */}
            {rolePermissions.canEdit && (
              <div>
                <button
                  className="flex items-center px-3 py-2 bg-white border rounded-md shadow-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  onClick={() =>
                    navigate("/dashboard/admintools/access/wizard")
                  }
                >
                  <Settings size={16} className="mr-1" />
                  Edit
                </button>
              </div>
            )}

            {/* Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                aria-expanded={isPopoverOpen}
                className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased"
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>

              {isPopoverOpen && (
                <div
                  className="absolute mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10"
                  style={{ top: "100%", left: "0" }}
                >
                  <button
                    onClick={() => {
                      setRole("admin");
                      setIsPopoverOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md text-left ${
                      role === "admin" ? "bg-stone-100 font-medium" : ""
                    }`}
                  >
                    Admin
                  </button>
                  <button
                    onClick={() => {
                      setRole("executive");
                      setIsPopoverOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md text-left ${
                      role === "executive" ? "bg-stone-100 font-medium" : ""
                    }`}
                  >
                    Executive
                  </button>
                  <button
                    onClick={() => {
                      setRole("designer");
                      setIsPopoverOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md text-left ${
                      role === "designer" ? "bg-stone-100 font-medium" : ""
                    }`}
                  >
                    Designer
                  </button>
                  <button
                    onClick={() => {
                      setRole("legalflashqa");
                      setIsPopoverOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md text-left ${
                      role === "legalflashqa" ? "bg-stone-100 font-medium" : ""
                    }`}
                  >
                    Legal Flash QA
                  </button>
                  <button
                    onClick={() => {
                      setRole("strategist");
                      setIsPopoverOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md text-left ${
                      role === "strategist" ? "bg-stone-100 font-medium" : ""
                    }`}
                  >
                    Strategist
                  </button>
                  <button
                    onClick={() => {
                      setRole("copywriter");
                      setIsPopoverOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md text-left ${
                      role === "copywriter" ? "bg-stone-100 font-medium" : ""
                    }`}
                  >
                    Copywriter
                  </button>
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative w-64">
              <Search
                size={18}
                className="absolute left-2 top-2.5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search snippets, prompts, campaigns..."
                className="pl-9 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <NotificationPopover />

            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("settings")}
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <User size={16} />
              </div>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
        </header>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
