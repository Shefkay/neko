import Button from "../common/Button"
import { Menu, X } from "lucide-react"
import { useState } from "react";

const navLinks = [
  { href: "#about", labe: "Essential Apps" },
  { href: "#projects", labe: "Camera Presets" },
  { href: "#experience", labe: "Glyph Toys" },
  { href: "#testimonials", labe: "EQ Profiles" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`py-2 bg-background text-white border-b border-border`}>
      <nav className="container mx-auto px-6 flex items-center justify-between ">
        <a href="#" className="w-32">
          <img src="./logo/nekowhite.png" alt="" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className="px-4 py-2 text-sm text-white/70 hover:text-primary rounded-full"
              >
                {link.labe}
              </a>
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
              <a
                href={link.href}
                key={idx}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-white/70 hover:text-primary py-2"
              >
                {link.labe}
              </a>
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