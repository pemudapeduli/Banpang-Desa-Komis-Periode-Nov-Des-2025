import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { RecipientList } from './components/RecipientList';
import { recipientsData } from './data';
import { Recipient } from './types';

const ITEMS_PER_PAGE = 100;

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) {
      return recipientsData;
    }

    return recipientsData.filter((recipient: Recipient) => {
      const nameMatch = recipient.name.toLowerCase().includes(query);
      const pbpMatch = recipient.pbp.includes(query);
      return nameMatch || pbpMatch;
    });
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  
  const currentPaginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      <div className="flex-grow">
        {/* Added extra padding-bottom (pb-80) to prevent Footer's floating box from covering pagination */}
        <div className="max-w-5xl mx-auto pb-80">
          
          <Header />
          
          <main className="px-4 sm:px-6">
            {/* Sticky Search Container */}
            <div className="sticky top-4 z-30 md:static">
              <SearchBar value={searchQuery} onChange={handleSearch} onClear={clearSearch} />
            </div>

            <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-6 px-1 gap-2">
                <h2 className="text-lg font-bold text-slate-800 flex items-center">
                  <span className="bg-blue-600 w-1 h-6 rounded-full mr-3"></span>
                  Hasil Pencarian
                </h2>
                <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200">
                  <span className="text-xs font-bold text-blue-600">
                    {filteredData.length}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Penerima Ditemukan
                  </span>
                </div>
              </div>
              
              <RecipientList data={currentPaginatedData} />

              {/* Modern Pagination - Added z-index and relative positioning */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-6 relative z-20">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                      currentPage === 1
                        ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                        : 'bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg hover:-translate-y-1'
                    }`}
                    aria-label="Halaman Sebelumnya"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-slate-800">
                      Halaman {currentPage}
                    </span>
                    <span className="text-xs text-slate-400 font-medium mt-0.5">
                      dari {totalPages}
                    </span>
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                      currentPage === totalPages
                        ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                        : 'bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg hover:-translate-y-1'
                    }`}
                    aria-label="Halaman Selanjutnya"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;