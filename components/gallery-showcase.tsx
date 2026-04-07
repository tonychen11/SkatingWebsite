const galleryCards = [
  {
    title: "Discipline Snapshot",
    caption: "Quick looks at singles, pairs, dance, and synchronized teams.",
    theme: "bg-[linear-gradient(145deg,#fff0ea,#ffd7c9)]",
    badge: "Education",
  },
  {
    title: "Event Season Board",
    caption:
      "A tidy, colorful way to preview showcases, club events, and competition moments.",
    theme: "bg-[linear-gradient(145deg,#fff7da,#ffe8a6)]",
    badge: "Calendar",
  },
  {
    title: "Stories From the Rink",
    caption:
      "Readable cards for interviews, mentor notes, and inspiring skater experiences.",
    theme: "bg-[linear-gradient(145deg,#e7f8f6,#c7ece8)]",
    badge: "Stories",
  },
];

export function GalleryShowcase() {
  return (
    <section id="gallery" className="section-spacing pb-20">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow">Visual Showcase</div>
            <h2 className="section-title mt-4">
              A skating hub that can grow with more events, stories, and club
              pages.
            </h2>
          </div>
          <p className="section-copy max-w-xl">
            These preview panels show how the site can keep expanding while
            staying easy to browse for parents, skaters, and community groups.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="glass-card rounded-[2.2rem] p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-[1fr_0.88fr]">
              <div className="rounded-[2rem] bg-[linear-gradient(160deg,#2e8b86,#1f4f67)] p-7 text-white">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-white/70">
                  Future-ready
                </p>
                <h3 className="display-title mt-4 text-4xl leading-tight">
                  Ready to expand into a larger skating guide with deeper club,
                  event, and article pages.
                </h3>
                <p className="mt-4 max-w-md text-base leading-8 text-white/78">
                  New pages for disciplines, clubs, event calendars, and article
                  stories can plug into the same component system later.
                </p>
              </div>

              <div className="space-y-4">
                {galleryCards.slice(0, 2).map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-[1.8rem] p-5 ${card.theme}`}
                  >
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-[var(--color-ink)]">
                      {card.badge}
                    </span>
                    <h4 className="display-title mt-4 text-2xl">{card.title}</h4>
                    <p className="mt-2 text-[0.96rem] leading-7 text-[var(--color-muted)]">
                      {card.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article
            className={`hover-lift rounded-[2.2rem] border border-[var(--color-border)] p-6 shadow-[var(--shadow-soft)] ${galleryCards[2].theme}`}
          >
            <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-[var(--color-ink)]">
              {galleryCards[2].badge}
            </span>
            <h3 className="display-title mt-4 text-3xl">
              {galleryCards[2].title}
            </h3>
            <p className="mt-3 text-[1rem] leading-8 text-[var(--color-muted)]">
              {galleryCards[2].caption}
            </p>

            <div className="mt-8 rounded-[1.8rem] border border-[rgba(35,48,71,0.08)] bg-white/70 p-5">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Featured skater story
              </p>
              <p className="display-title mt-3 text-2xl">
                "I joined for the sparkle, but stayed for the team."
              </p>
              <p className="mt-3 text-[0.96rem] leading-7 text-[var(--color-muted)]">
                Short stories like this can spotlight skaters, parents,
                coaches, and organizers who make the rink feel welcoming.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
