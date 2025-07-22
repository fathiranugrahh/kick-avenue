import React from 'react';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black tracking-wider font-['Inter',_'Helvetica_Neue',_'Arial',_sans-serif]">
              KICK AVENUE
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Type any products here"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
          </div>

          {/* Login/Register */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black font-medium">
              Login
            </button>
            <button className="text-gray-700 hover:text-black font-medium">
              Register
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center justify-center space-x-8 pb-2">
          <a href="#" className="text-pink-500 font-medium hover:text-pink-600 font-['Inter',_'Helvetica_Neue',_'Arial',_sans-serif]">
            Blind Box
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-black font-['Inter',_'Helvetica_Neue',_'Arial',_sans-serif]">
            K-Brands
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-black font-['Inter',_'Helvetica_Neue',_'Arial',_sans-serif]">
            Sneakers
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-black font-['Inter',_'Helvetica_Neue',_'Arial',_sans-serif]">
            Apparel
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-black font-['Inter',_'Helvetica_Neue',_'Arial',_sans-serif]">
            Luxury
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-black font-['Inter',_'Helvetica_Neue',_'Arial',_sans-serif]">
            Electronics & Collectibles
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-black font-['Inter',_'Helvetica_Neue',_'Arial',_sans-serif]">
            Watches
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;