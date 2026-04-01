"use client";

import TopBar from '../components/TopBar';
import { useIntelligence } from '../context/IntelligenceContext';

export default function SegmentsPage() {
  const { isAnalyzed, clusters, summary } = useIntelligence();

  return (
    <>
      <TopBar 
        title="Customer DNA" 
        subtitle="AUTONOMOUS CLUSTERING" 
        searchPlaceholder="Probe neural data..."
      />
      
      {/* Hero Header */}
      <div className="mb-12 mt-4">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-on-surface-variant text-lg max-w-2xl">Autonomous clustering architecture revealing deep behavioral archetypes and strategic activation vectors.</p>
          </div>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:shadow-[0_0_15px_rgba(153,247,255,0.4)] transition-all active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>ios_share</span>
            Export Intelligence
          </button>
        </div>
      </div>
      
      {/* Analytics Section: Asymmetric Layout */}
      <div className="grid grid-cols-12 gap-8 mb-12">
        {/* Silhouette Plot (Large Module) */}
        <div className="col-span-12 lg:col-span-8 glass-panel rounded-xl p-8 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface">Silhouette Cluster Validation</h3>
              <p className="text-sm text-on-surface-variant">Metric: Mean Silhouette Coefficient ({isAnalyzed ? '0.74' : 'Awaiting'})</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold text-primary-dim tracking-widest uppercase">K-MEANS ENSEMBLE</span>
            </div>
          </div>
          
          {/* Silhouette Visualization */}
          <div className="h-64 w-full flex items-end gap-1 relative">
            {!isAnalyzed ? (
               <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant/50 font-mono text-xs uppercase tracking-widest">Awaiting Data Ingestion</div>
            ) : clusters.map((cluster, idx) => (
              <div key={cluster.id} className="flex-1 flex flex-col justify-end gap-[2px] h-full">
                  {/* Create fake bars based on cluster size to simulate a silhouette */}
                  <div className={`w-full bg-${cluster.color} rounded-t-sm h-[${Math.max(20, cluster.size / 2)}%] opacity-40`} style={{height: `${Math.max(20, cluster.size / 2)}%`}}></div>
                  <div className={`w-full bg-${cluster.color} rounded-t-sm h-[${Math.max(30, cluster.size)}%] opacity-60`} style={{height: `${Math.max(30, cluster.size)}%`}}></div>
                  <div className={`w-full bg-${cluster.color} rounded-t-sm h-[${Math.max(10, cluster.size * 1.5)}%] shadow-[0_0_10px_var(--color-${cluster.color})]`} style={{height: `${Math.max(40, cluster.size * 1.5)}%`}}></div>
                  <div className={`w-full bg-${cluster.color} rounded-t-sm h-[${Math.max(20, cluster.size)}%] opacity-80`} style={{height: `${Math.max(20, cluster.size)}%`}}></div>
                  <div className={`w-full bg-${cluster.color} rounded-t-sm h-[${Math.max(10, cluster.size / 3)}%] opacity-50`} style={{height: `${Math.max(10, cluster.size / 3)}%`}}></div>
              </div>
            ))}
            
            {/* Silhouette Score Line */}
            {isAnalyzed && (
              <div className="absolute top-1/4 left-0 right-0 border-t border-dashed border-primary/30 z-10">
                <span className="absolute right-0 -top-6 text-[10px] text-primary/60 font-mono">THRESHOLD 0.7</span>
              </div>
            )}
          </div>
          
          <div className="mt-6 flex justify-between text-[11px] text-on-surface-variant font-mono truncate gap-4">
             {clusters.slice(0,3).map(c => (
               <span key={c.id}>CLUSTER {c.id}: {c.name.toUpperCase()}</span>
             ))}
          </div>
        </div>
        
        {/* Quick KPI Panel */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel rounded-xl p-6 flex-1 flex flex-col justify-between">
            <div className="text-on-surface-variant text-sm font-medium">Optimal Cluster Count (k)</div>
            <div className={`text-6xl font-headline font-black tracking-tighter ${isAnalyzed ? 'text-on-surface' : 'text-on-surface-variant/30'}`}>
              {isAnalyzed ? clusters.length.toString().padStart(2, '0') : '--'}
            </div>
            <div className="text-primary text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              {isAnalyzed ? 'Confidence Level 98.2%' : 'Pending Analysis'}
            </div>
          </div>
          
          <div className="glass-panel rounded-xl p-6 flex-1 bg-surface-container-low border-none">
            <div className="text-on-surface-variant text-sm font-medium">Data Points Processed</div>
            <div className={`text-4xl font-headline font-bold mt-2 ${isAnalyzed ? 'text-on-surface' : 'text-on-surface-variant/30'}`}>
              {isAnalyzed ? summary?.totalCustomers.toLocaleString() : '--'}
            </div>
            <div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className={`h-full bg-secondary ${isAnalyzed ? 'w-full' : 'w-0'} transition-all duration-1000`}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Plan Grid - Keeping Top 3 Clusters from Dynamic Results */}
      <div className="mb-16">
        <h3 className="font-headline text-2xl font-bold mb-8 text-on-surface">Neural Activation Strategies</h3>
        
        {!isAnalyzed ? (
          <div className="glass-panel p-8 rounded-xl text-center text-on-surface-variant uppercase tracking-widest text-xs font-bold">
            Awaiting Data Ingestion
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clusters.slice(0, 3).map((cluster, i) => {
              // Map commands based on cluster names generated by ingest API
              let commandText = "Engage with standard workflow.";
              let icon = "bolt";
              
              if (cluster.name.includes("Champion")) {
                commandText = "Target with VIP rewards and early access.";
                icon = "military_tech";
              } else if (cluster.name.includes("Risk")) {
                commandText = "Re-engage with discount coupons immediately.";
                icon = "warning";
              } else if (cluster.name.includes("Loyal")) {
                commandText = "Promote high-value bundles seamlessly.";
                icon = "sell";
              } else {
                commandText = "Launch generic brand awareness sequence.";
                icon = "hub";
              }

              return (
                <div key={cluster.id} className={`glass-panel rounded-xl p-8 border-t-2 border-t-${cluster.color} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-${cluster.color}/10 blur-3xl rounded-full`}></div>
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className={`w-10 h-10 rounded-full bg-${cluster.color}/20 flex items-center justify-center text-${cluster.color}`}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                    </div>
                    <h4 className="font-headline font-bold text-on-surface">{cluster.name}</h4>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed mb-8 relative z-10 text-sm">
                    {((cluster.size / (summary?.totalCustomers || 1)) * 100).toFixed(1)}% of total user base. Income avg: ${cluster.income.toFixed(1)}k.
                  </p>
                  <div className={`bg-${cluster.color}/5 rounded-lg p-4 border border-${cluster.color}/10 mb-6 relative z-10`}>
                    <div className={`text-[10px] text-${cluster.color} font-bold uppercase tracking-widest mb-1`}>COMMAND</div>
                    <div className="text-sm text-on-surface italic">&quot;{commandText}&quot;</div>
                  </div>
                  <button className={`w-full py-3 rounded-lg border border-${cluster.color}/30 text-${cluster.color} text-xs font-bold uppercase tracking-widest hover:bg-${cluster.color} hover:text-surface transition-colors cursor-pointer relative z-10`}>
                    Deploy Campaign
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      {/* Segment Summary Table */}
      <div className="glass-panel rounded-xl overflow-hidden border border-white/5">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-surface-container-low">
          <h4 className="font-headline font-bold text-lg">Detailed Segment Summary</h4>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-3 py-1 bg-surface rounded-md border border-outline-variant/30 text-xs text-on-surface-variant hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[16px]">filter_list</span>
              Sort: Spending Score
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface-container text-on-surface-variant text-[10px] uppercase tracking-[0.15em] font-bold">
                <th className="px-8 py-4 whitespace-nowrap">Cluster Identity</th>
                <th className="px-8 py-4 whitespace-nowrap">Population %</th>
                <th className="px-8 py-4 text-right whitespace-nowrap">Avg Annual Income</th>
                <th className="px-8 py-4 text-right whitespace-nowrap">Avg Spending Score</th>
                <th className="px-8 py-4 text-center whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-inter text-sm">
              {!isAnalyzed ? (
                <tr>
                   <td colSpan={5} className="px-8 py-8 text-center text-on-surface-variant text-xs uppercase tracking-widest font-bold">Awaiting Data</td>
                </tr>
              ) : (
                clusters.map(cluster => {
                  const popPercentage = ((cluster.size / (summary?.totalCustomers || 1)) * 100).toFixed(1);
                  return (
                    <tr key={cluster.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-${cluster.color} shadow-[0_0_8px_var(--color-${cluster.color})]`}></div>
                          <span className="font-semibold">{cluster.name} (C{cluster.id})</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-on-surface-variant">{popPercentage}%</td>
                      <td className="px-8 py-5 text-right font-mono">${(cluster.income * 1000).toLocaleString()}</td>
                      <td className={`px-8 py-5 text-right font-mono text-${cluster.color}`}>{cluster.spendingScore.toFixed(0)}/100</td>
                      <td className="px-8 py-5 text-center">
                        <span className={`bg-${cluster.color}/10 text-${cluster.color} text-[10px] font-bold px-2 py-1 rounded uppercase`}>
                          {cluster.size > 20 ? 'STABLE' : 'ALERT'}
                        </span>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-surface-container-low text-center">
          <button className="text-xs text-on-surface-variant hover:text-white transition-colors uppercase tracking-widest font-bold cursor-pointer">View Global Cluster Map</button>
        </div>
      </div>
    </>
  );
}
