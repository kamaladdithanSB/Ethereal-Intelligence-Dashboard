export default function MetricCard({
  title,
  value,
  change,
  changeLabel,
  colorClass,
  icon,
  customBadge
}: {
  title: string;
  value: React.ReactNode;
  change?: string;
  changeLabel?: string;
  colorClass: 'primary' | 'secondary' | 'tertiary';
  icon?: string;
  customBadge?: React.ReactNode;
}) {
  const colorMap = {
    primary: 'bg-primary/10 group-hover:bg-primary/20 text-primary-dim',
    secondary: 'bg-secondary/10 group-hover:bg-secondary/20 text-secondary',
    tertiary: 'bg-tertiary/10 group-hover:bg-tertiary/20 text-tertiary',
  };

  return (
    <div className="glass-panel p-6 rounded-xl relative overflow-hidden group w-full">
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl transition-all ${colorMap[colorClass].split(' ').slice(0, 2).join(' ')}`}></div>
      
      <div className="flex flex-col gap-1 relative z-10 w-full overflow-hidden">
        <span className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase truncate block w-full">{title}</span>
        <span className="font-headline font-extrabold text-5xl text-on-surface truncate block w-full">{value}</span>
      </div>

      <div className="mt-4 flex items-center gap-2 relative z-10">
        {customBadge ? (
          customBadge
        ) : change ? (
          <span className={`${colorMap[colorClass].split(' ')[2]} flex items-center text-sm font-bold shrink-0`}>
            {icon && <span className="material-symbols-outlined text-sm mr-1">{icon}</span>}
            {change}
          </span>
        ) : null}
        
        {changeLabel && (
          <span className="text-on-surface-variant/40 text-[10px] uppercase tracking-tighter truncate block w-full">{changeLabel}</span>
        )}
      </div>
    </div>
  );
}
