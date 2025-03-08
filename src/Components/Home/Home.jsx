import React, { useState } from 'react';
import avatarImg from "../../assets/Image/mine.jpg";
import TextChanger from '../TextChanger';
// import cvFile from '../../assets/CV/cv.pdf'; // Assuming the CV file is in the assets folder

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`text-white flex w-full justify-between items-start p-10 md:p-20 ${isVisible ? "block" : "hidden"}`}>
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl leading-tight tracking-tight">
        "I'm a passionate web developer specializing in modern JavaScript frameworks like React and backend technologies like Laravel. I build high-performance, user-friendly applications that make an impact."
        </p>
        <a
          // href={cvFile} // Link to your CV file
          // download="My_CV.pdf" // Name the file when downloaded
        >
          <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
            Download CV
          </button>
        </a>
      </div>
      <div>
        <img
          className="w-2/5 ml-70 rounded-full" // Added rounded-full for oval shape
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
