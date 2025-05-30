import React, { useEffect, useState } from 'react';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        const formData = new FormData(e.target);
        
        try {
            const response = await fetch('https://formsubmit.co/ajax/amosungodwin8@gmail.com', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setSubmitStatus('success');
                e.target.reset(); // Clear the form
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // ── Intersection-observer reveal (same pattern as Skills) ─────────────
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 }
        );

        const el = document.getElementById('contact-section');
        if (el) observer.observe(el);

        return () => el && observer.unobserve(el);
    }, []);

    return (
        <section
            id="contact-section"
            className={`py-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden
                  transition-all duration-1000 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-gray-600">
                        Drop me a line &mdash; I'll reply as soon as possible.
                    </p>
                </div>

                {/* card */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-6"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="w-full p-4 h-36 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                Failed to send message. Please try again.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`justify-self-start px-8 py-3 bg-blue-500
                         text-white font-semibold rounded-lg shadow-md cursor-pointer
                         hover:shadow-lg hover:brightness-110 transition
                         ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                                
                    </form>
                </div>
                <h1 className="text-center text-black/50">2025 &mdash; built by Godwin</h1>
            </div>
        </section>
    );
}
