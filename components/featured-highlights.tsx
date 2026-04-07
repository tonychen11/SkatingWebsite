const highlights = [
  {
    title: "Starter-friendly discipline guide",
    text: "Help young readers understand what makes each style of figure skating unique without overwhelming them.",
    tone: "bg-[linear-gradient(135deg,rgba(198,40,40,0.16),rgba(255,255,255,0.76))]",
  },
  {
    title: "Competition map for families",
    text: "Show domestic and international competition levels in a format that feels more inviting than a plain list.",
    tone: "bg-[linear-gradient(135deg,rgba(217,75,61,0.15),rgba(255,255,255,0.76))]",
  },
  {
    title: "Club collaboration spotlight",
    text: "Encourage clubs to connect around events, shows, and shared outreach for kids and parents.",
    tone: "bg-[linear-gradient(135deg,rgba(166,30,42,0.18),rgba(255,255,255,0.76))]",
  },
];

export function FeaturedHighlights() {
  return (
    <section id="stories" className="section-spacing">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.2rem] bg-[var(--color-ink)] p-8 text-white shadow-[var(--shadow-lifted)]">
            <div className="eyebrow border-white/20 bg-white/10 text-white/70">
              Stories
            </div>
            <h2 className="display-title mt-5 text-4xl leading-tight md:text-5xl">
              Stories, milestones, and updates help skating feel personal.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-white/75">
              This section brings together interviews, beginner moments,
              competition goals, and community highlights so families can read
              about the people and experiences behind the sport.
            </p>
          </div>

          <div className="grid gap-5">
            {highlights.map((item) => (
              <article
                key={item.title}
                className={`hover-lift rounded-[1.8rem] border border-[var(--color-border)] p-6 shadow-[var(--shadow-soft)] ${item.tone}`}
              >
                <h3 className="display-title text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
