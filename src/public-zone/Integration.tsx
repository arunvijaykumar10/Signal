import { useState } from "react";
import {
  ToggleLeft,
  ToggleRight,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Play,
} from "lucide-react";

const IntegrationLayer = () => {
  const [integrations, setIntegrations] = useState([
    {
      id: "webflow",
      name: "Webflow CMS",
      category: "CMS",
      icon: "🌐",
      connected: true,
      lastSync: "10 mins ago",
      status: "connected",
    },
    {
      id: "slack",
      name: "Slack",
      category: "Communication",
      icon: "💬",
      connected: true,
      lastSync: "1 hour ago",
      status: "connected",
    },
    {
      id: "mailchimp",
      name: "Mailchimp",
      category: "Email",
      icon: "📧",
      connected: false,
      lastSync: "Never",
      status: "disconnected",
    },
    {
      id: "gdrive",
      name: "Google Drive",
      category: "Storage",
      icon: "📁",
      connected: true,
      lastSync: "Yesterday",
      status: "warning",
    },
    {
      id: "airtable",
      name: "Airtable",
      category: "Database",
      icon: "📊",
      connected: false,
      lastSync: "Never",
      status: "disconnected",
    },
  ]);

  const [selectedIntegration, setSelectedIntegration] = useState<{
    id: string;
    name: string;
    category: string;
    icon: string;
    connected: boolean;
    lastSync: string;
    status: string;
  } | null>(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const handleToggle = (id: string) => {
    setIntegrations(
      integrations.map((item) =>
        item.id === id ? { ...item, connected: !item.connected } : item
      )
    );
  };

  const handleSelectIntegration = (integration: {
    id: string;
    name: string;
    category: string;
    icon: string;
    connected: boolean;
    lastSync: string;
    status: string;
  }) => {
    setSelectedIntegration(integration);
    setShowConfigModal(true);
  };

  const handleManualSync = () => {
    alert("Manual sync initiated!");
  };

  // Group integrations by category
  const groupedIntegrations = integrations.reduce(
    (groups: Record<string, typeof integrations>, integration) => {
      const category = integration.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(integration);
      return groups;
    },
    {}
  );

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Integration Layer</h1>
        <p className="text-gray-500">
          Connect Signal Studio to 3rd-party tools like CMS, DAM, Email, Slack
        </p>
      </div>

      <div className="flex p-6 gap-6">
        {/* Left Panel - Integration Grid */}
        <div className="w-2/3 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Available Integrations</h2>
            <button className="text-blue-600 text-sm hover:underline">
              + Add New Integration
            </button>
          </div>

          {Object.entries(groupedIntegrations).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map((integration) => (
                  <div
                    key={integration.id}
                    className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleSelectIntegration(integration)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{integration.icon}</span>
                        <div>
                          <h4 className="font-medium">{integration.name}</h4>
                          <div className="flex items-center mt-1">
                            {integration.status === "connected" && (
                              <span className="flex items-center text-sm text-green-600">
                                <CheckCircle size={14} className="mr-1" />{" "}
                                Connected
                              </span>
                            )}
                            {integration.status === "warning" && (
                              <span className="flex items-center text-sm text-amber-600">
                                <AlertCircle size={14} className="mr-1" /> Needs
                                auth
                              </span>
                            )}
                            {integration.status === "disconnected" && (
                              <span className="flex items-center text-sm text-gray-500">
                                Disconnected
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggle(integration.id);
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {integration.connected ? (
                          <ToggleRight size={24} className="text-blue-600" />
                        ) : (
                          <ToggleLeft size={24} />
                        )}
                      </button>
                    </div>

                    {integration.connected && (
                      <div className="mt-3 flex justify-between items-center text-sm border-t border-gray-100 pt-3">
                        <span className="text-gray-500">
                          Last sync: {integration.lastSync}
                        </span>
                        <button
                          className="text-blue-600 hover:text-blue-800 flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleManualSync();
                          }}
                        >
                          <RefreshCw size={14} className="mr-1" />
                          Sync now
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel - Status & Logs */}
        <div className="w-1/3 flex flex-col gap-4">
          {/* Status Panel */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-4">Connection Status</h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Active connections:</span>
                <span className="font-medium">
                  {integrations.filter((i) => i.connected).length} of{" "}
                  {integrations.length}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Last sync activity:</span>
                <span className="text-gray-600">10 mins ago</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Next scheduled sync:</span>
                <span className="text-gray-600">15 mins</span>
              </div>
            </div>

            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors">
              <RefreshCw size={16} />
              <span>Test All Connections</span>
            </button>
          </div>

          {/* Sync Log */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex-1 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Sync Log</h2>

            <div className="space-y-3 flex-1 overflow-auto">
              <div className="border-l-4 border-green-500 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">
                    Webflow CMS sync completed
                  </span>
                  <span className="text-xs text-gray-500">10 mins ago</span>
                </div>
                <p className="text-sm text-gray-600">
                  3 content blocks exported successfully
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">
                    Google Drive partial sync
                  </span>
                  <span className="text-xs text-gray-500">1 hour ago</span>
                </div>
                <p className="text-sm text-gray-600">
                  2 files synced, 1 file skipped (permission error)
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">
                    Slack integration failed
                  </span>
                  <span className="text-xs text-gray-500">Yesterday</span>
                </div>
                <p className="text-sm text-gray-600">
                  Authentication token expired. Please reconnect.
                </p>
              </div>
            </div>

            <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center w-full">
              View full sync history
            </button>
          </div>
        </div>
      </div>

      {/* Configuration Modal */}
      {showConfigModal && selectedIntegration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedIntegration.icon}</span>
                <h2 className="text-xl font-semibold">
                  {selectedIntegration.name} Configuration
                </h2>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Connection Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  defaultValue={selectedIntegration.name}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  API Key / Token
                </label>
                <div className="flex">
                  <input
                    type="password"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md"
                    defaultValue="••••••••••••••••"
                  />
                  <button className="bg-gray-100 px-3 border-y border-r border-gray-300 rounded-r-md">
                    Show
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Webhook URL (Optional)
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="https://"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Sync Interval
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Real-time (On change)</option>
                  <option>Every 15 minutes</option>
                  <option>Hourly</option>
                  <option>Daily</option>
                  <option>Manual only</option>
                </select>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <label className="block text-gray-700">
                    Advanced Settings
                  </label>
                  <button className="text-blue-600 text-sm">Show</button>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-gray-400 text-sm italic">
                  Advanced settings are hidden
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>

              <div className="flex gap-2">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-100"
                  onClick={() => setShowConfigModal(false)}
                >
                  <Play size={16} />
                  Test Connection
                </button>

                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={() => setShowConfigModal(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationLayer;
