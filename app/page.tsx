"use client";

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import TopBar from './components/TopBar';
import MetricCard from './components/MetricCard';
import { useIntelligence } from './context/IntelligenceContext';

export default function Home() {
  const router = useRouter();
  const { isAnalyzed, customers, clusters, summary } = useIntelligence();

  // Determine top segment safely
  const topSegment = useMemo(() => {
    if (!clusters.length) return { name: "Awaiting Data", id: "0" };
    const largest = [...clusters].sort((a, b) => b.size - a.size)[0];
    return { name: largest.name, id: `CLUSTER 0${largest.id + 1}` };
  }, [clusters]);

  return (
    <>
      <TopBar 
        title="Dimensionality Hub"
        subtitle="CLUSTERING ANALYTICS"
      />

      {/* Metric Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard 
          title="Total Customers"
          value={isAnalyzed ? summary!.totalCustomers.toLocaleString() : "--"}
          change={isAnalyzed ? "Processed" : "Pending"}
          changeLabel="from latest ingest"
          colorClass="primary"
          icon="trending_up"
        />
        <MetricCard 
          title="Average Spending Score"
          value={isAnalyzed ? summary!.avgSpending.toFixed(1) : "--"}
          change={isAnalyzed ? "Points" : "N/A"}
          changeLabel="overall average"
          colorClass="secondary"
          icon="add"
        />
        <MetricCard 
          title="Top Segment"
          value={topSegment.name}
          customBadge={
            <div className="px-2 py-0.5 bg-tertiary-container/30 border border-tertiary/20 rounded text-[10px] text-tertiary font-bold tracking-widest uppercase mb-1 shrink-0">
              {topSegment.id}
            </div>
          }
          changeLabel={isAnalyzed ? "Dominant cluster" : "Awaiting analysis"}
          colorClass="tertiary"
        />
      </section>

      {/* Main Visualization Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 pb-8">
        {/* Central Section: 2D Scatter Plot Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="glass-panel rounded-xl flex-1 relative flex flex-col overflow-hidden min-h-[500px]">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5 relative z-20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">bubble_chart</span>
                <h3 className="font-headline font-bold text-lg tracking-tight">K-Means Customer Distribution</h3>
              </div>
              <div className="flex gap-2">
                <button className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold text-on-surface border border-outline-variant/30 uppercase cursor-pointer hover:bg-white/10 transition">2D Render</button>
              </div>
            </div>
            
            <div className="flex-1 relative group cursor-crosshair">
              {/* Plot Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest to-transparent pointer-events-none"></div>
              
              {!isAnalyzed ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/50 backdrop-blur-sm z-30">
                  <span className="material-symbols-outlined text-outline-variant text-4xl mb-4 animate-pulse">cloud_upload</span>
                  <p className="text-on-surface-variant font-bold text-sm tracking-widest uppercase mb-6">No Data Matrix Available</p>
                  <button 
                    onClick={() => router.push('/upload')}
                    className="px-6 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full uppercase tracking-widest text-xs font-bold hover:bg-primary/20 transition-all glow-primary"
                  >
                    Proceed to Ingestion
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 p-12">
                   {/* Dynamic SVG Scatterplot */}
                   <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Grid Lines */}
                      <path d="M 0 50 L 100 50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                      <path d="M 50 0 L 50 100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                      
                      {/* Plot points connecting Annual Income to X, Spending to Y */}
                      {customers.map(c => {
                        // Max income is ~150 in the dataset
                        const x = (c.income / 140) * 100;
                        const y = 100 - ((c.spendingScore / 100) * 100);
                        const clusterColor = clusters.find(cl => cl.id === c.cluster)?.color;
                        
                        // Map our theme color names to CSS variables
                        const fillColor = clusterColor ? `var(--color-${clusterColor})` : 'white';
                        
                        return (
                          <circle 
                            key={c.id}
                            cx={`${x}%`} 
                            cy={`${y}%`} 
                            r="1.2" 
                            fill={fillColor}
                            opacity="0.8"
                            className="transition-all duration-300 hover:r-3 hover:opacity-100"
                          >
                            <title>{`ID: ${c.id}\nIncome: $${c.income}k\nSpend: ${c.spendingScore}`}</title>
                          </circle>
                        )
                      })}
                   </svg>
                   
                   {/* Axis Labels */}
                   <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] font-mono text-on-surface-variant/50 uppercase">
                     Annual Income (k$) ➔
                   </div>
                   <div className="absolute top-0 bottom-0 left-4 flex items-center">
                     <div className="text-[10px] font-mono text-on-surface-variant/50 uppercase -rotate-90 origin-center whitespace-nowrap">
                       Spending Score ➔
                     </div>
                   </div>
                </div>
              )}
              
              {/* Overlay UI elements of the plot */}
              {isAnalyzed && (
                <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none p-4 rounded-xl bg-surface/50 backdrop-blur-md border border-white/5">
                  {clusters.map(cluster => (
                    <div key={cluster.id} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${cluster.color} shadow-[0_0_8px_var(--color-${cluster.color})]`}></div>
                      <span className="text-[10px] font-bold text-on-surface truncate max-w-[150px]">
                        {cluster.name} ({cluster.size})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Side Panel: Cluster Parameters */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Parameters Control */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-6 relative overflow-hidden">
             {!isAnalyzed && <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm z-10"></div>}
            
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">settings_input_component</span>
              <h3 className="font-headline font-bold text-lg tracking-tight">Intelligence Config</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-on-surface-variant tracking-wider uppercase">Number of Clusters (k)</label>
                <span className="text-primary font-bold font-mono">5</span>
              </div>
              <input disabled className="w-full h-1.5 bg-surface-container rounded-full appearance-none accent-primary" max="10" min="2" type="range" value="5" />
            </div>
            
            <div className="space-y-4 pt-4 border-t border-white/5">
              <label className="text-xs font-semibold text-on-surface-variant tracking-wider uppercase block">Normalization Strategy</label>
              <select disabled className="w-full bg-surface-container-highest border-outline-variant/30 rounded-lg text-sm text-on-surface px-3 py-2 cursor-not-allowed">
                <option>StandardScaler</option>
              </select>
            </div>
          </div>

          {/* Elbow Method Graph */}
          <div className="glass-panel p-6 rounded-xl flex-1 flex flex-col gap-4 relative overflow-hidden">
             {!isAnalyzed && <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm z-10"></div>}
             
            <div className="flex justify-between items-center">
              <h3 className="font-headline font-bold text-sm tracking-tight uppercase text-on-surface-variant">Elbow Method Analysis</h3>
              <span className="material-symbols-outlined text-on-surface-variant/40 text-sm">info</span>
            </div>
            
            <div className="flex-1 relative min-h-[180px]">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 5,90 L 15,40 L 30,25 L 50,18 L 70,14 L 95,12" fill="none" stroke="#d575ff" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                <circle cx="50" cy="18" fill="#99f7ff" r="3"></circle>
              </svg>
              
              <div className="absolute left-[52%] top-[14%] bg-surface-container-highest p-1.5 rounded border border-primary/20">
                <p className="text-[8px] font-bold text-primary uppercase">Optimal k=5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
