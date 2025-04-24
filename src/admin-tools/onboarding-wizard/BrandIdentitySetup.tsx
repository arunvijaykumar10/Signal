import { useState } from "react";
import { ChevronRight, Upload, Check, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BrandIdentitySetup = () => {
  const navigate = useNavigate();
  const [brandLogo, setBrandLogo] = useState<string | null>(null);
  const [primaryColor, setPrimaryColor] = useState("#4F46E5");
  const [secondaryColor, setSecondaryColor] = useState("#10B981");
  const [fontChoice, setFontChoice] = useState("Inter");

  // Mock function for logo upload
  const handleLogoUpload = (_e: React.ChangeEvent<HTMLInputElement> ) => {
    // In a real implementation, this would handle file upload
    setBrandLogo("logo-placeholder.svg");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Progress tracker */}
      <div className="w-full bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center">
              <div className="bg-indigo-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <span>1</span>
              </div>
              <span className="ml-2 font-medium text-indigo-600">
                Brand Identity
              </span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-gray-200 flex items-center justify-center w-6 h-6 rounded-full">
                <span>2</span>
              </div>
              <span className="ml-2">Tone & Governance</span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-gray-200 flex items-center justify-center w-6 h-6 rounded-full">
                <span>3</span>
              </div>
              <span className="ml-2">Prompt Import</span>
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
            Brand Identity Setup
          </h1>
          <p className="mt-2 text-gray-600">
            Let's set up your brand visual identity in Signal Studio. This will
            be used across all generated content.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Upload Logo
          </h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            {brandLogo ? (
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-gray-100 rounded flex items-center justify-center mb-4">
                  <Check className="h-10 w-10 text-green-500" />
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  logo-placeholder.svg
                </p>
                <button
                  className="text-indigo-600 text-sm font-medium"
                  onClick={() => setBrandLogo(null)}
                >
                  Remove and upload another
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Upload className="h-12 w-12 text-gray-400 mb-3" />
                <p className="text-gray-600 mb-2">
                  Drag and drop your logo file here, or click to browse
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  SVG or PNG recommended (max 2MB)
                </p>
                <label
                  className="px-4 py-2 rounded bg-indigo-600 text-white font-medium cursor-pointer"
                >
                  Select File
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleLogoUpload}
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Brand Colors
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Color
              </label>
              <div className="flex items-center">
                <div
                  className="w-10 h-10 rounded-lg mr-3"
                  style={{ backgroundColor: primaryColor }}
                />
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secondary Color
              </label>
              <div className="flex items-center">
                <div
                  className="w-10 h-10 rounded-lg mr-3"
                  style={{ backgroundColor: secondaryColor }}
                />
                <input
                  type="text"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Typography
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Font
            </label>
            <select
              value={fontChoice}
              onChange={(e) => setFontChoice(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Poppins">Poppins</option>
            </select>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500">
                Here's how your content will look in Signal Studio
              </p>
            </div>
            <div
              className="flex items-center border-b pb-4 mb-4"
              style={{ fontFamily: fontChoice }}
            >
              <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center mr-3">
                {brandLogo ? <Check className="h-6 w-6 text-green-500" /> : "L"}
              </div>
              <div>
                <h3 className="font-bold" style={{ color: primaryColor }}>
                  Sample Brand Name
                </h3>
                <p className="text-sm text-gray-600">
                  Signal Studio content will inherit your brand identity
                </p>
              </div>
            </div>
            <div className="space-y-2" style={{ fontFamily: fontChoice }}>
              <h4 className="font-semibold" style={{ color: primaryColor }}>
                Sample Headline
              </h4>
              <p className="text-sm text-gray-800">
                This is an example of how content will appear with your selected
                typography.
              </p>
              <button
                className="text-sm px-3 py-1 rounded"
                style={{ backgroundColor: secondaryColor, color: "white" }}
              >
                Action Button
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <AlertCircle className="h-4 w-4 mr-2" />
            <p>
              This is just a preview. Your actual content rendering may vary
              slightly.
            </p>
          </div>
        </div>

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
                navigate("/dashboard/admintools/access/wizard/tone")
              }
            >
              Next: Tone & Governance
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Looking for something specific?{" "}
            <a href="#" className="text-indigo-600">
              View Documentation
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentitySetup;
