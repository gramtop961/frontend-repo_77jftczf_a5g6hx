import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-sm bg-[#0B0B0B]/70 border-b border-[#4F46E5]/20">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#4F46E5]" aria-hidden="true" />
          <span className="font-semibold tracking-tight text-[#E5E7EB]">Full‑Stack Dev</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm text-[#E5E7EB]/80 hover:text-[#E5E7EB] transition">Work</a>
          <a href="#about" className="text-sm text-[#E5E7EB]/80 hover:text-[#E5E7EB] transition">About</a>
          <a href="#contact" className="text-sm text-[#E5E7EB]/80 hover:text-[#E5E7EB] transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#4F46E5] px-4 py-2 text-sm text-[#E5E7EB] hover:bg-[#4F46E5]/10 transition"
          >
            <Mail className="h-4 w-4" />
            Say hello
          </a>
          <a
            href="https://github.com/"
            aria-label="GitHub"
            className="p-2 rounded-full hover:bg-[#4F46E5]/10 text-[#E5E7EB] transition"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-[#4F46E5]/10 text-[#E5E7EB] transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
