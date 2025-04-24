import React, { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronRight, Info, Calendar, Download, Mail, AlertTriangle, Users } from 'lucide-react';

const AuditTrailView = () => {
  // Sample audit trail data
  const [auditLogs, setAuditLogs] = useState([
    { 
      id: 1, 
      timestamp: 'April 17, 2025 - 10:42 AM (IST)', 
      user: 'Sarah Johnson', 
      role: 'Copywriter', 
      action: 'Edited Draft', 
      module: 'Create', 
      target: 'Campaign Brief: Summer Sale 2025',
      riskLevel: 'normal'
    },
    { 
      id: 2, 
      timestamp: 'April 17, 2025 - 10:30 AM (IST)', 
      user: 'Michael Chen', 
      role: 'Legal/QA', 
      action: 'Approved Content', 
      module: 'Create', 
      target: 'Product Description: EcoFriendly 3000',
      riskLevel: 'normal'
    },
    { 
      id: 3, 
      timestamp: 'April 17, 2025 - 09:15 AM (IST)', 
      user: 'Alex Rodriguez', 
      role: 'Admin', 
      action: 'Changed Role', 
      module: 'Admin Panel', 
      target: 'User: Emily Parker (Designer → Strategist)',
      riskLevel: 'normal'
    },
    { 
      id: 4, 
      timestamp: 'April 16, 2025 - 04:52 PM (IST)', 
      user: 'James Wilson', 
      role: 'Strategist', 
      action: 'Exported JSON', 
      module: 'Publish', 
      target: 'Campaign: Q2 Product Launch',
      riskLevel: 'normal'
    },
    { 
      id: 5, 
      timestamp: 'April 16, 2025 - 03:21 PM (IST)', 
      user: 'Laura Zhang', 
      role: 'Designer', 
      action: 'Created Visual Asset', 
      module: 'Create', 
      target: 'Banner: Spring Collection 2025',
      riskLevel: 'normal'
    },
    { 
      id: 6, 
      timestamp: 'April 16, 2025 - 01:45 PM (IST)', 
      user: 'David Kumar', 
      role: 'Legal/QA', 
      action: 'Escalated Content', 
      module: 'Validator', 
      target: 'Email: Limited Time Offer',
      riskLevel: 'high'
    },
    { 
      id: 7, 
      timestamp: 'April 16, 2025 - 12:03 PM (IST)', 
      user: 'System', 
      role: 'Automated', 
      action: 'Model Fallback Used', 
      module: 'Create', 
      target: 'Draft: Customer Welcome Email',
      riskLevel: 'medium'
    }
  ]);

  const [selectedLog, setSelectedLog] = useState(null);
  const [expandedLog, setExpandedLog] = useState(null);
  const [filterOptions, setFilterOptions] = useState({
    modules: [],
    actionTypes: [],
    dateRange: 'Last 24h',
    riskLevel: []
  });

  const handleLogClick = (log: React.SetStateAction<null>) => {
    setExpandedLog(expandedLog === log.id ? null : log.id);
    setSelectedLog(log);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow p-4">
        <h1 className="text-2xl font-semibold text-gray-800">Audit Trail</h1>
        <p className="text-sm text-gray-600">Track all actions performed across Signal Studio</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Filter Panel */}
        <div className="w-64 bg-white shadow-sm p-4 flex flex-col border-r">
          <h2 className="font-medium text-gray-700 mb-4 flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </h2>
          
          {/* Module Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Module</label>
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option>All Modules</option>
                <option>Create</option>
                <option>Memory</option>
                <option>Publish</option>
                <option>Validator</option>
                <option>System</option>
              </select>
            </div>
          </div>
          
          {/* User Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">User</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search users"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Action Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Action Type</label>
            <div className="space-y-1">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Created</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Edited</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Approved</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Deleted</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Exported</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Validated</span>
              </label>
            </div>
          </div>
          
          {/* Date Range */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option>Last 24h</option>
                <option>Last 7d</option>
                <option>Last 30d</option>
                <option>Custom</option>
              </select>
            </div>
          </div>
          
          {/* Risk Level Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Risk Level</label>
            <div className="space-y-1">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Auto-approved</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Overridden Warning</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Model Fallback Used</span>
              </label>
            </div>
          </div>
          
          {/* Only show escalations */}
          <label className="flex items-center mb-6">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-sm text-gray-700">Only show escalations</span>
          </label>
          
          {/* Apply Filters Button */}
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Apply Filters
          </button>
        </div>

        {/* Audit Log Table */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Table Header */}
          <div className="p-4 bg-white border-b flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Download className="h-4 w-4 mr-1" />
                Export Log
              </button>
              <button className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Mail className="h-4 w-4 mr-1" />
                Email Report
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search in audit log"
                className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-auto flex-1 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
                    Timestamp
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                    Module
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Target
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {auditLogs.map((log) => (
                  <React.Fragment key={log.id}>
                    <tr 
                      className={`${expandedLog === log.id ? 'bg-blue-50' : 'hover:bg-gray-50'} cursor-pointer
                      ${log.riskLevel === 'high' ? 'bg-red-50' : log.riskLevel === 'medium' ? 'bg-yellow-50' : ''}`}
                      onClick={() => handleLogClick(log)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm text-blue-800 font-medium">{log.user.substring(0, 2)}</span>
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{log.user}</div>
                            <div className="text-xs text-gray-500">{log.role}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          {log.module}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {log.target}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        {expandedLog === log.id ? 
                          <ChevronDown className="h-5 w-5 text-gray-500" /> : 
                          <ChevronRight className="h-5 w-5 text-gray-500" />
                        }
                      </td>
                    </tr>
                    {expandedLog === log.id && (
                      <tr className="bg-blue-50">
                        <td colSpan={6} className="px-6 py-4">
                          <div className="text-sm text-gray-800">
                            <h3 className="font-medium text-gray-900 mb-2">Action Details</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium">Action Metadata</h4>
                                <p className="text-xs mb-1">User: {log.user} ({log.role})</p>
                                <p className="text-xs mb-1">IP Address: 192.168.1.45</p>
                                <p className="text-xs mb-3">Device: Chrome on Mac</p>
                                
                                <h4 className="font-medium">Object Touched</h4>
                                <p className="text-xs mb-3">{log.target}</p>
                              </div>
                              <div>
                                <h4 className="font-medium">Field Changes</h4>
                                {log.action === "Edited Draft" ? (
                                  <div className="text-xs mb-3">
                                    <p className="mb-1">Tone Score: <span className="line-through">64</span> → <span className="text-green-600">85</span></p>
                                    <p className="mb-1">Content Length: <span className="line-through">256 words</span> → <span className="text-green-600">342 words</span></p>
                                  </div>
                                ) : log.action === "Changed Role" ? (
                                  <div className="text-xs mb-3">
                                    <p className="mb-1">Role: <span className="line-through">Designer</span> → <span className="text-blue-600">Strategist</span></p>
                                    <p className="mb-1">Permissions: <span className="text-green-600">+Memory Governance, +Prompt Library</span></p>
                                  </div>
                                ) : (
                                  <p className="text-xs mb-3">No field changes recorded</p>
                                )}
                                
                                <h4 className="font-medium">Related Actions</h4>
                                <p className="text-xs text-blue-600 hover:underline cursor-pointer">Show 4 more actions by this user in the last 30 mins</p>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <button className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Mark as Reviewed
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Alert & Anomaly Detection Panel (Optional) */}
        <div className="w-64 bg-white shadow-sm p-4 flex flex-col border-l">
          <h2 className="font-medium text-gray-700 mb-4 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" />
            Alert & Anomaly Detection
          </h2>
          
          <div className="space-y-4">
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <h3 className="text-sm font-medium text-red-800 mb-1">Bulk Actions Detected</h3>
              <p className="text-xs text-red-700">5 exports deleted by same user in 10 minutes</p>
            </div>
            
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="text-sm font-medium text-amber-800 mb-1">Unusual Behavior</h3>
              <p className="text-xs text-amber-700">Model override manually triggered 6 times in 1 hour</p>
            </div>
            
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-sm font-medium text-blue-800 mb-1">First-Time Access</h3>
              <p className="text-xs text-blue-700">New user accessed Governance Center</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="font-medium text-gray-700 mb-3 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Saved Filters
            </h2>
            
            <div className="space-y-2">
              <div className="p-2 bg-gray-100 rounded text-xs text-gray-700 cursor-pointer hover:bg-gray-200">
                Validator escalations (last 7 days)
              </div>
              <div className="p-2 bg-gray-100 rounded text-xs text-gray-700 cursor-pointer hover:bg-gray-200">
                Admin actions (all time)
              </div>
              <div className="p-2 bg-gray-100 rounded text-xs text-gray-700 cursor-pointer hover:bg-gray-200">
                Model fallbacks (this month)
              </div>
            </div>
            
            <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800">
              + Save current filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditTrailView;