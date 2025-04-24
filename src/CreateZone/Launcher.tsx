import { Clock, Star, User, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Launcher = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<{
    id: number;
    category: string;
    title: string;
    description: string;
    recent: boolean;
  } | null>(null);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPersona, setSelectedPersona] = useState<{
    id: number;
    name: string;
    description: string;
  } | null>(null);

  // Mock data for prompts based on the wireframe specs
  const prompts = [
    {
      id: 1,
      category: "Email",
      title: "Welcome Email",
      description: "Onboarding email for new users",
      recent: true,
    },
    {
      id: 2,
      category: "Product Page",
      title: "Feature Overview",
      description: "Description of product features",
      recent: true,
    },
    {
      id: 3,
      category: "Social Media",
      title: "LinkedIn Post",
      description: "Professional announcement update",
      recent: false,
    },
    {
      id: 4,
      category: "Blog Post",
      title: "Industry Trends",
      description: "Analysis of recent developments",
      recent: false,
    },
    {
      id: 5,
      category: "Email",
      title: "Promotional Offer",
      description: "Limited time discount email",
      recent: true,
    },
  ];

  // Mock data for personas according to wireframe spec
  const personas = [
    {
      id: 1,
      name: "Marketing Lead",
      description: "Strategic messaging with metrics focus",
    },
    { id: 2, name: "Customer", description: "Friendly, accessible tone" },
    {
      id: 3,
      name: "Legal Reviewer",
      description: "Formal, compliance-oriented language",
    },
    {
      id: 4,
      name: "Technical Expert",
      description: "Detailed, precise terminology",
    },
  ];

  const categories = [
    "All",
    "Email",
    "Product Page",
    "Social Media",
    "Blog Post",
  ];

  const filteredPrompts =
    selectedCategory === "All"
      ? prompts
      : prompts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">
            Signal Launcher
          </h1>
          <div className="flex items-center space-x-4">
            <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
              <Clock size={16} className="mr-1.5" />
              Recent
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
              <Star size={16} className="mr-1.5" />
              Favorites
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            {/* Prompt Selection */}
            <div className="bg-white rounded-lg shadow p-5 mb-6">
              <h2 className="text-lg font-medium mb-4">Prompt Selection</h2>

              {/* Category Tabs */}
              <div className="flex space-x-1 mb-4 border-b">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
                      selectedCategory === category
                        ? "bg-indigo-100 text-indigo-700 border-b-2 border-indigo-500"
                        : "text-gray-600 hover:text-indigo-700"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Prompt Cards */}
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {filteredPrompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className={`border rounded-lg p-3 hover:border-indigo-300 cursor-pointer transition ${
                      selectedPrompt?.id === prompt.id
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedPrompt(prompt)}
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{prompt.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {prompt.description}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded h-6">
                        {prompt.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Prompts */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Recent Prompts
                </h3>
                <div className="flex space-x-2">
                  {prompts
                    .filter((p) => p.recent)
                    .map((prompt) => (
                      <button
                        key={prompt.id}
                        className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full"
                        onClick={() => setSelectedPrompt(prompt)}
                      >
                        {prompt.title}
                      </button>
                    ))}
                </div>
              </div>
            </div>

            {/* Preview */}
            {selectedPrompt && (
              <div className="bg-white rounded-lg shadow p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-medium">
                      {selectedPrompt.title}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {selectedPrompt.description}
                    </p>
                  </div>
                  <span className="px-2 py-1 text-sm bg-indigo-100 text-indigo-700 rounded">
                    {selectedPrompt.category}
                  </span>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded border border-gray-200">
                  <h3 className="text-sm font-medium mb-2">Expected Output</h3>
                  <p className="text-sm text-gray-600">
                    This prompt will generate a{" "}
                    {selectedPrompt.category.toLowerCase()} with appropriate
                    structure, tone, and content for{" "}
                    {selectedPrompt.title.toLowerCase()} purposes.
                  </p>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Use Cases</h3>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    <li>Regular customer communications</li>
                    <li>Campaign-specific messaging</li>
                    <li>Cross-team content alignment</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="col-span-1">
            {/* Persona Selection */}
            <div className="bg-white rounded-lg shadow p-5 mb-6">
              <h2 className="text-lg font-medium mb-4">Persona</h2>

              <div className="space-y-3">
                {personas.map((persona) => (
                  <div
                    key={persona.id}
                    className={`border rounded-lg p-3 hover:border-indigo-300 cursor-pointer transition ${
                      selectedPersona?.id === persona.id
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedPersona(persona)}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                        <User size={16} />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">{persona.name}</h3>
                        <p className="text-xs text-gray-600">
                          {persona.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedPersona && (
                <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="flex">
                    <Zap size={16} className="text-blue-500 mt-0.5 mr-2" />
                    <p className="text-sm text-blue-700">
                      <span className="font-medium">AI Tip:</span> This persona
                      typically uses a
                      {selectedPersona.id === 3
                        ? " formal tone and longer sentences."
                        : " casual tone and shorter sentences."}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Launch Button */}
            <button
              // className={`w-full py-3 rounded-lg font-medium ${
              //   selectedPrompt && selectedPersona
              //     ? "bg-indigo-600 text-white hover:bg-indigo-700"
              //     : "bg-gray-200 text-gray-400 cursor-not-allowed"
              // }`}
              // disabled={!selectedPrompt || !selectedPersona}
              className={`w-full py-3 rounded-lg font-medium ${"bg-indigo-600 text-white hover:bg-indigo-700"}`}
              onClick={() => navigate("/dashboard/createzone/editor")}
            >
              Generate Draft
            </button>

            {selectedPrompt && selectedPersona && (
              <p className="text-xs text-gray-500 text-center mt-2">
                This will launch the Structured Draft Editor
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Launcher;
