import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center pt-12 pb-8 px-4 relative">
      {/* Decorative blurred blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 animate-fade-in">
        <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-blue-100 shadow-sm">
          <span className="text-primary-700 text-xs font-bold tracking-widest uppercase">
            Data Terpadu November-Desember 2025
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Bantuan Pangan <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">
            Desa Komis
          </span>
        </h1>
        
        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          Kec. Kedungdung, Kab. Sampang.
          <span className="block mt-1 text-sm md:text-base opacity-80">
            Gunakan kolom pencarian di bawah untuk memeriksa status penerima.
          </span>
        </p>
      </div>
    </header>
  );
};