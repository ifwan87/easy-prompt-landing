import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { optimizePrompt } from '../services/geminiService';
import { ModelTarget } from '../types';
import { 
  Sparkles, ArrowLeft, Copy, Bookmark, Plus, LogOut, Loader2
} from '../components/Icons';

const AppPage: React.FC = () => {
  const navigate = useNavigate();
  const [inputPrompt, setInputPrompt] = useState('');
  const [optimizedOutput, setOptimizedOutput] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [targetModel, setTargetModel] = useState<ModelTarget>(ModelTarget.GPT4o);
  const [error, setError] = useState<string | null>(null);

  const handleOptimize = async () => {
    if (!inputPrompt.trim()) return;

    setIsLoading(true);
    setOptimizedOutput(null);
    setError(null);

    try {
      const result = await optimizePrompt(inputPrompt, targetModel);
      setOptimizedOutput(result);
    } catch (err) {
      setError("Failed to optimize prompt. Please check your connection and API key.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExit = () => {
    navigate('/');
  };

  const handleCopy = () => {
    if (optimizedOutput) {
        navigator.clipboard.writeText(optimizedOutput);
    }
  }

  return (
    <div className="h-full flex overflow-hidden animate-fade-slide-in bg-[#050505]">
      {/* App Sidebar */}
      <aside className="w-64 border-r flex flex-col hidden md:flex z-20 border-white/10 bg-black">
          <div className="p-4 border-b flex items-center gap-2 border-white/10">
               <div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white">EP</div>
               <span className="font-semibold text-sm">Workspace</span>
          </div>
          <div className="p-3">
              <button 
                onClick={() => { setInputPrompt(''); setOptimizedOutput(null); }}
                className="w-full flex items-center gap-2 border rounded-lg px-3 py-2 text-sm transition bg-white/5 hover:bg-white/10 border-white/10 text-white"
              >
                  <Plus className="w-4 h-4 text-white/60" /> New Prompt
              </button>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-2 no-scrollbar">
              <h4 className="text-[10px] font-semibold uppercase tracking-widest mb-3 px-2 text-white/30">History</h4>
              <div className="space-y-1">
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs truncate text-indigo-200">
                      Blog Post: Marketing Strategy
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg text-xs truncate transition text-white/60 hover:bg-white/5 hover:text-white">
                      Email: Cold Outreach
                  </button>
              </div>
          </div>
          <div className="p-4 border-t border-white/10">
              <button onClick={handleExit} className="flex items-center gap-2 text-xs transition text-white/50 hover:text-white">
                  <LogOut className="w-3.5 h-3.5" /> Exit to Home
              </button>
          </div>
      </aside>

      {/* Main Editor */}
      <main className="flex-1 flex flex-col h-full relative">
          {/* Toolbar */}
          <header className="h-14 border-b flex items-center justify-between px-6 bg-white/[0.02] border-white/10">
              <div className="flex items-center gap-4">
                   <button onClick={handleExit} className="md:hidden text-white/60">
                     <ArrowLeft className="w-5 h-5" />
                   </button>
                   <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40">Target Model:</span>
                      <select 
                        value={targetModel}
                        onChange={(e) => setTargetModel(e.target.value as ModelTarget)}
                        className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer text-white [&>option]:bg-black"
                      >
                          {Object.values(ModelTarget).map((model) => (
                              <option key={model} value={model}>{model}</option>
                          ))}
                      </select>
                   </div>
              </div>
              <div className="flex items-center gap-3">
                   <span className="text-xs flex items-center gap-1 text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> System Ready</span>
              </div>
          </header>

          {/* Editor Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x overflow-hidden divide-white/10">
              
              {/* Input Column */}
              <div className="flex flex-col h-full bg-[#080808]">
                  <div className="px-6 py-3 border-b flex justify-between items-center border-white/5">
                      <span className="text-xs font-mono text-white/40">INPUT // DRAFT</span>
                      <button 
                        onClick={() => setInputPrompt('')}
                        className="text-[10px] transition text-white/40 hover:text-white"
                      >
                        Clear
                      </button>
                  </div>
                  <div className="flex-1 p-6 relative group">
                      <textarea 
                        value={inputPrompt}
                        onChange={(e) => setInputPrompt(e.target.value)}
                        className="w-full h-full bg-transparent border-none focus:ring-0 resize-none font-mono text-sm leading-relaxed placeholder:text-white/20 focus:outline-none text-white/80" 
                        placeholder="Enter your rough prompt here... e.g. 'Write a blog post about coffee.'"
                      />
                      
                      {/* Floating Action Button */}
                      <div className="absolute bottom-6 right-6">
                          <button 
                            onClick={handleOptimize} 
                            disabled={isLoading || !inputPrompt.trim()}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all font-medium text-sm bg-white text-black shadow-white/10 ${isLoading ? 'opacity-70 cursor-wait' : 'hover:scale-105 active:scale-95'}`}
                          >
                              {isLoading ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                  <Sparkles className="w-4 h-4" />
                              )}
                              {isLoading ? 'Optimizing...' : 'Optimize'}
                          </button>
                      </div>
                  </div>
              </div>

              {/* Output Column */}
              <div className="flex flex-col h-full bg-[#050505] relative">
                  <div className="px-6 py-3 border-b flex justify-between items-center bg-white/[0.02] border-white/5">
                      <span className="text-xs font-mono text-indigo-400">OUTPUT // OPTIMIZED</span>
                      <div className="flex gap-2">
                          <button onClick={handleCopy} className="p-1.5 rounded transition hover:bg-white/10 text-white/40 hover:text-white" title="Copy">
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 rounded transition hover:bg-white/10 text-white/40 hover:text-white" title="Save">
                            <Bookmark className="w-3.5 h-3.5" />
                          </button>
                      </div>
                  </div>
                  
                  {/* Loading State */}
                  {isLoading && (
                    <div className="absolute inset-0 backdrop-blur-sm z-10 flex flex-col items-center justify-center bg-black/50">
                        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <span className="text-xs font-mono animate-pulse text-indigo-300">Applying Chain-of-Thought...</span>
                    </div>
                  )}

                  {/* Content Area */}
                  {!optimizedOutput && !isLoading ? (
                      <div className="flex-1 flex items-center justify-center text-white/20">
                          <div className="text-center">
                              <ArrowLeft className="w-6 h-6 mx-auto mb-2 lg:hidden" />
                              <ArrowLeft className="w-6 h-6 mx-auto mb-2 hidden lg:block" />
                              <span className="text-xs">{error ? <span className="text-red-400">{error}</span> : "Waiting for input..."}</span>
                          </div>
                      </div>
                  ) : (
                    <div className="flex-1 p-6 overflow-y-auto font-mono text-sm leading-relaxed text-indigo-100/90 whitespace-pre-wrap">
                        {optimizedOutput}
                    </div>
                  )}
              </div>
          </div>
      </main>
    </div>
  );
};

export default AppPage;