import { NAV_LINKS } from "@/constants/navigation";
import TransitionLink from "../ui/TransitionLink"; // Pengganti "next/link", TransitionLink adalah link custom

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/30 flex items-center justify-between px-8 py-5 bg-white/50 backdrop-blur-2xl shadow-sm">
      <TransitionLink
        href="/"
        label="Home"
        className="text-2xl text-blue-900 font-bold uppercase"
      >
        {"<code>...</cel>"}
      </TransitionLink>

      <ul className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <TransitionLink
              href={link.path}
              label={link.label}
              className="text-black/50 hover:text-blue-900 transition"
            >
              {link.label}
            </TransitionLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
