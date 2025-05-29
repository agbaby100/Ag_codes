import React, { useState, useEffect } from 'react'

export default function Navbar() {
    const [isLoading, setIsLoading] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000) // Optional loading delay

        return () => clearTimeout(timer)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="flex flex-col items-center space-y-6">
                    <div className="items-center flex justify-center">
                        
                        <img
                            src='/vite.png'
                            alt="AG-Codes Logo"
                            className="animate-bounce w-10 h-10 "
                        />
                    </div>
                    <div className="text-center space-y-2">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                            WELCOME TO AG-CODES PORTFOLIO
                        </h2>
                        
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* Desktop & Tablet Navigation */}
            <nav className="sticky top-0 left-0 w-full backdrop-blur-md rounded-lg bg-white/80 shadow-lg border-b border-white/20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <img src="/vite.png" alt="AG-Codes Logo" className="w-12 h-12 sm:w-10 sm:h-10" />
                            <span className="text-lg sm:text-xl font-bold text-gray-800 hidden sm:block">
                                AG-Codes
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <ul className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-lg">
                                <li>
                                    <a href="#home" className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-200">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#project" className="text-gray-600 hover:bg-black hover:text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-200">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-600 hover:bg-black hover:text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-200">
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
                    <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                        <a
                            href="#home"
                            className="block px-4 py-3 rounded-xl text-base font-medium text-white bg-black transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#project"
                            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
