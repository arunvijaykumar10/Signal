import { useState } from 'react';
import { Clipboard, Check, Code, Terminal, KeyRound, RotateCw, Download } from 'lucide-react';

const CLISDKPanel = () => {
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState('javascript');
  const [tokenName, setTokenName] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [generatedToken, setGeneratedToken] = useState('');
  const [activeTab, setActiveTab] = useState('code-snippets');
  
  const handleCopyCode = () => {
    // In a real app this would copy to clipboard
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const generateToken = () => {
    // Simulating token generation
    const newToken = `sgnl_${Math.random().toString(36).substring(2, 10)}_${Math.random().toString(36).substring(2, 10)}`;
    setGeneratedToken(newToken);
  };
  
  const getCodeSnippet = (lang: string) => {
    if (lang === 'javascript') {
      return `// Signal Studio SDK example
import { SignalStudio } from '@signal-studio/sdk';

// Initialize client with your API key
const client = new SignalStudio({
  apiKey: 'YOUR_API_KEY',
  workspace: 'my-workspace'
});

// Generate content from a prompt
async function generateDraft() {
  const draft = await client.drafts.create({
    promptId: 'email-welcome-sequence',
    parameters: {
      customerName: 'John',
      productName: 'Signal Pro'
    }
  });
  
  console.log(draft.content);
  return draft;
}`;
    } else if (lang === 'python') {
      return `# Signal Studio SDK example
from signal_studio import SignalStudio

# Initialize client with your API key
client = SignalStudio(
    api_key="YOUR_API_KEY",
    workspace="my-workspace"
)

# Generate content from a prompt
def generate_draft():
    draft = client.drafts.create(
        prompt_id="email-welcome-sequence",
        parameters={
            "customer_name": "John",
            "product_name": "Signal Pro"
        }
    )
    
    print(draft.content)
    return draft`;
    } else {
      return `# Signal Studio API example using cURL
curl -X POST https://api.signalstudio.ai/v1/drafts \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt_id": "email-welcome-sequence",
    "parameters": {
      "customer_name": "John",
      "product_name": "Signal Pro"
    },
    "workspace": "my-workspace"
  }'`;
    }
  };
  
  const apiTokens = [
    { name: 'Production API', created: 'Apr 12, 2025', lastUsed: '2 hours ago', scopes: 'read, write, export' },
    { name: 'Testing Token', created: 'Apr 15, 2025', lastUsed: 'Yesterday', scopes: 'read, write' },
    { name: 'CI/CD Pipeline', created: 'Mar 30, 2025', lastUsed: '5 days ago', scopes: 'read' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6 bg-white">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Developer Tools</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50">
            <Code size={16} />
            View API Reference
          </button>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('code-snippets')}
            className={`py-2 px-4 flex items-center gap-2 ${activeTab === 'code-snippets' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          >
            <Code className="h-4 w-4" />
            Code Snippets
          </button>
          <button 
            onClick={() => setActiveTab('api-tokens')}
            className={`py-2 px-4 flex items-center gap-2 ${activeTab === 'api-tokens' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          >
            <KeyRound className="h-4 w-4" />
            API Tokens
          </button>
          <button 
            onClick={() => setActiveTab('cli-setup')}
            className={`py-2 px-4 flex items-center gap-2 ${activeTab === 'cli-setup' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          >
            <Terminal className="h-4 w-4" />
            CLI Setup
          </button>
        </div>
      </div>
      
      {/* Code Snippets Tab Content */}
      {activeTab === 'code-snippets' && (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <h3 className="text-xl font-bold">SDK Usage Examples</h3>
            <p className="text-gray-600 mt-1">
              Copy and paste these code snippets to get started with the Signal Studio API
            </p>
            
            <div className="flex items-center space-x-2 mt-4">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md bg-white"
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="curl">cURL</option>
              </select>
            </div>
            
            <div className="mt-4">
              <div className="relative bg-gray-900 text-gray-50 rounded-md p-4 overflow-x-auto">
                <pre className="font-mono text-sm whitespace-pre">
                  <code>{getCodeSnippet(language)}</code>
                </pre>
                <button 
                  onClick={handleCopyCode}
                  className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-white"
                >
                  {copied ? <Check size={16} /> : <Clipboard size={16} />}
                </button>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50">
                <Download size={16} />
                Download SDK
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <Terminal size={16} />
                Try in Playground
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* API Tokens Tab Content */}
      {activeTab === 'api-tokens' && (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <h3 className="text-xl font-bold">API Tokens</h3>
            <p className="text-gray-600 mt-1">
              Create and manage access tokens for the Signal Studio API
            </p>
            
            <div className="mt-4 border rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Used</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scopes</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {apiTokens.map((token, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{token.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{token.created}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{token.lastUsed}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{token.scopes}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-red-600 hover:text-red-800">
                          Revoke
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 border rounded-md space-y-4">
              <h3 className="text-lg font-medium">Generate New Token</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Token Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-md" 
                    placeholder="e.g., Production API"
                    value={tokenName}
                    onChange={(e) => setTokenName(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Permissions</label>
                  <select className="w-full px-3 py-2 border rounded-md bg-white">
                    <option value="read">Read only</option>
                    <option value="read-write">Read & Write</option>
                    <option value="full">Full Access</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Token Expiry</label>
                <select className="w-full px-3 py-2 border rounded-md bg-white">
                  <option value="never">Never</option>
                  <option value="30days">30 days</option>
                  <option value="90days">90 days</option>
                  <option value="1year">1 year</option>
                </select>
              </div>
              
              <button 
                className="flex items-center gap-2 px-4 py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                onClick={generateToken}
                disabled={!tokenName}
              >
                <KeyRound size={16} />
                Generate Token
              </button>
              
              {generatedToken && (
                <div className="mt-4 p-3 bg-gray-100 rounded-md">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Your API Token</span>
                    <button 
                      className="text-sm text-blue-600 hover:text-blue-800"
                      onClick={() => setShowToken(!showToken)}
                    >
                      {showToken ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <div className="font-mono text-sm overflow-x-auto p-2 bg-white border rounded">
                    {showToken ? generatedToken : '••••••••••••••••••••••••••••••'}
                  </div>
                  <p className="text-xs text-red-500 mt-1">
                    Make sure to copy this token now. You won't be able to see it again!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* CLI Setup Tab Content */}
      {activeTab === 'cli-setup' && (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <h3 className="text-xl font-bold">CLI Setup Guide</h3>
            <p className="text-gray-600 mt-1">
              Install and configure the Signal Studio command-line interface
            </p>
            
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 flex items-start">
              <Terminal className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Prerequisite</p>
                <p className="text-sm">Make sure you have Node.js 16+ installed on your system</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">1. Install the CLI</h3>
                <div className="bg-gray-900 text-gray-50 rounded-md p-4 overflow-x-auto">
                  <pre className="font-mono text-sm">npm install -g @signal-studio/cli</pre>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">2. Authenticate with your API key</h3>
                <div className="bg-gray-900 text-gray-50 rounded-md p-4 overflow-x-auto">
                  <pre className="font-mono text-sm">signal-studio login --key YOUR_API_KEY</pre>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">3. Test your connection</h3>
                <div className="bg-gray-900 text-gray-50 rounded-md p-4 overflow-x-auto">
                  <pre className="font-mono text-sm">signal-studio status</pre>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-2">
              <h3 className="text-lg font-medium">Common Commands</h3>
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Command</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">signal-studio generate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Generate content from a prompt</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">signal-studio prompts list</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">List all available prompts</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">signal-studio export</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Export content to various formats</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">signal-studio help</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Show the help documentation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50">
                <Download size={16} />
                Download CLI Reference
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <RotateCw size={16} />
                Update CLI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CLISDKPanel;