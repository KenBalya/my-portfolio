"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import {useEffect, useState} from "react";
import { RxCode, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import { NavbarProps } from "./interface";
import { Bars3Icon } from '@heroicons/react/24/solid'

export const NavbarNormal: React.FC<NavbarProps> = ({handleClicked}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <div className="w-full h-[65px] shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto lg:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/ken.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Ken Balya
          </span>
        </a>

        <div className="w-[500px] h-full hidden md:flex md:flex-row items-center justify-between lg:mr-20">
          <div className=" hidden md:flex items-center justify-around md:justify-between w-full h-auto md:border md:border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 ">
            <a href="#about-me" className="cursor-pointer flex">
            <RxPerson/>
            {isSmallScreen ? (
              <div>
              {/* Content for screens less than or equal to 512px */}
              
              </div>
          ) : (
            <div>
              {/* Content for screens greater than 512px */}
              About Me
              </div>
            )}

            </a>
            <a href="#skills" className="cursor-pointer flex">
            <RxClipboard/>
            {isSmallScreen ? (
              <div>
              {/* Content for screens less than or equal to 512px */}
              
              </div>
          ) : (
            <div>
              {/* Content for screens greater than 512px */}
              Skills
              </div>
            )}
              
            </a>
            <a href="#awards" className="cursor-pointer flex">
            <RxDashboard/>
            {isSmallScreen ? (
              <div>
              {/* Content for screens less than or equal to 512px */}
              
              </div>
          ) : (
            <div>
              {/* Content for screens greater than 512px */}
              Awards
              </div>
            )}
             
            </a>
            
            <a href="#projects" className="cursor-pointer flex">
            <RxCode/>
            {isSmallScreen ? (
              <div>
              {/* Content for screens less than or equal to 512px */}
              
              </div>
          ) : (
            <div>
              {/* Content for screens greater than 512px */}
              Projects
              </div>
            )}
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-row gap-1 md:gap-5">
        {Socials.map((social) => (
            <a href={encodeURI(social.link)} key={social.name}>
            <Image className="scale-50 md:scale-100"
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
            </a>
          ))}
        </div>
        <button
        onClick={handleClicked}
        className="md:hidden text-[#7042f861] font-bold mr-10"
        >
          <Bars3Icon height={30} width={30} />
        </button>
        
      </div>
    </div>
  );
}



