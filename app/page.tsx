import { CategoryGrid } from "@/components/category-grid";
import { BackgroundSkates } from "@/components/background-skates";
import { FeaturedHighlights } from "@/components/featured-highlights";
import { Footer } from "@/components/footer";
import { GalleryShowcase } from "@/components/gallery-showcase";
import { HeroSection } from "@/components/hero-section";
import { OverviewSection } from "@/components/overview-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">
      <BackgroundSkates />
      <div className="page-texture" aria-hidden="true" />
      <div className="relative z-10">
        <SiteHeader />
        <HeroSection />
        <OverviewSection />
        <CategoryGrid />
        <FeaturedHighlights />
        <GalleryShowcase />
        <Footer />
      </div>
    </main>
  );
}
