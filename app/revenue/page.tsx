"use client";

import TopBar from '../components/TopBar';
import { useIntelligence } from '../context/IntelligenceContext';

export default function RevenuePage() {
  const { isAnalyzed, summary, clusters, customers } = useIntelligence();

  // Compute dynamic stats
  const totalRev = isAnalyzed ? summary!.totalRevenue : 0;
  const avgRev = isAnalyzed ? summary!.avgLtv : 0;
  
  // Format large numbers
  const formatCurrency = (val: number) => {
    if (val > 1000000) return `$${(val / 1000000).toFixed(2)}M`;
    if (val > 1000) return `$${(val / 1000).toFixed(1)}k`;
    return `$${val.toFixed(0)}`;
  };

  // Determine top segments by aggregate revenue
  const getVelocitySegments = () => {
    if (!isAnalyzed) return [];
    
    // Group customers by cluster and sum LTV
    const revByCluster = clusters.map(cluster => {
      const clusterCustomers = customers.filter(c => c.cluster === cluster.id);
      const totalLtv = clusterCustomers.reduce((acc, c) => acc + c.ltv, 0);
      return { ...cluster, totalLtv };
    }).sort((a, b) => b.totalLtv - a.totalLtv);

    // Limit to top 4
    const top4 = revByCluster.slice(0, 4);
    const maxRev = top4[0]?.totalLtv || 1;

    return top4.map(c => ({
      label: c.name,
      value: formatCurrency(c.totalLtv),
      color: c.color,
      w: Math.max(10, Math.round((c.totalLtv / maxRev) * 100))
    }));
  };

  const velocitySegments = getVelocitySegments();

  return (
    <>
      <TopBar 
        title="Revenue Architecture" 
        subtitle="FINANCIAL METRICS" 
        searchPlaceholder="Probe neural data..."
      />
      
      {/* Hero Header Text */}
      <div className="mb-12 mt-4">
        <p className="text-on-surface-variant font-body max-w-2xl text-lg">
          Visualizing the kinetic energy of capital across your intelligence ecosystem. Monitor high-velocity growth streams and contraction vectors in real-time.
        </p>
      </div>
      
      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-panel p-6 rounded-xl glow-primary relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-primary/10"></div>
          <p className="text-xs font-bold text-on-surface-variant tracking-widest uppercase font-label mb-4 relative z-10">Projected Lifetime Value</p>
          <div className="flex items-end gap-3 relative z-10">
            <span className={`text-4xl font-black font-headline ${isAnalyzed ? 'text-on-surface' : 'text-on-surface-variant/30'}`}>
              {isAnalyzed ? formatCurrency(totalRev) : '--'}
            </span>
            <span className="text-primary font-bold text-sm mb-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">trending_up</span>
               Baseline
            </span>
          </div>
          <div className="mt-6 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden relative z-10">
            <div className={`h-full bg-primary ${isAnalyzed ? 'w-full' : 'w-0'} shadow-[0_0_8px_rgba(153,247,255,0.6)] transition-all duration-1000`}></div>
          </div>
        </div>
        
        <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-secondary/10"></div>
          <p className="text-xs font-bold text-on-surface-variant tracking-widest uppercase font-label mb-4 relative z-10">Net Revenue Retention</p>
          <div className="flex items-end gap-3 relative z-10">
            <span className="text-4xl font-black font-headline text-on-surface">{isAnalyzed ? '118%' : '--'}</span>
            <span className="text-secondary font-bold text-sm mb-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">verified_user</span>
               {isAnalyzed ? 'Optimal' : 'Pending'}
            </span>
          </div>
          <div className="mt-6 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden relative z-10">
            <div className={`h-full bg-secondary ${isAnalyzed ? 'w-[85%]' : 'w-0'} shadow-[0_0_8px_rgba(188,19,254,0.6)] transition-all duration-1000`}></div>
          </div>
        </div>
        
        <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-tertiary/10"></div>
          <p className="text-xs font-bold text-on-surface-variant tracking-widest uppercase font-label mb-4 relative z-10">Average LTV Per User</p>
          <div className="flex items-end gap-3 relative z-10">
            <span className={`text-4xl font-black font-headline ${isAnalyzed ? 'text-on-surface' : 'text-on-surface-variant/30'}`}>
              {isAnalyzed ? formatCurrency(avgRev) : '--'}
            </span>
            <span className="text-tertiary font-bold text-sm mb-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">insights</span>
               {isAnalyzed ? 'Calculated' : ''}
            </span>
          </div>
          <div className="mt-6 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden relative z-10">
            <div className={`h-full bg-tertiary ${isAnalyzed ? 'w-[62%]' : 'w-0'} shadow-[0_0_8px_rgba(172,137,255,0.6)] transition-all duration-1000`}></div>
          </div>
        </div>
      </div>
      
      {/* Bento Layout */}
      <div className="grid grid-cols-12 gap-8 mb-12">
        {/* Revenue Flow Chart (Sankey Style Visualization) */}
        <div className="col-span-12 lg:col-span-8 glass-panel p-8 rounded-2xl relative overflow-hidden">
          {!isAnalyzed && <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm z-20 flex items-center justify-center text-xs font-bold tracking-widest uppercase text-on-surface-variant">Awaiting Ingestion</div>}
          
          <div className="flex justify-between items-center mb-10 relative z-10">
            <h3 className="text-xl font-bold font-headline">Intelligence Revenue Flow</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Real-time Probe</span>
              <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-wider">System Normal</span>
            </div>
          </div>
          
          <div className="relative h-[300px] flex items-center justify-between px-10">
            {/* Column 1: Sources */}
            <div className="flex flex-col justify-around h-full">
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-1.5 h-12 bg-primary rounded-full"></div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Core Users</p>
                  <p className="text-lg font-bold text-on-surface">{isAnalyzed ? formatCurrency(totalRev * 0.45) : '$0'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-1.5 h-12 bg-secondary rounded-full"></div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Expansion</p>
                  <p className="text-lg font-bold text-on-surface">{isAnalyzed ? formatCurrency(totalRev * 0.55) : '$0'}</p>
                </div>
              </div>
            </div>
            
            {/* SVG Flow lines */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 300">
                <path d="M100 75 C 300 75, 300 150, 500 150" fill="none" stroke="url(#grad1)" strokeWidth="40"></path>
                <path d="M100 225 C 300 225, 300 150, 500 150" fill="none" stroke="url(#grad2)" strokeWidth="60"></path>
                <path d="M500 150 C 550 150, 550 250, 580 250" fill="none" stroke="#ff716c" strokeWidth="15"></path>
                <defs>
                  <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#99f7ff', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#00f1fe', stopOpacity: 0.2 }}></stop>
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#d575ff', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#9800d0', stopOpacity: 0.2 }}></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Column 2: Total Revenue */}
            <div className="z-10 text-center glass-panel p-6 rounded-full w-48 h-48 flex flex-col justify-center items-center border-[1px] border-primary/20 shadow-[0_0_40px_rgba(0,241,254,0.1)] bg-surface-container">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Gross LTV</p>
              <p className="text-3xl font-black font-headline text-on-surface">{isAnalyzed ? formatCurrency(totalRev) : '$0'}</p>
            </div>
            
            {/* Column 3: Outcomes */}
            <div className="flex flex-col justify-around h-full relative z-10">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Net Profit</p>
                  <p className="text-lg font-bold text-on-surface text-right">{isAnalyzed ? formatCurrency(totalRev * 0.82) : '$0'}</p>
                </div>
                <div className="w-1.5 h-12 bg-primary/40 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-bold text-error uppercase tracking-widest text-right">Contraction</p>
                  <p className="text-lg font-bold text-on-surface text-right">{isAnalyzed ? formatCurrency(totalRev * 0.18) : '$0'}</p>
                </div>
                <div className="w-1.5 h-12 bg-error-dim rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Revenue Segments (Treemap/Bar Mix) */}
        <div className="col-span-12 lg:col-span-4 glass-panel p-8 rounded-2xl flex flex-col relative overflow-hidden">
          {!isAnalyzed && <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm z-20"></div>}
          <h3 className="text-xl font-bold font-headline mb-8">Segment Velocity</h3>
          <div className="space-y-6 flex-1">
            {isAnalyzed && velocitySegments.map((seg, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest truncate mr-4">{seg.label}</span>
                  <span className={`text-xs font-bold text-${seg.color}`}>{seg.value}</span>
                </div>
                <div className="h-8 w-full bg-surface-container-low rounded-lg overflow-hidden flex">
                  <div className={`h-full bg-${seg.color}/40 border-r border-${seg.color}/50 relative group transition-all duration-1000`} style={{ width: `${seg.w}%` }}>
                    <div className={`absolute inset-0 bg-${seg.color} opacity-20 transition-opacity group-hover:opacity-40`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
            <button className="w-full py-4 rounded-full bg-surface-container-highest text-xs font-bold text-on-surface uppercase tracking-widest hover:bg-surface-bright transition-all cursor-pointer">
              Explore Neural Clusters
            </button>
          </div>
        </div>
      </div>
      
      {/* Cohort Retention Heatmap (Static Display for effect as cohorts require time-series data we don't have) */}
      <div className="glass-panel p-8 rounded-2xl overflow-hidden mb-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-xl font-bold font-headline mb-2">Revenue Cohort Heatmap</h3>
            <p className="text-xs text-on-surface-variant font-body">Revenue retention by signup month over a 12-month sequence.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-sm shadow-[0_0_5px_rgba(153,247,255,0.5)]"></span>
              <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">High Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-surface-container-highest rounded-sm"></span>
              <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">Low Velocity</span>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="pb-4 px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Cohort</th>
                <th className="pb-4 px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center">New Rev</th>
                {['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8'].map((m) => (
                  <th key={m} className="pb-4 px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs font-body opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               {/* Just showing one line for representation as cohort implies history */}
              <tr className="border-t border-white/5">
                <td className="py-4 font-bold text-on-surface">Jan 2024</td>
                <td className="py-4 text-center font-bold text-primary">{isAnalyzed ? formatCurrency(totalRev * 0.1) : '$412k'}</td>
                <td className="py-4 px-1"><div className="h-8 rounded bg-primary/90 flex items-center justify-center text-[10px] font-bold text-on-primary">100%</div></td>
                <td className="py-4 px-1"><div className="h-8 rounded bg-primary/80 flex items-center justify-center text-[10px] font-bold text-on-primary">92%</div></td>
                <td className="py-4 px-1"><div className="h-8 rounded bg-primary/70 flex items-center justify-center text-[10px] font-bold text-on-primary">88%</div></td>
                <td className="py-4 px-1"><div className="h-8 rounded bg-primary/60 flex items-center justify-center text-[10px] font-bold">85%</div></td>
                <td className="py-4 px-1"><div className="h-8 rounded bg-primary/50 flex items-center justify-center text-[10px] font-bold">82%</div></td>
                <td className="py-4 px-1"><div className="h-8 rounded bg-primary/40 flex items-center justify-center text-[10px] font-bold">80%</div></td>
                <td className="py-4 px-1"><div className="h-8 rounded bg-primary/30 flex items-center justify-center text-[10px] font-bold">78%</div></td>
                <td className="py-4 px-1"><div className="h-8 rounded bg-primary/20 flex items-center justify-center text-[10px] font-bold">77%</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Contextual FAB */}
      <button className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-primary-container text-on-primary-container shadow-[0_0_30px_rgba(0,241,254,0.4)] flex items-center justify-center group hover:scale-110 transition-transform z-50 cursor-pointer">
        <span className="material-symbols-outlined text-3xl font-bold">add</span>
        <span className="absolute right-20 px-4 py-2 bg-surface-container-highest text-xs font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 text-white">Configure Stream</span>
      </button>
    </>
  );
}
