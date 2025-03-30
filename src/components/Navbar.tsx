interface NavbarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navbar({
  currentSection,
  onSectionChange,
}: NavbarProps) {
  const navItems = ["Home", "About", "Experience", "Projects"];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 border border-gray-100 shadow-xl flex items-center justify-center w-xs text-sm md:text-md md:w-sm mx-auto *:py-2 *:px-3 rounded-full *:font-medium bg-white">
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
            transition-colors duration-300
          `}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}
