import { useState } from "react";
import {
  Bell,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  MessageSquare,
  Settings,
  Clock,
  X,
} from "lucide-react";

const NotificationPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: "n1",
      type: "needs_approval",
      title: "Draft awaiting validation",
      description: "Q2 Email Campaign needs your review",
      timestamp: "10 minutes ago",
      priority: "high",
      actions: ["review", "dismiss"],
      read: false,
    },
    {
      id: "n2",
      type: "escalated",
      title: "Content escalated to Legal",
      description: "Product description flagged for compliance issues",
      timestamp: "1 hour ago",
      priority: "high",
      actions: ["view", "reassign"],
      read: false,
    },
    {
      id: "n3",
      type: "system_warning",
      title: "Tone drift detected",
      description: "12% of content failed QA yesterday",
      timestamp: "3 hours ago",
      priority: "medium",
      actions: ["view report"],
      read: true,
    },
    {
      id: "n4",
      type: "comment_mention",
      title: "Sarah mentioned you in a comment",
      description: 'On "Landing Page Copy Update"',
      timestamp: "5 hours ago",
      priority: "low",
      actions: ["reply", "dismiss"],
      read: false,
    },
    {
      id: "n5",
      type: "system_warning",
      title: "Slack integration disconnected",
      description: "Re-authenticate to continue syncing",
      timestamp: "Yesterday",
      priority: "medium",
      actions: ["reconnect", "dismiss"],
      read: true,
    },
    {
      id: "n6",
      type: "needs_approval",
      title: "3 snippets need approval",
      description: "New legal disclaimers from Jessica",
      timestamp: "Yesterday",
      priority: "medium",
      actions: ["review", "dismiss"],
      read: true,
    },
    {
      id: "n7",
      type: "escalated",
      title: "Hallucination detected in export",
      description: "Stats in blog post need verification",
      timestamp: "2 days ago",
      priority: "high",
      actions: ["view", "dismiss"],
      read: true,
    },
  ]);

  // Calculate unread count
  const unreadCount = notifications.filter((notif) => !notif.read).length;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const dismissNotification = (id: string) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const getFilteredNotifications = () => {
    if (activeTab === "all") {
      return notifications;
    }
    return notifications.filter((notif) => notif.type === activeTab);
  };

  const getTypeIcon = (type: string, priority: string) => {
    const color =
      priority === "high"
        ? "text-red-500"
        : priority === "medium"
        ? "text-yellow-500"
        : "text-blue-500";

    switch (type) {
      case "needs_approval":
        return <CheckCircle className={`w-5 h-5 ${color}`} />;
      case "escalated":
        return <AlertTriangle className={`w-5 h-5 ${color}`} />;
      case "system_warning":
        return <AlertCircle className={`w-5 h-5 ${color}`} />;
      case "comment_mention":
        return <MessageSquare className={`w-5 h-5 ${color}`} />;
      default:
        return <Bell className={`w-5 h-5 ${color}`} />;
    }
  };

  return (
    <div className="relative">
      <button
        className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={toggleOpen}
        aria-label="Notifications"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">Notifications</h2>
            <div className="flex items-center space-x-2">
              <button
                className="text-sm text-indigo-600 hover:text-indigo-800"
                onClick={markAllAsRead}
              >
                Mark all as read
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="h-5 w-5" />
              </button>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Notification Categories */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex">
              <button
                className={`flex-1 py-2 text-sm font-medium text-center ${
                  activeTab === "all"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium text-center ${
                  activeTab === "needs_approval"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("needs_approval")}
              >
                Approvals
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium text-center ${
                  activeTab === "escalated"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("escalated")}
              >
                Escalated
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium text-center ${
                  activeTab === "system_warning"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("system_warning")}
              >
                System
              </button>
            </div>
          </div>

          {/* Notification List */}
          <div className="max-h-96 overflow-y-auto">
            {getFilteredNotifications().length === 0 ? (
              <div className="py-8 text-center text-gray-500">
                <Bell className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                <p>No notifications in this category</p>
              </div>
            ) : (
              getFilteredNotifications().map((notification) => (
                <div
                  key={notification.id}
                  className={`border-b border-gray-100 px-4 py-3 hover:bg-gray-50 transition-colors ${
                    !notification.read ? "bg-indigo-50" : ""
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      {getTypeIcon(notification.type, notification.priority)}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <p
                          className={`text-sm font-medium ${
                            !notification.read
                              ? "text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <span className="ml-2 h-2 w-2 rounded-full bg-indigo-500"></span>
                        )}
                      </div>

                      <p className="text-sm text-gray-500 mt-1">
                        {notification.description}
                      </p>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex text-xs text-gray-500 items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {notification.timestamp}
                        </div>

                        <div className="flex space-x-2">
                          {notification.actions.includes("review") && (
                            <button
                              className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Handle review action
                              }}
                            >
                              Review
                            </button>
                          )}

                          {notification.actions.includes("view") && (
                            <button
                              className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Handle view action
                              }}
                            >
                              View
                            </button>
                          )}

                          {notification.actions.includes("dismiss") && (
                            <button
                              className="text-xs font-medium text-gray-500 hover:text-gray-700"
                              onClick={(e) => {
                                e.stopPropagation();
                                dismissNotification(notification.id);
                              }}
                            >
                              Dismiss
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Notification Footer */}
          <div className="px-4 py-3 border-t border-gray-200 text-center">
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPopover;
