import TopBar from '../components/TopBar';

export default function SentimentPage() {
  return (
    <>
      <TopBar 
        title="Sentiment Arch" 
        subtitle="EMOTIONAL MAPPING" 
        searchPlaceholder="Probe sentiment vectors..."
      />
      
      {/* Header Section */}
      <div className="mb-12 mt-4">
        <p className="text-on-surface-variant text-lg font-body max-w-2xl">
          Visualizing the collective consciousness of your user base through ethereal neural mapping.
        </p>
      </div>
      
      {/* Metric Cards Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-panel rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-primary">analytics</span>
          </div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-4 relative z-10">Global NPS</p>
          <div className="flex items-baseline space-x-3 relative z-10">
            <span className="text-5xl font-black font-headline text-primary">74</span>
            <span className="text-primary-dim font-bold flex items-center text-sm">
              <span className="material-symbols-outlined text-xs mr-1">arrow_upward</span> 12%
            </span>
          </div>
          <div className="mt-6 w-full bg-white/5 h-1 rounded-full overflow-hidden relative z-10">
            <div className="h-full bg-primary" style={{ width: '74%' }}></div>
          </div>
        </div>
        
        <div className="glass-panel rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-secondary">waves</span>
          </div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-4 relative z-10">Sentiment Volatility</p>
          <div className="flex items-baseline space-x-3 relative z-10">
            <span className="text-5xl font-black font-headline text-secondary">Low</span>
            <span className="text-secondary-dim font-bold flex items-center text-sm">
              Stable
            </span>
          </div>
          <div className="mt-6 flex space-x-1 items-end h-8 relative z-10">
            <div className="w-1 bg-secondary/40 h-3 rounded-full"></div>
            <div className="w-1 bg-secondary/60 h-5 rounded-full"></div>
            <div className="w-1 bg-secondary/30 h-2 rounded-full"></div>
            <div className="w-1 bg-secondary h-8 rounded-full"></div>
            <div className="w-1 bg-secondary/50 h-4 rounded-full"></div>
          </div>
        </div>
        
        <div className="glass-panel rounded-xl p-8 relative overflow-hidden group border-primary/20">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-primary">auto_awesome</span>
          </div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-4 relative z-10">Top Positive Driver</p>
          <div className="flex flex-col relative z-10">
            <span className="text-3xl font-bold font-headline text-on-surface mb-2">Neural Interface</span>
            <span className="text-primary text-sm font-medium">92% Satisfaction rate</span>
          </div>
          <div className="mt-6 flex -space-x-2 relative z-10">
            <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
              <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKoP0TcVM3ETWP_Qpvh3616GciASwpiIpT7c0bk9sJ_G34PzbSEWnFV_00f63vC0yEx0-xHhcdcKckZe3IZHLNzdO41UgM_L9WSBc9TMnByCIOK04SArsG3MDctaewTU08LsUBhUiHGlyG7NGG7wNTiY-jkCjN5ifY9XQO026hgj58Lp18alG5zIFc5ZbmOPFumm2mOr_VeYLV_Rfmyx0wDahisRf2fcUlj0c6c54OUj_flLTrjmULDAHDsGNGZrYAm46qPlxsO6SR"/>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
              <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhLcKavKxjaztUvgMvPpKEmj7g80pZSpQ0Qm_kU6lxEHwPlW9eF7D4AUoR29_Dbl_4jQ68VpzaBnDcWjuQUE2-OHa1u-Bn4KIhIstbwp2fWZ0pF8vCxtQiO0_Rljr4aLeT7jhx2V-rugwdwtrMa9-oPpAipoaVfwvTzKQkXWor1HgW1uRmm6dZVmuTiod6IOIl2A9CQhb20HboY2MtIB0BkF3BKmyfg_ZmCM1Jc12H6LAI0UCi3ZKa_maLtk4bJTYlLVXmbD1K89fF"/>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
              +4k
            </div>
          </div>
        </div>
      </div>
      
      {/* Emotional Landscape Bubble Chart Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 glass-panel rounded-xl p-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold font-headline">Emotional Landscape</h3>
              <p className="text-xs text-on-surface-variant">Real-time mapping of customer resonance</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Positive</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Neutral</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-error"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Negative</span>
              </div>
            </div>
          </div>
          
          {/* Simulated 3D Bubble Map */}
          <div className="relative h-[400px] w-full flex items-center justify-center bg-surface-container-low rounded-xl overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #484847 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            {/* Floating Bubbles */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-secondary/10 blur-2xl"></div>
            
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Large Bubbles (Themes) */}
              <div className="absolute translate-x-[-120px] translate-y-[-80px] w-36 h-36 rounded-full glass-panel flex flex-col items-center justify-center p-4 text-center shadow-[0_0_30px_rgba(153,247,255,0.1)] hover:scale-110 transition-transform cursor-pointer">
                <span className="text-primary font-black font-headline text-lg">Intuitive</span>
                <span className="text-[10px] text-on-surface-variant uppercase">4.8k mentions</span>
              </div>
              <div className="absolute translate-x-[150px] translate-y-[-40px] w-48 h-48 rounded-full glass-panel flex flex-col items-center justify-center p-4 text-center shadow-[0_0_40px_rgba(213,117,255,0.1)] hover:scale-110 transition-transform cursor-pointer">
                <span className="text-secondary font-black font-headline text-2xl">Functional</span>
                <span className="text-[10px] text-on-surface-variant uppercase">12.2k mentions</span>
              </div>
              <div className="absolute translate-x-[0px] translate-y-[100px] w-28 h-28 rounded-full glass-panel flex flex-col items-center justify-center p-4 text-center border-error/40 shadow-[0_0_20px_rgba(255,113,108,0.1)] hover:scale-110 transition-transform cursor-pointer">
                <span className="text-error font-black font-headline text-sm">Latency</span>
                <span className="text-[10px] text-on-surface-variant uppercase">1.1k mentions</span>
              </div>
              <div className="absolute translate-x-[-180px] translate-y-[60px] w-24 h-24 rounded-full glass-panel flex flex-col items-center justify-center p-4 text-center border-[1px] border-primary/30 hover:scale-110 transition-transform cursor-pointer">
                <span className="text-primary-dim font-black font-headline text-xs">Speed</span>
                <span className="text-[10px] text-on-surface-variant uppercase">3.2k</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sentiment Drivers List */}
        <div className="glass-panel rounded-xl p-8 flex flex-col">
          <h3 className="text-xl font-bold font-headline mb-6">Key Drivers</h3>
          <div className="space-y-6 flex-1">
            <div className="group cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Visual Aesthetics</span>
                <span className="text-xs font-bold text-primary">+18.4%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">API Reliability</span>
                <span className="text-xs font-bold text-primary">+12.1%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '72%' }}></div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-on-surface group-hover:text-secondary transition-colors">Documentation</span>
                <span className="text-xs font-bold text-on-surface-variant">Neutral</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-secondary/50" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-on-surface group-hover:text-error transition-colors">Mobile Checkout</span>
                <span className="text-xs font-bold text-error">-4.2%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-error" style={{ width: '28%' }}></div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-on-surface group-hover:text-error transition-colors">Voice Sync</span>
                <span className="text-xs font-bold text-error">-8.9%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-error" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
          
          <button className="w-full py-3 rounded-xl border border-white/10 hover:border-primary/50 text-[10px] font-black tracking-widest uppercase text-on-surface-variant hover:text-primary transition-all mt-6 cursor-pointer">
            Deep Dive Report
          </button>
        </div>
      </div>
      
      {/* Sentiment Over Time & Volume */}
      <div className="glass-panel rounded-xl p-8 mb-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-xl font-bold font-headline">Sentiment Over Time</h3>
            <p className="text-xs text-on-surface-variant">Correlation between feedback volume and brand resonance</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-lg bg-surface-container-highest text-[10px] font-bold uppercase text-on-surface cursor-pointer">7 Days</button>
            <button className="px-4 py-2 rounded-lg hover:bg-white/5 text-[10px] font-bold uppercase text-on-surface-variant cursor-pointer transition-colors">30 Days</button>
            <button className="px-4 py-2 rounded-lg hover:bg-white/5 text-[10px] font-bold uppercase text-on-surface-variant cursor-pointer transition-colors">90 Days</button>
          </div>
        </div>
        
        <div className="relative h-[300px] w-full mt-4">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="w-full border-t border-white/5"></div>
            <div className="w-full border-t border-white/5"></div>
            <div className="w-full border-t border-white/5"></div>
            <div className="w-full border-t border-white/5"></div>
            <div className="w-full border-t border-white/5"></div>
          </div>
          
          {/* SVG Chart Logic */}
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <path d="M0 300 L50 250 L100 280 L150 220 L200 240 L250 200 L300 210 L350 180 L400 190 L450 150 L500 170 L550 130 L600 160 L650 120 L700 140 L750 100 L800 110 L850 90 L900 100 L950 80 L1000 90 L1050 70 L1100 80 L1200 60 L1200 300 Z" fill="url(#volumeGradient)" opacity="0.3"></path>
            <path d="M0 150 C 100 160, 200 100, 300 120 S 500 80, 600 90 S 800 110, 900 60 S 1100 40, 1200 50" fill="none" stroke="var(--color-primary, #99f7ff)" strokeLinecap="round" strokeWidth="4"></path>
            <defs>
              <linearGradient id="volumeGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--color-secondary, #d575ff)" stopOpacity="0.5"></stop>
                <stop offset="100%" stopColor="var(--color-secondary, #d575ff)" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          
          {/* Data Points */}
          <div className="absolute top-[50px] right-[100px] flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary border-[3px] border-surface shadow-[0_0_15px_rgba(153,247,255,1)]"></div>
            <div className="glass-panel px-3 py-1 rounded-lg">
              <p className="text-[10px] font-black text-on-surface">94.2 Score</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-1 bg-primary rounded-full"></div>
              <span className="text-[10px] font-bold uppercase text-on-surface-variant">Sentiment Score</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-1 bg-secondary opacity-50 rounded-full"></div>
              <span className="text-[10px] font-bold uppercase text-on-surface-variant">Volume (Feedback Units)</span>
            </div>
          </div>
          <p className="text-[10px] font-bold uppercase text-on-surface-variant">Last Update: 2 minutes ago</p>
        </div>
      </div>
      
      {/* Contextual FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container shadow-[0_0_25px_rgba(0,241,254,0.4)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-50 cursor-pointer">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>edit_square</span>
      </button>
    </>
  );
}
