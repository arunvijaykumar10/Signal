import { useState } from "react";
import {
  Download,
  Share2,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const SignalExportHub = () => {
  const [selectedFormat, setSelectedFormat] = useState("JSON");
  const [showRaw, setShowRaw] = useState(false);
  const [exportOptions, setExportOptions] = useState({
    includeMetadata: true,
    inlineStyles: false,
    compressImages: true,
  });

  const handleFormatChange = (format: React.SetStateAction<string>) => {
    setSelectedFormat(format);
  };

  type ExportOptionKey = keyof typeof exportOptions;

  const handleToggleOption = (option: ExportOptionKey) => {
    setExportOptions({
      ...exportOptions,
      [option]: !exportOptions[option],
    });
  };

  const formatOptions = [
    {
      id: "JSON",
      label: "JSON",
      tooltip: "Best for programmatic use and API integrations",
    },
    { id: "HTML", label: "HTML", tooltip: "Best for web publishing" },
    {
      id: "PDF",
      label: "PDF",
      tooltip: "Best for document sharing and printing",
    },
    { id: "MD", label: "Markdown", tooltip: "Best for documentation systems" },
    {
      id: "INDD",
      label: "InDesign",
      tooltip: "Best for print design workflows",
    },
  ];

  const exportHistory = [
    {
      id: 1,
      format: "JSON",
      fileName: "Campaign_Summer2025.json",
      date: "Today, 10:42 AM",
      status: "success",
    },
    {
      id: 2,
      format: "PDF",
      fileName: "Q2_Newsletter.pdf",
      date: "Yesterday",
      status: "success",
    },
    {
      id: 3,
      format: "HTML",
      fileName: "ProductLaunch_Email.html",
      date: "Apr 15, 2025",
      status: "failed",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Signal Export Hub</h1>
        <p className="text-gray-500">
          Export finalized content in structured formats for use across tools
          and teams
        </p>
      </div>

      <div className="flex flex-1 p-6 gap-6">
        {/* Left Panel - Export Options */}
        <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Export Format</h2>

          {/* Format Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {formatOptions.map((format) => (
              <div
                key={format.id}
                className={`px-4 py-2 rounded-full cursor-pointer border transition-colors flex items-center gap-1
                  ${
                    selectedFormat === format.id
                      ? "bg-blue-100 border-blue-400 text-blue-700"
                      : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => handleFormatChange(format.id)}
                title={format.tooltip}
              >
                {format.label}
              </div>
            ))}
          </div>

          {/* Export Options */}
          <h2 className="text-lg font-semibold mb-2">Export Options</h2>
          <div className="space-y-3 mb-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 rounded"
                checked={exportOptions.includeMetadata}
                onChange={() => handleToggleOption("includeMetadata")}
              />
              <span className="text-gray-700">Include metadata</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 rounded"
                checked={exportOptions.inlineStyles}
                onChange={() => handleToggleOption("inlineStyles")}
              />
              <span className="text-gray-700">Inline styles</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 rounded"
                checked={exportOptions.compressImages}
                onChange={() => handleToggleOption("compressImages")}
              />
              <span className="text-gray-700">Compress images</span>
            </label>
          </div>

          {/* File Naming */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">File Naming</h2>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="campaign_name_v1"
              defaultValue="Summer_Campaign_2025"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-auto space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors">
              <Download size={18} />
              <span>Download Export</span>
            </button>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md flex items-center justify-center space-x-2 border border-gray-300 transition-colors">
              <Share2 size={18} />
              <span>Send to Integration</span>
            </button>
          </div>
        </div>

        {/* Center Panel - Preview */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Content Preview</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">View:</span>
              <button
                className={`px-3 py-1 rounded-md ${
                  !showRaw
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setShowRaw(false)}
              >
                Styled
              </button>
              <button
                className={`px-3 py-1 rounded-md ${
                  showRaw
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setShowRaw(true)}
              >
                Raw
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-auto">
            {!showRaw ? (
              <div className="p-4 border border-gray-200 rounded-md min-h-full">
                <h1 className="text-2xl font-bold mb-4">
                  Summer 2025 Campaign
                </h1>
                <p className="mb-4">
                  Introducing our newest line of sustainable products designed
                  to make your summer eco-friendly and stylish.
                </p>
                <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                <ul className="list-disc pl-5 mb-4">
                  <li>100% recycled materials</li>
                  <li>Carbon-neutral manufacturing</li>
                  <li>Available in six vibrant colors</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                  <p className="text-blue-800 font-medium">
                    Limited time offer: Use code SUMMER25 for 15% off your
                    purchase
                  </p>
                </div>
              </div>
            ) : (
              <pre className="bg-gray-50 p-4 rounded-md text-gray-800 text-sm overflow-auto h-full font-mono">
                {`{
  "campaign": {
    "title": "Summer 2025 Campaign",
    "description": "Introducing our newest line of sustainable products designed to make your summer eco-friendly and stylish.",
    "features": [
      "100% recycled materials",
      "Carbon-neutral manufacturing",
      "Available in six vibrant colors"
    ],
    "promotion": {
      "type": "discount",
      "code": "SUMMER25",
      "value": "15%",
      "expiry": "2025-08-31"
    },
    "metadata": {
      "creator": "marketing_team",
      "created_at": "2025-04-17T10:42:00Z",
      "version": "1.0",
      "tone_score": 87
    }
  }
}`}
              </pre>
            )}
          </div>
        </div>

        {/* Right Panel - Export History */}
        <div className="w-1/4 bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Export History</h2>

          <div className="space-y-3 overflow-auto">
            {exportHistory.map((item) => (
              <div
                key={item.id}
                className="p-3 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-800 truncate mr-2">
                    {item.fileName}
                  </span>
                  {item.status === "success" ? (
                    <CheckCircle
                      size={16}
                      className="text-green-500 flex-shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      size={16}
                      className="text-red-500 flex-shrink-0"
                    />
                  )}
                </div>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <span className="text-gray-500 flex items-center gap-1">
                    <Clock size={14} />
                    {item.date}
                  </span>
                  <span className="px-2 py-0.5 bg-gray-100 rounded text-gray-600">
                    {item.format}
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="p-1 text-gray-500 hover:text-gray-700 rounded">
                    <Download size={16} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700 rounded">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center w-full">
              Show all export history
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalExportHub;
