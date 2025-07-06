import React from 'react';

const Navbar = ({setCategory}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-semibold text-white bg-blue-500 rounded-xl px-5 py-1 shadow-md  hover:text-blue-900 transition-colors">
            RealNews
          </a>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6">
            {['Business', 'Entertainment', 'Science', 'Health', 'Sports', 'Technology'].map((item) => (
              <button
                onClick={()=> setCategory(item)}
                key={item}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Icon (optional) */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Open Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
