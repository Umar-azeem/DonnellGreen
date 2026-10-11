"use client";
import { Reveal } from "@/components/nerdstack/reveal";
import { BookOpen, ArrowRight, PlayCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Terminal, Code2, AtSign, Rss } from "lucide-react";
import Image from "next/image";
import { FaLinkedin, FaGoogle } from "react-icons/fa";
import Cards from "../cards";

const socialLinks = [
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "http://linkedin.com/in/donnell-green-b2557066",
    label: "LinkedIn",
  },
  {
    id: "zillow",
    icon: FaGoogle, // Zillow icon placeholder — swap for SiZillow from react-icons/si if available
    url: "https://www.zillow.com/lender-profile/dgreen82/",
    label: "Zillow",
  },
];

const columns = [
  {
    title: "Mortgage",
    links: [
      { label: "Home Purchase", href: "" },
      { label: "Refinance", href: "" },
      { label: "Cash-Out Refinance", href: "" },
      { label: "HELOC", href: "" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Loan Process", href: "/about" },
      { label: "FAQs", href: "/about" },
      { label: "Reviews", href: "/about" },
      { label: "Contact", href: "/contact" },
      {
        label: "Zillow Profile",
        href: "https://www.zillow.com/lender-profile/dgreen82/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Donnell", href: "/about" },
      {
        label: "LinkedIn",
        href: "http://linkedin.com/in/donnell-green-b2557066",
      },
      { label: "NMLS# 1217575", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function CtaFooter() {
  return (
    <section className="px-4 pb-2">
      {/* CTA stage */}
      <div className="relative mx-auto mb-8 max-w-[1000px] overflow-hidden rounded-[20px] border border-border bg-linen-base px-6 py-20 text-center">
        <div
          aria-hidden
          className="ns-halo pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at center, var(--color-core-coral) 0%, var(--color-cache-sand) 55%, transparent 75%)",
            opacity: 0.5,
          }}
        />
        <Reveal>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4">
            <section className="rounded-[24px]  p-8  hover:-translate-y-1 sm:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="rounded-full bg-[#0F6D69]/10 p-3">
                  <BookOpen
                    className="h-8 w-8 text-[#0F6D69]"
                    strokeWidth={1.6}
                  />
                </div>

                {/* Label */}
                <span className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                  Education
                </span>

                {/* Heading */}
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-midnight-ink sm:text-4xl">
                  Confidence At Your Fingertips.
                </h2>

                {/* Description */}
                <p className="mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
                  Make informed mortgage decisions with confidence. From
                  step‑by‑step breakdowns to transparent loan comparisons and
                  real client testimonials, everything you need to understand
                  your home financing options lives here.
                </p>

                {/* Primary CTA */}
                <Link
                  href=""
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0F6D69] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View All Resources HERE
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary CTAs */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-light text-midnight-ink/60 transition-colors hover:text-[#0F6D69]"
                  >
                    <PlayCircle className="h-4 w-4" strokeWidth={1.6} />
                    HOW IT WORKS
                  </Link>
                  <span className="text-midnight-ink/20">•</span>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-light text-midnight-ink/60 transition-colors hover:text-[#0F6D69]"
                  >
                    <HelpCircle className="h-4 w-4" strokeWidth={1.6} />
                    FREQUENTLY ASKED QUESTIONS
                  </Link>
                </div>
              </div>
            </section>
            <Cards />
          </div>
        </Reveal>
      </div>

      {/* Footer card */}
      <footer
        className="mx-auto max-w-[1000px] rounded-[20px] border border-border bg-[#0F6D69] p-8 sm:p-12"
        style={{ boxShadow: "var(--shadow-card-soft)" }}
      >
        <div className="grid gap-10 flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex  items-center justify-center rounded-lg bg-white text-paper-cream">
                <Image
                  src="/img/logo.png"
                  alt="Donnell Green - Fairway Independent Mortgage"
                  width={120}
                  height={30}
                  className="h-16 w-28 object-contain"
                />
              </span>
            </a>
            <p className="mt-4 max-w-[240px] text-[14px] text-white font-light leading-[1.5]">
              Guiding you home with clarity, care, and 24 years of service .
            </p>
            <p className="mt-2 text-[12px] text-white/70 font-light">
             <Link href="https://nmlsconsumeraccess.org/TuringTestPage.aspx?ReturnUrl=/EntityDetails.aspx/INDIVIDUAL/1217575" target="_blank" rel="noopener noreferrer" className="hover:underline">
                NMLS# 1217575
              </Link>
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ id, icon: Icon, url, label }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-lift-white text-midnight-ink transition hover:bg-[#0F6D69] hover:text-lift-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-white/50">
                {col.title}
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] font-light text-white transition-colors duration-300 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info strip */}
        <div className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-white/50">
              Phone
            </span>
            <p className="mt-1 text-[14px] font-light text-white">
              <a href="tel:+16679002913" className="hover:underline">
                (667) 900-2913
              </a>
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-white/50">
              Email
            </span>
            <p className="mt-1 text-[14px] font-light text-white break-all">
              <a
                href="mailto: donnell.green@luminlending.com"
                className="hover:underline"
              >
                donnell.green@luminlending.com
              </a>
            </p>
          </div>
          {/* <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-white/50">
              Office
            </span>
            <p className="mt-1 text-[14px] font-light text-white leading-[1.5]">
              40 W. Chesapeake Ave, Suite 400
              <br />
              Towson, MD 21204
            </p>
          </div> */}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <span
            className="text-[13px] font-light"
            style={{ color: "#231f23a3" }}
          >
            © {new Date().getFullYear()} Donnell Green. All rights reserved.
          </span>
          <span className="rounded-full bg-cache-sand px-3 py-1 font-mono text-[10px] uppercase tracking-[0.75px] text-white">
            NMLS# 1217575
          </span>
        </div>
      </footer>
    </section>
  );
}
