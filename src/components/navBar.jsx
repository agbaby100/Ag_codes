import React, { useState, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

// Cross‑browser, Tailwind‑friendly navbar with graceful fallbacks.
// 1.  npm i smoothscroll-polyfill
// 2.  Ensure Autoprefixer (Vite/CRA default) + browserslist in package.json.
// 3.  Drop this component in your project and import once.

export default function Navbar() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [supportsBackdrop, setSupportsBackdrop] = useState(false);

  useEffect(() => {
    // Kick‑off smooth‑scroll polyfill (iOS ≤ 15 / Safari ≤ 15.3)
    smoothscroll.polyfill();

    const timer = setTimeout(() => setIsLoading(false), 4000);

    // Detect backdrop‑filter support
    const div = document.createElement('div');
    div.style.backdropFilter = 'blur(1px)';
    div.style.webkitBackdropFilter = 'blur(1px)';
    setSupportsBackdrop(
      div.style.backdropFilter !== '' || div.style.webkitBackdropFilter !== ''
    );

    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((p) => !p);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ------------------------------ Loader ------------------------------ */
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-2">
            <span className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <span className="w-4 h-4 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <span className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight text-center">
            WELCOME TO AG‑CODES PORTFOLIO
          </h2>
        </div>
      </div>
    );
  }

  /* ----------------------------- Classes ------------------------------ */
  const navbarClasses = supportsBackdrop ? 'navbar-backdrop' : 'navbar-fallback';
  const desktopMenuClasses = supportsBackdrop ? 'desktop-menu-backdrop' : 'desktop-menu-fallback';
  const mobileMenuClasses = supportsBackdrop ? 'mobile-menu-backdrop' : 'mobile-menu-fallback';

  /* ----------------------------- Mark‑up ------------------------------ */
  return (
    <>
      <nav
        role="navigation"
        className={
          `${navbarClasses} sticky top-0 left-0 w-full rounded-lg shadow-lg border-b z-40`
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <span className="text-lg sm:text-xl font-bold text-gray-800">AG‑Codes</span>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:block">
              <ul
                className={`${desktopMenuClasses} flex items-center space-x-2 rounded-full p-2`}
              >
                <li>
                  <a
                    href="#"
                    onClick={(e) => handleNavClick(e, '#')}
                    className="nav-link nav-link--active"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    onClick={(e) => handleNavClick(e, '#project')}
                    className="nav-link"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/2349137162359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile button */}
            <div className="md:hidden">
              <button
                aria-controls="primary-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          id="primary-menu"
          className={`md:hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className={`${mobileMenuClasses} px-4 pt-2 pb-4 space-y-2`}>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="mobile-nav-link nav-link--active"
            >
              Home
            </a>
            <a
              href="#project"
              onClick={(e) => handleNavClick(e, '#project')}
              className="mobile-nav-link"
            >
              Projects
            </a>
            <a
              href="https://wa.me/2349137162359"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-link"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Cross‑browser CSS (extract to a real CSS / Tailwind layer in production) */}
      <style>{`
        .navbar-backdrop {
          background: rgba(255, 255, 255, 0.8);
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .navbar-fallback {
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(229, 231, 235, 1);
        }
        .desktop-menu-backdrop {
          background: rgba(255, 255, 255, 0.9);
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(229, 231, 235, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .desktop-menu-fallback {
          background: #ffffff;
          border: 1px solid rgba(229, 231, 235, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .mobile-menu-backdrop {
          background: rgba(255, 255, 255, 0.95);
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
        }
        .mobile-menu-fallback {
          background: #ffffff;
        }
        .nav-link {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4b5563;
          transition: background-color 0.2s, color 0.2s;
        }
        .nav-link:hover {
          background: #000000;
          color: #ffffff;
        }
        .nav-link--active {
          background: #000000;
          color: #ffffff;
        }
        .mobile-nav-link {
          display: block;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 500;
          color: #4b5563;
          transition: background-color 0.2s, color 0.2s;
        }
        .mobile-nav-link:hover {
          background: #f3f4f6;
          color: #1f2937;
        }
        /* Ensure smooth scrolling in supporting browsers */
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
}
