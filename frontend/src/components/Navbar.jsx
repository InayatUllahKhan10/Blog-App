import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🧠 Automatically close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    
    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="navbar flex items-center justify-between h-[100px] px-4 md:px-8 lg:px-12 bg-[#0c0c0c] overflow-hidden">
        <div className="logo">
          <img className='w-[200px] md:w-[240px]' src={logo} alt="Logo" />
        </div>

        <div className="links md:flex md:items-center md:gap-[20px] lg:gap-[20px]">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Links */}
          {isOpen && (
            <div className="mobile-links flex flex-col items-center gap-4 absolute top-[100px] left-0 w-full bg-[#0c0c0c] p-4 z-50">
              <Link className='navLink active'>Home</Link>
              <Link className='navLink'>About</Link>
              <Link className='navLink'>Blogs</Link>
              <Link className='navLink'>Services</Link>
              <Link className='navLink'>Contact</Link>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("isLoggedIn");
                  window.location.href = "/login";
                }}
                className="btnNormal !bg-red-500 transition-all hover:!bg-red-600"
              >
                Logout
              </button>
            </div>
          )}

          {/* Desktop Links */}
          <div className="md:flex md:items-center md:gap-[20px] lg:gap-[20px] hidden">
            <Link className='navLink active'>Home</Link>
            <Link className='navLink'>About</Link>
            <Link className='navLink'>Blogs</Link>
            <Link className='navLink'>Services</Link>
            <Link className='navLink'>Contact</Link>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("isLoggedIn");
                window.location.href = "/login";
              }}
              className="btnNormal !bg-red-500 transition-all hover:!bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
