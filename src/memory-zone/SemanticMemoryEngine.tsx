import { useState } from "react";
import {
  Search,
  Tag,
  Pin,
  Clock,
  Filter,
  ChevronRight,
  Save,
  X,
  AlertCircle,
  Edit,
  Trash,
  ChevronDown,
} from "lucide-react";

type MemoryItem = {
  id: number;
  title: string;
  type: "Text" | "Snippet" | "Prompt";
  preview: string;
  lastUsed: string;
  tone: string;
  persona: string;
  campaign: string;
  tags: string[];
  usageCount: number;
  isPinned: boolean;
};

type FilterCategory = {
  type: string[];
  persona: string[];
  tone: string[];
  campaign: string[];
};

/////////////////////////////////////////////////////////////////////////////////////////////////
const SemanticMemoryEngine = () => {
  const [activeTab, setActiveTab] = useState<string>("recent");
  const [showDrawer, setShowDrawer] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<MemoryItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFilters, setActiveFilters] = useState<FilterCategory>({
    type: [],
    persona: [],
    tone: [],
    campaign: [],
  });

  // Sample memory items data
  const memoryItems: MemoryItem[] = [
    {
      id: 1,
      title: "Q1 Campaign Email Introduction",
      type: "Text",
      preview:
        "Welcome to our exclusive spring collection, designed with sustainability in mind...",
      lastUsed: "2 hours ago",
      tone: "Professional",
      persona: "Marketing Lead",
      campaign: "Spring 2025",
      tags: ["email", "introduction", "sustainability"],
      usageCount: 23,
      isPinned: true,
    },
    {
      id: 2,
      title: "Product Feature Highlight - Mobile App",
      type: "Snippet",
      preview:
        "The latest update brings seamless integration with your favorite tools and faster performance...",
      lastUsed: "Yesterday",
      tone: "Enthusiastic",
      persona: "Product Marketing",
      campaign: "Mobile App Launch",
      tags: ["feature", "product", "mobile"],
      usageCount: 15,
      isPinned: false,
    },
    {
      id: 3,
      title: "Legal Disclaimer - Financial Products",
      type: "Snippet",
      preview:
        "Investment products may lose value. Past performance is not indicative of future results...",
      lastUsed: "3 days ago",
      tone: "Formal",
      persona: "Legal",
      campaign: "Financial Services",
      tags: ["legal", "disclaimer", "compliance"],
      usageCount: 47,
      isPinned: true,
    },
    {
      id: 4,
      title: "Customer Satisfaction Survey Invitation",
      type: "Prompt",
      preview:
        "We value your feedback! Please take a moment to share your experience with our recent service...",
      lastUsed: "1 week ago",
      tone: "Friendly",
      persona: "Customer Success",
      campaign: "Feedback Initiative",
      tags: ["survey", "feedback", "customer"],
      usageCount: 8,
      isPinned: false,
    },
    {
      id: 5,
      title: "Technical Support Response Template",
      type: "Text",
      preview:
        "Thank you for reaching out to our support team. I understand you're experiencing an issue with...",
      lastUsed: "2 weeks ago",
      tone: "Helpful",
      persona: "Support",
      campaign: "Customer Support",
      tags: ["support", "template", "technical"],
      usageCount: 31,
      isPinned: false,
    },
  ];

  const filterOptions: FilterCategory = {
    type: ["Text", "Snippet", "Prompt", "Visual"],
    persona: [
      "Marketing Lead",
      "Customer Success",
      "Legal",
      "Product Marketing",
      "Support",
    ],
    tone: ["Professional", "Enthusiastic", "Formal", "Friendly", "Helpful"],
    campaign: [
      "Spring 2025",
      "Mobile App Launch",
      "Financial Services",
      "Feedback Initiative",
      "Customer Support",
    ],
  };

  const handleFilterChange = (category: string, value: string) => {
    setActiveFilters((prev) => {
      const updated = { ...prev };
      const key = category as keyof FilterCategory;
      if (updated[key].includes(value)) {
        updated[key] = updated[key].filter((item) => item !== value);
      } else {
        updated[key] = [...updated[key], value];
      }
      return updated;
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      type: [],
      persona: [],
      tone: [],
      campaign: [],
    });
  };

  const handleItemSelect = (item: MemoryItem) => {
    setSelectedItem?.(item);
  };

  const filteredItems = memoryItems.filter((item) => {
    // Search query filter
    if (
      searchQuery &&
      !item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.preview.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }

    // Apply active filters
    for (const category in activeFilters) {
      if (
        activeFilters[category as keyof FilterCategory].length > 0 &&
        !activeFilters[category as keyof FilterCategory].includes(
          item[category as keyof FilterCategory]
        )
      ) {
        return false;
      }
    }

    // Tab filtering
    if (activeTab === "pinned" && !item.isPinned) return false;
    // Additional tab filtering could be added here

    return true;
  });

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header with toggle button */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Semantic Memory Engine
          </h2>
          <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
            {memoryItems.length} items indexed
          </span>
        </div>
        <button
          onClick={toggleDrawer}
          className="p-2 rounded hover:bg-gray-100"
        >
          {showDrawer ? <X size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {showDrawer && (
        <div className="flex flex-1 overflow-hidden">
          {/* Left panel - Search & Filters */}
          <div className="w-1/3 border-r border-gray-200 bg-white flex flex-col">
            {/* Search bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search memory content, tags, tone..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* AI suggestion */}
              {!searchQuery && (
                <div className="mt-2 px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-md flex items-start">
                  <AlertCircle
                    size={16}
                    className="mr-2 mt-0.5 flex-shrink-0"
                  />
                  <p>
                    Try "Find last quarter's welcome email intro" or "Show
                    formal tone examples"
                  </p>
                </div>
              )}
            </div>

            {/* Filter section */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-700 flex items-center">
                  <Filter size={16} className="mr-1" /> Filters
                </h3>
                {Object.values(activeFilters).some((arr) => arr.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Filter categories */}
              {Object.keys(filterOptions as FilterCategory).map((category) => (
                <div key={category} className="mb-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-1 capitalize flex items-center">
                    <ChevronDown size={16} className="mr-1" /> {category}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {filterOptions[category as keyof FilterCategory].map(
                      (option: string) => (
                        <button
                          key={option}
                          onClick={() => handleFilterChange(category, option)}
                          className={`px-2 py-1 text-xs rounded-full ${
                            activeFilters[
                              category as keyof FilterCategory
                            ].includes(option)
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {option}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-2 text-sm font-medium ${
                  activeTab === "recent"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("recent")}
              >
                <div className="flex items-center justify-center">
                  <Clock size={16} className="mr-1" /> Recent
                </div>
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium ${
                  activeTab === "pinned"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("pinned")}
              >
                <div className="flex items-center justify-center">
                  <Pin size={16} className="mr-1" /> Pinned
                </div>
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium ${
                  activeTab === "all"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("all")}
              >
                <div className="flex items-center justify-center">
                  All Memory
                </div>
              </button>
            </div>

            {/* Result list */}
            <div className="flex-1 overflow-y-auto">
              {filteredItems.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No results found. Try adjusting your filters.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      selectedItem?.id === item.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => handleItemSelect(item)}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">
                        {item.title}
                      </h3>
                      {item.isPinned && (
                        <Pin size={14} className="text-blue-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {item.preview}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <span
                          className={`px-2 py-0.5 rounded ${
                            item.type === "Text"
                              ? "bg-green-100 text-green-800"
                              : item.type === "Snippet"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {item.type}
                        </span>
                        <span className="ml-2">
                          Used {item.usageCount} times
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        {item.lastUsed}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right panel - Preview / Detail */}
          <div className="w-2/3 bg-white flex flex-col">
            {selectedItem ? (
              <>
                <div className="p-4 border-b border-gray-200">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {selectedItem.title}
                    </h2>
                    <div className="flex space-x-2">
                      <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500">
                        <Edit size={18} />
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500">
                        <Pin
                          size={18}
                          className={
                            selectedItem.isPinned ? "text-blue-600" : ""
                          }
                        />
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500">
                        <Trash size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-2 gap-1">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full flex items-center"
                      >
                        <Tag size={12} className="mr-1" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-b border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Type</p>
                      <p className="font-medium">{selectedItem.type}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Tone</p>
                      <p className="font-medium">{selectedItem.tone}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Persona</p>
                      <p className="font-medium">{selectedItem.persona}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Campaign</p>
                      <p className="font-medium">{selectedItem.campaign}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Last Used</p>
                      <p className="font-medium">{selectedItem.lastUsed}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Usage Count</p>
                      <p className="font-medium">
                        {selectedItem.usageCount} times
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Content Preview
                  </h3>
                  <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm min-h-[200px]">
                    <p className="text-gray-800">{selectedItem.preview}</p>
                    <p className="text-gray-800 mt-2">
                      {selectedItem.type === "Text"
                        ? "Full content would be displayed here with formatting preserved. This shows complete text with style elements and structure intact."
                        : selectedItem.type === "Snippet"
                        ? "This reusable snippet can be inserted into other content. It maintains consistent messaging across campaigns."
                        : "This prompt template includes variables that will be replaced when used in content generation."}
                    </p>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                        <Save size={16} className="mr-1" /> Pin to Editor
                      </button>
                      <button className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 flex items-center">
                        Send to Assistant
                      </button>
                    </div>
                    <button className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                      View History
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <Search size={48} className="text-gray-300" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-700">
                    Select an item to preview
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Browse your semantic memory or search for specific content
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SemanticMemoryEngine;
