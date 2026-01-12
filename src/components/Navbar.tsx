import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-1 p-2 rounded-full border border-border bg-background/80 shadow-lg backdrop-blur-md">
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.href}
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-primary ${isActive
              ? "bg-accent text-primary"
              : "text-muted-foreground"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
      <div className="pl-1 border-l border-border ml-1">
        <ModeToggle />
      </div>
    </nav>
  );
}
