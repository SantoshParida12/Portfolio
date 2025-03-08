import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaLaravel, FaJs, FaReact, FaGoogle, FaAmazon } from 'react-icons/fa';
import { SiRedis, SiMysql, SiCplusplus } from 'react-icons/si';
import { RiNetflixFill } from 'react-icons/ri';

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-14 -mb-30'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
      
      <div className='flex flex-wrap items-center justify-around'>
        {/* Tech Stack Icons */}
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color='#E34F26' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color='#1572B6' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color='#61DAFB' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color='#F7DF1E' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaLaravel color='#FF2D20' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaFigma color='#F24E1E' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiMysql color='#4479A1' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiRedis color='#DC382D' size={50}/>
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiCplusplus color='#00599C' size={50}/>
          </span>
        </div>

        {/* Work Experience */}
        <div>
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <FaGoogle color="#4285F4" size={50}/>
            <span className='text-white'>
              <h2 className='leading-tight'>Software Engineer, Google</h2>
              <p className='text-sm leading-tight font-thin'>Sept 23 - Present</p>
              <ul className='text-sm p-2'>
                <li>- Work as Software Developer</li>
                <li>- Senior SDE Developer</li>
              </ul>
            </span>
          </div>

          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <RiNetflixFill color="#E50914" size={50}/>
            <span className='text-white'>
              <h2 className='leading-tight'>Software Engineer, Netflix</h2>
              <p className='text-sm leading-tight font-thin'>Sept 23 - Present</p>
              <ul className='text-sm p-2'>
                <li>- Work as Software Developer</li>
                <li>- Senior SDE Developer</li>
              </ul>
            </span>
          </div>

          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <FaAmazon color="#FF9900" size={50}/>
            <span className='text-white'>
              <h2 className='leading-tight'>Software Engineer, Amazon</h2>
              <p className='text-sm leading-tight font-thin'>Sept 23 - Present</p>
              <ul className='text-sm p-2'>
                <li>- Work as Software Developer</li>
                <li>- Senior SDE Developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
