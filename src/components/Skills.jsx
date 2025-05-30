import React, { useState, useEffect } from 'react'

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)
    const [supportsIntersectionObserver, setSupportsIntersectionObserver] = useState(true)

    useEffect(() => {
        // Check for IntersectionObserver support
        if (!window.IntersectionObserver) {
            setSupportsIntersectionObserver(false)
            setIsVisible(true) // Show content immediately for older browsers
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        const element = document.getElementById('skills-section')
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element && observer) {
                observer.unobserve(element)
            }
        }
    }, [])

    const skills = [
        {
            name: 'HTML5',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            color: 'from-orange-400 to-red-500',
            colorFallback: 'linear-gradient(135deg, #fb923c, #ef4444)',
            level: 95
        },
        {
            name: 'CSS3',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            color: 'from-blue-400 to-blue-600',
            colorFallback: 'linear-gradient(135deg, #60a5fa, #2563eb)',
            level: 90
        },
        {
            name: 'JavaScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            color: 'from-yellow-400 to-yellow-600',
            colorFallback: 'linear-gradient(135deg, #facc15, #ca8a04)',
            level: 88
        },
        {
            name: 'Tailwind CSS',
            logo: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png',
            color: 'from-cyan-400 to-blue-500',
            colorFallback: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
            level: 92
        },
        {
            name: 'React',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: 'from-blue-400 to-cyan-500',
            colorFallback: 'linear-gradient(135deg, #60a5fa, #06b6d4)',
            level: 85
        },
        {
            name: 'MySQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            color: 'from-blue-600 to-orange-500',
            colorFallback: 'linear-gradient(135deg, #2563eb, #f97316)',
            level: 50
        }
    ]

    const duplicatedSkills = [...skills, ...skills]

    return (
        <>
            <section id="skills-section" className="py-20 overflow-hidden skills-section-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2
                            id='project'
                            className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            My Tech Stack
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 header-delay ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Technologies I work with to bring ideas to life
                        </p>
                    </div>

                    {/* Animated Skills Grid */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 grid-delay ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 skill-card ${isVisible ? 'fade-in-up' : ''}`}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    '--skill-color': skill.colorFallback,
                                    '--progress-width': `${skill.level}%`
                                }}
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="relative">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 skill-glow`}></div>
                                        <div className="relative bg-white rounded-xl p-3 shadow-lg">
                                            <img
                                                src={skill.logo}
                                                alt={skill.name}
                                                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.target.style.display = 'none'
                                                    e.target.nextSibling.style.display = 'block'
                                                }}
                                            />
                                            <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-600" style={{display: 'none'}}>
                                                {skill.name.charAt(0)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                                            {skill.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{skill.level}% Proficiency</p>
                                    </div>
                                </div>
                                
                                {/* Progress Bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out progress-bar ${isVisible ? 'animate-progress' : ''}`}
                                        style={{
                                            width: isVisible ? `${skill.level}%` : '0%',
                                            animationDelay: `${index * 200 + 600}ms`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Infinite Scrolling Logos */}
                    <div className="relative">
                        <h3 className={`text-2xl font-bold text-center text-gray-800 mb-8 transition-all duration-1000 scroll-title-delay ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Technologies I Love Working With
                        </h3>
                        
                        {/* Gradient Overlays */}
                        <div className="absolute left-0 top-0 w-20 h-full z-10 gradient-overlay-left"></div>
                        <div className="absolute right-0 top-0 w-20 h-full z-10 gradient-overlay-right"></div>
                        
                        {/* Scrolling Container */}
                        <div className="overflow-hidden py-8">
                            <div className="flex space-x-12 animate-scroll">
                                {duplicatedSkills.map((skill, index) => (
                                    <div
                                        key={`${skill.name}-${index}`}
                                        className="flex-shrink-0 group cursor-pointer"
                                    >
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300 scale-110 scroll-skill-glow`}></div>
                                            <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none'
                                                        e.target.nextSibling.style.display = 'block'
                                                    }}
                                                />
                                                <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-sm font-bold text-gray-600 mx-auto mb-3" style={{display: 'none'}}>
                                                    {skill.name.charAt(0)}
                                                </div>
                                                <p className="text-sm font-medium text-gray-700 text-center whitespace-nowrap">
                                                    {skill.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Additional Tech Stack with Different Animation */}
                    <div className={`mt-16 transition-all duration-1000 final-section-delay ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                                Skills in Action
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {skills.map((skill, index) => (
                                    <div
                                        key={`capability-${skill.name}`}
                                        className="text-center group"
                                    >
                                        <div className="relative mx-auto w-16 h-16 mb-3">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse action-skill-bg`}></div>
                                            <div className="relative bg-white rounded-full p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none'
                                                        e.target.nextSibling.style.display = 'block'
                                                    }}
                                                />
                                                <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-600" style={{display: 'none'}}>
                                                    {skill.name.charAt(0)}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                            {skill.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        <style jsx>{`
                /* Background gradients with fallbacks */
                .skills-section-bg {
                    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
                    background: -webkit-linear-gradient(135deg, #f8fafc, #e2e8f0);
                    background: -moz-linear-gradient(135deg, #f8fafc, #e2e8f0);
                    background: -o-linear-gradient(135deg, #f8fafc, #e2e8f0);
                    background: -ms-linear-gradient(135deg, #f8fafc, #e2e8f0);
                }

                .gradient-overlay-left {
                    background: linear-gradient(to right, #f8fafc, transparent);
                    background: -webkit-linear-gradient(left, #f8fafc, transparent);
                    background: -moz-linear-gradient(left, #f8fafc, transparent);
                    background: -o-linear-gradient(left, #f8fafc, transparent);
                    background: -ms-linear-gradient(left, #f8fafc, transparent);
                }

                .gradient-overlay-right {
                    background: linear-gradient(to left, #f8fafc, transparent);
                    background: -webkit-linear-gradient(right, #f8fafc, transparent);
                    background: -moz-linear-gradient(right, #f8fafc, transparent);
                    background: -o-linear-gradient(right, #f8fafc, transparent);
                    background: -ms-linear-gradient(right, #f8fafc, transparent);
                }

                /* Animation delays */
                .header-delay {
                    transition-delay: 200ms;
                    -webkit-transition-delay: 200ms;
                    -moz-transition-delay: 200ms;
                    -o-transition-delay: 200ms;
                }
                .grid-delay {
                    transition-delay: 400ms;
                    -webkit-transition-delay: 400ms;
                    -moz-transition-delay: 400ms;
                    -o-transition-delay: 400ms;
                }
                .scroll-title-delay {
                    transition-delay: 600ms;
                    -webkit-transition-delay: 600ms;
                    -moz-transition-delay: 600ms;
                    -o-transition-delay: 600ms;
                }
                .final-section-delay {
                    transition-delay: 800ms;
                    -webkit-transition-delay: 800ms;
                    -moz-transition-delay: 800ms;
                    -o-transition-delay: 800ms;
                }

                /* Fade in animation */
                .fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                    -webkit-animation: fadeInUp 0.6s ease-out forwards;
                    -moz-animation: fadeInUp 0.6s ease-out forwards;
                    -o-animation: fadeInUp 0.6s ease-out forwards;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                        -webkit-transform: translateY(30px);
                        -moz-transform: translateY(30px);
                        -o-transform: translateY(30px);
                        -ms-transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                        -webkit-transform: translateY(0);
                        -moz-transform: translateY(0);
                        -o-transform: translateY(0);
                        -ms-transform: translateY(0);
                    }
                }

                @-webkit-keyframes fadeInUp {
                    from {
                        opacity: 0;
                        -webkit-transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        -webkit-transform: translateY(0);
                    }
                }

                @-moz-keyframes fadeInUp {
                    from {
                        opacity: 0;
                        -moz-transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        -moz-transform: translateY(0);
                    }
                }

                @-o-keyframes fadeInUp {
                    from {
                        opacity: 0;
                        -o-transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        -o-transform: translateY(0);
                    }
                }

                /* Progress bar animation */
                .progress-bar.animate-progress {
                    animation: progressFill 1.5s ease-out forwards;
                    -webkit-animation: progressFill 1.5s ease-out forwards;
                    -moz-animation: progressFill 1.5s ease-out forwards;
                    -o-animation: progressFill 1.5s ease-out forwards;
                }

                @keyframes progressFill {
                    from { width: 0%; }
                    to { width: var(--progress-width, 0%); }
                }

                @-webkit-keyframes progressFill {
                    from { width: 0%; }
                    to { width: var(--progress-width, 0%); }
                }

                @-moz-keyframes progressFill {
                    from { width: 0%; }
                    to { width: var(--progress-width, 0%); }
                }

                @-o-keyframes progressFill {
                    from { width: 0%; }
                    to { width: var(--progress-width, 0%); }
                }

                /* Infinite scroll animation */
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                    -webkit-animation: scroll 20s linear infinite;
                    -moz-animation: scroll 20s linear infinite;
                    -o-animation: scroll 20s linear infinite;
                    width: calc(200%);
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                    -webkit-animation-play-state: paused;
                    -moz-animation-play-state: paused;
                    -o-animation-play-state: paused;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                        -webkit-transform: translateX(0);
                        -moz-transform: translateX(0);
                        -o-transform: translateX(0);
                        -ms-transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                        -webkit-transform: translateX(-50%);
                        -moz-transform: translateX(-50%);
                        -o-transform: translateX(-50%);
                        -ms-transform: translateX(-50%);
                    }
                }

                @-webkit-keyframes scroll {
                    0% { -webkit-transform: translateX(0); }
                    100% { -webkit-transform: translateX(-50%); }
                }

                @-moz-keyframes scroll {
                    0% { -moz-transform: translateX(0); }
                    100% { -moz-transform: translateX(-50%); }
                }

                @-o-keyframes scroll {
                    0% { -o-transform: translateX(0); }
                    100% { -o-transform: translateX(-50%); }
                }

                /* Skill card hover effects */
                .skill-card:hover {
                    transform: translateY(-8px);
                    -webkit-transform: translateY(-8px);
                    -moz-transform: translateY(-8px);
                    -o-transform: translateY(-8px);
                    -ms-transform: translateY(-8px);
                }

                /* Fallback for browsers that don't support CSS custom properties */
                .skill-glow {
                    background: var(--skill-color, linear-gradient(135deg, #60a5fa, #3b82f6));
                }

                .scroll-skill-glow {
                    background: var(--skill-color, linear-gradient(135deg, #60a5fa, #3b82f6));
                }

                .action-skill-bg {
                    background: var(--skill-color, linear-gradient(135deg, #60a5fa, #3b82f6));
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .animate-scroll {
                        animation-duration: 15s;
                        -webkit-animation-duration: 15s;
                        -moz-animation-duration: 15s;
                        -o-animation-duration: 15s;
                    }
                }

                @media (max-width: 480px) {
                    .animate-scroll {
                        animation-duration: 12s;
                        -webkit-animation-duration: 12s;
                        -moz-animation-duration: 12s;
                        -o-animation-duration: 12s;
                    }
                }

                /* Reduced motion support */
                @media (prefers-reduced-motion: reduce) {
                    .fade-in-up,
                    .progress-bar.animate-progress,
                    .animate-scroll {
                        animation: none;
                        -webkit-animation: none;
                        -moz-animation: none;
                        -o-animation: none;
                    }
                    
                    .skill-card {
                        opacity: 1;
                        transform: translateY(0);
                        -webkit-transform: translateY(0);
                        -moz-transform: translateY(0);
                        -o-transform: translateY(0);
                        -ms-transform: translateY(0);
                    }
                    
                    .progress-bar {
                        width: var(--progress-width, 0%) !important;
                    }
                }

                /* IE11 specific fixes */
                @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
                    .skill-card {
                        display: block;
                    }
                    
                    .animate-scroll {
                        width: 200%;
                    }
                }
            `}</style>
        </>
    )
}
