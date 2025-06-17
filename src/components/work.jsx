import React, { useEffect, useRef, useState } from 'react';
import ogsub from '../assets/ogsubz.png';
import quiz from '../assets/quiz.png';
import nivea from '../assets/nivea.png';

export default function Work() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');
    const sectionRef = useRef(null);
    const lastScrollY = useRef(0);

    const projects = [
        {
            title: "OG-subz Website",
            description: "Responsive data and airtime purchase platform built with React and Tailwind CSS, featuring secure payment integration and user-friendly interface.",
            image: ogsub,
            link: "https://ogsub0.netlify.app/",
            technologies: ["React", "Tailwind CSS", "JavaScript"]
        },
        {
            title: "Quiz Application",
            description: "Interactive quiz platform with dynamic question generation, real-time scoring, and comprehensive result analytics for enhanced learning experience.",
            image: quiz,
            link: "https://quiz-app-gamma-five-24.vercel.app/",
            technologies: ["React", "JavaScript", "CSS3"]
        },
        {
            title: "Nivea Skin Care Store",
            description: "Modern e-commerce frontend with Stripe payment integration, responsive design, and optimized user experience for skincare product showcase.",
            image: nivea,
            link: "https://lastag.netlify.app/",
            technologies: ["React", "Stripe API", "CSS3"]
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Determine scroll direction
            if (currentScrollY > lastScrollY.current) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollY.current = currentScrollY;

            // Check if section is in viewport
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
                setIsVisible(isInViewport);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section 
            id="work" 
            ref={sectionRef}
            className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ease-out ${
                isVisible 
                    ? scrollDirection === 'down' 
                        ? 'transform translate-y-0 opacity-100' 
                        : 'transform -translate-y-4 opacity-95'
                    : 'transform translate-y-16 opacity-0'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
                    isVisible 
                        ? scrollDirection === 'down'
                            ? 'transform translate-y-0 opacity-100'
                            : 'transform -translate-y-2 opacity-90'
                        : 'transform translate-y-12 opacity-0'
                }`}>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore my latest work showcasing modern web development practices and innovative solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${
                                isVisible 
                                    ? scrollDirection === 'down'
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-3 opacity-95'
                                    : 'translate-y-20 opacity-0'
                            }`}
                            style={{
                                transitionDelay: `${400 + index * 150}ms`
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-48 object-cover transition-all duration-700 ${
                                        scrollDirection === 'down' 
                                            ? 'group-hover:scale-110' 
                                            : 'group-hover:scale-105'
                                    }`}
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                                    }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-all duration-300 ${
                                    scrollDirection === 'up' ? 'transform -translate-y-1' : ''
                                }`}>
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 transition-all duration-300 ${
                                                isVisible 
                                                    ? 'transform translate-y-0 opacity-100' 
                                                    : 'transform translate-y-4 opacity-0'
                                            }`}
                                            style={{
                                                transitionDelay: `${600 + index * 150 + techIndex * 50}ms`
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* View Project Button */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                        scrollDirection === 'up' ? 'hover:-translate-y-1' : 'hover:translate-y-0'
                                    }`}
                                >
                                    <span>View Project</span>
                                    <svg
                                        className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                                            scrollDirection === 'down' 
                                                ? 'group-hover:translate-x-1' 
                                                : 'group-hover:-translate-x-1'
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>

                            {/* Project Number Badge */}
                            <div className={`absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-lg transition-all duration-500 ${
                                isVisible 
                                    ? scrollDirection === 'down'
                                        ? 'transform rotate-0 scale-100'
                                        : 'transform -rotate-12 scale-95'
                                    : 'transform rotate-45 scale-0'
                            }`}
                            style={{
                                transitionDelay: `${800 + index * 100}ms`
                            }}>
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-16 transition-all duration-1000 ${
                    isVisible 
                        ? scrollDirection === 'down'
                            ? 'transform translate-y-0 opacity-100'
                            : 'transform -translate-y-6 opacity-90'
                        : 'transform translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: '1000ms' }}>
                    <p className="text-gray-600 mb-6">
                        Interested in working together?
                    </p>
                    <a
                        href="#contact"
                        className={`inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${
                            scrollDirection === 'down' 
                                ? 'hover:scale-105 hover:translate-y-0' 
                                : 'hover:scale-102 hover:-translate-y-1'
                        }`}
                    >
                        Get In Touch
                        <svg className={`ml-2 w-8 h-8 transition-transform duration-300 ${
                            scrollDirection === 'up' ? 'rotate-180' : 'rotate-0'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
