import React, { useState } from 'react';
import Logo from '../assets/Images/logo.png';
import { CgSearch } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Sample data for search - Replace this with your actual data
  const allData = [
    { id: 1, title: 'Recently Added', type: 'Property', link: '/property/1' },
    { id: 2, title: 'Modern Apartment in Delhi', type: 'Property', link: '/property/2' },
    { id: 3, title: 'Real Estate Market Trends 2026', type: 'News', link: '/news/1' },
    { id: 4, title: 'Investment Tips for Property', type: 'News', link: '/news/2' },
    { id: 5, title: 'About Our Company', type: 'Page', link: '/about' },
    { id: 6, title: 'Contact Information', type: 'Page', link: '/contact' },
    { id: 7, title: 'Beachfront Property in Goa', type: 'Property', link: '/property/3' },
    { id: 8, title: 'How to Buy Your First Home', type: 'News', link: '/news/3' },
  ];

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = allData.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.type.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filtered);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/property" className="text-gray-700 hover:text-blue-600 transition">Property</Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600 transition">News</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Icons and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-blue-600 transition text-xl"
            >
              <CgSearch />
            </button>

            <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition text-xl hidden md:block">
              <RiAdminFill />
            </Link>

            <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition text-xl hidden md:block">
              <FaShoppingCart />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for properties, news, pages..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                autoFocus
              />
              <CgSearch className="absolute right-3 top-3 text-gray-400 text-xl" />
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    to={result.link}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                      setSearchResults([]);
                    }}
                    className="block px-4 py-3 hover:bg-gray-50 border-b last:border-b-0 transition"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-gray-800 font-medium">{result.title}</h4>
                        <span className="text-xs text-gray-500 mt-1 inline-block">{result.type}</span>
                      </div>
                      <CgSearch className="text-gray-400 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* No Results */}
            {searchQuery && searchResults.length === 0 && (
              <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-center text-gray-500">
                No results found for "{searchQuery}"
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition px-2 py-1">
                Home
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition px-2 py-1">
                About
              </Link>
              <Link to="/property" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition px-2 py-1">
                Property
              </Link>
              <Link to="/news" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition px-2 py-1">
                News
              </Link>
              <Link to="/pages" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition px-2 py-1">
                Pages
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition px-2 py-1">
                Contact
              </Link>
              <div className="border-t pt-3 flex space-x-4 px-2">
                <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition text-xl">
                  <RiAdminFill />
                </Link>
                <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition text-xl">
                  <FaShoppingCart />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;