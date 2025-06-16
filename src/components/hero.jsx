import React, { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [typeSpeed, setTypeSpeed] = useState(150)

    const roles = [
        { text: 'Frontend Developer', color: 'text-blue-600' },
        { text: 'Web Developer', color: 'text-green-600' },
        { text: 'Graphics Designer', color: 'text-purple-600' }
    ]

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[currentRoleIndex].text

            if (isDeleting) {
                setCurrentText(currentRole.substring(0, currentText.length - 1))
                setTypeSpeed(50)
            } else {
                setCurrentText(currentRole.substring(0, currentText.length + 1))
                setTypeSpeed(100)
            }

            if (!isDeleting && currentText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false)
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
                setTypeSpeed(500)
            }
        }

        const timer = setTimeout(handleTyping, typeSpeed)
        return () => clearTimeout(timer)
    }, [currentText, isDeleting, currentRoleIndex, typeSpeed])

    return (
        <div className='min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-4 lg:px-8'>
            {/* Text Content */}
            <div className='flex-1 max-w-4xl space-y-8 order-2 lg:order-1'>
                <div className='space-y-4'>
                    <h1 className='text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-tight'>
                        Hello there! 👋
                    </h1>
                    <h2 className='text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-4'>
                        I'm Godwin
                    </h2>
                    <div className='text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-tight min-h-[60px]'>
                        <span className={`${roles[currentRoleIndex].color} transition-colors duration-300`}>
                            {currentText}
                        </span>
                        <span className='animate-pulse text-slate-800 ml-1'>|</span>
                    </div>
                </div>

                <p className='text-black/70 text-lg md:text-xl lg:text-xl leading-relaxed max-w-3xl'>
                    I'm a software developer passionate about building impactful digital products and web applications.
                    I specialize in creating scalable, high-performance solutions that are both functional and visually engaging.
                    I thrive on turning ideas into clean, user-friendly experiences that can reach and benefit millions.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 pt-6'>
                    <button className='bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                        <a href='https://github.com/agbaby100/AG-Codes'> View My Work</a>
                    </button>
                    <button className='border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 font-medium text-lg'>
                        <a href='#contact-section'> Get In Touch</a>
                    </button>
                </div>
            </div>

            {/* Lottie Animation with Enhanced Styling */}
            <div className='flex-1 flex justify-center lg:justify-end order-1 lg:order-2 relative'>
                {/* Background decoration */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 scale-75'></div>

                <DotLottieReact
                    src="https://lottie.host/0fcdb90e-3ded-4c07-8349-214cbfffdd12/NuzR1IKfII.lottie"
                    alt="Check Your Connection"
                    background="transparent"
                    speed="5"
                    style={{
                        width: 'min(500px, 80vw)',
                        height: 'min(500px, 80vw)',
                        maxWidth: '500px',
                        maxHeight: '500px'
                    }}
                    loop
                    autoplay
                    className="relative z-10 w-full drop-shadow-2xl"
                />


                <div className='absolute top-10 right-10 w-4 h-4 bg-blue-500 rounded-full bounce-opacity [animation-delay:1s]'></div>
                <div className='absolute bottom-20 left-10 w-3 h-3 bg-purple-500 rounded-full bounce-opacity [animation-delay:0.5s]'></div>
                <div className='absolute top-1/2 left-0 w-2 h-2 bg-green-500 rounded-full pulse-opacity'></div>

            </div>
        </div>
    )
}
