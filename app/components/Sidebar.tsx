"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Observatory', path: '/', icon: 'visibility' },
    { name: 'Data Upload', path: '/upload', icon: 'upload' },
    { name: 'Customer DNA', path: '/segments', icon: 'genetics' },
    { name: 'Neural Forecasts', path: '/neural-forecasts', icon: 'psychology' },
    { name: 'Revenue Streams', path: '/revenue', icon: 'payments' },
    { name: 'Sentiment Arch', path: '/sentiment', icon: 'forum' },
    { name: 'System Health', path: '/system-health', icon: 'analytics' },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-[#0e0e0e] border-r border-white/10 flex flex-col py-6 px-4 space-y-2">
      <div className="mb-10 px-4">
        <h1 className="font-headline font-bold text-[#d575ff] text-2xl tracking-tighter">ETHEREAL</h1>
        <p className="text-[10px] text-on-surface-variant/60 font-medium tracking-widest mt-1">INTELLIGENCE CORE v4.2</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#99f7ff]/10 to-transparent text-[#99f7ff] border-l-2 border-[#99f7ff] group'
                  : 'text-[#adaaaa] hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
              <span className="font-inter text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/5 pt-6 space-y-1 shrink-0">
        <a className="flex items-center gap-3 py-2 px-4 rounded-lg text-[#adaaaa] hover:text-white hover:bg-white/5 transition-all" href="#">
          <span className="material-symbols-outlined text-lg">help</span>
          <span className="font-inter text-xs">Documentation</span>
        </a>
        <a className="flex items-center gap-3 py-2 px-4 rounded-lg text-[#adaaaa] hover:text-white hover:bg-white/5 transition-all" href="#">
          <span className="material-symbols-outlined text-lg">contact_support</span>
          <span className="font-inter text-xs">Support</span>
        </a>
        <button className="w-full mt-4 bg-primary-container text-on-primary-container font-bold py-2.5 rounded-full text-xs uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 glow-primary">
          Export Intelligence
        </button>
      </div>
    </aside>
  );
}
