const pillars = [
  {
    title: "Research-driven learning",
    text: "The project compares skating resources and website ideas so the final experience is easier for families to use and understand.",
    accent: "bg-[var(--color-gold)]",
  },
  {
    title: "Mentor-informed design",
    text: "Feedback from an experienced mentor helps improve troubleshooting, organization, and user convenience throughout the build.",
    accent: "bg-[var(--color-coral)]",
  },
  {
    title: "Community connection",
    text: "The site aims to spotlight clubs, events, and stories that make skating feel social, active, and welcoming to new participants.",
    accent: "bg-[var(--color-teal)]",
  },
];

export function OverviewSection() {
  return (
    <section id="overview" className="section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">About Glide Guide</div>
            <h2 className="section-title mt-4">
              Figure skating information for families, young skaters, and local
              clubs in one easy place.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              This website presents youth figure skating as both a sport and a
              community experience. It explains disciplines, introduces
              competitions, highlights clubs and events, and gathers stories and
              updates in one organized place. The goal is to reduce the need for
              families to search across many different platforms.
            </p>
            <p className="section-copy mt-4">
              It is meant to feel welcoming for beginners while still being
              useful for people already involved in skating, with organized
              sections for learning, planning, reading, and discovering new
              opportunities on and off the ice.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="glass-card hover-lift relative rounded-[1.8rem] p-6"
            >
              <span className={`mb-5 block h-3 w-16 rounded-full ${pillar.accent}`} />
              <h3 className="display-title text-2xl">{pillar.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-muted)]">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
