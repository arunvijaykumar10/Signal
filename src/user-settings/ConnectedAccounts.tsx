import { useState } from "react";
import { Check, AlertCircle, RefreshCw } from "lucide-react";

const ConnectedAccountsTab = () => {
  // State to track connection status and test results
  const [connections, setConnections] = useState<{
    slack: { connected: boolean; username: string; lastSync: string };
    email: { enabled: boolean; lastSync: string };
    googleDrive: { connected: boolean; lastSync: string };
    dropbox: { connected: boolean; lastSync: string };
  }>({
    slack: {
      connected: true,
      username: "@jonathan",
      lastSync: "April 16, 9:42 AM",
    },
    email: { enabled: true, lastSync: "April 18, 10:15 AM" },
    googleDrive: { connected: false, lastSync: "" },
    dropbox: { connected: false, lastSync: "" },
  });

  // State for showing a test connection modal
  const [testingConnection, setTestingConnection] = useState(false);
  const [testTarget, setTestTarget] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Handler for toggling email sync
  const handleEmailToggle = () => {
    setConnections({
      ...connections,
      email: {
        ...connections.email,
        enabled: !connections.email.enabled,
      },
    });
  };

  // Handler for connect/disconnect actions
  const handleConnectionToggle = (service: string) => {
    if (service === "slack" && connections.slack.connected) {
      // Disconnect flow
      if (
        confirm(
          "Are you sure you want to disconnect Slack? This will affect notifications and exports."
        )
      ) {
        setConnections({
          ...connections,
          slack: {
            connected: false,
            username: "",
            lastSync: "",
          },
        });
      }
    } else {
      // This would normally trigger OAuth flow
      // For demo, we'll just simulate a successful connection
      if (service === "slack") {
        setConnections({
          ...connections,
          slack: {
            connected: true,
            username: "@jonathan",
            lastSync: "Just now",
          },
        });
      } else if (service === "googleDrive") {
        setConnections({
          ...connections,
          googleDrive: { connected: true, lastSync: "Just now" },
        });
      } else if (service === "dropbox") {
        setConnections({
          ...connections,
          dropbox: { connected: true, lastSync: "Just now" },
        });
      }
    }
  };

  // Simulated test connection flow
  const testConnection = (service: string | null) => {
    setTestingConnection(true);
    setTestTarget(service);
    setTestResult(null);

    // Simulate API call with timeout
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for demo
      setTestResult({
        success,
        message: success
          ? `Successfully connected to ${service}!`
          : `Connection test failed. Please check your credentials and try again.`,
      });
    }, 1500);
  };

  // Close the test result modal
  const closeTestModal = () => {
    setTestingConnection(false);
    setTestTarget(null);
    setTestResult(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Connected Accounts & Integrations
      </h2>

      {/* Slack Integration */}
      <div className="mb-8 border rounded-lg p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="bg-slate-100 p-2 rounded-lg mr-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19.8752 11.2498C20.9106 11.2498 21.75 10.4103 21.75 9.37496C21.75 8.33959 20.9105 7.50017 19.8752 7.50017C18.8398 7.50017 18.0004 8.33959 18.0004 9.37496L18 14.625C18 15.6603 18.8395 16.4998 19.8748 16.4998C20.9102 16.4998 21.7496 15.6603 21.7496 14.625C21.7496 13.5897 20.9101 12.7502 19.8748 12.7502H19.8752Z"
                  fill="#E01E5A"
                />
                <path
                  d="M4.12484 12.7498C3.08947 12.7498 2.25 13.5893 2.25 14.6246C2.25 15.66 3.08947 16.4994 4.12484 16.4994C5.16021 16.4994 5.99963 15.6599 5.99963 14.6246L6 9.37455C6 8.33918 5.16053 7.49976 4.12516 7.49976C3.08979 7.49976 2.25037 8.33918 2.25037 9.37455C2.25037 10.4099 3.08984 11.2494 4.12521 11.2494H4.12484V12.7498Z"
                  fill="#36C5F0"
                />
                <path
                  d="M12.7498 4.12484C12.7498 3.08947 11.9103 2.25 10.875 2.25C9.83959 2.25 9.00017 3.08947 9.00017 4.12484C9.00017 5.16021 9.83959 5.99963 10.875 5.99963H16.1246C17.1599 5.99963 17.9994 5.16016 17.9994 4.12479C17.9994 3.08942 17.1599 2.25 16.1246 2.25C15.0892 2.25 14.2498 3.08947 14.2498 4.12484V4.12484H12.7498Z"
                  fill="#2EB67D"
                />
                <path
                  d="M11.2498 19.8752C11.2498 20.9105 12.0893 21.75 13.1246 21.75C14.16 21.75 14.9994 20.9105 14.9994 19.8752C14.9994 18.8398 14.1599 18.0004 13.1246 18.0004H7.87496C6.83959 18.0004 6.00017 18.8399 6.00017 19.8752C6.00017 20.9106 6.83959 21.75 7.87496 21.75C8.91033 21.75 9.74976 20.9105 9.74976 19.8752V19.8752H11.2498Z"
                  fill="#ECB22E"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Slack Account</h3>
              {connections.slack.connected ? (
                <p className="text-sm text-green-600 flex items-center">
                  <Check size={16} className="mr-1" />
                  Connected as {connections.slack.username}
                </p>
              ) : (
                <p className="text-sm text-gray-500">Not connected</p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            {connections.slack.connected && (
              <button
                onClick={() => testConnection("Slack")}
                className="mr-3 text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                <RefreshCw size={14} className="mr-1" /> Test
              </button>
            )}
            <button
              onClick={() => handleConnectionToggle("slack")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                connections.slack.connected
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {connections.slack.connected ? "Disconnect" : "Connect"}
            </button>
          </div>
        </div>

        {connections.slack.connected && (
          <div className="text-xs text-gray-500 flex items-center">
            <span>Last sync: {connections.slack.lastSync}</span>
          </div>
        )}
      </div>

      {/* Email Sync */}
      <div className="mb-8 border rounded-lg p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-slate-100 p-2 rounded-lg mr-4">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                  stroke="#4B5563"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="#4B5563"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Email Sync</h3>
              <p className="text-sm text-gray-500">
                Auto-send exports to my inbox
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={handleEmailToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                connections.email.enabled ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span className="sr-only">Toggle email sync</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  connections.email.enabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {connections.email.enabled && (
          <div className="mt-2 text-xs text-gray-500">
            <span>Last sync: {connections.email.lastSync}</span>
          </div>
        )}
      </div>

      {/* Cloud Storage */}
      <div className="mb-8 border rounded-lg p-5">
        <div className="mb-3">
          <h3 className="text-lg font-medium">Cloud Storage</h3>
          <p className="text-sm text-gray-500">
            For asset export or attachment upload
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Google Drive */}
          <div className="p-4 border rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-slate-100 p-1 rounded-md mr-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      d="M21.4566 10.3185L17.851 3.89798C17.7993 3.80671 17.7245 3.7291 17.634 3.67211C17.5434 3.61512 17.4397 3.58019 17.332 3.57H6.67133C6.5632 3.57996 6.45886 3.61473 6.36771 3.67168C6.27656 3.72863 6.20132 3.80631 6.14933 3.89798L2.54366 10.3185C2.49729 10.4073 2.47405 10.5052 2.47566 10.604C2.47726 10.7027 2.50365 10.7998 2.55266 10.887L9.90033 20.661C9.95351 20.7337 10.0238 20.7925 10.1053 20.832C10.1868 20.8715 10.2771 20.8906 10.3685 20.8875H13.6345C13.7259 20.8906 13.8162 20.8715 13.8977 20.832C13.9792 20.7925 14.0495 20.7337 14.1027 20.661L21.4503 10.887C21.4993 10.7998 21.5257 10.7027 21.5273 10.604C21.5289 10.5052 21.5057 10.4073 21.4593 10.3185H21.4566ZM9.42133 15.957L6.38633 11.1855L8.42033 7.13398H15.585L17.619 11.1855L14.5822 15.957H9.42133Z"
                      fill="#4285F4"
                    />
                  </svg>
                </div>
                <span className="font-medium">Google Drive</span>
              </div>

              <button
                onClick={() => handleConnectionToggle("googleDrive")}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  connections.googleDrive.connected
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {connections.googleDrive.connected ? "Disconnect" : "Connect"}
              </button>
            </div>

            {connections.googleDrive.connected && (
              <div className="mt-2 text-xs text-gray-500">
                <span>Last sync: {connections.googleDrive.lastSync}</span>
              </div>
            )}
          </div>

          {/* Dropbox */}
          <div className="p-4 border rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-slate-100 p-1 rounded-md mr-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      d="M6 6.15L12 1.5L18 6.15L12 10.8L6 6.15ZM18 12.15L12 16.8L6 12.15L12 7.5L18 12.15ZM6 18.15L12 13.5L18 18.15L12 22.8L6 18.15Z"
                      fill="#0061FF"
                    />
                  </svg>
                </div>
                <span className="font-medium">Dropbox</span>
              </div>

              <button
                onClick={() => handleConnectionToggle("dropbox")}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  connections.dropbox.connected
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {connections.dropbox.connected ? "Disconnect" : "Connect"}
              </button>
            </div>

            {connections.dropbox.connected && (
              <div className="mt-2 text-xs text-gray-500">
                <span>Last sync: {connections.dropbox.lastSync}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Integration History */}
      <div className="border rounded-lg p-5">
        <h3 className="text-lg font-medium mb-3">Integration History</h3>
        <div className="bg-gray-50 rounded-md p-4">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Slack notifications sent</span>
              <span className="font-medium">24 (last 7 days)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Email exports</span>
              <span className="font-medium">12 (last 7 days)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Google Drive uploads</span>
              <span className="font-medium">3 (last 7 days)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Test Connection Modal */}
      {testingConnection && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">
                Testing {testTarget} Connection
              </h3>

              {!testResult ? (
                <div className="flex flex-col items-center py-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-3"></div>
                  <p className="text-gray-500">Verifying connection...</p>
                </div>
              ) : (
                <div
                  className={`flex flex-col items-center py-4 ${
                    testResult.success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {testResult.success ? (
                    <Check className="h-10 w-10 mb-2" />
                  ) : (
                    <AlertCircle className="h-10 w-10 mb-2" />
                  )}
                  <p>{testResult.message}</p>
                </div>
              )}

              <button
                onClick={closeTestModal}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                {testResult ? "Close" : "Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectedAccountsTab;
