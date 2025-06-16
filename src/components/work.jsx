import React from 'react';
import ogsub from '../assets/ogsubz.png';
import quiz from '../assets/quiz.png';
import nivea from '../assets/nivea.png';
export default function Work() {
    const projects = [
        {
            title: "OG-subz Website",
            description: "Responsive Data and airtime purchase Website with React and Tailwind.",
            image: ogsub,
            link: "https://ogsub0.netlify.app/",
        },
        {
            title: "Quiz Website",
            description: "Fully Functional quiz website.",
            image: quiz,
            link: "https://quiz-app-gamma-five-24.vercel.app/",
        },
        {
            title: "Nivea skin Care",
            description: "Frontend only online store with Stripe integration.",
            image: nivea,

            link: "https://lastag.netlify.app/",
        },
    ];

    return (
        <section id="work" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 ">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">My Work</h2>
                <div className="flex flex-wrap md:flex-row items-center justify-center gap-8 ">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.title}
                            className="w-[210px] skill"
                        >
                            <div className="bg-white border h-[280px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-2 flex flex-col">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-lg mb-4 w-full h-[100px]  object-cover"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 text-sm">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
0