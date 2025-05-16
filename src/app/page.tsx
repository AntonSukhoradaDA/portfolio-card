"use client";

export default function Home() {
    return (
        <div
            className="bg-white overflow-hidden flex flex-col w-full h-full tracking-tighter text-black lg:text-2xl text-lg lg:pt-16 lg:pl-16 p-4 gap-16">
            <div className="flex items-start justify-center w-full flex-col">
                <h1>Anton Sukhorada</h1>
                <h2>senior software engineer</h2>
            </div>
            <div className="flex items-start justify-center w-full flex-col">
                <p>{`with 6 years of experience, I’ve built and shipped software `}</p>
                <p> in corporations, startups, and as an entrepreneur.</p>
            </div>
            <div className="flex items-start justify-center w-full flex-col">
                <p>{`currently i'm working as senior full-stack engineer`}</p>
                <p>and living in Kyiv.</p>
            </div>
            <div className="flex items-start justify-center w-full flex-col">
                <p>i share my life on <a className="text-blue-600" href="https://instagram.com/asukhorada" target="_blank">
                    instagram
                </a>.</p>
            </div>
            <div className="flex items-start justify-center w-full flex-col">
                <p>business enquires on <a className="text-blue-600" href="https://linkedin.com/in/sukhorada-anton/" target="_blank">
                    linkedin
                </a>.</p>
            </div>
            <div className="flex items-start justify-center w-full flex-col">
                <p>my work can be found on <a className="text-blue-600" href="https://github.com/AntonSukhoradaDA" target="_blank">
                    github
                </a>.</p>
            </div>
            <div className="flex items-start justify-center w-full flex-col">
                <p>contact me at <a className="text-blue-600" href="mailto:antonsukhorada@gmail.com" target="_blank">
                    antonsukhorada@gmail.com
                </a></p>
            </div>
            <div className="flex items-start justify-center w-full flex-col">
                <p>Cheers,</p>
                <p>Anton</p>
            </div>
        </div>
    );
}