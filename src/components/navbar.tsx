import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md px-10 py-4 flex justify-between items-center text-white">
      <div className="flex items-center gap-10">
       
        <div className="text-2xl font-black text-yellow-500 italic">
          ANIME<span className="text-white font-light">FILM</span>
        </div>
        
        <ul className="hidden lg:flex gap-6 text-sm font-semibold uppercase tracking-widest text-gray-300">
          <li className="text-yellow-500 cursor-pointer">Filmy</li>
          <li className="hover:text-white cursor-pointer">Seriale</li>
          <li className="hover:text-white cursor-pointer">Nowości</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
        </ul>
      </div>

      {/* SEARCH AREA */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Wyszukaj film..." 
            className="bg-neutral-800/50 border border-neutral-700 rounded-full px-4 py-1 text-sm outline-none w-64 focus:border-yellow-500"
          />
        </div>
        <div className="w-8 h-8 bg-neutral-800 rounded-md flex items-center justify-center cursor-pointer">
          <span className="text-xs">☰</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;