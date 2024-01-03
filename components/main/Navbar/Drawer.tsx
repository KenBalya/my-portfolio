import React from "react";
import { DrawerProps } from "./interface";
import { Transition } from '@headlessui/react'
import { RxCode, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import Link from 'next/link'
export const Drawer : React.FC<DrawerProps> = ({isClicked, closeNavbar}) => {
    return(
    <Transition
      as="div"
      className=""
      show={isClicked}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
       <div className="flex flex-col z-50">
        <div className="flex flex-col border-t-2">
          <button
            onClick={closeNavbar}
            className="z-40 w-full text-black capitalize font-bold"
          >
            <Link
              href="#about-me"
              className={`shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md text-start w-full h-full px-4 py-5 text-white flex gap-1`}
            >
              <RxPerson/>
              <div>About Me</div>
            </Link>
          </button>
          <button
            onClick={closeNavbar}
            className="z-40 w-full text-black capitalize font-bold flex gap-1"
          >
            <Link
              href="#skills"
              className={`shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md text-start w-full h-full px-4 py-5 text-white flex gap-1`}
            >
              <RxClipboard/>
              <div>Skills</div>
            </Link>
          </button>
          <button
            onClick={closeNavbar}
            className="z-40 w-full text-black capitalize font-bold flex gap-1"
          >
            
            <Link
              href="#awards"
              className={`shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md text-start w-full h-full px-4 py-5 text-white flex gap-1`}
            >
              <RxDashboard/>
              <div>Awards</div>
            </Link>
          </button>
          <button
            onClick={closeNavbar}
            className="z-40 w-full text-black capitalize font-bold flex gap-1"
          >
            <Link
              href="#projects"
              className={`shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md text-start w-full h-full px-4 py-5 text-white flex gap-1`}
            >
              <RxCode/>
              <div>Projects</div>
            </Link>
          </button>
          
        </div>
      </div>

    </Transition>
    )
}