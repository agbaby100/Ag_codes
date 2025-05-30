import React, { useState, useEffect } from 'react'

export default function Navbar() {
    const [isLoading, setIsLoading] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [supportsBackdrop, setSupportsBackdrop] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 4000)

        // Check for backdrop-filter support
        const checkBackdropSupport = () => {
            const testElement = document.createElement('div')
            testElement.style.backdropFilter = 'blur(1px)'
            testElement.style.webkitBackdropFilter = 'blur(1px)'
            return testElement.style.backdropFilter !== '' || testElement.style.webkitBackdropFilter !== ''
        }

        setSupportsBackdrop(checkBackdropSupport())

        return () => clearTimeout(timer)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    // Smooth scroll function
    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)

        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            const element = document.querySelector(targetId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    if (isLoading) {
        return (
            <>
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center space-y-6">
                        <div className="items-center flex justify-center">
                            <span className="flex flex-row gap-2">
                                <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce bounce-delay-0"></div>
                                <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce bounce-delay-1"></div>
                                <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce bounce-delay-2"></div>
                            </span>
                        </div>
                        <div className="text-center space-y-2">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                                WELCOME TO AG-CODES PORTFOLIO
                            </h2>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .bounce-delay-0 { animation-delay: 0s; }
                    .bounce-delay-1 { animation-delay: 0.2s; }
                    .bounce-delay-2 { animation-delay: 0.3s; }
                `}</style>
            </>
        )
    }

    const navbarClasses = supportsBackdrop
        ? "sticky top-0 left-0 w-full rounded-lg shadow-lg border-b border-white border-opacity-20 z-40 navbar-backdrop"
        : "sticky top-0 left-0 w-full rounded-lg shadow-lg border-b border-gray-200 z-40 navbar-fallback"

    const desktopMenuClasses = supportsBackdrop
        ? "flex items-center space-x-2 border border-gray-200 rounded-full p-2 shadow-lg desktop-menu-backdrop"
        : "flex items-center space-x-2 bg-white border border-gray-200 rounded-full p-2 shadow-lg"

    const mobileMenuClasses = supportsBackdrop
        ? "px-4 pt-2 pb-4 space-y-2 border-t border-gray-200 mobile-menu-backdrop"
        : "px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200"

    return (
        <>
            {/* Desktop & Tablet Navigation */}
            <nav className={navbarClasses}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <span className="text-lg sm:text-xl font-bold text-gray-800">
                                AG-Codes
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <ul className={desktopMenuClasses}>
                                <li>
                                    <a
                                        href="#"
                                        onClick={(e) => handleNavClick(e, '#')}
                                        className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#project"
                                        onClick={(e) => handleNavClick(e, '#project')}
                                        className="text-gray-600 hover:bg-black hover:text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://wa.me/2349137162359"

                                        className="text-gray-600 hover:bg-black hover:text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isMobileMenuOpen ? (
                                    <svg className="block h-10 cursor-pointer w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-10 cursor-pointer w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className={mobileMenuClasses}>
                        <a
                            href="#"
                            onClick={(e) => handleNavClick(e, '#')}
                            className="block px-4 py-3 rounded-xl text-base font-medium text-white bg-black transition-colors duration-200 cursor-pointer"
                        >
                            Home
                        </a>
                        <a
                            href="#project"
                            onClick={(e) => handleNavClick(e, '#project')}
                            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                        >
                            Projects
                        </a>
                        <a
                            href="https://wa.me/2349137162359"

                            className="text-gray-600 hover:bg-black hover:text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* CSS Styles for cross-browser compatibility */}
            <style jsx>{`
                /* Bounce animation delays */
                .bounce-delay-0 { animation-delay: 0s; }
                .bounce-delay-1 { animation-delay: 0.2s; }
                .bounce-delay-2 { animation-delay: 0.3s; }

                /* Modern browsers with backdrop-filter support */
                .navbar-backdrop {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }

                .desktop-menu-backdrop {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                }

                .mobile-menu-backdrop {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                }

                /* Fallback for older browsers */
                .navbar-fallback {
                    background: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }

                /* Ensure smooth scrolling works in older browsers */
                html {
                    scroll-behavior: smooth;
                }

                /* Fallback for browsers that don't support CSS custom properties */
                @supports not (backdrop-filter: blur(1px)) {
                    .navbar-backdrop,
                    .desktop-menu-backdrop,
                    .mobile-menu-backdrop {
                        background: rgba(255, 255, 255, 0.98);
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }
                }
            `}</style>
        </>
    )
}
