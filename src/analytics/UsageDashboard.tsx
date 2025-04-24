import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  Calendar, Search, Filter, ChevronDown, Download, Bell, User, Settings,
  Activity, Archive, Clock, AlertTriangle, BarChart2, PieChart as PieChartIcon,
  FileText, Users, CheckCircle, XCircle, RefreshCw
} from 'lucide-react';

const UsageDashboard = () => {
  // State management
  const [dateRange, setDateRange] = useState('30d');
  const [selectedRoles, setSelectedRoles] = useState(['All']);
  const [department, setDepartment] = useState('All departments');
  
  // Mock data for charts
  const monthlyActivity = [
    { name: 'Apr 1', drafts: 23, approved: 18, exported: 15 },
    { name: 'Apr 8', drafts: 35, approved: 28, exported: 22 },
    { name: 'Apr 15', drafts: 42, approved: 38, exported: 30 },
    { name: 'Apr 22', drafts: 38, approved: 33, exported: 28 },
    { name: 'Apr 29', drafts: 40, approved: 35, exported: 30 },
    { name: 'May 6', drafts: 45, approved: 37, exported: 32 },
    { name: 'May 13', drafts: 50, approved: 43, exported: 38 },
  ];
  
  const roleActivity = [
    { name: 'Copywriter', drafts: 148, reviews: 22 },
    { name: 'Strategist', drafts: 24, reviews: 86 },
    { name: 'Legal/QA', drafts: 5, reviews: 102 },
    { name: 'Designer', drafts: 38, reviews: 28 },
    { name: 'Executive', drafts: 10, reviews: 42 },
  ];
  
  const moduleUsage = [
    { name: 'Draft Editor', value: 40 },
    { name: 'Assistant', value: 30 },
    { name: 'Validator', value: 20 },
    { name: 'Export Hub', value: 10 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const publishedContent = [
    { name: 'Apr 1', create: 22, memory: 8, publish: 15 },
    { name: 'Apr 8', create: 28, memory: 12, publish: 20 },
    { name: 'Apr 15', create: 35, memory: 15, publish: 25 },
    { name: 'Apr 22', create: 30, memory: 10, publish: 22 },
    { name: 'Apr 29', create: 32, memory: 14, publish: 24 },
    { name: 'May 6', create: 38, memory: 16, publish: 28 },
    { name: 'May 13', create: 42, memory: 18, publish: 32 },
  ];
  
  // Top contributors and assets data
  const topContributors = [
    { name: 'Emily Chen', role: 'Copywriter', drafts: 48, approvals: 5, avgScore: 92 },
    { name: 'Michael Torres', role: 'Strategist', drafts: 12, approvals: 38, avgScore: 88 },
    { name: 'Sarah Johnson', role: 'Legal/QA', drafts: 3, approvals: 52, avgScore: 90 },
    { name: 'David Kim', role: 'Designer', drafts: 26, approvals: 10, avgScore: 86 },
  ];
  
  const mostUsedPrompts = [
    { title: 'Email Welcome Series', uses: 32, tone: 'Friendly', module: 'Draft Editor' },
    { title: 'Product Description', uses: 28, tone: 'Professional', module: 'Assistant' },
    { title: 'Social Media Post', uses: 24, tone: 'Casual', module: 'Draft Editor' },
    { title: 'Legal Disclaimer', uses: 18, tone: 'Formal', module: 'Validator' },
  ];

  // Export reports data
  const exportReports = [
    { campaign: 'Summer Promo Campaign', date: 'May 10, 2025', format: 'HTML', status: 'Success' },
    { campaign: 'Product Launch Email', date: 'May 8, 2025', format: 'JSON', status: 'Success' },
    { campaign: 'Blog Post Series', date: 'May 5, 2025', format: 'PDF', status: 'Failed' },
    { campaign: 'Q2 Newsletter', date: 'May 3, 2025', format: 'HTML', status: 'Success' },
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
    
     
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">Usage Dashboard</h2>
            <p className="text-sm text-gray-600">Analytics and performance metrics for Signal Studio</p>
          </div>
          
          {/* Filter Panel */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-gray-500" />
                <select 
                  className="border-gray-300 rounded-md text-sm"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="custom">Custom range</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <User size={16} className="text-gray-500" />
                <select className="border-gray-300 rounded-md text-sm">
                  <option>All roles</option>
                  <option>Copywriter</option>
                  <option>Strategist</option>
                  <option>Legal/QA</option>
                  <option>Designer</option>
                  <option>Executive</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter size={16} className="text-gray-500" />
                <select className="border-gray-300 rounded-md text-sm">
                  <option>All departments</option>
                  <option>Marketing</option>
                  <option>Product</option>
                  <option>Sales</option>
                  <option>Support</option>
                </select>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
                <Download size={14} />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-1 text-sm px-3 py-1 border border-blue-500 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                <span>Save View</span>
              </button>
            </div>
          </div>
          
          {/* KPI tiles */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Total Drafts Created</p>
              <div className="flex justify-between items-end">
                <p className="text-2xl font-bold">348</p>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+12%</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Validator Issues</p>
              <div className="flex justify-between items-end">
                <p className="text-2xl font-bold">52</p>
                <div className="text-xs text-gray-500">
                  28 approved, 24 escalated
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Content Published</p>
              <div className="flex justify-between items-end">
                <p className="text-2xl font-bold">217</p>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+8%</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Avg. Tone Score</p>
              <div className="flex justify-between items-end">
                <p className="text-2xl font-bold">86.4</p>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">/100</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-1">AI Usage (Tokens)</p>
              <div className="flex justify-between items-end">
                <p className="text-2xl font-bold">3.1M</p>
                <span className="text-xs text-gray-500">$128.00</span>
              </div>
            </div>
          </div>
          
          {/* Charts row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Activity Over Time</h3>
                <select className="text-xs border-gray-300 rounded-md">
                  <option>Last 7 weeks</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={monthlyActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="drafts" stroke="#0088FE" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="approved" stroke="#00C49F" />
                  <Line type="monotone" dataKey="exported" stroke="#FFBB28" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Drafts by Role</h3>
                <select className="text-xs border-gray-300 rounded-md">
                  <option>Drafts created</option>
                  <option>Reviews conducted</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={roleActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="drafts" fill="#0088FE" />
                  <Bar dataKey="reviews" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Published Content by Zone</h3>
                <select className="text-xs border-gray-300 rounded-md">
                  <option>Last 7 weeks</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={publishedContent}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="create" stackId="1" fill="#0088FE" stroke="#0088FE" />
                  <Area type="monotone" dataKey="memory" stackId="1" fill="#00C49F" stroke="#00C49F" />
                  <Area type="monotone" dataKey="publish" stackId="1" fill="#FFBB28" stroke="#FFBB28" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">AI Usage by Module</h3>
                <select className="text-xs border-gray-300 rounded-md">
                  <option>By tokens</option>
                  <option>By cost</option>
                </select>
              </div>
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={moduleUsage}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {moduleUsage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Top contributors & assets */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Top Contributors</h3>
                <select className="text-xs border-gray-300 rounded-md">
                  <option>By drafts created</option>
                  <option>By approvals</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drafts</th>
                      <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approvals</th>
                      <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Score</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {topContributors.map((user, i) => (
                      <tr key={i}>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                              {user.name.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-xs text-gray-500">{user.role}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{user.drafts}</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{user.approvals}</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {user.avgScore}/100
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Most Used Prompts</h3>
                <select className="text-xs border-gray-300 rounded-md">
                  <option>All time</option>
                  <option>This month</option>
                  <option>This week</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uses</th>
                      <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tone</th>
                      <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mostUsedPrompts.map((prompt, i) => (
                      <tr key={i}>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{prompt.title}</div>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{prompt.uses}</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{prompt.tone}</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{prompt.module}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Insight Sidebar with AI recommendations */}
          <div className="my-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                <Activity size={20} className="text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">AI-Generated Insights</h3>
                <div className="mt-2 text-sm text-gray-600 space-y-2">
                  <p>• Draft activity is up 23% since new prompts were introduced last month.</p>
                  <p>• Copywriters are producing 15% more content with 8% higher tone scores.</p>
                  <p>• The "Email Welcome Series" prompt has become your most effective asset.</p>
                  <p>• Consider additional QA resources as validation queues are growing.</p>
                </div>
                <button className="mt-3 text-xs text-blue-600 hover:text-blue-800">
                  View all insights →
                </button>
              </div>
            </div>
          </div>
          
          {/* AI Performance Insights */}
          <div className="my-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">AI Performance Insights</h3>
              <select className="text-xs border-gray-300 rounded-md">
                <option>Last 30 days</option>
                <option>This month</option>
              </select>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="border border-gray-200 rounded-md p-3">
                <p className="text-xs text-gray-500 mb-1">Avg. Output Quality</p>
                <p className="text-lg font-semibold">87/100</p>
                <p className="text-xs text-gray-500 mt-1">Based on validator feedback</p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-3">
                <p className="text-xs text-gray-500 mb-1">Top Fallback Trigger</p>
                <p className="text-lg font-semibold">Timeout</p>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">65%</span>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md p-3">
                <p className="text-xs text-gray-500 mb-1">Model Usage</p>
                <p className="text-lg font-semibold">GPT-4: 62%</p>
                <p className="text-xs text-gray-500 mt-1">Claude: 25%, Mistral: 13%</p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-3">
                <p className="text-xs text-gray-500 mb-1">Auto-Corrected Drafts</p>
                <p className="text-lg font-semibold">16</p>
                <div className="flex items-center mt-1">
                  <AlertTriangle size={12} className="text-yellow-500 mr-1" />
                  <span className="text-xs text-yellow-600">4 required manual review</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Saved Dashboard Views */}
          <div className="my-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Saved Dashboard Views</h3>
              <button className="text-xs px-3 py-1 flex items-center border border-gray-300 rounded-md hover:bg-gray-50">
                <div className="mr-1">+</div> Create New View
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">Content Performance</h4>
                  <Clock size={14} className="text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Last viewed 2 days ago</p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">Copywriter Activity</h4>
                  <Clock size={14} className="text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Last viewed yesterday</p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">QA Efficiency</h4>
                  <Clock size={14} className="text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Last viewed 5 days ago</p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">AI Cost Tracking</h4>
                  <Clock size={14} className="text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Last viewed today</p>
              </div>
            </div>
          </div>
          
          {/* Weekly Export Reports */}
          <div className="my-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Weekly Export Reports</h3>
              <div className="flex space-x-2">
                <button className="text-xs px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
                  Schedule Report
                </button>
                <button className="text-xs px-3 py-1 border border-blue-500 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Custom Report
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                    <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Export Date</th>
                    <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                    <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {exportReports.map((report, i) => (
                    <tr key={i}>
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{report.campaign}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{report.format}</td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          report.status === 'Success' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-blue-600">
                        {report.status === 'Success' ? 'View' : 'Retry'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing 4 of 28 exports
              </div>
              <div className="flex space-x-2">
                <button className="px-2 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-2 py-1 text-xs border border-gray-300 bg-gray-50 rounded-md">
                  1
                </button>
                <button className="px-2 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50">
                  2
                </button>
                <button className="px-2 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50">
                  3
                </button>
                <button className="px-2 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
          
          {/* Alert & Anomaly Detection Panel */}
          <div className="my-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Alert & Anomaly Detection</h3>
              <button className="text-xs px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
                Configure Alerts
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-start p-3 border-l-4 border-yellow-400 bg-yellow-50 rounded-r-md">
                <AlertTriangle className="text-yellow-500 mr-3 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Unusual Behavior</h4>
                  <p className="text-xs text-gray-600">Model override manually triggered 6 times in 1 hour by Michael Torres</p>
                  <div className="mt-1">
                    <button className="text-xs text-blue-600 hover:text-blue-800 mr-3">
                      Investigate
                    </button>
                    <button className="text-xs text-gray-500 hover:text-gray-700">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start p-3 border-l-4 border-red-400 bg-red-50 rounded-r-md">
                <AlertTriangle className="text-red-500 mr-3 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Bulk Actions Detected</h4>
                  <p className="text-xs text-gray-600">5 exports deleted by same user in 10 minutes</p>
                  <div className="mt-1">
                    <button className="text-xs text-blue-600 hover:text-blue-800 mr-3">
                      Review
                    </button>
                    <button className="text-xs text-gray-500 hover:text-gray-700">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start p-3 border-l-4 border-blue-400 bg-blue-50 rounded-r-md">
                <AlertTriangle className="text-blue-500 mr-3 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">First-Time Access</h4>
                  <p className="text-xs text-gray-600">New user Sarah Johnson accessed Governance Center</p>
                  <div className="mt-1">
                    <button className="text-xs text-blue-600 hover:text-blue-800 mr-3">
                      View
                    </button>
                    <button className="text-xs text-gray-500 hover:text-gray-700">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom navigation for switching between dashboard views */}
          <div className="my-6 flex justify-center">
            <nav className="flex space-x-2" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-gray-50">
                ...
              </span>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </a>
            </nav>
          </div>
        </main>
      </div>
  );
};

export default UsageDashboard;