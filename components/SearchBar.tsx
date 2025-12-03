import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onClear }) => {
  return (
    <div className="w-full max-w-xl mx-auto relative mb-10 px-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
        <div className="relative bg-white rounded-2xl shadow-xl flex items-center">
          <div className="pl-5 flex items-center pointer-events-none text-gray-400">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Ketik nama atau nomor PBP..."
            className="block w-full pl-4 pr-12 py-4 md:py-5 bg-transparent border-none rounded-2xl text-gray-900 placeholder-gray-400 focus:ring-0 text-lg font-medium"
          />

          {value && (
            <button 
              onClick={onClear}
              className="absolute right-4 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              title="Hapus pencarian"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="text-xs text-gray-400 font-medium">
          *Pencarian otomatis saat Anda mengetik
        </p>
      </div>
    </div>
  );
};