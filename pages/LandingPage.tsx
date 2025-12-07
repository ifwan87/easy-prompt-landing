import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/IntersectionObserver';
import { 
  Sparkles, Menu, Bot, BrainCircuit, Zap, Code2, Layers, 
  X, Siren, AlertTriangle, FileWarning, EyeOff, MessageSquareWarning, 
  Check, Wand2, ShieldCheck, Coins, PlayCircle, Twitter, Github
} from '../components/Icons';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartOptimizing = () => {
    navigate('/app');
  };

  return (
    <div className="overflow-y-auto transition-opacity duration-700 ease-in-out w-full h-full">
      <header className="z-50 relative">
        <div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
          {/* Nav */}
          <nav className="flex mt-6 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg border group-hover:border-white/30 transition-colors bg-white/10 border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
              </div>
              <span className="font-semibold text-sm tracking-tight">EasyPrompt</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 border rounded-full p-1 backdrop-blur-md bg-white/5 border-white/10">
              <a href="#features" className="px-4 py-1.5 text-xs font-medium transition-colors rounded-full text-white/70 hover:text-white hover:bg-white/5">Features</a>
              <a href="#models" className="px-4 py-1.5 text-xs font-medium transition-colors rounded-full text-white/70 hover:text-white hover:bg-white/5">Models</a>
              <a href="#pricing" className="px-4 py-1.5 text-xs font-medium transition-colors rounded-full text-white/70 hover:text-white hover:bg-white/5">Plans</a>
              <div className="pl-1">
                <button onClick={handleStartOptimizing} className="relative group inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] focus:outline-none active:scale-95">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#4ade80_50%,#00000000)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-3xl transition-colors group-hover:bg-neutral-900 gap-2">
                    Try Optimizer
                    <Sparkles className="w-3 h-3 text-green-400" />
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 border rounded-lg backdrop-blur text-white/70 hover:text-white bg-white/5 border-white/10">
              <Menu className="w-5 h-5" />
            </button>
          </nav>

          {/* Hero */}
          <section className="md:pt-32 md:pb-32 z-10 text-center max-w-4xl mr-auto ml-auto pt-24 pb-20 relative">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 text-indigo-300">
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span className="text-[11px] uppercase font-medium tracking-wide">New Model Support: Gemini 2.5 Flash</span>
                </div>
            </ScrollReveal>

            <ScrollReveal delay="delay-100">
                <h1 className="sm:text-6xl md:text-7xl leading-[1.1] text-4xl font-light text-white tracking-tighter font-geist mb-6">
                    Transform your AI prompts into <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">high-performing</span> instructions.
                </h1>
            </ScrollReveal>

            <ScrollReveal delay="delay-200">
                <p className="md:text-xl leading-relaxed text-lg font-light font-geist max-w-2xl mr-auto mb-10 ml-auto text-white/60">
                    Analyze and optimize prompts for ChatGPT, Claude, and Gemini using scientifically-proven engineering techniques. Stop guessing, start engineering.
                </p>
            </ScrollReveal>

            <ScrollReveal delay="delay-300">
                <div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
                    <button onClick={handleStartOptimizing} className="group inline-flex min-w-[160px] cursor-pointer overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-green-500 font-medium text-white bg-green-600 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative items-center justify-center">
                    <span className="mr-2">Start Optimizing</span>
                    <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
                    </button>
                    <button className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium border rounded-full transition-all backdrop-blur-sm text-white/80 bg-white/5 border-white/10 hover:bg-white/10">
                    <PlayCircle className="w-4 h-4" />
                    Watch Demo
                    </button>
                </div>
            </ScrollReveal>
          </section>
        </div>
      </header>

      {/* Social Proof */}
      <ScrollReveal delay="delay-400">
        <section className="max-w-7xl mx-auto px-6 pb-20 border-b border-white/5">
            <p className="text-center text-xs font-medium uppercase tracking-widest mb-8 text-white/30">Optimized for output on</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="flex items-center gap-2 font-semibold text-lg"><Bot className="w-6 h-6" /> OpenAI</div>
                <div className="flex items-center gap-2 font-semibold text-lg"><BrainCircuit className="w-6 h-6" /> Anthropic</div>
                <div className="flex items-center gap-2 font-semibold text-lg"><Zap className="w-6 h-6" /> Google DeepMind</div>
                <div className="flex items-center gap-2 font-semibold text-lg"><Code2 className="w-6 h-6" /> Mistral AI</div>
                <div className="flex items-center gap-2 font-semibold text-lg"><Layers className="w-6 h-6" /> Meta Llama</div>
            </div>
        </section>
      </ScrollReveal>

      {/* Value Prop / Interactive Visual */}
      <section className="overflow-hidden bg-black border-white/5 border-b pt-24 pb-24 relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
                
                {/* Left: Text Content */}
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 mb-8 text-red-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-[11px] uppercase font-medium tracking-wide">Key Technical Risks</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-light tracking-tighter mb-6 text-white">Inaccurate, unreliable, and <span className="text-white/40">hard to control.</span></h2>
                    
                    <p className="text-lg text-white/60 font-geist mb-8 leading-relaxed">
                        Bad prompting mainly makes LLMs inaccurate, unreliable, harder to control, and more expensive to use at scale. Poor prompts amplify hallucinations, bias, and security risks, especially in production or agentic workflows.
                    </p>

                    <div className="space-y-6 font-geist">
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                               <X className="w-3 h-3" />
                            </div>
                            <div className="">
                                <h4 className="text-sm font-medium text-white/90">More hallucinations and wrong answers</h4>
                                <p className="text-xs text-white/50 mt-1 leading-relaxed">Vague, overloaded, or incomplete prompts push the model to “guess,” which increases fabricated or incorrect outputs and undermines trust.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                                <X className="w-3 h-3" />
                            </div>
                            <div className="">
                                <h4 className="text-sm font-medium text-white/90">Ambiguity and underspecification</h4>
                                <p className="text-xs text-white/50 mt-1 leading-relaxed">Natural language is ambiguous, so prompts that don’t pin down the task, scope, or success criteria lead to meandering or off‑target responses.</p>
                            </div>
                        </div>
                         <div className="flex gap-4 items-start">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                                <X className="w-3 h-3" />
                            </div>
                            <div className="">
                                <h4 className="text-sm font-medium text-white/90">Context misuse and token waste</h4>
                                <p className="text-xs text-white/50 mt-1 leading-relaxed">Overloaded prompts dilute important information and hit context limits, so crucial details get dropped or misinterpreted.</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Right: Visual Cards */}
                <ScrollReveal delay="delay-200" className="relative">
                    <div className="grid grid-cols-2 gap-4 md:gap-6 gap-x-4 gap-y-4">
                        
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4 md:gap-6 mt-12">
                            {/* Card 1 */}
                            <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-5 shadow-2xl group hover:-translate-y-1 transition-transform duration-500">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-600 rounded-t-2xl"></div>
                                <div className="mb-4">
                                    <h3 className="text-sm font-medium text-white">More hallucinations and wrong answers</h3>
                                    <p className="text-xs text-white/50 font-geist mt-1">incorrect outputs and undermines trust</p>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-red-400 bg-red-500/10 border-red-500/20 border rounded pt-1 pr-2 pb-1 pl-2">
                                        <Siren className="w-2.5 h-2.5" /> Hallucination
                                    </span>
                                    <span className="text-[10px] text-white/30 font-mono">ID: 992A</span>
                                </div>
                                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                    <div className="flex -space-x-1.5">
                                        <div className="w-5 h-5 rounded-full bg-red-500/20 border border-black ring-2 ring-[#0F0F0F]"></div>
                                        <div className="w-5 h-5 rounded-full bg-neutral-700 border border-black ring-2 ring-[#0F0F0F] flex items-center justify-center text-[6px]">AI</div>
                                    </div>
                                    <AlertTriangle className="w-3.5 h-3.5 text-red-500/50" />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-5 shadow-xl group hover:-translate-y-1 transition-transform duration-500">
                                <div className="mb-4">
                                    <h3 className="text-sm font-medium text-white">Unreliable behavior in production</h3>
                                    <p className="text-xs text-white/50 font-geist mt-1">This unreliability complicates testing, monitoring, and SLA guarantees.</p>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-yellow-400 bg-yellow-500/10 border-yellow-500/20 border rounded pt-1 pr-2 pb-1 pl-2">
                                        <FileWarning className="w-2.5 h-2.5" /> Bias & Harm
                                    </span>
                                </div>
                                <div className="bg-black/40 rounded border border-white/5 p-2 font-mono text-[9px] text-white/40 leading-relaxed">
                                    Error: Unexpected token "Here"...
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4 md:gap-6">
                            {/* Card 3 */}
                            <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-5 shadow-xl group hover:-translate-y-1 transition-transform duration-500">
                                <div className="mb-4">
                                    <h3 className="text-sm font-medium text-white">Engineering and UX challenges</h3>
                                    <p className="text-xs text-white/50 font-geist mt-1">Poor UX and “prompt‑wizard” dependence</p>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-purple-400 bg-purple-500/10 border-purple-500/20 border rounded pt-1 pr-2 pb-1 pl-2">
                                        <Sparkles className="w-2.5 h-2.5" /> Harder debugging
                                    </span>
                                    <span className="text-[10px] text-white/30 font-mono">Confidence: 99%</span>
                                </div>
                                <p className="text-[10px] leading-relaxed text-white/60 border-purple-500/20 border-l-2 pl-2">
                                    "...party of the first part agrees to unseen clauses..."
                                </p>
                                <div className="flex items-center justify-end mt-3">
                                    <EyeOff className="w-3.5 h-3.5 text-white/20" />
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-5 shadow-xl group hover:-translate-y-1 transition-transform duration-500">
                                 <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500"></div>
                                 <div className="mb-4">
                                    <h3 className="text-sm font-medium text-white">Ambiguity and underspecification</h3>
                                    <p className="text-xs text-white/50 font-geist mt-1">Leading to meandering or off‑target responses. </p>
                                </div>
                                 <div className="flex items-center gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-medium text-blue-400">
                                        <MessageSquareWarning className="w-2.5 h-2.5" />
                                        Tone Mismatch
                                    </span>
                                </div>
                                 <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                    <div className="text-[10px] text-white/30">User: "Help!"</div>
                                    <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[8px] text-white/50">?</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Features */}
      <section className="overflow-hidden pt-24 pb-24 relative" id="features">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal>
                    <h2 className="md:text-5xl text-3xl font-light tracking-tighter mb-6">Scientific precision for your language models.</h2>
                    <p className="leading-relaxed text-lg font-geist mb-8 text-white/60">
                        LLMs are sensitive to syntax. EasyPrompt restructures your intent into the optimal format for reasoning, reducing hallucinations and improving adherence.
                    </p>
                    <ul className="font-geist space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
                                <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm text-white/80">Chain-of-Thought (CoT) integration automatically added.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
                                <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm text-white/80">Get instant suggestions and improvements with scoring</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
                                <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm text-white/80">Negative constraints to prevent unwanted output.</span>
                        </li>
                    </ul>
                </ScrollReveal>
                
                {/* Code visual */}
                <ScrollReveal delay="delay-200" className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-[#0A0A0A] border rounded-2xl p-1 overflow-hidden border-white/10">
                        <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            </div>
                            <div className="ml-4 text-[10px] font-mono text-white/40">optimizer.ts</div>
                        </div>
                        <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-white/70">
                            <div className="flex gap-4 opacity-50 mb-4 line-through decoration-red-500/50">
                                <span className="select-none text-white/30">01</span>
                                <span className="">Write a blog post about marketing.</span>
                            </div>
                            <div className="flex gap-4 text-indigo-200">
                                <span className="select-none text-white/30">02</span>
                                <span className="">Act as an expert content marketer.</span>
                            </div>
                            <div className="flex gap-4 text-indigo-200">
                                <span className="select-none text-white/30">03</span>
                                <span className="">Write a comprehensive, SEO-optimized blog post about <span className="bg-indigo-500/20 px-1 rounded text-white">B2B marketing strategies</span>.</span>
                            </div>
                            <div className="flex gap-4 text-indigo-200">
                                <span className="select-none text-white/30">04</span>
                                <span className="">Structure: H1, Introduction, 3 Core Strategies, Conclusion.</span>
                            </div>
                             <div className="flex gap-4 text-indigo-200">
                                <span className="select-none text-white/30">05</span>
                                <span className="">Tone: Professional, authoritative, actionable.</span>
                            </div>
                             <div className="flex gap-4 mt-4">
                                <span className="select-none text-white/30">06</span>
                                <span className="text-emerald-400">// Optimization Score: 98/100</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-12">
            <h2 className="md:text-4xl text-3xl font-light tracking-tighter mb-4">Prompt engineering, automated.</h2>
            <p className="font-geist max-w-2xl text-white/60">Advanced tools typically reserved for research labs, now in your browser.</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-rows-2 h-auto">
            {/* Large Card */}
            <ScrollReveal delay="delay-100" className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl border p-8 group border-white/10 bg-white/5">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition duration-500">
                    <Wand2 className="w-32 h-32 rotate-12 text-white" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4 bg-white/10 border-white/10 text-white/80">
                            Flagship Feature
                        </div>
                        <h3 className="text-2xl font-normal font-geist mb-2">Multi-Model Analysis</h3>
                        <p className="leading-relaxed text-sm font-geist max-w-md text-white/60">One prompt doesn't fit all. EasyPrompt automatically generates variations optimized specifically for the unique tokenization and attention mechanisms of GPT-4, Claude 3.5 Sonnet, and Gemini Pro.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                         <div className="border rounded-xl p-4 text-center bg-black/40 border-white/10">
                            <span className="block text-xs mb-1 text-white/40">GPT-4o</span>
                            <span className="font-mono text-sm text-emerald-400">+24% Acc</span>
                         </div>
                         <div className="border rounded-xl p-4 text-center bg-black/40 border-white/10">
                            <span className="block text-xs mb-1 text-white/40">Claude 3.5</span>
                            <span className="font-mono text-sm text-emerald-400">+18% Acc</span>
                         </div>
                         <div className="border rounded-xl p-4 text-center bg-black/40 border-white/10">
                            <span className="block text-xs mb-1 text-white/40">Gemini</span>
                            <span className="font-mono text-sm text-emerald-400">+31% Acc</span>
                         </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Small Card 1 */}
            <ScrollReveal delay="delay-200" className="relative overflow-hidden rounded-3xl border p-6 group border-white/10 bg-white/5">
                <div className="group-hover:opacity-100 transition duration-500 font-geist bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
                <ShieldCheck className="w-8 h-8 mb-4 text-indigo-400" />
                <h3 className="text-lg font-semibold mb-2">Hallucination Guard</h3>
                <p className="text-xs text-white/60">Injects verification steps to drastically reduce model fabrication rates.</p>
            </ScrollReveal>

            {/* Small Card 2 */}
            <ScrollReveal delay="delay-300" className="relative overflow-hidden rounded-3xl border p-6 group border-white/10 bg-white/5">
                <div className="group-hover:opacity-100 transition duration-500 font-geist bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
                <Coins className="w-8 h-8 mb-4 text-violet-400" />
                <h3 className="text-lg font-semibold mb-2">Token Efficiency</h3>
                <p className="text-xs text-white/60">Reduces prompt length by up to 40% without losing semantic meaning, saving API costs.</p>
            </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="pt-24 pb-24" id="pricing">
        <div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 bg-white/5 border-white/10 text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                    <span className="text-xs font-normal">Pricing</span>
                  </div>
                <h2 className="md:text-5xl text-3xl font-light tracking-tighter mb-4">Fair access to intelligence.</h2>
                <p className="font-geist text-white/60">Start optimizing for free. Upgrade for API access and team collaboration.</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Free Plan */}
                <ScrollReveal delay="delay-100" className="relative rounded-2xl border p-8 border-white/10 bg-black">
                    <h3 className="text-lg font-medium text-white/80">Hobbyist</h3>
                    <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-4xl font-bold tracking-tight">$0</span>
                        <span className="text-white/40">/month</span>
                    </div>
                    <p className="mt-4 text-sm text-white/60">Perfect for individual refinement.</p>
                    <ul className="mt-8 space-y-4 text-sm text-white/80">
                        <li className="flex gap-3"><Check className="w-4 h-4 text-white/40" /> 10 Optimizations / day</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-white/40" /> Basic Reasoning Models</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-white/40" /> Copy to Clipboard</li>
                    </ul>
                    <button onClick={handleStartOptimizing} className="mt-8 w-full py-3 rounded-lg border transition text-sm font-medium border-white/20 hover:bg-white/5">Get Started</button>
                </ScrollReveal>

                {/* Pro Plan */}
                <ScrollReveal delay="delay-200" className="relative rounded-2xl border border-indigo-500/30 p-8 overflow-hidden bg-white/5">
                    <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-indigo-500 blur-[60px] opacity-20"></div>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-white">Power User</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500 text-white">POPULAR</span>
                    </div>
                    <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-4xl font-bold tracking-tight">$19</span>
                        <span className="text-white/40">/month</span>
                    </div>
                    <p className="mt-4 text-sm text-white/60">For developers and prompt engineers.</p>
                    <ul className="mt-8 space-y-4 text-sm text-white">
                        <li className="flex gap-3"><Check className="w-4 h-4 text-indigo-400" /> Unlimited Optimizations</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-indigo-400" /> GPT-4 &amp; Claude 3 Opus Support</li>
                        <li className="flex gap-3"><Check className="w-4 h-4 text-indigo-400" /> API Access</li>
                    </ul>
                    <button onClick={handleStartOptimizing} className="transition hover:bg-green-500 text-sm font-medium text-white bg-green-600 w-full rounded-lg mt-8 pt-3 pb-3 shadow-[0_0_20px_rgba(34,197,94,0.4)]">Upgrade Now</button>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t pt-16 pb-12 border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs">
                <a href="#" className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded flex items-center justify-center bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
                    </div>
                    <span className="font-semibold text-sm">EasyPrompt</span>
                </a>
                <p className="text-xs leading-relaxed text-white/50">
                    Scientifically engineered prompts for the next generation of AI interaction. Built for precision, privacy, and performance.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                <div>
                    <h4 className="font-medium mb-4 text-white">Product</h4>
                    <ul className="space-y-2 text-white/50">
                        <li><a href="#" className="transition hover:text-white">Features</a></li>
                        <li><a href="#" className="transition hover:text-white">Integrations</a></li>
                        <li><a href="#" className="transition hover:text-white">Pricing</a></li>
                    </ul>
                </div>
                <div className="">
                    <h4 className="font-medium mb-4 text-white">Resources</h4>
                    <ul className="space-y-2 text-white/50">
                        <li className=""><a href="#" className="transition hover:text-white">Docs</a></li>
                        <li><a href="#" className="transition hover:text-white">Prompt Guide</a></li>
                        <li><a href="#" className="transition hover:text-white">API</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium mb-4 text-white">Legal</h4>
                    <ul className="space-y-2 text-white/50">
                        <li><a href="#" className="transition hover:text-white">Privacy</a></li>
                        <li><a href="#" className="transition hover:text-white">Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t flex items-center justify-between border-white/5">
            <p className="text-[10px] text-white/30">© 2025 EasyPrompt Labs Inc.</p>
            <div className="flex gap-4 text-white/40">
                <Twitter className="w-4 h-4 cursor-pointer transition hover:text-white" />
                <Github className="w-4 h-4 cursor-pointer transition hover:text-white" />
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;