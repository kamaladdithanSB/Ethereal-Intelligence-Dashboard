"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useIntelligence } from '../context/IntelligenceContext';

export default function UploadPage() {
  const router = useRouter();
  const { setAnalysisData } = useIntelligence();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleProcess = async () => {
    if (!file) {
      setError("Please select a file first.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch('/api/ingest', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to process file");
      }

      setAnalysisData(data.customers, data.clusters, data.summary);
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <header className="mb-12">
        <p className="text-secondary font-headline text-sm tracking-[0.2em] uppercase font-bold mb-2">Phase 01 / Ingestion</p>
        <h1 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter mb-4">Neural Data <span className="text-primary italic">Uploader</span></h1>
        <p className="text-on-surface-variant max-w-2xl text-lg font-body leading-relaxed">
          The first node in the intelligence pipeline. Securely feed your raw datasets into the Ethereal engine to initiate cluster identification and DNA mapping.
        </p>
      </header>
      
      {/* Grid Layout: Asymmetric Bento Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Upload Section (Asymmetric Large) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Stylized File Uploader */}
          <div className="group relative rounded-3xl bg-surface-container-low/30 min-h-[400px] flex flex-col items-center justify-center p-12 transition-all duration-500 hover:bg-secondary/5 
          before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-dashed before:border-secondary before:opacity-50 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #d575ff 0%, transparent 70%)" }}></div>
            
            <div className="mb-8 relative z-10">
              <div className="absolute inset-0 bg-secondary blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <span className="material-symbols-outlined text-7xl text-secondary relative z-10">
                {file ? 'task' : 'cloud_upload'}
              </span>
            </div>
            
            <h3 className="text-2xl font-headline font-bold text-white mb-2 relative z-10">
              {file ? file.name : "Drop Intelligence Manifest"}
            </h3>
            <p className="text-on-surface-variant text-center max-w-sm mb-8 relative z-10">
              {file 
                ? `${(file.size / 1024).toFixed(2)} KB ready for ingestion.`
                : "Drag and drop your .CSV or .JSON files here to begin the neural mapping process."}
            </p>
            
            <input 
              type="file" 
              accept=".csv"
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
            />
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="px-8 py-3 bg-surface-container-highest border border-outline-variant hover:border-secondary text-white rounded-full transition-all flex items-center space-x-3 group/btn cursor-pointer relative z-10"
            >
              <span className="material-symbols-outlined">{file ? 'edit' : 'add'}</span>
              <span>{file ? 'Change File' : 'Select Local File'}</span>
            </button>
            
            {error && <p className="text-error mt-4 text-sm font-bold bg-error/10 px-4 py-2 rounded-md">{error}</p>}
            
            <div className="mt-8 flex space-x-6 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold relative z-10">
              <span className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> <span>Max 50MB</span></span>
              <span className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> <span>CSV Only</span></span>
            </div>
          </div>
          
          {/* Data Preview Table */}
          <section className="glass-panel rounded-xl border border-white/5 overflow-hidden">
            <div className="px-6 py-4 flex justify-between items-center bg-white/5 border-b border-white/5">
              <h4 className="font-headline font-bold text-lg text-white">Raw Matrix Preview</h4>
              <span className="text-xs text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full uppercase tracking-tighter">Mock Data</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="text-on-surface-variant border-b border-white/5">
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Row ID</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">CustomerID</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Annual Income ($k)</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Spending Score (1-100)</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px] text-right">Confidence</th>
                  </tr>
                </thead>
                <tbody className="text-on-surface divide-y divide-white/5">
                  {[
                    { id: '#001', cid: 'US-1903-X', income: '15.00', score: '39', conf: '98%' },
                    { id: '#002', cid: 'US-1904-B', income: '15.00', score: '81', conf: '99%' },
                    { id: '#003', cid: 'EU-2101-C', income: '16.00', score: '6', conf: '94%' },
                    { id: '#004', cid: 'AS-4009-L', income: '16.00', score: '77', conf: '100%' },
                  ].map((row) => (
                    <tr key={row.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-3 font-mono text-primary/70">{row.id}</td>
                      <td className="px-6 py-3">{row.cid}</td>
                      <td className="px-6 py-3">{row.income}</td>
                      <td className="px-6 py-3">{row.score}</td>
                      <td className="px-6 py-3 text-right">{row.conf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
        
        {/* Right: Summary & Stats (Narrower side) */}
        <div className="lg:col-span-4 space-y-8">
          {/* Data Health Summary */}
          <div className="glass-panel rounded-xl p-8 border border-white/5 space-y-8">
            <div>
              <h4 className="font-headline font-bold text-xl text-white mb-6">Integrity Report</h4>
              {/* Health Progress Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    <span>Missing Values</span>
                    <span className="text-primary">0.00%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full shadow-[0_0_10px_rgba(153,247,255,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    <span>Type Consistency</span>
                    <span className="text-secondary">100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-full shadow-[0_0_10px_rgba(213,117,255,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    <span>Ready Status</span>
                    <span className="text-white">{file ? 'Verified' : 'Pending'}</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full bg-white transition-all duration-500 ${file ? 'w-full' : 'w-[12%]'}`}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Meta Data */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-4 rounded-xl">
                <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Total Nodes</div>
                <div className="text-2xl font-headline font-black text-white">{file ? 'CALC...' : '0'}</div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl">
                <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Dimensions</div>
                <div className="text-2xl font-headline font-black text-white">{file ? '12' : '0'}</div>
              </div>
            </div>
            
            {/* Proceed Button */}
            <button 
              onClick={handleProcess}
              disabled={loading || !file}
              className={`group w-full relative py-4 font-headline font-extrabold uppercase tracking-widest text-sm rounded-xl overflow-hidden transition-all duration-300 ${file ? 'bg-primary-container text-on-primary-container cursor-pointer hover:shadow-[0_0_30px_rgba(153,247,255,0.3)] active:scale-95 glow-primary' : 'bg-surface-container-highest text-on-surface-variant opacity-50 cursor-not-allowed'}`}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>{loading ? 'Processing...' : 'Proceed to Clustering'}</span>
                {loading ? (
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                ) : (
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                )}
              </span>
            </button>
          </div>
          
          {/* Abstract Decorative Card */}
          <div className="relative rounded-xl overflow-hidden h-48 group">
            <img 
              alt="Neural Network Aesthetic" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC0lrzX5mFtZKw5FLTWeZV4jTCYdAgwJmcp0h87YppbnUKg07CRZVRWXUBzvFTAkgIMptsWUOBogCy35DGS4HwJ6H4N5ov_jfSGOlGglPP1jjLlmQvgLwJZDYVHmGIEOsoaEx-p3ECn1sYTrt3wUW7x1-C32Yc5YQdCYM1Xl8d3c0z_aoxAmUi9anRblHPUIEab2dLvWnaVGRJuX5q2wjY_mRd9Cnj7J_tcCmhb4Otz_sbzDAuPTPBJTiyasFUMtolHRMyIaGHLd2F"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-headline font-bold text-sm">Engine Status: {loading ? 'Running' : file ? 'Primed' : 'Idle'}</div>
              <div className="text-on-surface-variant text-[10px] uppercase tracking-widest">
                {loading ? 'Executing Neural Manifold...' : file ? 'Waiting for batch finalization' : 'Awaiting Data Payload'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
