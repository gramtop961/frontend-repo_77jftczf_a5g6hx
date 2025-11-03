const Hero = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col items-start gap-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/30 px-3 py-1 text-xs tracking-wide text-[#E5E7EB]/80">
            AVAILABLE FOR FREELANCE · REMOTE
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[#E5E7EB]">
            Building thoughtful, scalable web apps from front to back.
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[#E5E7EB]/70">
            I’m a full‑stack developer focused on clean interfaces, robust APIs, and smooth developer experiences.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-[#4F46E5] px-5 py-3 text-sm font-medium text-[#E5E7EB] hover:bg-[#4F46E5]/90 transition"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#4F46E5] px-5 py-3 text-sm font-medium text-[#E5E7EB] hover:bg-[#4F46E5]/10 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-[#0B0B0B]" />
    </section>
  );
};

export default Hero;
