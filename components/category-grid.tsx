const categories = [
  {
    title: "Skating Disciplines",
    label: "Learn",
    description:
      "Meet singles, pairs, ice dance, and synchronized skating through beginner-friendly summaries and key skills.",
    points: ["Jumps and spins", "Partner teamwork", "Musical expression"],
    accent: "bg-[var(--color-coral)]",
  },
  {
    title: "Competitions",
    label: "Compete",
    description:
      "See how skaters can progress from local club events to national stages and major international competitions.",
    points: ["Domestic pathways", "ISU events", "Season planning"],
    accent: "bg-[var(--color-gold)]",
  },
  {
    title: "Clubs and Events",
    label: "Connect",
    description:
      "Explore opportunities for clubs to collaborate on showcases, open houses, and extra youth-focused ice events.",
    points: ["Club spotlights", "Community showcases", "Parent engagement"],
    accent: "bg-[var(--color-teal)]",
  },
  {
    title: "News and Stories",
    label: "Read",
    description:
      "Feature news updates, interviews, and inspiring stories that help parents and kids stay interested in the sport.",
    points: ["Interviews", "Role models", "Readable updates"],
    accent: "bg-[var(--color-berry)]",
  },
];

export function CategoryGrid() {
  return (
    <section id="categories" className="section-spacing">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow">Browse Categories</div>
            <h2 className="section-title mt-4">Explore the website like a curated skating shelf.</h2>
          </div>
          <p className="section-copy max-w-xl">
            Each category is designed to be scannable on desktop and easy to tap
            through on mobile, so the experience feels organized without being
            stiff.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="glass-card hover-lift relative overflow-hidden rounded-[2rem] p-7"
            >
              <div className={`card-accent ${category.accent}`} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {category.label}
                  </p>
                  <h3 className="display-title mt-3 text-3xl">{category.title}</h3>
                </div>
                <span className={`h-4 w-16 rounded-full ${category.accent}`} />
              </div>

              <p className="mt-4 max-w-xl text-[1rem] leading-7 text-[var(--color-muted)]">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-[var(--color-border)] bg-white/70 px-4 py-2 text-sm font-bold text-[var(--color-ink)]"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
