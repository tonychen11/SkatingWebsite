export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white/55 py-8">
      <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display-title text-2xl">Glide Guide</p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
            School project website about promoting figure skating for youth and
            young children.
          </p>
        </div>
        <div className="text-sm leading-6 text-[var(--color-muted)] md:text-right">
          <p>Created by Tony</p>
          <p>Built with Next.js and Tailwind CSS for Vercel deployment</p>
        </div>
      </div>
    </footer>
  );
}
