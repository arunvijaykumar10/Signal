import {
  Check,
  ChevronRight,
  AlertCircle,
  Users,
  Slack,
  FileText,
  Box,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkspaceSummary = () => {
  const navigate = useNavigate();
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
              <div className="bg-green-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <Check className="h-4 w-4" />
              </div>
              <span className="ml-2 font-medium text-green-600">
                Team Invites
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Setup Complete!</h1>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
            Your Signal Studio workspace is ready. Here's a summary of your
            setup.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-medium text-gray-900">
              Workspace Summary
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {/* Brand Identity */}
            <div className="px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                      <Box className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Brand Identity
                    </h3>
                    <p className="text-sm text-gray-500">
                      Logo, colors, and typography
                    </p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Completed
                </div>
              </div>
              <div className="mt-3 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500">Primary Color:</span>
                    <div className="flex items-center mt-1">
                      <div className="w-5 h-5 rounded-md bg-indigo-600 mr-2"></div>
                      <span className="text-gray-700">#4F46E5</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Typography:</span>
                    <div className="mt-1 text-gray-700">Inter</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tone & Governance */}
            <div className="px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Tone & Governance
                    </h3>
                    <p className="text-sm text-gray-500">
                      Content guidelines and restrictions
                    </p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Completed
                </div>
              </div>
              <div className="mt-3 text-sm">
                <p className="text-gray-700">
                  <span className="text-gray-500">Tone Profile:</span> Balanced
                  formality, confident, moderately technical
                </p>
                <p className="text-gray-700 mt-1">
                  <span className="text-gray-500">Restricted Keywords:</span> 4
                  words/phrases added
                </p>
              </div>
            </div>

            {/* Team Members */}
            <div className="px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Team Members
                    </h3>
                    <p className="text-sm text-gray-500">Invited colleagues</p>
                  </div>
                </div>
                <div className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Pending Invites
                </div>
              </div>
              <div className="mt-3 text-sm">
                <p className="text-gray-700">
                  <span className="text-gray-500">3 invites sent:</span> 2
                  Copywriters, 1 Legal/QA
                </p>
                <p className="text-gray-700 mt-1">
                  <span className="text-gray-500">License Usage:</span> 3 of 10
                  seats used
                </p>
              </div>
            </div>

            {/* Integrations */}
            <div className="px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                      <Slack className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Integrations
                    </h3>
                    <p className="text-sm text-gray-500">
                      Connected tools and services
                    </p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  2 Connected
                </div>
              </div>
              <div className="mt-3 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-2" />
                    <span className="text-gray-700">Slack</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-2" />
                    <span className="text-gray-700">
                      Content Management System (WordPress)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Actions */}
            <div className="px-6 py-5 bg-amber-50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-amber-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-800">
                    Pending Setup Items
                  </h3>
                  <div className="mt-2 text-sm text-amber-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Connect Google Drive integration</li>
                      <li>Invite Legal Reviewer</li>
                      <li>Upload more brand examples</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <a
                      href="#"
                      className="text-sm font-medium text-amber-800 hover:text-amber-700"
                    >
                      Complete these items in Admin settings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Time to Start Creating
          </h2>
          <p className="text-gray-600 mb-6">
            You're all set! Here are a few things you can do next:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center mb-3">
                <div className="bg-indigo-100 p-2 rounded">
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="ml-3 text-sm font-medium text-gray-900">
                  Create Your First Draft
                </h3>
              </div>
              <p className="text-xs text-gray-500">
                Use our AI-powered Draft Editor to quickly generate content.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center mb-3">
                <div className="bg-indigo-100 p-2 rounded">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="ml-3 text-sm font-medium text-gray-900">
                  Build Your Team
                </h3>
              </div>
              <p className="text-xs text-gray-500">
                Invite more team members and set up workflows.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center mb-3">
                <div className="bg-indigo-100 p-2 rounded">
                  <Clock className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="ml-3 text-sm font-medium text-gray-900">
                  Schedule a Demo
                </h3>
              </div>
              <p className="text-xs text-gray-500">
                Book a personalized walkthrough with our success team.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="px-5 py-3 bg-indigo-600 rounded-md text-white font-medium hover:bg-indigo-700 flex items-center"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Need help?{" "}
            <a href="#" className="text-indigo-600 font-medium">
              Contact support
            </a>{" "}
            or check our{" "}
            <a href="#" className="text-indigo-600 font-medium">
              documentation
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSummary;
