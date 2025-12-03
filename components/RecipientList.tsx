import React from 'react';
import { Recipient } from '../types';
import { maskPbpNumber } from '../utils';

interface RecipientListProps {
  data: Recipient[];
}

export const RecipientList: React.FC<RecipientListProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="text-center py-20 px-4">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-slate-100 mb-6 shadow-inner">
          <svg className="h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Data tidak ditemukan</h3>
        <p className="text-slate-500 max-w-sm mx-auto">
          Coba gunakan kata kunci lain atau periksa ejaan nama Anda.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
      
      {/* Desktop Table View - Modern Clean Look */}
      <div className="hidden md:block overflow-hidden rounded-2xl shadow-lg border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-100">
          <thead>
            <tr className="bg-slate-50/80">
              <th scope="col" className="px-6 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-24">
                No. Urut
              </th>
              <th scope="col" className="px-6 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                Nama Penerima
              </th>
              <th scope="col" className="px-6 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Nomor PBP
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {data.map((item, index) => (
              <tr 
                key={item.id} 
                className="hover:bg-blue-50/50 transition-colors duration-200 group"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                    {item.id}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  {/* High visibility PBP for Desktop */}
                  <div className="inline-block px-4 py-2 rounded-lg bg-slate-50 border border-slate-300 text-lg font-mono font-bold text-slate-900 tracking-wide group-hover:border-blue-400 group-hover:bg-white group-hover:text-blue-800 transition-all shadow-sm">
                    {maskPbpNumber(item.pbp)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View - Sophisticated ID Card Style */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {data.map((item, index) => (
          <div 
            key={item.id} 
            className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
          >
            {/* Decorative accent top right */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-50 to-transparent -mr-6 -mt-6 rounded-bl-3xl"></div>
            
            <div className="flex items-start justify-between mb-2 relative z-10">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold tracking-wide uppercase">
                Penerima #{item.id}
              </span>
            </div>
            
            <div className="relative z-10 mb-5">
              <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                {item.name}
              </h3>
            </div>
            
            {/* High Visibility PBP Section for Mobile */}
            <div className="relative z-10 pt-4 border-t border-slate-100">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                Nomor PBP
              </p>
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="font-mono text-xl font-bold text-slate-900 tracking-wider">
                  {maskPbpNumber(item.pbp)}
                </span>
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};