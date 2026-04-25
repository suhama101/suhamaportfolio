export default function HeroSection() {
  return (
    <section id="home" className="section-shell pt-16 sm:pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-32 lg:pt-16">
        <div className="flex flex-col justify-center">
          <p className="section-eyebrow">Full Stack Developer | AI-Driven Development</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
            Hi, I am Suhama Mustafa
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#4d433a] sm:text-lg">
            Full Stack Developer with production experience building AI-powered web applications for live government clients, SaaS products, and ML projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Explore Projects
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="pill">Rawalpindi, Pakistan</span>
            <span className="pill">MS Software Engineering @ NUST</span>
            <span className="pill">Government Client Delivery</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="hero-card relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 p-6 shadow-2xl shadow-[rgba(14,14,14,0.08)] backdrop-blur-xl sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(178,95,53,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(127,158,105,0.14),transparent_45%)]" />
            <div className="relative space-y-6">
              <div className="rounded-3xl border border-black/10 bg-[#fbf8f2]/90 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b25f35]">Profile</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#796b60]">Email</p>
                    <p className="mt-2 text-sm text-[#111111]">suhamamustafa1@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#796b60]">Phone</p>
                    <p className="mt-2 text-sm text-[#111111]">+92 344 1272583</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#796b60]">LinkedIn</p>
                    <p className="mt-2 text-sm text-[#111111]">linkedin.com/in/suhama-mustafa-b58a152a5</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#796b60]">GitHub</p>
                    <p className="mt-2 text-sm text-[#111111]">github.com/suhama101</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-panel">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#b25f35]">Focus</p>
                  <p className="mt-3 text-sm leading-6 text-[#3f362d]">Next.js, React, Node.js, and Groq-based AI integrations.</p>
                </div>
                <div className="glass-panel">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#b25f35]">Current Study</p>
                  <p className="mt-3 text-sm leading-6 text-[#3f362d]">MS Software Engineering at NUST while contributing to live client projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}