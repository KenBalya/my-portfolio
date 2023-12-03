import React from 'react'
import ProjectCard from "../sub/ProjectCard";

const Awards = () => {
    const props1 = {
        src:"/airofest.png",
        title:"Second Place in Airofest By Airnology 2.0 Coding Challenge",
        description:"Second Winner at Airnology 2.0 coding challenge, a Competitive Programming competition held by Faculty of Advanced Technology and Multidiscipline Airlangga University",
        skills: ['Data Structures', 'Algorithms', 'C++', 'Math'], // Update with actual skills
        link: "https://www.linkedin.com/in/ken-balya-4ab644208/details/honors/"
      };
      const props2 = {
        src:"/seamo.png",
        title:"Gold Medalist of Southeast Asian Mathematical Olympiad 2021",
        description:"Being a Gold Medalist in the Southeast Asian Mathematical Olympiad(SEAMO) 2021 by being among the top 8% of total participant, ranked 3rd locally and 7th globally",
        skills: ['Algebra', 'Number Theory', 'Combinatorics'], // Update with actual skills
        link: "https://www.linkedin.com/in/ken-balya-4ab644208/details/honors/"
      };
      const props3 = {
        src:"/wmi.png",
        title:"Silver Medalist of World Mathematics Invitational 2021",
        description:"Being a Silver Medalist in the World Mathematics Invitational (WMI) 2021 by being among the top 15% of all participants from 21 different countries across the globe",
        skills: ['Algebra', 'Number Theory', 'Combinatorics'], // Update with actual skills
        link: "https://www.linkedin.com/in/ken-balya-4ab644208/details/honors/"
      };


  return (
    <div>
        <div
      className="flex flex-col items-center justify-center py-20"
      id="awards"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Awards
      </h1>
      <div className="h-full w-full grid  md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        
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
    </div>
  )
}

export default Awards
