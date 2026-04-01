import TopBar from '../components/TopBar';

export default function NeuralForecastsPage() {
  return (
    <>
      <TopBar 
        title="Neural Forecasts" 
        subtitle="PREDICTIVE INTELLIGENCE" 
        searchPlaceholder="Search neural nodes..."
      />
      
      {/* Header Section */}
      <section className="flex justify-between items-end mb-12 mt-4">
        <div>
          <p className="text-on-surface-variant font-medium max-w-xl text-lg">
            Deep-learning projections for customer lifecycle events and capital trajectories across 12-month windows.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 rounded-full bg-surface-container-highest text-on-surface text-sm font-semibold border border-outline-variant/15 hover:border-primary/50 transition-all cursor-pointer">
            Export Models
          </button>
          <button className="px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container text-sm font-bold shadow-[0_0_20px_rgba(0,241,254,0.3)] hover:scale-105 transition-all cursor-pointer">
            Re-train Engine
          </button>
        </div>
      </section>
      
      {/* Predictive Metric Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass-panel p-8 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest relative z-10">Avg Predicted LTV</span>
          <div className="flex items-baseline gap-2 mt-4 relative z-10">
            <span className="text-4xl font-headline font-bold text-on-surface tracking-tighter">$14.2k</span>
            <span className="text-primary text-sm font-bold">+12.4%</span>
          </div>
          <div className="mt-6 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden relative z-10">
            <div className="h-full bg-primary w-3/4 rounded-full"></div>
          </div>
        </div>
        
        <div className="glass-panel p-8 rounded-xl relative overflow-hidden group border-l-2 border-l-secondary/30">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest relative z-10">Projected Churn Rate</span>
          <div className="flex items-baseline gap-2 mt-4 relative z-10">
            <span className="text-4xl font-headline font-bold text-on-surface tracking-tighter">4.2%</span>
            <span className="text-secondary text-sm font-bold">-0.8%</span>
          </div>
          <div className="mt-6 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden relative z-10">
            <div className="h-full bg-secondary w-1/4 rounded-full"></div>
          </div>
        </div>
        
        <div className="glass-panel p-8 rounded-xl relative overflow-hidden group border-l-2 border-l-tertiary/30">
          <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest relative z-10">AI Confidence Score</span>
          <div className="flex items-baseline gap-2 mt-4 relative z-10">
            <span className="text-4xl font-headline font-bold text-on-surface tracking-tighter">98.2</span>
            <span className="text-tertiary text-sm font-bold">Stable</span>
          </div>
          <div className="mt-6 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden relative z-10">
            <div className="h-full bg-tertiary w-[98%] rounded-full"></div>
          </div>
        </div>
      </section>
      
      {/* Main Visualizations Bento */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[600px] mb-12">
        {/* Future Revenue Forecast (Large) */}
        <div className="lg:col-span-8 glass-panel rounded-xl p-8 flex flex-col h-full min-h-[400px]">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-headline font-bold text-xl">Future Revenue Forecast</h3>
              <p className="text-on-surface-variant text-xs mt-1">12-month lookahead with confidence intervals</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-primary tracking-widest">
                <div className="w-2 h-2 rounded-full bg-primary"></div> Predicted
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-secondary tracking-widest">
                <div className="w-2 h-2 rounded-full bg-secondary"></div> Upper Bound
              </span>
            </div>
          </div>
          
          <div className="flex-1 relative flex items-end justify-between px-4 pb-4">
            {/* Simulated Line Chart with Confidence Interval Gradient */}
            <div className="absolute inset-0 m-8 mb-12">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 0 80 Q 20 70, 40 75 T 80 40 T 100 20 L 100 50 Q 80 70, 40 90 T 0 95 Z" fill="url(#grad-confidence)" opacity="0.15"></path>
                <path d="M 0 85 Q 20 75, 40 80 T 80 45 T 100 25" fill="none" stroke="url(#grad-primary)" strokeLinecap="round" strokeWidth="2.5"></path>
                <defs>
                  <linearGradient id="grad-confidence" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'var(--color-primary, #99f7ff)' }}></stop>
                    <stop offset="100%" style={{ stopColor: 'var(--color-secondary, #d575ff)' }}></stop>
                  </linearGradient>
                  <linearGradient id="grad-primary" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#00F2FF' }}></stop>
                    <stop offset="100%" style={{ stopColor: '#BC13FE' }}></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* X-Axis Labels */}
            <div className="w-full flex justify-between text-[10px] font-bold text-neutral-600 uppercase tracking-widest mt-auto z-10">
              <span>Mar 24</span><span>Jun 24</span><span>Sep 24</span><span>Dec 24</span><span>Mar 25</span>
            </div>
          </div>
        </div>
        
        {/* Churn Probability Matrix (Vertical) */}
        <div className="lg:col-span-4 glass-panel rounded-xl p-8 flex flex-col h-full min-h-[400px]">
          <h3 className="font-headline font-bold text-xl mb-2">Churn Matrix</h3>
          <p className="text-on-surface-variant text-xs mb-8">High-risk segment identification</p>
          <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-2">
            {/* Heatmap Blocks */}
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
            <div className="rounded-md bg-error/10 border border-error/20 transition-colors hover:bg-error/30 hover:border-error/50"></div>
            <div className="rounded-md bg-error/40 border border-error/40 animate-pulse hover:bg-error/60 transition-colors"></div>
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
            <div className="rounded-md bg-error/20 border border-error/20 transition-colors hover:bg-error/40 hover:border-error/50"></div>
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
            <div className="rounded-md bg-primary/20 transition-colors hover:bg-primary/40"></div>
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
            <div className="rounded-md bg-primary/40 border border-primary/40 transition-colors hover:bg-primary/60"></div>
            <div className="rounded-md bg-primary/20 transition-colors hover:bg-primary/40"></div>
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
            <div className="rounded-md bg-surface-container-highest/30 transition-colors hover:bg-surface-container-highest/60"></div>
          </div>
          <div className="mt-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-tighter">
            <span className="text-primary">Low Risk</span>
            <span className="text-error">Critical</span>
          </div>
        </div>
      </section>
      
      {/* LTV Prediction Engine */}
      <section className="glass-panel rounded-xl p-10 overflow-hidden relative mb-8">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h3 className="font-headline font-bold text-2xl tracking-tight">LTV Prediction Engine</h3>
            <p className="text-on-surface-variant text-sm mt-2 font-medium">Neural distribution of estimated value per customer cohort over 36 months.</p>
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="px-4 py-2 bg-surface-container-low rounded-lg border border-white/5 flex items-center gap-3">
              <span className="text-xs font-bold text-neutral-400">COHORT:</span>
              <span className="text-xs font-bold text-on-surface">Enterprise Q1</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 items-end h-64 relative z-10">
          <div className="flex-1 bg-surface-container-highest/20 rounded-t-lg h-12 hover:bg-primary/20 transition-all cursor-pointer"></div>
          <div className="flex-1 bg-surface-container-highest/20 rounded-t-lg h-24 hover:bg-primary/20 transition-all cursor-pointer"></div>
          <div className="flex-1 bg-surface-container-highest/20 rounded-t-lg h-32 hover:bg-primary/20 transition-all cursor-pointer"></div>
          <div className="flex-1 bg-primary/30 rounded-t-lg h-48 border-t-2 border-primary/60 hover:bg-primary/40 transition-all cursor-pointer"></div>
          <div className="flex-1 bg-primary/50 rounded-t-lg h-64 border-t-2 border-primary shadow-[0_-10px_20px_rgba(0,242,255,0.1)] hover:scale-105 transition-all cursor-pointer relative z-20"></div>
          <div className="flex-1 bg-primary/40 rounded-t-lg h-56 border-t-2 border-primary/80 hover:bg-primary/40 transition-all cursor-pointer"></div>
          <div className="flex-1 bg-primary/20 rounded-t-lg h-40 border-t-2 border-primary/40 hover:bg-primary/40 transition-all cursor-pointer"></div>
          <div className="flex-1 bg-surface-container-highest/20 rounded-t-lg h-28 hover:bg-primary/20 transition-all cursor-pointer"></div>
          <div className="flex-1 bg-surface-container-highest/20 rounded-t-lg h-16 hover:bg-primary/20 transition-all cursor-pointer"></div>
          <div className="flex-1 bg-surface-container-highest/20 rounded-t-lg h-8 hover:bg-primary/20 transition-all cursor-pointer"></div>
        </div>
        
        <div className="mt-4 flex justify-between text-[10px] font-black text-neutral-600 uppercase tracking-widest border-t border-white/5 pt-4 relative z-10">
          <span>$1k - $5k</span>
          <span>$5k - $10k</span>
          <span>$10k - $25k</span>
          <span>$25k - $50k</span>
          <span>$50k - $100k+</span>
        </div>
      </section>
      
      {/* Bottom Status/Task Bar */}
      <section className="flex items-center justify-between glass-panel px-8 py-4 rounded-xl border border-primary/10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface">Engine Status: Optimal</span>
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <span className="text-xs font-medium text-on-surface-variant">Last model sync: 14 mins ago</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-on-surface-variant">Processing 4.2TB node data</span>
          <div className="w-32 h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-gradient-to-r from-primary to-secondary"></div>
          </div>
        </div>
      </section>
      
    </>
  );
}
