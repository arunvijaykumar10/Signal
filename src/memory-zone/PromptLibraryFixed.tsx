import { SetStateAction, useState } from "react";

const PromptLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState<{
    id: number;
    title: string;
    description: string;
    instructions: string;
    category: string;
    objective: string;
    tone: string;
    persona: string;
    tags: string[];
    creator: string;
    dateCreated: string;
    lastUsed: string;
    usageCount: number;
    exampleOutput: string;
  } | null>(null);
  const [activeFilters, setActiveFilters] = useState<{
    category: string[];
    persona: string[];
    tone: string[];
    objective: string[];
  }>({
    category: [],
    persona: [],
    tone: [],
    objective: [],
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [viewMode, setViewMode] = useState("cards"); // cards or table

  // Sample prompt data
  const prompts = [
    {
      id: 1,
      title: "Email Newsletter Introduction",
      description: "Creates engaging introductions for monthly newsletters",
      instructions:
        "Write an engaging introduction for our monthly newsletter. The tone should be [TONE] and highlight the following key points: [KEY_POINTS]. End with a call to action that encourages readers to explore this month's content.",
      category: "Email",
      objective: "Awareness",
      tone: "Professional",
      persona: "Marketing Lead",
      tags: ["newsletter", "introduction", "email"],
      creator: "Sarah Johnson",
      dateCreated: "April 10, 2025",
      lastUsed: "2 days ago",
      usageCount: 28,
      exampleOutput:
        "Welcome to our April newsletter! This month, we're excited to share some groundbreaking developments in our product lineup that will transform how you interact with our platform...",
    },
    {
      id: 2,
      title: "Product Feature Announcement",
      description: "Highlights new product features with benefits",
      instructions:
        "Create a product feature announcement for [FEATURE_NAME]. Explain how it works in simple terms, emphasize [NUMBER] key benefits, and include technical specifications for advanced users. End with how to access or enable this feature.",
      category: "Product",
      objective: "Conversion",
      tone: "Enthusiastic",
      persona: "Product Marketing",
      tags: ["product", "features", "announcement"],
      creator: "Michael Chen",
      dateCreated: "March 25, 2025",
      lastUsed: "Yesterday",
      usageCount: 42,
      exampleOutput:
        "We're thrilled to announce our newest feature: Smart Analytics Dashboard! This powerful addition gives you unprecedented visibility into your performance metrics...",
    },
    {
      id: 3,
      title: "Customer Support Response Template",
      description: "Standard customer support response for common issues",
      instructions:
        "Write a helpful response to a customer who is experiencing [ISSUE]. Acknowledge their frustration, provide [NUMBER] troubleshooting steps, and offer to escalate if the problem persists. Include links to relevant documentation.",
      category: "Support",
      objective: "Retention",
      tone: "Helpful",
      persona: "Customer Success",
      tags: ["support", "troubleshooting", "customer service"],
      creator: "Jamie Rivera",
      dateCreated: "April 5, 2025",
      lastUsed: "4 hours ago",
      usageCount: 156,
      exampleOutput:
        "I'm sorry to hear you're having trouble with account access. I understand how frustrating this can be when you're trying to get work done. Let's solve this together with these steps...",
    },
    {
      id: 4,
      title: "Social Media Post Series",
      description: "Creates connected series of posts for campaigns",
      instructions:
        "Generate a series of [NUMBER] social media posts for [PLATFORM] about [TOPIC]. Each post should be under [CHARACTER_LIMIT] characters, include relevant hashtags, and maintain a consistent [TONE] voice while highlighting different aspects of the topic.",
      category: "Social Media",
      objective: "Engagement",
      tone: "Conversational",
      persona: "Social Media Manager",
      tags: ["social", "campaign", "series"],
      creator: "Alex Wong",
      dateCreated: "April 8, 2025",
      lastUsed: "3 days ago",
      usageCount: 37,
      exampleOutput:
        "✨ Day 1 of our #ProductivityWeek! Did you know the average person spends 3 hours a day on tasks that could be automated? Our latest feature helps you reclaim that time. Learn how: [LINK] #WorkSmarter #Automation",
    },
    {
      id: 5,
      title: "Legal Disclaimer Generator",
      description: "Creates compliant legal disclaimers for various content",
      instructions:
        "Generate a legal disclaimer for [CONTENT_TYPE] that addresses [LEGAL_REQUIREMENTS]. The disclaimer should be concise but comprehensive, covering liability limitations, accuracy of information, and any required regulatory notices for [INDUSTRY].",
      category: "Legal",
      objective: "Compliance",
      tone: "Formal",
      persona: "Legal",
      tags: ["legal", "disclaimer", "compliance"],
      creator: "Jordan Taylor",
      dateCreated: "March 30, 2025",
      lastUsed: "1 week ago",
      usageCount: 89,
      exampleOutput:
        "DISCLAIMER: The information provided herein is for general informational purposes only and should not be construed as legal advice. All information is provided in good faith, however we make no representation or warranty of any kind...",
    },
  ];

  const filterOptions = {
    category: [
      "Email",
      "Product",
      "Support",
      "Social Media",
      "Legal",
      "Blog",
      "Ad Copy",
      "Website",
    ],
    objective: [
      "Awareness",
      "Consideration",
      "Conversion",
      "Retention",
      "Engagement",
      "Compliance",
    ],
    tone: [
      "Professional",
      "Conversational",
      "Enthusiastic",
      "Formal",
      "Helpful",
      "Persuasive",
    ],
    persona: [
      "Marketing Lead",
      "Product Marketing",
      "Customer Success",
      "Social Media Manager",
      "Legal",
      "Copywriter",
    ],
  };

  const handleSearchChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (category: keyof typeof activeFilters, value: any) => {
    setActiveFilters((prev) => {
      const updated = { ...prev };
      if (updated[category].includes(value)) {
        updated[category] = updated[category].filter((item) => item !== value);
      } else {
        updated[category] = [...updated[category], value];
      }
      return updated;
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      category: [],
      persona: [],
      tone: [],
      objective: [],
    });
    setSearchQuery("");
  };

  const handlePromptSelect = (prompt: SetStateAction<{ id: number; title: string; description: string; instructions: string; category: string; objective: string; tone: string; persona: string; tags: string[]; creator: string; dateCreated: string; lastUsed: string; usageCount: number; exampleOutput: string; } | null>) => {
    setSelectedPrompt(prompt);
  };

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const handleViewModeChange = (mode: SetStateAction<string>) => {
    setViewMode(mode);
  };

  // Filter prompts based on search and filters
  const filteredPrompts = prompts.filter((prompt) => {
    // Search filtering
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        prompt.title.toLowerCase().includes(query) ||
        prompt.description.toLowerCase().includes(query) ||
        prompt.tags.some((tag) => tag.toLowerCase().includes(query));

      if (!matchesSearch) return false;
    }

    // Category filtering
    if (
      activeFilters.category.length > 0 &&
      !activeFilters.category.includes(prompt.category)
    ) {
      return false;
    }

    // Persona filtering
    if (
      activeFilters.persona.length > 0 &&
      !activeFilters.persona.includes(prompt.persona)
    ) {
      return false;
    }

    // Tone filtering
    if (
      activeFilters.tone.length > 0 &&
      !activeFilters.tone.includes(prompt.tone)
    ) {
      return false;
    }

    // Objective filtering
    if (
      activeFilters.objective.length > 0 &&
      !activeFilters.objective.includes(prompt.objective)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Prompt Library
            </h1>
            <p className="text-gray-500 mt-1">
              Manage and organize your reusable AI prompt templates
            </p>
          </div>
          <button
            onClick={toggleCreateModal}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <span className="mr-2">+</span> Create Prompt
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Filters & List */}
        <div className="w-1/4 bg-white border-r border-gray-200 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search prompts, tags..."
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery("")}
              >
                {searchQuery && "x"}
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-700">Filters</h3>
              {Object.values(activeFilters).some((arr) => arr.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear all
                </button>
              )}
            </div>

            {Object.keys(filterOptions).map((category) => (
              <div key={category} className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2 capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {filterOptions[category as keyof typeof filterOptions].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleFilterChange(category as keyof typeof activeFilters, option)}
                      className={`px-2 py-1 text-xs rounded-full ${
                      activeFilters[category as keyof typeof activeFilters].includes(option)
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Found Stats */}
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 text-sm text-gray-500">
            {filteredPrompts.length}{" "}
            {filteredPrompts.length === 1 ? "prompt" : "prompts"} found
          </div>

          {/* List View Controls */}
          <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => handleViewModeChange("cards")}
                className={`p-1.5 rounded ${
                  viewMode === "cards" ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <span className="text-sm">Cards</span>
              </button>
              <button
                onClick={() => handleViewModeChange("table")}
                className={`p-1.5 rounded ${
                  viewMode === "table" ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <span className="text-sm">Table</span>
              </button>
            </div>
            <div className="text-sm text-gray-500">
              <select className="border border-gray-300 rounded-md p-1">
                <option>Sort: Recent</option>
                <option>Sort: Most Used</option>
                <option>Sort: A-Z</option>
              </select>
            </div>
          </div>

          {/* Prompt List */}
          <div className="flex-1 overflow-y-auto">
            {filteredPrompts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="text-gray-400 mb-2">📄</div>
                <h3 className="text-gray-700 font-medium mb-1">
                  No prompts found
                </h3>
                <p className="text-gray-500 text-sm">
                  Try adjusting your filters or create a new prompt
                </p>
              </div>
            ) : viewMode === "cards" ? (
              <div className="p-3 grid grid-cols-1 gap-3">
                {filteredPrompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className={`bg-white p-3 rounded-lg border hover:border-blue-300 cursor-pointer transition-shadow hover:shadow-md ${
                      selectedPrompt?.id === prompt.id
                        ? "border-blue-500 ring-1 ring-blue-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => handlePromptSelect(prompt)}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">
                        {prompt.title}
                      </h3>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          prompt.category === "Email"
                            ? "bg-blue-100 text-blue-800"
                            : prompt.category === "Product"
                            ? "bg-purple-100 text-purple-800"
                            : prompt.category === "Support"
                            ? "bg-green-100 text-green-800"
                            : prompt.category === "Social Media"
                            ? "bg-pink-100 text-pink-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {prompt.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {prompt.description}
                    </p>
                    <div className="flex mt-2 space-x-2">
                      <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                        {prompt.persona}
                      </span>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                        {prompt.tone}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100 text-xs text-gray-500">
                      <span>Used {prompt.usageCount} times</span>
                      <span>Last used {prompt.lastUsed}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Persona
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredPrompts.map((prompt) => (
                      <tr
                        key={prompt.id}
                        className={`hover:bg-gray-50 cursor-pointer ${
                          selectedPrompt?.id === prompt.id ? "bg-blue-50" : ""
                        }`}
                        onClick={() => handlePromptSelect(prompt)}
                      >
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {prompt.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {prompt.description.substring(0, 50)}...
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 text-xs rounded-full ${
                              prompt.category === "Email"
                                ? "bg-blue-100 text-blue-800"
                                : prompt.category === "Product"
                                ? "bg-purple-100 text-purple-800"
                                : prompt.category === "Support"
                                ? "bg-green-100 text-green-800"
                                : prompt.category === "Social Media"
                                ? "bg-pink-100 text-pink-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {prompt.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {prompt.persona}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {prompt.usageCount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Prompt Details */}
        <div className="w-3/4 flex flex-col">
          {selectedPrompt ? (
            <>
              <div className="p-6 bg-white border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {selectedPrompt.title}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {selectedPrompt.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                      Edit
                    </button>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Use this Prompt
                    </button>
                  </div>
                </div>
                <div className="flex mt-4 flex-wrap gap-2">
                  {selectedPrompt.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                    <h3 className="text-gray-800 font-medium mb-4">
                      Prompt Details
                    </h3>
                    <div className="grid grid-cols-2 gap-y-3 text-sm">
                      <div className="text-gray-500">Category</div>
                      <div>{selectedPrompt.category}</div>

                      <div className="text-gray-500">Objective</div>
                      <div>{selectedPrompt.objective}</div>

                      <div className="text-gray-500">Tone</div>
                      <div>{selectedPrompt.tone}</div>

                      <div className="text-gray-500">Persona</div>
                      <div>{selectedPrompt.persona}</div>

                      <div className="text-gray-500">Created By</div>
                      <div>{selectedPrompt.creator}</div>

                      <div className="text-gray-500">Date Created</div>
                      <div>{selectedPrompt.dateCreated}</div>

                      <div className="text-gray-500">Usage Count</div>
                      <div>{selectedPrompt.usageCount} times</div>

                      <div className="text-gray-500">Last Used</div>
                      <div>{selectedPrompt.lastUsed}</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                    <h3 className="text-gray-800 font-medium mb-4">
                      Usage Analytics
                    </h3>
                    <div className="text-center py-8">
                      <div className="text-4xl font-bold text-blue-600">
                        {selectedPrompt.usageCount}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Total Uses
                      </div>
                    </div>
                    <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-sm">
                      Usage Graph Placeholder
                    </div>
                    <div className="mt-3 text-xs text-gray-500 text-center">
                      Most active users: Sarah J., Michael T., Alex K.
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-6">
                  <h3 className="text-gray-800 font-medium mb-4">
                    Prompt Instructions
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 font-mono text-sm whitespace-pre-wrap">
                    {selectedPrompt.instructions}
                  </div>
                  <div className="flex justify-end mt-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Copy to clipboard
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                  <h3 className="text-gray-800 font-medium mb-4">
                    Example Output
                  </h3>
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100 text-sm">
                    {selectedPrompt.exampleOutput}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="text-gray-300 text-5xl mb-4">📝</div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                Select a prompt
              </h3>
              <p className="text-gray-500 max-w-md">
                Choose a prompt from the library to view details, edit, or use
                it in your content creation.
              </p>
              <button
                onClick={toggleCreateModal}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Create New Prompt
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Create Prompt Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">
                Create New Prompt
              </h3>
              <button
                onClick={toggleCreateModal}
                className="text-gray-400 hover:text-gray-500"
              >
                ✕
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prompt Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="E.g., Email Newsletter Introduction"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of what this prompt creates"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select a category</option>
                      {filterOptions.category.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Persona
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select a persona</option>
                      {filterOptions.persona.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Objective
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select an objective</option>
                      {filterOptions.objective.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Tone
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select a tone</option>
                      {filterOptions.tone.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="E.g., newsletter, introduction, email (comma separated)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prompt Instructions
                  </label>
                  <div className="mb-1 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Use [VARIABLE_NAME] syntax for variables
                    </span>
                    <button className="text-xs text-blue-600 hover:text-blue-800">
                      Add variable
                    </button>
                  </div>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 font-mono"
                    placeholder="Write your prompt instructions here..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Example Output
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                    placeholder="Provide an example of what this prompt might generate..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end space-x-3">
              <button
                onClick={toggleCreateModal}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Create Prompt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptLibrary;
