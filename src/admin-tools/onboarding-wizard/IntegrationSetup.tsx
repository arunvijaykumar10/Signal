import { useState } from "react";
import {
  ChevronRight,
  Check,
  ExternalLink,
  Shield,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const IntegrationSetup = () => {
  const navigate = useNavigate();
  const [integrations, setIntegrations] = useState({
    slack: { enabled: false, connected: false, needsAuth: true },
    cms: { enabled: false, connected: false, needsAuth: true },
    email: { enabled: false, connected: false, needsAuth: true },
    googleDrive: { enabled: false, connected: false, needsAuth: true },
  });

  // Mock function to toggle integration on/off
  const toggleIntegration = (key: string) => {
    setIntegrations({
      ...integrations,
      [key]: {
        ...integrations[key],
        enabled: !integrations[key].enabled,
      },
    });
  };

  // Mock function to simulate connecting an integration
  const connectIntegration = (key) => {
    // In a real app, this would trigger an OAuth flow or API key validation
    setIntegrations({
      ...integrations,
      [key]: {
        ...integrations[key],
        connected: true,
        needsAuth: false,
      },
    });
  };

  // Mock integration data with details
  const integrationData = {
    slack: {
      name: "Slack",
      icon: "🔔",
      description: "Send content to channels, receive notifications",
      configFields: ["Workspace URL", "Channel", "Notification Preferences"],
      testMsg: "Connecting to Slack workspace...",
    },
    cms: {
      name: "Content Management System",
      icon: "📄",
      description: "Push content directly to your website CMS",
      configFields: ["CMS API Key", "Endpoint URL", "Content Type"],
      testMsg: "Testing CMS connection...",
    },
    email: {
      name: "Email Service (Mailchimp)",
      icon: "✉️",
      description: "Export email templates and campaigns",
      configFields: ["API Key", "List ID", "Template Format"],
      testMsg: "Verifying email service credentials...",
    },
    googleDrive: {
      name: "Google Drive",
      icon: "📁",
      description: "Store and organize exports in your Drive",
      configFields: ["Account", "Folder Path", "File Format"],
      testMsg: "Connecting to Google Drive...",
    },
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
              <div className="bg-indigo-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <span>4</span>
              </div>
              <span className="ml-2 font-medium text-indigo-600">
                Integrations
              </span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-gray-200 flex items-center justify-center w-6 h-6 rounded-full">
                <span>5</span>
              </div>
              <span className="ml-2">Team Invites</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Integration Setup
          </h1>
          <p className="mt-2 text-gray-600">
            Connect Signal Studio to your existing tools for seamless content
            delivery.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              Available Integrations
            </h2>
            <p className="text-gray-600">
              Enable the tools you want to connect with Signal Studio.
            </p>
          </div>

          <div>
            {/* Slack Integration */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">
                    {integrationData.slack.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {integrationData.slack.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {integrationData.slack.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {integrations.slack.connected ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Connected
                    </span>
                  ) : integrations.slack.enabled ? (
                    <button
                      onClick={() => connectIntegration("slack")}
                      className="px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md"
                    >
                      Connect
                    </button>
                  ) : null}

                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={integrations.slack.enabled}
                        onChange={() => toggleIntegration("slack")}
                      />
                      <div
                        className={`block w-10 h-6 rounded-full ${
                          integrations.slack.enabled
                            ? "bg-indigo-600"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          integrations.slack.enabled
                            ? "transform translate-x-4"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
              </div>

              {integrations.slack.enabled && (
                <div className="mt-4 pl-10">
                  {integrations.slack.connected ? (
                    <div className="bg-gray-50 rounded-md p-3">
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          Connected to workspace:{" "}
                          <span className="font-medium text-gray-700">
                            company-workspace
                          </span>
                        </div>
                        <div>
                          <button className="text-xs text-indigo-600 font-medium">
                            Configure
                          </button>
                          <button className="text-xs text-gray-500 font-medium ml-3">
                            Disconnect
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Last sync: 2 minutes ago
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-md p-3">
                      <p className="text-sm text-gray-600 mb-2">
                        Click "Connect" to authorize Signal Studio with your
                        Slack workspace.
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Shield className="h-3 w-3 mr-1" />
                        <span>Requires OAuth authentication</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* CMS Integration */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">
                    {integrationData.cms.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {integrationData.cms.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {integrationData.cms.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {integrations.cms.connected ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Connected
                    </span>
                  ) : integrations.cms.enabled ? (
                    <button
                      onClick={() => connectIntegration("cms")}
                      className="px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md"
                    >
                      Connect
                    </button>
                  ) : null}

                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={integrations.cms.enabled}
                        onChange={() => toggleIntegration("cms")}
                      />
                      <div
                        className={`block w-10 h-6 rounded-full ${
                          integrations.cms.enabled
                            ? "bg-indigo-600"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          integrations.cms.enabled
                            ? "transform translate-x-4"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
              </div>

              {integrations.cms.enabled && (
                <div className="mt-4 pl-10">
                  <div className="bg-gray-50 rounded-md p-3">
                    <p className="text-sm text-gray-600 mb-2">
                      Which CMS do you use?
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <button className="border border-gray-300 rounded p-2 text-center text-sm hover:bg-gray-100">
                        WordPress
                      </button>
                      <button className="border border-gray-300 rounded p-2 text-center text-sm hover:bg-gray-100">
                        Webflow
                      </button>
                      <button className="border border-gray-300 rounded p-2 text-center text-sm hover:bg-gray-100">
                        Contentful
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      More CMS options will be available in the full integration
                      panel.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Email Integration */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">
                    {integrationData.email.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {integrationData.email.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {integrationData.email.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {integrations.email.connected ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Connected
                    </span>
                  ) : integrations.email.enabled ? (
                    <button
                      onClick={() => connectIntegration("email")}
                      className="px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md"
                    >
                      Connect
                    </button>
                  ) : null}

                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={integrations.email.enabled}
                        onChange={() => toggleIntegration("email")}
                      />
                      <div
                        className={`block w-10 h-6 rounded-full ${
                          integrations.email.enabled
                            ? "bg-indigo-600"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          integrations.email.enabled
                            ? "transform translate-x-4"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
              </div>

              {integrations.email.enabled && (
                <div className="mt-4 pl-10">
                  <div className="bg-gray-50 rounded-md p-3">
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        API Key
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your Mailchimp API key"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="flex text-xs">
                      <a
                        href="#"
                        className="text-indigo-600 font-medium flex items-center"
                      >
                        Where do I find my API key?
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Google Drive Integration */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">
                    {integrationData.googleDrive.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {integrationData.googleDrive.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {integrationData.googleDrive.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {integrations.googleDrive.connected ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Connected
                    </span>
                  ) : integrations.googleDrive.enabled ? (
                    <button
                      onClick={() => connectIntegration("googleDrive")}
                      className="px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md"
                    >
                      Connect
                    </button>
                  ) : null}

                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={integrations.googleDrive.enabled}
                        onChange={() => toggleIntegration("googleDrive")}
                      />
                      <div
                        className={`block w-10 h-6 rounded-full ${
                          integrations.googleDrive.enabled
                            ? "bg-indigo-600"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          integrations.googleDrive.enabled
                            ? "transform translate-x-4"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
              </div>

              {integrations.googleDrive.enabled && (
                <div className="mt-4 pl-10">
                  <div className="bg-gray-50 rounded-md p-3">
                    <p className="text-sm text-gray-600 mb-2">
                      Click "Connect" to authorize with your Google account.
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Shield className="h-3 w-3 mr-1" />
                      <span>
                        Signal Studio will only access folders you explicitly
                        grant permission to
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-indigo-800">
                Integration Tip
              </h3>
              <div className="mt-1 text-sm text-indigo-700">
                <p>
                  Most users sync exports with their CMS and Slack first. You
                  can configure additional integrations anytime in the Publish
                  Zone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Test connection panel */}
        {Object.values(integrations).some((int) => int.enabled) && (
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Test Your Connections
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Verify that your integrations are working properly.
            </p>

            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-indigo-600 rounded text-white font-medium hover:bg-indigo-700 flex items-center">
                <RefreshCw className="mr-2 h-4 w-4" />
                Test All Connections
              </button>
              <button className="px-4 py-2 border border-indigo-600 rounded text-indigo-600 font-medium hover:bg-indigo-50">
                View Status Log
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationSetup;
