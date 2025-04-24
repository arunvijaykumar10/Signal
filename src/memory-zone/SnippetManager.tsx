import { useState, useEffect } from "react";
import {
  Search,
  Edit,
  Trash2,
  Plus,
  Tag,
  AlertCircle,
  Clock,
  X,
  Filter,
  ChevronDown,
} from "lucide-react";

const SnippetManager = () => {
  // Sample data for demonstration
  const [snippets, setSnippets] = useState([
    {
      id: 1,
      title: "Standard Legal Disclaimer",
      preview:
        "This content is provided for informational purposes only and does not constitute legal advice. Consult with qualified legal counsel for specific situations.",
      toneTag: "Formal",
      lastUsed: "2025-04-10T10:42:00",
      category: "Disclaimer",
      language: "English",
      brandTier: "Corporate",
      status: "Approved",
      usageCount: 28,
      campaigns: ["Q2 Email Newsletter", "Product Launch"],
      updatedBy: "Alex Johnson",
    },
    {
      id: 2,
      title: "Product Feature Call-to-Action",
      preview:
        "Ready to transform your experience? Try our new feature today and see the difference for yourself.",
      toneTag: "Persuasive",
      lastUsed: "2025-04-15T14:22:00",
      category: "CTA",
      language: "English",
      brandTier: "Marketing",
      status: "Approved",
      usageCount: 16,
      campaigns: ["Feature Release", "Website Update"],
      updatedBy: "Taylor Smith",
    },
    {
      id: 3,
      title: "Email Signup Incentive",
      preview:
        "Join our newsletter for exclusive insights, tips and special offers delivered straight to your inbox.",
      toneTag: "Friendly",
      lastUsed: "2025-04-17T09:30:00",
      category: "CTA",
      language: "English",
      brandTier: "Consumer",
      status: "Pending Review",
      usageCount: 12,
      campaigns: ["Email Campaign"],
      updatedBy: "Robin Lee",
    },
    {
      id: 4,
      title: "GDPR Compliance Statement",
      preview:
        "We prioritize your privacy. Your data is handled in accordance with GDPR regulations. See our privacy policy for details on how we protect your information.",
      toneTag: "Formal",
      lastUsed: "2025-04-01T11:15:00",
      category: "Disclaimer",
      language: "English",
      brandTier: "Corporate",
      status: "Approved",
      usageCount: 32,
      campaigns: ["All European Communications"],
      updatedBy: "Jamie Martinez",
    },
    {
      id: 5,
      title: "Satisfaction Guarantee",
      preview:
        "Not completely satisfied? We offer a 30-day money-back guarantee, no questions asked.",
      toneTag: "Confident",
      lastUsed: "2025-04-14T16:45:00",
      category: "Product",
      language: "English",
      brandTier: "Marketing",
      status: "Approved",
      usageCount: 23,
      campaigns: ["Product Pages", "Checkout Flow"],
      updatedBy: "Casey Wilson",
    },
  ]);

  const [filteredSnippets, setFilteredSnippets] = useState(snippets);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSnippet, setSelectedSnippet] = useState<{
    id: number;
    title: string;
    preview: string;
    toneTag: string;
    lastUsed: string;
    category: string;
    language: string;
    brandTier: string;
    status: string;
    usageCount: number;
    campaigns: string[];
    updatedBy: string;
  } | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<{
    category: string[];
    language: string[];
    brandTier: string[];
    status: string[];
  }>({
    category: [],
    language: [],
    brandTier: [],
    status: [],
  });

  // Filter snippets when search query or filters change
  useEffect(() => {
    let results = snippets;

    // Apply search filter
    if (searchQuery) {
      results = results.filter(
        (snippet) =>
          snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          snippet.preview.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filters
    if (filters.category.length > 0) {
      results = results.filter((snippet) =>
        filters.category.includes(snippet.category)
      );
    }

    // Apply language filters
    if (filters.language.length > 0) {
      results = results.filter((snippet) =>
        filters.language.includes(snippet.language)
      );
    }

    // Apply brand tier filters
    if (filters.brandTier.length > 0) {
      results = results.filter((snippet) =>
        filters.brandTier.includes(snippet.brandTier)
      );
    }

    // Apply status filters
    if (filters.status.length > 0) {
      results = results.filter((snippet) =>
        filters.status.includes(snippet.status)
      );
    }

    setFilteredSnippets(results);
  }, [searchQuery, filters, snippets]);

  const handleSnippetClick = (
    snippet: {
      id: number;
      title: string;
      preview: string;
      toneTag: string;
      lastUsed: string;
      category: string;
      language: string;
      brandTier: string;
      status: string;
      usageCount: number;
      campaigns: string[];
      updatedBy: string;
    } | null
  ) => {
    setSelectedSnippet(snippet);
  };

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (updatedFilters[filterType as keyof typeof filters].includes(value)) {
        // Remove the value if it's already selected
        updatedFilters[filterType as keyof typeof filters] = updatedFilters[
          filterType as keyof typeof filters
        ].filter((item) => item !== value);
      } else {
        // Add the value if it's not already selected
        updatedFilters[filterType as keyof typeof filters] = [
          ...updatedFilters[filterType as keyof typeof filters],
          value,
        ];
      }

      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      language: [],
      brandTier: [],
      status: [],
    });
    setSearchQuery("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Snippet Manager
        </h1>
        <p className="text-gray-600">
          Manage reusable content blocks for legal, product, or tone consistency
        </p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Main content area - Snippet List and Filters */}
        <div className="flex flex-col w-2/3 p-6 overflow-hidden">
          {/* Search and Actions Row */}
          <div className="flex items-center mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search snippets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="ml-4 px-4 py-2 flex items-center border rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>

            <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              New Snippet
            </button>
          </div>

          {/* Filter Panel */}
          {filterOpen && (
            <div className="mb-6 p-4 bg-white rounded-lg shadow border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Filter Snippets</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear all filters
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <div className="space-y-1">
                    {["CTA", "Disclaimer", "Product"].map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(category)}
                          onChange={() =>
                            handleFilterChange("category", category)
                          }
                          className="mr-2"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Language Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <div className="space-y-1">
                    {["English", "French", "Spanish"].map((language) => (
                      <label key={language} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.language.includes(language)}
                          onChange={() =>
                            handleFilterChange("language", language)
                          }
                          className="mr-2"
                        />
                        <span className="text-sm">{language}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Tier Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand Tier
                  </label>
                  <div className="space-y-1">
                    {["Corporate", "Marketing", "Consumer"].map((tier) => (
                      <label key={tier} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.brandTier.includes(tier)}
                          onChange={() => handleFilterChange("brandTier", tier)}
                          className="mr-2"
                        />
                        <span className="text-sm">{tier}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <div className="space-y-1">
                    {["Approved", "Pending Review"].map((status) => (
                      <label key={status} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.status.includes(status)}
                          onChange={() => handleFilterChange("status", status)}
                          className="mr-2"
                        />
                        <span className="text-sm">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Applied Filters */}
          {(filters.category.length > 0 ||
            filters.language.length > 0 ||
            filters.brandTier.length > 0 ||
            filters.status.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {filters.category.map((category) => (
                <div
                  key={category}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {category}
                  <X
                    className="h-4 w-4 ml-1 cursor-pointer"
                    onClick={() => handleFilterChange("category", category)}
                  />
                </div>
              ))}
              {filters.language.map((language) => (
                <div
                  key={language}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {language}
                  <X
                    className="h-4 w-4 ml-1 cursor-pointer"
                    onClick={() => handleFilterChange("language", language)}
                  />
                </div>
              ))}
              {filters.brandTier.map((tier) => (
                <div
                  key={tier}
                  className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {tier}
                  <X
                    className="h-4 w-4 ml-1 cursor-pointer"
                    onClick={() => handleFilterChange("brandTier", tier)}
                  />
                </div>
              ))}
              {filters.status.map((status) => (
                <div
                  key={status}
                  className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {status}
                  <X
                    className="h-4 w-4 ml-1 cursor-pointer"
                    onClick={() => handleFilterChange("status", status)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Snippet Cards */}
          <div className="overflow-y-auto flex-1 pr-2">
            {filteredSnippets.length === 0 ? (
              <div className="text-center py-10">
                <AlertCircle className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">
                  No snippets found matching your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-2 text-blue-600 hover:text-blue-800"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredSnippets.map((snippet) => (
                  <div
                    key={snippet.id}
                    onClick={() => handleSnippetClick(snippet)}
                    className={`bg-white border rounded-lg p-4 cursor-pointer transition hover:shadow-md ${
                      selectedSnippet?.id === snippet.id
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900 truncate">
                        {snippet.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                          snippet.status
                        )}`}
                      >
                        {snippet.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {snippet.preview}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {snippet.category}
                      </div>
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs flex items-center">
                        {snippet.toneTag}
                      </div>
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs flex items-center">
                        {snippet.language}
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Last used: {formatDate(snippet.lastUsed)}
                      </div>
                      <div>
                        Used in {snippet.usageCount}{" "}
                        {snippet.usageCount === 1 ? "campaign" : "campaigns"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right panel - Snippet Preview */}
        <div className="w-1/3 border-l bg-white p-6 overflow-y-auto">
          {selectedSnippet ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {selectedSnippet.title}
                </h2>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Snippet Content
                </h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <p className="text-gray-800">{selectedSnippet.preview}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Category
                  </h3>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{selectedSnippet.category}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Tone
                  </h3>
                  <span>{selectedSnippet.toneTag}</span>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Language
                  </h3>
                  <span>{selectedSnippet.language}</span>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Brand Tier
                  </h3>
                  <span>{selectedSnippet.brandTier}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Used In Campaigns
                </h3>
                <div className="space-y-2">
                  {selectedSnippet.campaigns.map((campaign, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 bg-gray-50 rounded border"
                    >
                      <span>{campaign}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <div>Last updated by: {selectedSnippet.updatedBy}</div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {formatDate(selectedSnippet.lastUsed)}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Insert into Draft
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Tag className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Select a Snippet
              </h3>
              <p className="max-w-xs">
                Click on a snippet from the list to view details and manage it
                here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnippetManager;
