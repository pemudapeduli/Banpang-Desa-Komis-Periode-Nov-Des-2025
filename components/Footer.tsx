import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-slate-50 border-t border-slate-200 relative pt-16 pb-10">
      
      {/* Kotak Pengaduan Strategis */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-6 md:p-8 text-center relative overflow-hidden group">
          {/* Aksen Merah */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-red-50 rounded-full text-red-600">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Layanan Pengaduan Masyarakat
            </h3>
            
            <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Menemukan <span className="font-bold text-red-600">data fiktif</span>, <span className="font-bold text-red-600">penyalahgunaan bantuan</span>, atau pengalihan hak kepada yang tidak berhak?
              Laporkan segera agar bantuan tersalurkan dengan adil.
            </p>
            
            <a 
              href="https://wa.me/62895391606768?text=Halo%20Admin,%20saya%20ingin%20melaporkan%20indikasi%20penyalahgunaan%20bantuan%20pangan%20Desa%20Komis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-green-200 hover:-translate-y-1 group"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Lapor via WhatsApp
            </a>
            
            <p className="mt-3 text-xs text-slate-400">
              Privasi pelapor dijamin aman.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-32">
        <div className="h-1 w-12 bg-blue-500 rounded-full mb-6"></div>
        <p className="text-slate-900 font-bold text-base mb-2">
          © 2025 Pemuda Desa Komis Bersatu
        </p>
        <p className="text-slate-500 text-sm mb-6 italic font-medium">
          "Kita Kawal Bersama Hak Rakyat"
        </p>
        <div className="flex space-x-4 opacity-50">
           <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
           <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
           <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
        </div>
      </div>
    </footer>
  );
};