const stats = [
  { value: "4", label: "disciplines explained" },
  { value: "10+", label: "competition pathways" },
  { value: "1", label: "friendly hub for families" },
];

export function HeroSection() {
  return (
    <section className="section-spacing pt-10 md:pt-16">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <div className="eyebrow">School Project 2026</div>
          <h1 className="display-title mt-5 max-w-3xl text-5xl leading-[0.95] md:text-7xl">
            A joyful guide to youth figure skating, all in one place.
          </h1>
          <p className="section-copy mt-6 text-lg">
            Glide Guide introduces skating disciplines, competitions, clubs,
            stories, and family-friendly events through a colorful, browsable
            experience designed for parents, kids, and curious beginners.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#categories">
              Explore the guide
            </a>
            <a className="button-secondary" href="#overview">
              See project goals
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-[1.75rem] p-5 text-center"
              >
                <p className="display-title text-4xl text-[var(--color-coral)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[540px]">
          <div className="floating-orb left-6 top-6 h-16 w-16 bg-[var(--color-gold)]" />
          <div
            className="floating-orb right-10 top-24 h-12 w-12 bg-[var(--color-sky)]"
            style={{ animationDelay: "1.2s" }}
          />
          <div
            className="floating-orb bottom-20 left-4 h-10 w-10 bg-[var(--color-coral)]"
            style={{ animationDelay: "2.2s" }}
          />

          <div className="glass-card absolute left-0 top-4 w-[78%] rounded-[2rem] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--color-berry)]">
                  Starter Path
                </p>
                <h2 className="display-title mt-2 text-3xl">
                  From first glide to first showcase
                </h2>
              </div>
              <span className="rounded-full bg-[var(--color-gold)] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                Kid friendly
              </span>
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-[linear-gradient(145deg,#a61e2a,#d94b3d)] p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/80">
                Discover
              </p>
              <p className="mt-3 max-w-xs text-3xl font-black leading-tight">
                Skills, spins, jumps, music, teamwork, and confidence.
              </p>
            </div>
          </div>

          <div className="glass-card absolute bottom-0 right-0 w-[82%] rounded-[2rem] p-6">
            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--color-coral)]">
                  What families need
                </p>
                <ul className="mt-4 space-y-3 text-[0.98rem] text-[var(--color-muted)]">
                  <li>Easy discipline breakdowns for beginners</li>
                  <li>Competition routes from local to international</li>
                  <li>Clubs, events, updates, and inspiring stories</li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/70 p-5">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Project focus
                </p>
                <p className="display-title mt-3 text-5xl text-[var(--color-ink)]">
                  1 hub
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  A single, welcoming place for youth skating information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
