import { Navbar } from "@/components/nerdstack/navbar"
import { Hero } from "@/components/nerdstack/hero"
import { LogoStrip } from "@/components/nerdstack/logo-strip"
import { Features } from "@/components/nerdstack/features"
import { Stats } from "@/components/nerdstack/stats"
import TabSec from "@/components/nerdstack/tabSec"
import FAQ from "@/components/faq"

// import { Testimonials } from "@/components/nerdstack/testimonials"
// import { CtaFooter } from "@/components/nerdstack/cta-footer"
// import { OurHistory } from "@/components/OurHistory"
// import VideoReels from "@/components/VideoReels"

export default function Page() {
  return (
    <main className="min-h-screen bg-paper-cream">
      <Navbar />
      <Hero />
      <TabSec/>
      <LogoStrip />
      <Features />
      {/* <Stats /> */}
      {/* <OurHistory/> */}
      {/* <Testimonials /> */}
      {/* <VideoReels /> */}
      <FAQ/>
      {/* <CtaFooter /> */}
    </main>
  )
}
