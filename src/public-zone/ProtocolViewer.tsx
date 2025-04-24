import { useState } from 'react';
import { ChevronDown, ChevronRight, Code, Download, ArrowLeftRight, Check, Info } from 'lucide-react';


export type ErrorType = {
  message: string; // Error message
  code?: string; // Optional error code
  field?: string; // Optional field name related to the error
  severity?: "low" | "medium" | "high"; // Severity level of the error
  timestamp?: string; // Optional timestamp of when the error occurred
};

export type ValidationError = {
  field: string; // The field that caused the validation error
  message: string; // Error message for the field
};

export type APIError = {
  statusCode: number; // HTTP status code
  message: string; // Error message from the API
  details?: string; // Optional additional details about the error
};

export type DiffError = {
  key: string; // The key in the JSON object where the error occurred
  message: string; // Error message related to the diff
  type: "missing" | "mismatch" | "unexpected"; // Type of diff error
};

const SignalObjectProtocolViewer = () => {

  const [selectedVersion, setSelectedVersion] = useState('v1.1');

  const [compareMode, setCompareMode] = useState(false);
  const [compareVersion, setCompareVersion] = useState<'v1.0' | 'v1.1'>('v1.0');
  const [expandedSections, setExpandedSections] = useState({
    metadata: true,
    content: true,
    tags: false,
    version: false
  });

  // Sample protocol object (would come from API in a real app)
  const protocolObjects = {
    'v1.0': {
      object_id: 'sop_eb5791ca8d',
      creator: 'jane.smith@company.com',
      created_at: '2025-03-15T14:32:00Z',
      metadata: {
        campaign: 'Spring 2025 Launch',
        type: 'Email',
        locale: 'en-US',
        tone: 'Professional'
      },
      content: {
        subject: 'Introducing our new product line',
        body: 'Dear valued customer,\n\nWe are excited to announce our new product line launching this spring. Our team has worked tirelessly to bring you the most innovative solutions.\n\nCheck out our website for more information.\n\nBest regards,\nThe Product Team',
        cta: {
          text: 'Shop Now',
          url: 'https://example.com/shop'
        }
      },
      tags: ['email', 'product-launch', 'spring-campaign'],
      version_info: {
        version: '1.0',
        status: 'Draft',
        last_updated: '2025-03-15T14:32:00Z',
        updated_by: 'jane.smith@company.com'
      }
    },
    'v1.1': {
      object_id: 'sop_eb5791ca8d',
      creator: 'jane.smith@company.com',
      created_at: '2025-03-15T14:32:00Z',
      metadata: {
        campaign: 'Spring 2025 Launch',
        type: 'Email',
        locale: 'en-US',
        tone: 'Friendly'
      },
      content: {
        subject: 'Introducing our exciting new product line',
        body: 'Hello there,\n\nWe\'re thrilled to announce our new product line launching this spring! Our team has worked with passion and dedication to bring you the most innovative solutions you\'ll love.\n\nHead over to our website to discover more about these amazing new products.\n\nWarm regards,\nThe Product Team',
        cta: {
          text: 'Explore Now',
          url: 'https://example.com/explore'
        }
      },
      tags: ['email', 'product-launch', 'spring-campaign', 'friendly-tone'],
      version_info: {
        version: '1.1',
        status: 'Final Approved',
        last_updated: '2025-03-17T09:15:00Z',
        updated_by: 'mark.johnson@company.com',
        approval_info: {
          approved_by: 'lisa.approver@company.com',
          approved_at: '2025-03-17T10:30:00Z'
        }
      }
    }
  };

  const toggleSection = (section: keyof typeof expandedSections) => {

    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCompareMode = () => {
    setCompareMode(!compareMode);
  };

  const formatJSON = (obj: any, level: number = 0): string => {

    const indent = '  '.repeat(level);
    if (obj === null) return 'null';
    if (typeof obj !== 'object') {
      if (typeof obj === 'string') return `"${obj}"`;
      return String(obj);
    }
    if (Array.isArray(obj)) {
      if (obj.length === 0) return '[]';
      const items = obj.map(item => `${indent}  ${formatJSON(item, level + 1)}`).join(',\n');
      return `[\n${items}\n${indent}]`;
    }
    const keys = Object.keys(obj);
    if (keys.length === 0) return '{}';
    const items = keys.map(key => `${indent}  "${key}": ${formatJSON(obj[key], level + 1)}`).join(',\n');
    return `{\n${items}\n${indent}}`;
  };

  const getDiff = (p0: null, path = []) => {
    const obj1 = getNestedValue(protocolObjects[selectedVersion as 'v1.0' | 'v1.1'], path);

    const obj2 = getNestedValue(protocolObjects[compareVersion as 'v1.0' | 'v1.1'], path);
    
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
      // If both are objects, we're just rendering a key name, not a value
      return { 
        changed: false,
        added: false,
        removed: false
      };
    }
    
    return {
      changed: obj1 !== obj2,
      added: obj2 === undefined && obj1 !== undefined,
      removed: obj1 === undefined && obj2 !== undefined
    };
  };


  const getNestedValue = (obj: { object_id: string; creator: string; created_at: string; metadata: { campaign: string; type: string; locale: string; tone: string; }; content: { subject: string; body: string; cta: { text: string; url: string; }; }; tags: string[]; version_info: { version: string; status: string; last_updated: string; updated_by: string; }; } | { object_id: string; creator: string; created_at: string; metadata: { campaign: string; type: string; locale: string; tone: string; }; content: { subject: string; body: string; cta: { text: string; url: string; }; }; tags: string[]; version_info: { version: string; status: string; last_updated: string; updated_by: string; approval_info: { approved_by: string; approved_at: string; }; }; }, path: any[]) => {
    return path.reduce((prev, curr) => prev && prev[curr], obj);
  };

  const renderJSONTree = (obj: any[] | { campaign: string; type: string; locale: string; tone: string; } | { subject: string; body: string; cta: { text: string; url: string; }; } | { version: string; status: string; last_updated: string; updated_by: string; } | null, path = [], level = 0) => {

    if (obj === null || typeof obj !== 'object') {
      const value = typeof obj === 'string' ? `"${obj}"` : String(obj);
      
      if (compareMode) {
        const { changed, added, removed } = getDiff(null, path);
        const className = changed ? 'bg-yellow-100' : added ? 'bg-green-100' : removed ? 'bg-red-100' : '';
        return <span className={className}>{value}</span>;
      }
      
      return <span>{value}</span>;
    }

    const isArray = Array.isArray(obj);
    const keys = isArray ? obj.map((_, i) => i) : Object.keys(obj);
    
    if (keys.length === 0) {
      return <span>{isArray ? '[]' : '{}'}</span>;
    }

    return (
      <div className="ml-4">
        {keys.map((key) => {
          const newPath = [...path, key];
          const value = (obj as Record<string | number, any>)[key];
          const isObject = value !== null && typeof value === 'object';
          
          // For diff highlighting
          const diffInfo = compareMode ? getDiff(null, newPath) : { changed: false };
          const rowClass = diffInfo.changed ? 'bg-yellow-100' : 
                          diffInfo.added ? 'bg-green-100' : 
                          diffInfo.removed ? 'bg-red-100' : '';
          
          return (
            <div key={key} className={`${rowClass}`}>
              <div className="flex items-start">
                {isObject && (
                  <button 
                    onClick={() => toggleSection(`${newPath.join('.')}` as keyof typeof expandedSections)}
                    className="mr-1 p-1 rounded hover:bg-gray-200 focus:outline-none"
                  >
                    {expandedSections[`${newPath.join('.')}`] ? 
                      <ChevronDown className="h-4 w-4" /> : 
                      <ChevronRight className="h-4 w-4" />
                    }
                  </button>
                )}
                {!isObject && <span className="w-6"></span>}
                <span className="text-blue-600 font-mono mr-2">
                  {isArray ? `[${key}]` : `"${key}"`}:
                </span>
                {isObject ? (
                  <>
                    <span>{Array.isArray(value) ? '[' : '{'}</span>
                    {!expandedSections[`${newPath.join('.')}`] && (
                      <span className="text-gray-500 italic">
                        {Array.isArray(value) ? `${value.length} items` : `${Object.keys(value).length} keys`}
                      </span>
                    )}
                    {!expandedSections[`${newPath.join('.')}`] && <span>{Array.isArray(value) ? ']' : '}'}</span>}
                  </>
                ) : (
                  renderJSONTree(value, newPath, level + 1)
                )}
              </div>
              {isObject && expandedSections[`${newPath.join('.')}`] && (
                <>
                  {renderJSONTree(value, newPath, level + 1)}
                  <div>{Array.isArray(value) ? ']' : '}'}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const versions = ['v1.0', 'v1.1', 'Draft Copy', 'Final Approved'];
  const currentObject = protocolObjects[selectedVersion] || {};

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Signal Object Protocol Viewer</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Version:</label>
            <select 
              value={selectedVersion} 
              onChange={(e) => setSelectedVersion(e.target.value)}
              className="border rounded-md px-3 py-1.5 bg-white text-sm"
            >
              {versions.map(version => (
                <option key={version} value={version}>{version}</option>
              ))}
            </select>
          </div>
          <button 
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors ${compareMode ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={toggleCompareMode}
          >
            <ArrowLeftRight size={16} />
            {compareMode ? 'Exit Compare' : 'Compare Versions'}
          </button>
          {compareMode && (
            <select 
              value={compareVersion} 
              onChange={(e) => setCompareVersion(e.target.value as 'v1.0' | 'v1.1')}
              className="border rounded-md px-3 py-1.5 bg-white text-sm"
            >
              {versions.filter(v => v !== selectedVersion).map(version => (
                <option key={version} value={version}>{version}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="flex mb-4 gap-4">
        <div className="bg-gray-50 p-4 rounded-md flex-shrink-0 w-1/4">
          <h3 className="font-medium mb-2 text-lg">Metadata</h3>
          <div className="text-sm space-y-2">
            <div><span className="font-medium">Object ID:</span> {currentObject.object_id}</div>
            <div><span className="font-medium">Creator:</span> {currentObject.creator}</div>
            <div><span className="font-medium">Created:</span> {new Date(currentObject.created_at).toLocaleString()}</div>
            <div>
              <span className="font-medium">Status:</span>{' '}
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                currentObject.version_info?.status === 'Final Approved' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {currentObject.version_info?.status || 'Draft'}
              </span>
            </div>
            {currentObject.version_info?.approval_info && (
              <div>
                <span className="font-medium">Approved by:</span> {currentObject.version_info.approval_info.approved_by}
              </div>
            )}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="font-medium mb-2">Actions</h3>
            <div className="space-y-2">
              <button className="flex items-center w-full gap-2 text-sm px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100">
                <Download size={14} />
                Export JSON
              </button>
              <button className="flex items-center w-full gap-2 text-sm px-3 py-2 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100">
                <Code size={14} />
                View Raw
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 border rounded-md overflow-hidden">
          {compareMode && (
            <div className="bg-blue-50 p-3 text-sm flex items-start border-b">
              <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Comparing versions</p>
                <p className="text-gray-600">
                  Showing differences between {selectedVersion} and {compareVersion}.
                  <span className="mx-2">•</span>
                  <span className="bg-yellow-100 px-1">Changed</span>
                  <span className="mx-1">•</span>
                  <span className="bg-green-100 px-1">Added</span>
                  <span className="mx-1">•</span>
                  <span className="bg-red-100 px-1">Removed</span>
                </p>
              </div>
            </div>
          )}
          
          <div className="p-4 overflow-auto font-mono text-sm">
            <div className="mb-3 flex items-center gap-2">
              <button 
                onClick={() => toggleSection('metadata')}
                className="p-1 rounded hover:bg-gray-200 focus:outline-none"
              >
                {expandedSections.metadata ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
              <span className="font-medium">"metadata": {!expandedSections.metadata && "{ ... }"}</span>
            </div>
            {expandedSections.metadata && renderJSONTree(currentObject.metadata, ['metadata'])}
            
            <div className="mb-3 mt-6 flex items-center gap-2">
              <button 
                onClick={() => toggleSection('content')}
                className="p-1 rounded hover:bg-gray-200 focus:outline-none"
              >
                {expandedSections.content ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
              <span className="font-medium">"content": {!expandedSections.content && "{ ... }"}</span>
            </div>
            {expandedSections.content && renderJSONTree(currentObject.content, ['content'])}
            
            <div className="mb-3 mt-6 flex items-center gap-2">
              <button 
                onClick={() => toggleSection('tags')}
                className="p-1 rounded hover:bg-gray-200 focus:outline-none"
              >
                {expandedSections.tags ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
              <span className="font-medium">"tags": {!expandedSections.tags && `[ ... ${currentObject.tags?.length || 0} items ]`}</span>
            </div>
            {expandedSections.tags && renderJSONTree(currentObject.tags, ['tags'])}
            
            <div className="mb-3 mt-6 flex items-center gap-2">
              <button 
                onClick={() => toggleSection('version')}
                className="p-1 rounded hover:bg-gray-200 focus:outline-none"
              >
                {expandedSections.version ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
              <span className="font-medium">"version_info": {!expandedSections.version && "{ ... }"}</span>
            </div>
            {expandedSections.version && renderJSONTree(currentObject.version_info, ['version_info'])}
          </div>
        </div>
      </div>
      
      {compareMode && (
        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="font-medium mb-2">Version Comparison Summary</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
              <span>Tone changed from <span className="bg-yellow-100 px-1">Professional</span> to <span className="bg-yellow-100 px-1">Friendly</span></span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
              <span>Content has been made more engaging with <span className="bg-green-100 px-1">additional adjectives</span></span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
              <span>CTA text changed from <span className="bg-yellow-100 px-1">Shop Now</span> to <span className="bg-yellow-100 px-1">Explore Now</span></span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
              <span>Status updated from <span className="bg-yellow-100 px-1">Draft</span> to <span className="bg-green-100 px-1">Final Approved</span></span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SignalObjectProtocolViewer;