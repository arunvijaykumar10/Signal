import { useState } from "react";
import {
  Bell,
  Settings,
  Mail,
  Calendar,
  Clock,
  AlertCircle,
  MessageSquare,
  Activity,
  Save,
  Zap,
  Info,
  Smartphone,
  ToggleLeft,
  X,
  Download,
  ChevronDown,
  RefreshCw,
  Eye,
  PieChart,
  CheckCircle,
  Filter,
  HelpCircle,
} from "lucide-react";

const NotificationSettingsWireframe = () => {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [inAppEnabled, setInAppEnabled] = useState(true);
  const [slackEnabled, setSlackEnabled] = useState(false);
  const [frequency, setFrequency] = useState("realtime");

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Main Settings */}
          <div className="lg:w-2/3">
            {/* Notification Channels */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-medium mb-4 flex items-center">
                <Bell size={20} className="mr-2 text-blue-500" />
                Notification Channels
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Choose how you'd like to receive notifications from Signal
                Studio
              </p>

              <div className="space-y-4">
                {/* Email Notifications */}
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Mail size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-500">
                          Receive updates via sarah.johnson@company.com
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={emailEnabled}
                        onChange={() => setEmailEnabled(!emailEnabled)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {emailEnabled && (
                    <div className="mt-3 border-t pt-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Email Format</span>
                          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>HTML</option>
                            <option>Plain Text</option>
                          </select>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          <span>Include branding and images</span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          <span>Include direct action links</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* In-App Notifications */}
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Bell size={20} className="text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">In-App Notifications</h3>
                        <p className="text-sm text-gray-500">
                          Show alerts while using Signal Studio
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={inAppEnabled}
                        onChange={() => setInAppEnabled(!inAppEnabled)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {inAppEnabled && (
                    <div className="mt-3 border-t pt-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          <span>Show desktop popups</span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          <span>Play sound for high-priority alerts</span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          <span>Show in notification center</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Slack Notifications */}
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        <div className="text-purple-600">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Slack Notifications</h3>
                        <p className="text-sm text-gray-500">
                          {slackEnabled
                            ? "Connected to @sarah.johnson"
                            : "Connect your Slack account to get alerts"}
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={slackEnabled}
                        onChange={() => setSlackEnabled(!slackEnabled)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {slackEnabled && (
                    <div className="mt-3 border-t pt-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          <span>Send to #signal-studio channel</span>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Send as direct messages</span>
                        </div>
                        <button className="text-blue-600 text-sm flex items-center mt-2">
                          <Settings size={14} className="mr-1" />
                          Configure Slack Workspace
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Notifications */}
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Smartphone size={20} className="text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Mobile Notifications</h3>
                        <p className="text-sm text-gray-500">
                          Push notifications to your mobile device
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Frequency & Timing */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-medium mb-4 flex items-center">
                <Clock size={20} className="mr-2 text-blue-500" />
                Frequency & Timing
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notification Frequency
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div
                      className={`border rounded-md p-3 flex flex-col items-center ${
                        frequency === "realtime"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setFrequency("realtime")}
                    >
                      <Zap size={24} className="mb-1 text-yellow-500" />
                      <span className="text-sm font-medium">Real-time</span>
                      <span className="text-xs text-gray-500">
                        Immediate alerts
                      </span>
                    </div>
                    <div
                      className={`border rounded-md p-3 flex flex-col items-center ${
                        frequency === "daily"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setFrequency("daily")}
                    >
                      <Calendar size={24} className="mb-1 text-blue-500" />
                      <span className="text-sm font-medium">Daily Digest</span>
                      <span className="text-xs text-gray-500">
                        Once per day
                      </span>
                    </div>
                    <div
                      className={`border rounded-md p-3 flex flex-col items-center ${
                        frequency === "weekly"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setFrequency("weekly")}
                    >
                      <Calendar size={24} className="mb-1 text-green-500" />
                      <span className="text-sm font-medium">
                        Weekly Summary
                      </span>
                      <span className="text-xs text-gray-500">
                        Once per week
                      </span>
                    </div>
                  </div>
                </div>

                {frequency === "daily" && (
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Time
                    </label>
                    <div className="flex items-center">
                      <select className="border border-gray-300 rounded-md px-3 py-1.5">
                        <option>9:00 AM</option>
                        <option>12:00 PM</option>
                        <option>5:00 PM</option>
                        <option>End of workday</option>
                      </select>
                      <span className="mx-2 text-gray-500">in</span>
                      <select className="border border-gray-300 rounded-md px-3 py-1.5">
                        <option>(UTC-08:00) Pacific Time</option>
                        <option>(UTC-05:00) Eastern Time</option>
                        <option>(UTC+00:00) UTC</option>
                      </select>
                    </div>
                  </div>
                )}

                {frequency === "weekly" && (
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Day
                    </label>
                    <div className="flex items-center space-x-3">
                      <select className="border border-gray-300 rounded-md px-3 py-1.5">
                        <option>Monday</option>
                        <option>Friday</option>
                        <option>Sunday</option>
                      </select>
                      <span className="mx-2 text-gray-500">at</span>
                      <select className="border border-gray-300 rounded-md px-3 py-1.5">
                        <option>9:00 AM</option>
                        <option>12:00 PM</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex items-center">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" />
                    <span>Do Not Disturb outside of working hours</span>
                  </label>
                  <HelpCircle size={14} className="ml-2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Event Types */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium flex items-center">
                  <Activity size={20} className="mr-2 text-blue-500" />
                  Event Types
                </h2>
                <button className="text-blue-600 text-sm flex items-center">
                  <Filter size={14} className="mr-1" />
                  <span>Select All</span>
                </button>
              </div>

              <div className="space-y-3">
                {/* Approval Notifications */}
                <div className="border rounded-md p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle size={18} className="text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium">Approvals</h3>
                        <p className="text-xs text-gray-500">
                          When content is approved or needs your review
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                {/* Comments Notifications */}
                <div className="border rounded-md p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex">
                      <div className="flex-shrink-0 mt-0.5">
                        <MessageSquare size={18} className="text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium">Comments</h3>
                        <p className="text-xs text-gray-500">
                          When someone mentions you or comments on your content
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                {/* Drift Alerts */}
                <div className="border rounded-md p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex">
                      <div className="flex-shrink-0 mt-0.5">
                        <AlertCircle size={18} className="text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium">Drift Alerts</h3>
                        <p className="text-xs text-gray-500">
                          When content tone deviates from brand guidelines
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                {/* Integration Errors */}
                <div className="border rounded-md p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex">
                      <div className="flex-shrink-0 mt-0.5">
                        <X size={18} className="text-red-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium">
                          Integration Errors
                        </h3>
                        <p className="text-xs text-gray-500">
                          When exports or connections fail
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                {/* Usage Statistics */}
                <div className="border rounded-md p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex">
                      <div className="flex-shrink-0 mt-0.5">
                        <PieChart size={18} className="text-purple-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium">
                          Usage Statistics
                        </h3>
                        <p className="text-xs text-gray-500">
                          Weekly usage reports and token consumption
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Preview & Actions */}
          <div className="lg:w-1/3">
            {/* Notification Preview */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-medium mb-4 flex items-center">
                <Eye size={20} className="mr-2 text-blue-500" />
                Notification Preview
              </h2>

              <div className="border rounded-md p-4 mb-4 bg-gray-50">
                <div className="flex">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                    <Bell size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">
                      Content Approval Required
                    </h3>
                    <p className="text-xs text-gray-500 my-1">
                      The "Q2 Campaign Email" draft needs your review
                    </p>
                    <div className="flex space-x-2 mt-2">
                      <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        Review Now
                      </button>
                      <button className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mb-4">
                <button className="flex items-center text-sm text-blue-600">
                  <RefreshCw size={14} className="mr-1" />
                  Show Different Example
                </button>
                <button className="flex items-center text-sm text-blue-600">
                  <Download size={14} className="mr-1" />
                  Test Notification
                </button>
              </div>

              <div className="border rounded-md p-3 bg-yellow-50 border-yellow-200 text-sm text-yellow-800 flex">
                <Info size={16} className="mr-2 flex-shrink-0" />
                <span>
                  This is how notifications will appear based on your current
                  settings
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-medium mb-4">Quick Actions</h2>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                  <div className="flex items-center">
                    <ToggleLeft size={18} className="mr-2 text-red-500" />
                    <span className="text-sm">Mute All for 24 Hours</span>
                  </div>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                  <div className="flex items-center">
                    <Bell size={18} className="mr-2 text-green-500" />
                    <span className="text-sm">Set Work Hours</span>
                  </div>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                  <div className="flex items-center">
                    <Settings size={18} className="mr-2 text-blue-500" />
                    <span className="text-sm">
                      Manage Notification Keywords
                    </span>
                  </div>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Notification History */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Recent Notifications</h2>
                <button className="text-blue-600 text-sm">View All</button>
              </div>

              <div className="space-y-3">
                <div className="pb-2 border-b">
                  <div className="flex justify-between items-start">
                    <p className="text-sm">
                      <span className="font-medium">Summer Campaign Email</span>
                      <span className="text-gray-500"> was approved</span>
                    </p>
                    <span className="text-xs text-gray-500">2h ago</span>
                  </div>
                </div>

                <div className="pb-2 border-b">
                  <div className="flex justify-between items-start">
                    <p className="text-sm">
                      <span className="font-medium">Mark Thompson</span>
                      <span className="text-gray-500">
                        {" "}
                        mentioned you in a comment
                      </span>
                    </p>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                </div>

                <div className="pb-2 border-b">
                  <div className="flex justify-between items-start">
                    <p className="text-sm">
                      <span className="font-medium">Brand Voice Alert</span>
                      <span className="text-gray-500">
                        {" "}
                        - tone drift detected
                      </span>
                    </p>
                    <span className="text-xs text-gray-500">3 days ago</span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <button className="text-sm text-blue-600">
                    Load more notifications
                  </button>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-6">
              <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md flex items-center justify-center">
                <Save size={18} className="mr-2" />
                Save Notification Preferences
              </button>
            </div>
          </div>
        </div>

        {/* Additional Options Section */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-lg font-medium mb-4">
            Advanced Notification Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Priority Levels</h3>
              <p className="text-sm text-gray-500 mb-3">
                Set which notifications deserve immediate attention
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Content approval requests</span>
                  </label>
                  <select className="border text-sm border-gray-300 rounded px-2 py-1">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Comments and mentions</span>
                  </label>
                  <select className="border text-sm border-gray-300 rounded px-2 py-1">
                    <option>Medium</option>
                    <option>High</option>
                    <option>Low</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Integration errors</span>
                  </label>
                  <select className="border text-sm border-gray-300 rounded px-2 py-1">
                    <option>Medium</option>
                    <option>High</option>
                    <option>Low</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">System updates</span>
                  </label>
                  <select className="border text-sm border-gray-300 rounded px-2 py-1">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Notification History</h3>
              <p className="text-sm text-gray-500 mb-3">
                Control how long Signal Studio keeps your notification history
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm mb-1">Retention Period</label>
                  <select className="w-full border text-sm border-gray-300 rounded px-3 py-1.5">
                    <option>30 days</option>
                    <option>60 days</option>
                    <option>90 days</option>
                    <option>Indefinitely</option>
                  </select>
                </div>

                <button className="text-sm text-red-600 flex items-center">
                  <X size={14} className="mr-1" />
                  Clear Notification History
                </button>

                <div className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">
                    Export notifications with monthly activity reports
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsWireframe;
