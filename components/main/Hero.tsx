"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";
import { useState, useEffect } from 'react';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="relative flex flex-col h-full w-full mb-10" id="about-me">
       {windowWidth > 512 && (
        // Your div content goes here
        <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      )}
      
      <HeroContent />
    </div>
  );
};

export default Hero;
