import React from "react";

interface NavbarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navbar({
  currentSection,
  onSectionChange,
}: NavbarProps) {
  const navItems = ["Home", "About", "Experience", "Tools"];

  return (
    <nav className="relative top-5 border border-gray-100 shadow-xl flex items-center justify-center w-xs text-sm md:text-md md:w-sm mx-auto *:py-2 *:px-3 rounded-full *:font-medium">
      {navItems.map((section) => (
        <button
          key={section}
          onClick={() => onSectionChange(section)}
          className={`
            ${
              currentSection === section
                ? "text-cyan-700 font-semibold"
                : "text-gray-600 hover:text-cyan-700"
            }
          `}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}
