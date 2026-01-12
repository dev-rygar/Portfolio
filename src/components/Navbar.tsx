import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 border border-gray-100 shadow-xl flex items-center justify-center w-xs text-sm md:text-md md:w-sm mx-auto *:py-2 *:px-3 rounded-full *:font-medium bg-white">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) => `
            ${isActive
              ? "text-primary font-semibold"
              : "text-gray-600 hover:text-primary"
            }
            transition-colors duration-300
          `}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
