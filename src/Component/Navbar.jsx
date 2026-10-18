
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Hay Mi Kyaw 🎀</h2>

      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    
  )
}

export default Navbar
