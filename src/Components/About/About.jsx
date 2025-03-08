import React from 'react'
import AboutImg from "../../assets/Image/7358602-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About"className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-xl p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className="md:h-80" src={AboutImg} alt="About img" />
                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            I specialize in building interactive and responsive web interfaces using modern frontend technologies like React, Tailwind CSS, and JavaScript. My focus is on creating seamless user experiences with clean and efficient code.
                            </p>

                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            As a backend developer, I work with Laravel and Node.js to build scalable, secure, and high-performance web applications. From API development to database design, I ensure smooth backend operations.
                            </p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            I design and manage efficient database structures using MySQL and PostgreSQL. Optimizing queries, ensuring data integrity, and managing migrations are key aspects of my work.
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About;
