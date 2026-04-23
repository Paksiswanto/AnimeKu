import React from 'react';
import image from '../assets/images/476256.jpg';

const Hero: React.FC = () => {



    return (
        <section className="relative w-full h-[90vh] bg-black text-white overflow-hidden">

            <div className="relative w-full h-screen overflow-hidden">
                <img
                    src={image}
                    alt="Hero"
                    className='w-full h-full object-cover opacity-40 scale-110 transition-all duration-1000'
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-20 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                        Discover Your Next Favorite Anime
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-lg text-gray-200">
                        Explore top-rated anime, read reviews, and find your next binge-worthy series.
                    </p>
                    <button className="bg-[#e50914] hover:bg-[#b0060f] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
                        Explore Now
                    </button>
                </div>
            </div>


        </section >
    );
};

export default Hero;