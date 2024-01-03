
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  skills: Array<string>;
  link: string;
}

const ProjectCard = ({ src, title, description, skills, link }: Props) => {
  link = encodeURI(link);
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-40">
      <a href={link}>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-64 object-contain cursor-pointer"
        
        
      />
      </a>
     

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <br />
        <p className="mt-2 text-gray-300">Skills: </p>
        <br />
        <div className="flex flex-wrap">
          {skills.map((item, index) => (
            <button className="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            key={index}>{item}</button>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
