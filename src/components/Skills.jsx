import React, { useState, useEffect } from 'react'

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById('skills-section')
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    const skills = [
        {
            name: 'HTML5',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            color: 'from-orange-400 to-red-500',
            level: 95
        },
        {
            name: 'CSS3',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            color: 'from-blue-400 to-blue-600',
            level: 90
        },
        {
            name: 'JavaScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            color: 'from-yellow-400 to-yellow-600',
            level: 88
        },
        {
            name: 'Tailwind CSS',
            logo: 'https://code.dlang.org/packages/tailwind-d/logo?s=650228a573eaa51f8ceded68',
            color: 'from-cyan-400 to-blue-500',
            level: 92
        },
        {
            name: 'React',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: 'from-blue-400 to-cyan-500',
            level: 85
        },
        {
            name: 'MySQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            color: 'from-blue-600 to-orange-500',
            level: 50
        }
    ]

    const duplicatedSkills = [...skills, ...skills] 

    return (
        <section id="skills-section" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 id='project' className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        My Tech Stack
                    </h2>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Technologies I work with to bring ideas to life
                    </p>
                </div>

                {/* Animated Skills Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : ''}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                                    <div className="relative bg-white rounded-xl p-3 shadow-lg">
                                        <img 
                                            src={skill.logo} 
                                            alt={skill.name}
                                            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                                        />
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
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${isVisible ? 'animate-progress' : 'w-0'}`}
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
                <div  className="relative">
                    <h3 className={`text-2xl font-bold text-center text-gray-800 mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Technologies I Love Working With
                    </h3>
                    
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
                    
                    {/* Scrolling Container */}
                    <div className="overflow-hidden py-8">
                        <div className="flex animate-scroll space-x-12">
                            {duplicatedSkills.map((skill, index) => (
                                <div
                                    key={`${skill.name}-${index}`}
                                    className="flex-shrink-0 group cursor-pointer"
                                >
                                    <div className="relative">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300 scale-110`}></div>
                                        <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                                            <img 
                                                src={skill.logo} 
                                                alt={skill.name}
                                                className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                                            />
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
                <div className={`mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse`}></div>
                                        <div className="relative bg-white rounded-full p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                            <img 
                                                src={skill.logo} 
                                                alt={skill.name}
                                                className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                                            />
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
    )
}
