import { Bookmark, Brain, Clock, ExternalLink, Filter, Hash, Paperclip, Pin, PlusCircle, Search, Star, X } from 'lucide-react';
import { useState } from 'react';

const SemanticMemoryDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [pinnedItems, setPinnedItems] = useState([
    { id: 'pin1', title: 'Welcome Email Template', type: 'snippet', lastUsed: '2d ago', toneScore: 92, tags: ['email', 'onboarding'] },
    { id: 'pin2', title: 'Legal Disclaimer v2', type: 'snippet', lastUsed: '5d ago', toneScore: 95, tags: ['legal', 'compliance'] }
  ]);
  
  // Mock data for memory items
  const memoryItems = [
    { id: 'mem1', title: 'Q2 Campaign Headline', type: 'snippet', lastUsed: '3h ago', toneScore: 87, tags: ['headline', 'promotion'] },
    { id: 'mem2', title: 'Product Feature Description', type: 'snippet', lastUsed: 'Yesterday', toneScore: 82, tags: ['product', 'features'] },
    { id: 'mem3', title: 'Customer Pain Points', type: 'prompt', lastUsed: '2d ago', toneScore: 88, tags: ['research', 'customer'] },
    { id: 'mem4', title: 'Brand Voice Guidelines', type: 'asset', lastUsed: '1w ago', toneScore: 90, tags: ['brand', 'tone'] },
    { id: 'mem5', title: 'Email Signature Generator', type: 'prompt', lastUsed: '3d ago', toneScore: 85, tags: ['email', 'signature'] },
    { id: 'mem6', title: 'Social Media CTA Examples', type: 'snippet', lastUsed: '6h ago', toneScore: 89, tags: ['social', 'cta'] },
    { id: 'mem7', title: 'Compliance Checklist', type: 'asset', lastUsed: '4d ago', toneScore: 94, tags: ['legal', 'compliance'] },
    { id: 'mem8', title: 'Customer Testimonial Template', type: 'snippet', lastUsed: '5d ago', toneScore: 86, tags: ['testimonial', 'customer'] }
  ];
  
  // Filter items based on search query
  const filteredItems = searchQuery ? 
    memoryItems.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    ) : 
    memoryItems;
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  const getTypeIcon = (type:string) => {
    switch(type) {
      case 'prompt': return <Hash className="w-4 h-4 text-purple-500" />;
      case 'snippet': return <Paperclip className="w-4 h-4 text-blue-500" />;
      case 'asset': return <Bookmark className="w-4 h-4 text-green-500" />;
      default: return <Paperclip className="w-4 h-4 text-gray-500" />;
    }
  };
  
  const handlePinItem = (item:any) => {
    // Check if already pinned
    const isPinned = pinnedItems.some(pinnedItem => pinnedItem.id === item.id);
    
    if (isPinned) {
      // Unpin
      setPinnedItems(pinnedItems.filter(pinnedItem => pinnedItem.id !== item.id));
    } else {
      // Pin
      setPinnedItems([...pinnedItems, item]);
    }
  };
  
  const isItemPinned = (itemId:string) => {
    return pinnedItems.some(item => item.id === itemId);
  };
  
  return (
    <div className="relative h-full flex">
      {/* Main Content Area (this would be your main app content) */}
      <div className="flex-grow p-6 bg-gray-50">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Draft Editor</h1>
          <p className="text-gray-500">Campaign: Spring Promotion Email - April 2025</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 h-96 shadow-sm">
          <div className="prose max-w-none">
            <h2>Spring Promotion Email</h2>
            <p>
              Welcome to our spring promotion! Enjoy exclusive discounts on all premium products until the end of the month. 
              Use code SPRING25 for an additional 25% off your first purchase.
            </p>
            <p>
              Our new collection features products designed to help you make the most of the season. 
              From outdoor essentials to home decor, we've got everything you need to refresh your space.
            </p>
            <p>
              Shop now and discover why our customers love our spring selection!
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition">
            Send for Review
          </button>
        </div>
      </div>
      
      {/* Memory Drawer Toggle Button */}
      <button 
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-indigo-600 text-white rounded-l-md shadow-md transition hover:bg-indigo-700 z-10 ${isDrawerOpen ? 'hidden' : 'flex'}`}
        onClick={toggleDrawer}
        aria-label="Open Memory Drawer"
      >
        <Brain className="w-6 h-6" />
      </button>
      
      {/* Semantic Memory Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-20 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <Brain className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">Memory Drawer</h2>
            </div>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleDrawer}
              aria-label="Close Memory Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search snippets, prompts, assets..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            
            {/* Natural Language Prompt Examples */}
            {!searchQuery && (
              <div className="mt-2 flex flex-wrap gap-2">
                <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-gray-200">
                  Find last quarter's welcome email intro
                </button>
                <button className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-gray-200">
                  Show legal disclaimers
                </button>
              </div>
            )}
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200">
            <button 
              className={`flex-1 py-3 text-sm font-medium text-center ${activeTab === 'recent' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('recent')}
            >
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1.5" />
                Recent
              </div>
            </button>
            <button 
              className={`flex-1 py-3 text-sm font-medium text-center ${activeTab === 'pinned' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('pinned')}
            >
              <div className="flex items-center justify-center">
                <Pin className="w-4 h-4 mr-1.5" />
                Pinned
              </div>
            </button>
            <button 
              className={`flex-1 py-3 text-sm font-medium text-center ${activeTab === 'all' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('all')}
            >
              <div className="flex items-center justify-center">
                <Filter className="w-4 h-4 mr-1.5" />
                All Memory
              </div>
            </button>
          </div>
          
          {/* Memory Content */}
          <div className="flex-grow overflow-y-auto p-4">
            {activeTab === 'pinned' && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">Pinned Items</h3>
                  <span className="text-xs text-gray-500">{pinnedItems.length} items</span>
                </div>
                
                {pinnedItems.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Pin className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p>No pinned items yet</p>
                    <p className="text-sm mt-1">Pin frequently used items for quick access</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {pinnedItems.map(item => (
                      <div key={item.id} className="flex items-start p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer group">
                        <div className="flex-shrink-0 mt-0.5">
                          {getTypeIcon(item.type)}
                        </div>
                        <div className="ml-3 flex-grow min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900 truncate">{item.title}</h4>
                            <button 
                              className="text-yellow-500 hover:text-yellow-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePinItem(item);
                              }}
                            >
                              <Star className="w-4 h-4 fill-current" />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Last used: {item.lastUsed} • Tone: {item.toneScore}/100
                          </p>
                          <div className="mt-1.5 flex flex-wrap gap-1">
                            {item.tags.map(tag => (
                              <span key={tag} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
            
            {(activeTab === 'recent' || activeTab === 'all' || searchQuery) && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    {searchQuery ? 'Search Results' : activeTab === 'recent' ? 'Recently Used' : 'All Memory Items'}
                  </h3>
                  <span className="text-xs text-gray-500">{filteredItems.length} items</span>
                </div>
                
                {filteredItems.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p>No items found</p>
                    <p className="text-sm mt-1">Try different search terms or filters</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {(activeTab === 'recent' ? filteredItems.slice(0, 5) : filteredItems).map(item => (
                      <div key={item.id} className="flex items-start p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer group">
                        <div className="flex-shrink-0 mt-0.5">
                          {getTypeIcon(item.type)}
                        </div>
                        <div className="ml-3 flex-grow min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900 truncate">{item.title}</h4>
                            <button 
                              className={`${isItemPinned(item.id) ? 'text-yellow-500' : 'text-gray-400 opacity-0 group-hover:opacity-100'} hover:text-yellow-600`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePinItem(item);
                              }}
                            >
                              <Star className={`w-4 h-4 ${isItemPinned(item.id) ? 'fill-current' : ''}`} />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Last used: {item.lastUsed} • Tone: {item.toneScore}/100
                          </p>
                          <div className="mt-1.5 flex flex-wrap gap-1">
                            {item.tags.map(tag => (
                              <span key={tag} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'recent' && filteredItems.length > 5 && !searchQuery && (
                  <div className="mt-4 text-center">
                    <button 
                      className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                      onClick={() => setActiveTab('all')}
                    >
                      View all {filteredItems.length} items
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Drawer Footer */}
          <div className="border-t border-gray-200 p-4">
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium text-gray-700">
                <PlusCircle className="w-4 h-4 mr-1.5" />
                Create Snippet
              </button>
              <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium text-gray-700">
                <ExternalLink className="w-4 h-4 mr-1.5" />
                Memory Zone
              </button>
            </div>
            
            {/* AI Suggestions */}
            <div className="mt-4 border-t border-gray-200 pt-3">
              <div className="text-xs text-gray-500 mb-2">AI Suggestions</div>
              <div className="text-sm text-gray-700">
                You've reused this asset 4 times—want to refresh it?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemanticMemoryDrawer;