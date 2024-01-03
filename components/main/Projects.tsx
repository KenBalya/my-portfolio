import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const props1 = {
    src:"/merdeka.jpg",
    title:"Independence Day Information Site",
    description:"A website than contains all informations about Independence day celebration event",
    skills: ['HTML', 'Boostrap', 'Javascript'], // Update with actual skills
    link: "https://hut-ri-cluster-sanfrancisco.on.drv.tw/HUTRIKe78/"
  };
  const props2 = {
    src:"/riviuBuku.png",
    title:"Riviu Buku",
    description:"A website of book collections that provides review and rating features",
    skills: ['Django', 'Tailwind', 'Javascript'], // Update with actual skills
    link: "https://riviu-buku-d07-tk.pbp.cs.ui.ac.id/"
  };
  const props3 = {
    src:"/portfolio.png",
    title:"Ken's Portfolio",
    description:"My personal portfolio website containing details about my resume",
    skills: ['Next JS', 'Tailwind', 'React JS'], // Update with actual skills
    link:"#about-me"
  };
  
  return (
    <div
      className="flex flex-col items-center justify-center py-8"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 justify-center">

          <ProjectCard
            {...props1}
          />
      
   
          <ProjectCard
            {...props2}
          />
     
      
          <ProjectCard
            {...props3}
          />
       
        
        
      </div>
    </div>
  );
};

export default Projects;
