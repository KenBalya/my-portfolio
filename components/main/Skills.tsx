"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
const Skills = () => {
  return (
    <div
    style={{ backgroundImage: "url(/bg-2.jpg)" }}
    className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
  >
    <div className="flex flex-col gap-20 max-w-[80%] text-justify items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold text-white text-[50px]">
          Skills{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            &{" "}
          </span>
          Technologies
        </h1>
        <p className="text-gray-400 text-[20px]">
          Using the latest tech this world has to offer
        </p>
      </div>
  <ol className="space-y-4 md:space-y-0 text-gray-500 list-decimal list-inside dark:text-gray-400 text-[20px] flex flex-wrap justify-between">
   <li>
      Soft Skills
      <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>Problem Solving</li>
         <li>Critical Thinking</li>
         <li>Leadership</li>
         <li>Communication</li>
         <li>Quantitative Reasoning</li>
      </ul>
   </li>
   <li>
      Hard Skills
      <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>Data Structures & Algorithms</li>
         <li>Fullstack Development</li>
         <li>Basic Mobile Development</li>
         <li>Data Science & Machine Learning</li>
      </ul>
   </li>
   
</ol>

      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  );
};

export default Skills;
