'use client'
import React, { useState } from 'react'
import { NavbarStateProps } from './interface'
import { NavbarNormal } from './NavbarNormal'
import { Drawer } from './Drawer'
export const Navbar: React.FC = () => {
  const [navbarState, setNavbarState] = useState<NavbarStateProps>({
    isClicked: false,
    isOpen: false,
  })

  const handleClicked = () => {
    setNavbarState({ ...navbarState, isClicked: !navbarState.isClicked })
  }

  const handleUserProfile = (bool: boolean) => {
    setNavbarState({ ...navbarState, isOpen: bool })
  }

  const closeNavbar = () => {
    setNavbarState({ ...navbarState, isClicked: false })
  }

  return (
    <>
      <div className="fixed w-full z-50 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md md:px-10">
        <NavbarNormal
          {...navbarState}
          handleClicked={handleClicked}
          handleUserProfile={(bool: boolean) => handleUserProfile(bool)}
        />
        <Drawer
          {...navbarState}
          handleUserProfile={(bool: boolean) => handleUserProfile(bool)}
          closeNavbar={closeNavbar}
        />
      </div>
    </>
  )
}