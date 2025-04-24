import { useState } from "react";
import {
  ChevronRight,
  Check,
  Upload,
  FileText,
  Plus,
  Star,
  RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PromptSnippetImport = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("import"); // 'import' or 'manual' or 'suggestions'
  const [selectedFile, setSelectedFile] = useState(null);
  const [promptName, setPromptName] = useState("");
  const [promptInstructions, setPromptInstructions] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // Sample suggested prompts that would be AI-generated in a real implementation
  const suggestedPrompts = [
    {
      id: 1,
      name: "Product Launch Email",
      description: "Announce a new product or feature to your customer base",
      category: "Email",
      tags: ["Marketing", "Product"],
    },
    {
      id: 2,
      name: "Social Media Update",
      description: "Create engaging social content for new announcements",
      category: "Social",
      tags: ["Marketing", "Engagement"],
    },
    {
      id: 3,
      name: "Sales Follow-up",
      description: "Personalized follow-up after initial sales contact",
      category: "Email",
      tags: ["Sales", "Outreach"],
    },
  ];

  // Mock function for file upload
  const handleFileUpload = () => {
    setSelectedFile("prompts_collection.csv");
  };

  // Available tags for the tag selector
  const availableTags = [
    "Marketing",
    "Sales",
    "Product",
    "Support",
    "Technical",
    "Email",
    "Social",
    "Blog",
    "Website",
    "Internal",
  ];

  // Mock function to toggle tag selection
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
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
              <div className="bg-indigo-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <span>3</span>
              </div>
              <span className="ml-2 font-medium text-indigo-600">
                Prompt Import
              </span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-gray-200 flex items-center justify-center w-6 h-6 rounded-full">
                <span>4</span>
              </div>
              <span className="ml-2">Integrations</span>
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
            Prompt & Snippet Import
          </h1>
          <p className="mt-2 text-gray-600">
            Add your existing prompts or start with industry-specific templates.
          </p>
        </div>

        {/* Tabs for different import options */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("import")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "import"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Upload CSV or JSON
            </button>
            <button
              onClick={() => setActiveTab("manual")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "manual"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Manual Add
            </button>
            <button
              onClick={() => setActiveTab("suggestions")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "suggestions"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              AI Suggested Prompts
            </button>
          </nav>
        </div>

        {/* Content for the CSV/JSON Upload tab */}
        {activeTab === "import" && (
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Import from File
            </h2>
            <p className="text-gray-600 mb-4">
              Bulk upload your existing prompts and snippets from CSV or JSON
              files.
            </p>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              {selectedFile ? (
                <div className="flex flex-col items-center">
                  <FileText className="h-12 w-12 text-indigo-500 mb-3" />
                  <p className="text-gray-700 font-medium mb-2">
                    {selectedFile}
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    CSV file with prompts
                  </div>
                  <div className="flex space-x-3">
                    <button
                      className="px-3 py-1.5 border border-indigo-600 rounded text-indigo-600 text-sm font-medium"
                      onClick={() => setSelectedFile(null)}
                    >
                      Remove
                    </button>
                    <button className="px-3 py-1.5 bg-indigo-600 rounded text-white text-sm font-medium">
                      Process File
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-3" />
                  <p className="text-gray-600 mb-2">
                    Drag and drop your file here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Supported formats: CSV, JSON
                  </p>
                  <button
                    className="px-4 py-2 rounded bg-indigo-600 text-white font-medium"
                    onClick={handleFileUpload}
                  >
                    Select File
                  </button>
                </div>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">Format Guide</h3>
              <p className="text-sm text-gray-600 mb-2">
                Your CSV should include these columns:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• prompt_name (required)</li>
                <li>• instructions (required)</li>
                <li>• persona (optional)</li>
                <li>• tags (optional, comma-separated)</li>
                <li>• example_output (optional)</li>
              </ul>
              <a href="#" className="text-indigo-600 text-sm font-medium">
                Download sample template
              </a>
            </div>
          </div>
        )}

        {/* Content for the Manual Add tab */}
        {activeTab === "manual" && (
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Create a Prompt
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prompt Name
                </label>
                <input
                  type="text"
                  value={promptName}
                  onChange={(e) => setPromptName(e.target.value)}
                  placeholder="e.g., Weekly Newsletter Template"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prompt Instructions
                </label>
                <textarea
                  rows={5}
                  value={promptInstructions}
                  onChange={(e) => setPromptInstructions(e.target.value)}
                  placeholder="Write detailed instructions for the AI to follow..."
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                      <button
                        type="button"
                        className="ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:text-indigo-600"
                        onClick={() => toggleTag(tag)}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableTags
                    .filter((tag) => !selectedTags.includes(tag))
                    .map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                      >
                        <Plus className="mr-1 h-3 w-3" />
                        {tag}
                      </button>
                    ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 rounded text-white font-medium hover:bg-indigo-700">
                  Save Prompt
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content for the AI Suggested Prompts tab */}
        {activeTab === "suggestions" && (
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6 mb-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Suggested Prompts
              </h2>
              <p className="text-gray-600 mb-4">
                Based on your industry, here are some prompts you might find
                useful:
              </p>

              <div className="space-y-4">
                {suggestedPrompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className="border border-gray-200 rounded-md p-4 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {prompt.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {prompt.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {prompt.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                            {prompt.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="p-1 text-gray-400 hover:text-amber-500">
                          <Star className="h-5 w-5" />
                        </button>
                        <button className="ml-2 p-1 text-gray-400 hover:text-indigo-600">
                          <Plus className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-center">
                <button className="flex items-center text-indigo-600 font-medium">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Show me more suggestions
                </button>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FileText className="h-5 w-5 text-indigo-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-indigo-800">
                    Need more specific prompts?
                  </h3>
                  <div className="mt-1 text-sm text-indigo-700">
                    <p>
                      You can import your own prompts or create custom ones
                      anytime in the Memory Zone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 font-medium bg-white hover:bg-gray-50">
            Skip for Now
          </button>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 font-medium bg-white hover:bg-gray-50">
              Back
            </button>
            <button
              className="px-4 py-2 bg-indigo-600 rounded text-white font-medium hover:bg-indigo-700"
              onClick={() =>
                navigate("/dashboard/admintools/access/wizard/intergations")
              }
            >
              Next: Integrations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptSnippetImport;
