export default function TopBar({ title, subtitle, searchPlaceholder = "Search metadata..." }: { title: React.ReactNode, subtitle: string, searchPlaceholder?: string }) {
  return (
    <div className="flex justify-between items-end">
      <div>
        <p className="text-secondary font-medium text-sm tracking-widest mb-1 uppercase">{subtitle}</p>
        <h2 className="font-headline font-extrabold text-4xl tracking-tighter text-on-surface">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-surface-container-highest/50 rounded-full px-4 py-2 border border-outline-variant/10">
          <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
          <input 
            type="text" 
            placeholder={searchPlaceholder} 
            className="bg-transparent border-none focus:ring-0 text-sm p-0 w-48 text-on-surface placeholder:text-on-surface-variant/40 outline-none" 
          />
        </div>

        <button className="p-2 rounded-full hover:bg-white/5 transition-all text-on-surface-variant">
          <span className="material-symbols-outlined">notifications</span>
        </button>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_0WFw87d4ts9TwGfhqnAQQLcvJ1F9nt99rxabIiw9A_gfm8Yo9DA87FbfKkeqVlQt1vpdaKC9l0HN6nzx6bCZnTe7CUnGxlc6MBiXa2ye1SapBbbwRdFA25L0zmUaxNNoFd3nL_4Ei5Ue3XmRHBf0ycsrFhgPwPlv4mRkAIERGnLziIcF2UhZe1KUPs2Ta1cn-1gz66RQCAksfUwg09UkO1NosjhCXJ099xnzr-7WhII2M9BBQeGkxIJ8adeUP-gbYHbZshNQFUYj" 
            alt="User portrait" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
