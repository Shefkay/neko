import Button from "../common/Button"
const navLinks = [
  { href: "#about", labe: "Essential Apps" },
  { href: "#projects", labe: "Camera Presets" },
  { href: "#experience", labe: "Glyph Toys" },
  { href: "#testimonials", labe: "EQ Profiles" },
];

function Header() {
  return (
    <header className="py-2 bg-background text-white border-b border-border">
      <nav className="container mx-auto px-6 flex items-center justify-between ">
        <a href="#" className="w-32">
          <img src="./logo/nekowhite.png" alt="" />
        </a>

        {/* Desktop Nav */}
        <div className="">
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
        <div>
          <Button>
            Connet
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header;