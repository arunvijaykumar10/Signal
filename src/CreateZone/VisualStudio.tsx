import { useState } from "react";
import { Download, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VisualStudio = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Corporate");

  const navigate = useNavigate();

  // Placeholder images for generated results
  // In a real implementation, these would be dynamically generated
  const [images] = useState([
    "/src/images/image1.jpeg",
    "/src/images/image2.jpeg",
    "/src/images/image3.jpeg",
    "/src/images/image4.jpeg",
    "/src/images/image5.jpeg",
    "/src/images/image6.jpeg",
  ]);

  // Brand style options based on wireframe spec
  const brandStyles = [
    "Minimalist",
    "Corporate",
    "Playful",
    "Technical",
    "Modern",
  ];

  // Mock AI suggestions based on wireframe spec
  const aiSuggestions = [
    "Team collaboration on laptop",
    "Customer service representative",
    "Data visualization dashboard",
    "Product feature diagram",
    "User testimonial graphic",
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* <button className="mr-3 text-gray-500 hover:text-gray-700">
            <ArrowLeft size={20} />
          </button> */}
          <h1 className="text-xl font-semibold">Visual Asset Studio</h1>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1">
              {/* Input Controls */}
              <div className="bg-white rounded-lg shadow p-5 mb-6">
                <h2 className="text-lg font-medium mb-4">Generate Image</h2>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Text Prompt
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
                    rows={4}
                    placeholder="Generate a friendly robot with glowing eyes and a Google logo in a neon digital world...."
                    // placeholder="Generate a humanoid robot collaborating with a focused man at a desk, both analyzing data on a glowing laptop in a dimly lit, futuristic office..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand Style
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {brandStyles.map((style) => (
                      <button
                        key={style}
                        className={`p-2 text-sm rounded ${
                          selectedStyle === style
                            ? "bg-indigo-100 text-indigo-700 font-medium"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedStyle(style)}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Style lock ensures brand consistency
                  </p>
                </div>

                <button
                  className={`w-full py-2 rounded-lg font-medium ${
                    prompt.length > 5
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={prompt.length <= 5}
                >
                  Generate Images
                </button>
              </div>

              {/* Suggested Panel */}
              <div className="bg-white rounded-lg shadow p-5">
                <h2 className="text-lg font-medium mb-4">Suggested by AI</h2>

                <div className="space-y-3">
                  {aiSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-indigo-50 rounded"
                      onClick={() => setPrompt(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  Suggestions based on your draft content
                </p>
              </div>
            </div>

            <div className="col-span-3">
              {/* Image Grid */}
              <div className="bg-white rounded-lg shadow p-5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Generated Results</h2>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">
                      Style: {selectedStyle}
                    </span>
                    <span className="text-sm text-gray-400">|</span>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800">
                      Regenerate All
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {images.map((src, idx) => (
                    <div
                      key={idx}
                      className="group relative border border-gray-200 rounded-lg overflow-hidden bg-gray-100"
                    >
                      <img
                        src={src}
                        alt={`Generated image ${idx + 1}`}
                        className="w-full h-40 object-cover"
                      />

                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-2">
                          <button className="p-1 bg-white rounded hover:bg-gray-100">
                            <Download size={16} />
                          </button>
                          <button className="p-1 bg-white rounded hover:bg-gray-100">
                            <RefreshCw size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-between">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm">
                    Generate More
                  </button>

                  <div>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm mr-2">
                      Download All
                    </button>
                    <button
                      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
                      onClick={() =>
                        navigate("/dashboard/createzone/validator")
                      }
                    >
                      Export Selected
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualStudio;
