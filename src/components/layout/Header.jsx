import Button from "../common/Button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { label: "Essential Apps", to: "/essential" },
  { label: "Camera Presets", to: "/camera" },
  { label: "Glyph Toys", to: "/glyph" },
  { label: "EQ Profiles", to: "/profile" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 py-2 text-white border-b border-border ${isScrolled ? "glass-strong" : "bg-transparent"} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between ">
        <Link to="/" className="w-32">
          <img src="./logo/nekowhite.png" alt="neko logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx.to}
                to={link.to}
                className="px-4 py-2 text-sm text-white/70 hover:text-primary rounded-full"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button>Connet</Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-primary cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-white/70 hover:text-primary py-2"
              >
                {link.label}
              </NavLink>
            ))}
            <Button onClick={() => setIsMobileMenuOpen(false)}>
              Connet
            </Button>
          </div>
        </div>)}
    </header>
  )
}

export default Header;