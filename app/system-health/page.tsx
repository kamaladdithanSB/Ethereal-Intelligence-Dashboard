import TopBar from '../components/TopBar';

export default function SystemHealthPage() {
  return (
    <>
      <TopBar 
        title="System Health" 
        subtitle="Ethereal Intelligence" 
        searchPlaceholder="Probe system architecture..."
      />
      
      {/* Dashboard Content */}
      <div className="space-y-8 flex-1">
        {/* Hero Stats Row (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] tracking-widest uppercase font-bold text-on-surface-variant">Engine Uptime</span>
              <span className="material-symbols-outlined text-primary text-sm">bolt</span>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight">99.998<span className="text-sm font-medium text-primary ml-1">%</span></h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-3 bg-primary rounded-full"></div>
                  <div className="w-1 h-3 bg-primary rounded-full"></div>
                  <div className="w-1 h-3 bg-primary rounded-full"></div>
                  <div className="w-1 h-3 bg-primary rounded-full"></div>
                  <div className="w-1 h-3 bg-neutral-700 rounded-full"></div>
                </div>
                <span className="text-[10px] text-on-surface-variant">Tier-1 Stability</span>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] tracking-widest uppercase font-bold text-on-surface-variant">Avg Inference</span>
              <span className="material-symbols-outlined text-secondary text-sm">speed</span>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight">142<span className="text-sm font-medium text-secondary ml-1">ms</span></h2>
              <span className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">arrow_downward</span> 12% faster
              </span>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] tracking-widest uppercase font-bold text-on-surface-variant">Last Sync</span>
              <span className="material-symbols-outlined text-tertiary text-sm">sync</span>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight">04<span className="text-sm font-medium text-tertiary ml-1">m ago</span></h2>
              <span className="text-[10px] text-on-surface-variant mt-1">Delta: 1.2GB processed</span>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] tracking-widest uppercase font-bold text-on-surface">System Pulse</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px]">
                <span className="text-on-surface-variant">Global Load</span>
                <span className="text-on-surface">42%</span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[42%]"></div>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-on-surface-variant">Memory Ceiling</span>
                <span className="text-on-surface">88%</span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[88%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Neural Core & Latency Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Neural Core Performance */}
          <div className="lg:col-span-8 glass-panel p-8 rounded-xl overflow-hidden relative">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold font-headline">Neural Core Performance</h3>
                <p className="text-sm text-on-surface-variant">Real-time compute allocation across engine clusters</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-primary border border-primary/20">CPU</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant">GPU</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant">VRAM</span>
              </div>
            </div>
            
            <div className="h-64 flex items-end gap-1.5 w-full relative">
              {/* Simulated Chart */}
              <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                <div className="border-t border-white/5 w-full"></div>
                <div className="border-t border-white/5 w-full"></div>
                <div className="border-t border-white/5 w-full"></div>
                <div className="border-t border-white/5 w-full"></div>
              </div>
              
              {/* Chart Bars - Simulated random heights for visual */}
              {[40, 55, 45, 70, 85, 60, 30, 50, 40, 65, 55, 92, 45, 40, 55, 45, 70, 85, 60, 30].map((h, i) => (
                <div 
                  key={i} 
                  className={`flex-1 ${h > 80 ? 'bg-primary/40 border-t-2 border-primary' : h > 60 ? 'bg-primary/30' : 'bg-primary/20'} h-[${h}%] rounded-t-sm relative group cursor-pointer hover:bg-primary/40 transition-all`}
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded text-[8px] opacity-0 group-hover:opacity-100 z-10 transition-opacity">{h}%</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* API Latency & Uptime */}
          <div className="lg:col-span-4 glass-panel p-8 rounded-xl flex flex-col">
            <h3 className="text-xl font-bold font-headline mb-6">Network Integrity</h3>
            <div className="space-y-6 flex-1">
              {/* Status Row 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-semibold">API Endpoint A1</span>
                  <span className="text-[10px] text-primary">Active</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-8 flex-1 rounded-sm ${i === 6 ? 'bg-error/40' : 'bg-primary/40'}`}></div>
                  ))}
                </div>
              </div>
              
              {/* Status Row 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-semibold">Inference Gateway</span>
                  <span className="text-[10px] text-primary">Active</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="h-8 flex-1 bg-primary/40 rounded-sm"></div>
                  ))}
                </div>
              </div>
              
              {/* Status Row 3 */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-semibold">Database Sync</span>
                  <span className="text-[10px] text-secondary">Warning</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-8 flex-1 rounded-sm ${i >= 2 && i <= 4 ? 'bg-secondary/40' : 'bg-primary/40'}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Integrity Pipeline (Flowchart) */}
        <div className="glass-panel p-8 rounded-xl">
          <h3 className="text-xl font-bold font-headline mb-10">Data Integrity Pipeline</h3>
          
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 px-4">
            {/* Node 1 */}
            <div className="flex-1 min-w-[180px] p-6 glass-panel rounded-xl border-l-4 border-primary glow-primary">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant mb-2 block">Ingestion</span>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">cloud_download</span>
                <span className="text-sm font-bold">1.2M rows/sec</span>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[10px] text-green-400">
                <span className="material-symbols-outlined text-[12px]">check_circle</span> Verified
              </div>
            </div>
            
            <div className="hidden lg:block">
              <span className="material-symbols-outlined text-neutral-700">arrow_forward</span>
            </div>
            
            {/* Node 2 */}
            <div className="flex-1 min-w-[180px] p-6 glass-panel rounded-xl border-l-4 border-secondary">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant mb-2 block">Missing Values</span>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">healing</span>
                <span className="text-sm font-bold">Imputation: Mean</span>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[10px] text-on-surface-variant">
                <span className="text-on-surface">0.02%</span> handled automatically
              </div>
            </div>
            
            <div className="hidden lg:block">
              <span className="material-symbols-outlined text-neutral-700">arrow_forward</span>
            </div>
            
            {/* Node 3 */}
            <div className="flex-1 min-w-[180px] p-6 glass-panel rounded-xl border-l-4 border-tertiary">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant mb-2 block">Outlier Detection</span>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary">filter_alt</span>
                <span className="text-sm font-bold">Z-Score 3.5</span>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[10px] text-on-surface-variant">
                <span className="text-on-surface">412</span> outliers quarantined
              </div>
            </div>
            
            <div className="hidden lg:block">
              <span className="material-symbols-outlined text-neutral-700">arrow_forward</span>
            </div>
            
            {/* Node 4 */}
            <div className="flex-1 min-w-[180px] p-6 glass-panel rounded-xl border-l-4 border-cyan-400 bg-cyan-400/5">
              <span className="text-[10px] uppercase font-bold text-cyan-400 mb-2 block">Validation Hub</span>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-400" >verified_user</span>
                <span className="text-sm font-bold">Clean Data Ready</span>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[10px] text-cyan-400">
                Latency: 8ms
              </div>
            </div>
          </div>

          {/* Detection Logs */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="pb-4 text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Timestamp</th>
                  <th className="pb-4 text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Event</th>
                  <th className="pb-4 text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Source</th>
                  <th className="pb-4 text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Action</th>
                  <th className="pb-4 text-right text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                  <td className="py-4 text-on-surface-variant">T+02:44:12</td>
                  <td className="py-4 font-semibold">Anomalous Revenue Spike Detected</td>
                  <td className="py-4 text-on-surface-variant font-mono">cluster-ap-southeast</td>
                  <td className="py-4"><span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-[10px]">Isolation</span></td>
                  <td className="py-4 text-right text-green-400 font-bold">RESOLVED</td>
                </tr>
                <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                  <td className="py-4 text-on-surface-variant">T+02:43:08</td>
                  <td className="py-4 font-semibold">Missing User Latency Fields</td>
                  <td className="py-4 text-on-surface-variant font-mono">log-stream-771</td>
                  <td className="py-4"><span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px]">Imputation</span></td>
                  <td className="py-4 text-right text-green-400 font-bold">RESOLVED</td>
                </tr>
                <tr className="group hover:bg-white/5 transition-colors">
                  <td className="py-4 text-on-surface-variant">T+02:39:55</td>
                  <td className="py-4 font-semibold">GPU Thermal Ceiling Warning</td>
                  <td className="py-4 text-on-surface-variant font-mono">neural-core-04</td>
                  <td className="py-4"><span className="px-2 py-0.5 rounded-full bg-error/10 text-error text-[10px]">Throttling</span></td>
                  <td className="py-4 text-right text-secondary font-bold">ACTIVE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
