import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

function MenuSection() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About Me", path: "/About" },
    { label: "Projects", path: "/#projects" },
    { label: "Skills", path: "/#skills" },
    { label: "Experience", path: "/#experience" },
    { label: "Contact", path: "/#contact" },
  ];

  return (
    <div>
      {/* Menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-700 transition-colors transition-transform duration-200 border-b-2 border-transparent hover:scale-110 text-3xl"
        aria-label="Open menu"
      >
        <MdMenu />
      </button>

      {/* Right side drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white  shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="absolute top-5 right-5">
          <button onClick={() => setIsOpen(false)}>
            <IoCloseSharp size={24} />
          </button>
        </div>

        {/* Menu content */}
        <div className="mt-16 p-6 space-y-8">
          <div className="mb-8">
            <h2 className="text-2xl font-serif tracking-wide">Menu</h2>
          </div>

          <nav className="flex flex-col space-y-6 font-sans text-lg text-gray-900">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="relative group px-2 py-1 overflow-hidden"
              >
                <span className="block group-hover:text-gray-900 transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default MenuSection;
