import React, { useState } from 'react';
import { 
  ArrowLeft, Edit, Copy, ExternalLink, Share2, MoreHorizontal, 
  Check, X, Clock, AlertTriangle, MessageCircle, Eye, ChevronDown,
  ChevronRight, Calendar, Tag, User, Activity, FileText, Download,
  Send, ThumbsUp, ThumbsDown, Flag, History, Settings, Save
} from 'lucide-react';

const ContentDetailView = () => {
  const [activeTab, setActiveTab] = useState('content');
  
  // Mock content data
  const content = {
    id: 1,
    title: "Summer Launch Email",
    type: "Email",
    campaign: "Summer 2025 Collection",
    status: "In Review",
    toneScore: 87,
    approvalStage: "Waiting for Legal",
    tags: ["Email", "Promotional", "Q3"],
    lastEdited: "2 hours ago",
    editedBy: "Amanda Chen",
    versionHistory: [
      { id: 1, date: "April 23, 2025 - 10:42 AM", user: "Amanda Chen", action: "Edited content" },
      { id: 2, date: "April 23, 2025 - 9:30 AM", user: "Sarah Johnson", action: "Approved (Marketing)" },
      { id: 3, date: "April 22, 2025 - 4:32 PM", user: "System", action: "Tone analysis completed" },
      { id: 4, date: "April 22, 2025 - 2:15 PM", user: "Amanda Chen", action: "Draft created" }
    ],
    comments: [
      { id: 1, user: "Sarah Johnson", date: "April 22, 2025", text: "The tone is too casual for our enterprise customers. Let's revise the opening paragraph to be more professional.", replies: [
        { id: 2, user: "Amanda Chen", date: "April 22, 2025", text: "Good point! I've updated the intro to be more formal." }
      ]},
      { id: 3, user: "David Wilson", date: "April 23, 2025", text: "The legal disclaimer needs to be updated with our new terms. Can we add the standard template from the Snippet Library?", replies: [] }
    ],
    emailContent: {
      subject: "Summer is here! Check out our new collection",
      body: `Hi [Customer Name],

The sun is shining and our Summer Collection has just dropped! We're excited to bring you our most innovative designs yet, crafted specifically for the modern professional.

## What's New

- **Ultra-light fabric technology** - Stay cool even on the hottest days
- **Extended size range** - Now available in sizes XS-3XL
- **Sustainable materials** - 85% recycled fabrics across the entire collection

## Limited Time Offer

For the next 72 hours only, enjoy 15% off your entire purchase with code **SUMMER25**. Plus, free shipping on all orders over $75.

[SHOP NOW]

Thank you for being a valued member of our community.

Best regards,
The Brand Team

*Legal disclaimer text would appear here. This email is sent in accordance with our privacy policy...*`
    },
    validationIssues: [
      { id: 1, type: "Tone", severity: "Medium", description: "Opening greeting could be more formal for enterprise segment" },
      { id: 2, type: "Legal", severity: "High", description: "Disclaimer needs to be updated with new privacy terms" }
    ],
    approvers: [
      { name: "Sarah Johnson", role: "Marketing Lead", status: "Approved", date: "April 23, 2025" },
      { name: "Thomas Lee", role: "Legal Reviewer", status: "Pending", date: "" },
      { name: "David Wilson", role: "Brand Manager", status: "Not Started", date: "" }
    ]
  };
  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Draft": return "bg-gray-200 text-gray-800";
      case "In Review": return "bg-blue-100 text-blue-800";
      case "Approved": return "bg-green-100 text-green-800";
      case "Ready to Publish": return "bg-green-100 text-green-800";
      case "Needs Revision": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  const getApprovalStatusColor = (status: string) => {
    switch(status) {
      case "Approved": return "text-green-600";
      case "Pending": return "text-blue-600";
      case "Not Started": return "text-gray-500";
      case "Rejected": return "text-red-600";
      default: return "text-gray-600";
    }
  };
  
  const getApprovalStatusIcon = (status: string) => {
    switch(status) {
      case "Approved": return <Check size={16} className="text-green-600" />;
      case "Pending": return <Clock size={16} className="text-blue-600" />;
      case "Not Started": return <Clock size={16} className="text-gray-500" />;
      case "Rejected": return <X size={16} className="text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">{content.title}</h1>
              <div className="flex items-center mt-1 space-x-4">
                <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(content.status)}`}>
                  {content.status}
                </span>
                <span className="text-sm text-gray-500">{content.type}</span>
                <span className="text-sm text-gray-500">Campaign: {content.campaign}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
              <Copy size={18} />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
              <Share2 size={18} />
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <Edit size={16} />
              <span>Edit Content</span>
            </button>
            <div className="relative">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-6 mt-6">
          <button 
            className={`pb-2 text-sm font-medium ${activeTab === 'content' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('content')}
          >
            Content
          </button>
          <button 
            className={`pb-2 text-sm font-medium ${activeTab === 'approvals' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('approvals')}
          >
            Approvals & Validation
          </button>
          {/* <button 
            className={`pb-2 text-sm font-medium ${activeTab === 'history' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('history')}
          >
            Version History
          </button>
          <button 
            className={`pb-2 text-sm font-medium ${activeTab === 'comments' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('comments')}
          >
            Comments ({content.comments.length})
          </button>
          <button 
            className={`pb-2 text-sm font-medium ${activeTab === 'settings' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button> */}
        </div>
      </div>
      
      {/* Content Tab */}
      {activeTab === 'content' && (
        <div className="flex-1 p-6 overflow-auto">
          <div className="flex space-x-6">
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-medium text-gray-800">Email Content</h2>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100">
                      <Eye size={16} />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100">
                      <Download size={16} />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100">
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Subject</h3>
                    <p className="text-gray-800 font-medium">{content.emailContent.subject}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Body</h3>
                    <div className="prose max-w-none">
                      {content.emailContent.body.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-800">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Validation Issues */}
              <div className="mt-6 bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-medium text-gray-800">Validation Issues</h2>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    {content.validationIssues.length} Issues
                  </span>
                </div>
                
                <div className="p-4">
                  {content.validationIssues.map(issue => (
                    <div key={issue.id} className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-0">
                      <div className="flex-shrink-0">
                        <AlertTriangle size={18} className="text-yellow-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-800">{issue.type} Issue</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getSeverityColor(issue.severity)}`}>
                            {issue.severity}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{issue.description}</p>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                        Fix Issue
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-medium text-gray-800">Content Details</h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase">Last Edited</h3>
                      <p className="text-sm text-gray-800 mt-1">{content.lastEdited} by {content.editedBy}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase">Tone Score</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{ width: `${content.toneScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-indigo-600 ml-2">{content.toneScore}/100</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase">Approval Status</h3>
                      <p className="text-sm text-gray-800 mt-1">{content.approvalStage}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase">Tags</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {content.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                        <button className="px-2 py-1 border border-dashed border-gray-300 text-gray-500 text-xs rounded-full">
                          + Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-medium text-gray-800">Actions</h2>
                </div>
                
                <div className="p-4 space-y-3">
                  <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-indigo-600 bg-indigo-50 rounded hover:bg-indigo-100">
                    <div className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Submit for Approval
                    </div>
                    <ChevronRight size={16} />
                  </button>
                  
                  <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                    <div className="flex items-center">
                      <Copy size={16} className="mr-2" />
                      Duplicate Content
                    </div>
                    <ChevronRight size={16} />
                  </button>
                  
                  <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                    <div className="flex items-center">
                      <ExternalLink size={16} className="mr-2" />
                      Export Content
                    </div>
                    <ChevronRight size={16} />
                  </button>
                  
                  <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                    <div className="flex items-center">
                      <MessageCircle size={16} className="mr-2" />
                      Request Feedback
                    </div>
                    <ChevronRight size={16} />
                  </button>
                  
                  <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      Schedule Publication
                    </div>
                    <ChevronRight size={16} />
                  </button>
                  
                  <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 rounded">
                    <div className="flex items-center">
                      <Flag size={16} className="mr-2" />
                      Archive Content
                    </div>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Approvals & Validation Tab */}
      {activeTab === 'approvals' && (
        <div className="flex-1 p-6 overflow-auto">
          <div className="flex space-x-6">
            {/* Main Approval Flow */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-medium text-gray-800">Approval Workflow</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    {content.approvers.map((approver, index) => (
                      <div key={approver.name} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <User size={16} className="text-gray-600" />
                          </div>
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium text-gray-800">{approver.name}</p>
                              <p className="text-sm text-gray-500">{approver.role}</p>
                            </div>
                            <div className="flex items-center">
                              {getApprovalStatusIcon(approver.status)}
                              <span className={`ml-1 text-sm font-medium ${getApprovalStatusColor(approver.status)}`}>
                                {approver.status}
                              </span>
                            </div>
                          </div>
                          
                          {approver.date && (
                            <p className="text-xs text-gray-500 mt-1">
                              {approver.status === 'Approved' ? 'Approved on ' : 'Updated on '} 
                              {approver.date}
                            </p>
                          )}
                          
                          {/* Current approver actions */}
                          {approver.status === 'Pending' && index === content.approvers.findIndex(a => a.status === 'Pending') && (
                            <div className="mt-3 flex space-x-3">
                              <button className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-md flex items-center">
                                <ThumbsUp size={14} className="mr-1" />
                                Approve
                              </button>
                              <button className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-md flex items-center">
                                <ThumbsDown size={14} className="mr-1" />
                                Reject
                              </button>
                              <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md flex items-center">
                                <MessageCircle size={14} className="mr-1" />
                                Comment
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Add Additional Approver</h3>
                    <div className="flex space-x-3">
                      <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
                        <option>Select team member...</option>
                        <option>Michael Brown - Product Manager</option>
                        <option>Jennifer Lee - Creative Director</option>
                        <option>Robert Chen - Compliance Officer</option>
                      </select>
                      <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md">
                        Add Approver
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-medium text-gray-800">Validation Results</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Tone Analysis</h3>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                              <Activity size={20} className="text-indigo-600" />
                            </div>
                            <div className="ml-3">
                              <p className="font-medium text-gray-800">Overall Tone Score</p>
                              <p className="text-sm text-gray-500">Analyzed on April 22, 2025</p>
                            </div>
                          </div>
                          <div className="text-2xl font-semibold text-indigo-600">87/100</div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Brand Alignment</span>
                              <span className="font-medium">92/100</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Formality</span>
                              <span className="font-medium">78/100</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{width: '78%'}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Clarity</span>
                              <span className="font-medium">90/100</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Engagement</span>
                              <span className="font-medium">85/100</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Compliance Check</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start p-3 bg-red-50 rounded-md">
                          <div className="flex-shrink-0">
                            <AlertTriangle size={16} className="text-red-500" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-red-800">Legal Disclaimer Outdated</p>
                            <p className="text-sm text-red-700 mt-1">
                              The privacy policy reference needs to be updated to the April 2025 version.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 bg-yellow-50 rounded-md">
                          <div className="flex-shrink-0">
                            <AlertTriangle size={16} className="text-yellow-500" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-yellow-800">Promotional Claim Warning</p>
                            <p className="text-sm text-yellow-700 mt-1">
                              The "most innovative designs" claim requires substantiation for regulatory compliance.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 bg-green-50 rounded-md">
                          <div className="flex-shrink-0">
                            <Check size={16} className="text-green-500" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">Pricing Display Format</p>
                            <p className="text-sm text-green-700 mt-1">
                              Discount and pricing information properly formatted and displayed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-medium text-gray-800">Approval Summary</h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase">Status</h3>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm text-gray-800 ml-2">In Progress (1/3 Approvals)</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase">Current Step</h3>
                      <p className="text-sm text-gray-800 mt-1">Legal Review</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase">Started</h3>
                      <p className="text-sm text-gray-800 mt-1">April 23, 2025 - 9:35 AM</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase">Estimated Completion</h3>
                      <p className="text-sm text-gray-800 mt-1">April 24, 2025 - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-medium text-gray-800">Options</h2>
                </div>
                
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 uppercase">Workflow Settings</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Send notifications</span>
                        <div className="relative inline-block w-10 align-middle select-none">
                          <input type="checkbox" id="notifications" className="opacity-0 absolute" defaultChecked />
                          <label htmlFor="notifications" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                            <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Auto-approve minor changes</span>
                        <div className="relative inline-block w-10 align-middle select-none">
                          <input type="checkbox" id="auto-approve" className="opacity-0 absolute" />
                          <label htmlFor="auto-approve" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                            <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Sequential approvals</span>
                        <div className="relative inline-block w-10 align-middle select-none">
                          <input type="checkbox" id="sequential" className="opacity-0 absolute" defaultChecked />
                          <label htmlFor="sequential" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                            <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <h3 className="text-xs font-medium text-gray-500 uppercase">Deadline Management</h3>
                    <div className="mt-2">
                      <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          Set Review Deadline
                        </div>
                        <ChevronRight size={16} />
                      </button>
                      <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <MessageCircle size={16} className="mr-2" />
                          Send Reminder
                        </div>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <h3 className="text-xs font-medium text-gray-500 uppercase">Workflow Actions</h3>
                    <div className="mt-2">
                      <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded">
                        <div className="flex items-center">
                          <Save size={16} className="mr-2" />
                          Save Workflow as Template
                        </div>
                        <ChevronRight size={16} />
                      </button>
                      <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <Settings size={16} className="mr-2" />
                          Modify Workflow
                        </div>
                        <ChevronRight size={16} />
                      </button>
                      <button className="w-full flex items-center justify-between px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 rounded">
                        <div className="flex items-center">
                          <X size={16} className="mr-2" />
                          Cancel Approval Process
                        </div>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Other tabs would go here */}
      
    </div>
  );
};

export default ContentDetailView;