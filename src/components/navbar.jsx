"use client";

import { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";

export default function Navigationbar() {
  const [activePath, setActivePath] = useState('/');
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname); // Safely set the active path
      console.log("activePath", activePath)
    }  }, []);

  // Toggle the mobile menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-12 mt-12 md:flex justify-center">
      <Navbar
        fluid={true}
        rounded={true}
        className="relative ml-2 bg-white bg-opacity-10 fixed h-auto backdrop-blur-lg border z-50 border-white border-opacity-20 shadow-md rounded-lg px-4 md:px-8 py-2 md:py-4"
      >
        {/* Hamburger Icon for Mobile Screens */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={handleToggle}
        >
          {isOpen ? (
            <i className="fa fa-times fa-lg"></i> // Close icon (X)
          ) : (
            <i className="fa fa-bars fa-lg"></i> // Hamburger icon
          )}
        </button>

        {/* Mobile Menu: shown when the hamburger is clicked */}
        {isOpen && (
          <div className="top-12 mb-12 left-0 w-full h-[calc(100vh-10rem)] z-60 relative">
            <div className="h-[calc(100vh-2rem)] mb-8">
            <Navbar.Collapse className="flex flex-col gap-4 overflow-auto">
              <Navbar.Link
                href="/vision"
                className={`px-4 py-2 rounded-sm border-none hover:text-primary ${activePath === '/vision/' ? 'text-primary bg-[#1e1e1e]' : 'text-white'} transition-all`}
                style={{ margin: '0.5rem 1rem' }}
              >
                Vision
              </Navbar.Link>
              <Navbar.Link
                href="/"
                className={`px-4 py-2 rounded-sm border-none ${activePath === '/' ? 'text-primary bg-[#1e1e1e]' : 'text-white'} transition-all`}
                style={{ margin: '0.5rem 1rem' }}
              >
                Home
              </Navbar.Link>
              <Navbar.Link
                href="/team"
                className={`px-4 py-2 rounded-sm border-none ${activePath === '/team/' ? 'text-primary bg-[#1e1e1e]' : 'text-white'} transition-all`}
                style={{ margin: '0.5rem 1rem' }}
              >
                Team
              </Navbar.Link>
            </Navbar.Collapse>
            </div>
          </div>
        )}

        {/* Centered Navbar Links for Larger Screens */}
        <Navbar.Collapse className="hidden md:flex justify-center gap-8">
          <Navbar.Link
            href="/vision"
            className={`px-4 py-2 rounded-full ${activePath === '/vision/' ? 'text-primary bg-[#1e1e1e]' : 'text-white'} transition-all`}
            style={{ padding: '0.5rem 1rem' }}
          >
            Vision
          </Navbar.Link>
          <Navbar.Link
            href="/"
            className={`px-4 py-2 rounded-full ${activePath === '/' ? 'text-primary bg-[#1e1e1e]' : 'text-white'} transition-all`}
            style={{ padding: '0.5rem 1rem' }}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/team"
            className={`px-4 py-2 rounded-full ${activePath === '/team/' ? 'text-primary bg-[#1e1e1e]' : 'text-white'} transition-all`}
            style={{ padding: '0.5rem 1rem' }}
          >
            Team
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
