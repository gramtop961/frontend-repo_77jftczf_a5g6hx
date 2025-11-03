import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E5E7EB]">
      <Header />
      <main>
        <Hero />
        <section id="about" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="rounded-2xl border border-[#4F46E5]/25 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#E5E7EB]">About</h2>
            <p className="max-w-3xl text-[#E5E7EB]/75 leading-relaxed">
              I craft minimal, performance‑first products with clean architectures. My stack typically includes
              modern React on the front‑end and fast, secure APIs on the back‑end, shipped with CI and sensible
              observability. I value clarity, maintainability, and small delightful details.
            </p>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
