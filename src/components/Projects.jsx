const projects = [
  {
    title: "API‑first SaaS Platform",
    desc: "Multi‑tenant architecture with role‑based access, built with a modern stack and optimized for scale.",
    link: "#",
  },
  {
    title: "Realtime Collaboration App",
    desc: "WebSocket‑powered editor with optimistic UI updates and conflict resolution.",
    link: "#",
  },
  {
    title: "E‑commerce Experience",
    desc: "Headless storefront, secure checkout, and analytics‑driven product discovery.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-12 md:py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#E5E7EB]">Selected work</h2>
        <a href="#" className="text-sm text-[#E5E7EB]/70 hover:text-[#E5E7EB]">View all</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="group rounded-xl border border-[#4F46E5]/25 p-5 hover:border-[#4F46E5] transition"
          >
            <div className="mb-4 aspect-video w-full rounded-md bg-[#4F46E5]/10" />
            <h3 className="mb-2 text-lg font-medium text-[#E5E7EB] group-hover:text-[#E5E7EB]">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#E5E7EB]/70">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
