import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-[#4F46E5]/20">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold text-[#E5E7EB]">Let’s build something.</h4>
            <p className="text-sm text-[#E5E7EB]/70">Available for freelance and full‑time roles.</p>
          </div>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5] px-5 py-3 text-sm font-medium text-[#E5E7EB] hover:bg-[#4F46E5]/10 transition"
          >
            <Mail className="h-4 w-4" />
            hello@example.com
          </a>
        </div>
        <div className="mt-10 text-xs text-[#E5E7EB]/60">© {new Date().getFullYear()} Full‑Stack Developer. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
