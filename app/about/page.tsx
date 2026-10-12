import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  BadgeCheck,
  Clock,
  Sparkles,
  Handshake,
  TrendingUp,
  FileText,
  MessageCircle,
  Star,
  Zap,
  Mail,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Donnell Green | Lumin Lending",
  description:
    "Meet Donnell Green, Senior Mortgage Broker at Lumin Lending. Explore home purchase, refinance, home equity, and investment property financing options with clear guidance from application to closing.",
};

const APPLY_URL =
  "https://luminlending-apply-donnell-green.my1003app.com/1217575/register?lang=en";
const NMLS_URL =
  "https://nmlconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1217575";
const REVIEWS_URL = "https://www.experience.com/reviews/donnell-green-lumi";
const LUMIN_URL = "https://luminlending.com/";

const loanPrograms = [
  "Purchase",
  "Rate & Term Refinance",
  "Cash-Out Refinance",
  "Conventional",
  "FHA",
  "VA",
  "Jumbo",
  "HELOCs",
  "Interest-Only Products",
  "Reverse Mortgage",
  "DSCR Loans",
  "Bank Statement Loans",
  "P&L Loans",
  "Fix & Flip Loans",
  "Bridge Loans",
  "Private & Hard Money",
  "ITIN Loans",
  "Commercial 5+ Units",
  "Construction Loans",
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Your Trusted Mortgage Broker"
      description="Expert guidance, transparent terms, and a process built for homebuyers, homeowners, and investors."
    >
      <div className="mx-auto max-w-[1000px] space-y-20">
        {/* ─── HERO SECTION ─────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[32px] border border-border bg-[#0F6D69] shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#0F6D69]/5 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#0F6D69]/5 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row lg:justify-between">
              {/* Left Content */}
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white">
                  HI, I'M
                </span>
                <h1 className="font-display text-4xl font-bold tracking-tight text-midnight-ink sm:text-5xl">
                  Donnell Green,
                  <br />
                  <span className="text-white">Your Local Mortgage Broker</span>
                </h1>
                <p className="max-w-2xl text-sm text-midnight-ink/70 sm:text-base">
                  I'm a Senior Mortgage Broker at Lumin Lending. I help clients
                  explore options for buying a home, refinancing, accessing home
                  equity, and financing investment properties. With access to a
                  wide range of loan programs, I can help you compare solutions
                  that fit your goals.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
                  <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-black text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                      Get Pre-Approved
                    </Button>
                  </a>
                  <a href="tel:+16679002913">
                    <Button
                      variant="outline"
                      className="border-[#0F6D69] text-[#0F6D69] transition-all duration-300 hover:bg-[#0F6D69] hover:text-white"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Donnell
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="shrink-0">
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-96 lg:w-96">
                  <div className="absolute inset-0 rounded-full bg-[#0F6D69]/10" />
                  <Image
                    src="/img/dp.png"
                    alt="Donnell Green"
                    fill
                    className="rounded-full h-52 w-64 border-4 border-[#0F6D69]/20 object-cover shadow-xl"
                  />
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-2 shadow-lg">
                    <BadgeCheck className="h-7 w-7 text-[#0F6D69]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── ABOUT DONNELL ────────────────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                  About Donnell
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  Clear Guidance, Consistent Communication
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  I have 8 years of mortgage experience, 12 years in finance, 13
                  years in sales, and 24 years in customer service. Whether
                  you're a homebuyer, a current homeowner, or a referral
                  partner, you can expect clear guidance and consistent
                  communication from application through closing.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  As a mortgage broker, I can help you compare programs for a
                  range of goals and financial situations — from conventional
                  and government loans to investment property financing and
                  alternative income documentation. Program availability and
                  qualification requirements vary, so we'll review which options
                  fit your specific situation.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  My goal is to build a relationship with my clients that helps
                  them feel completely satisfied and respected throughout the
                  entire mortgage process. I want my clients to feel important
                  and educated at every step.
                </p>
              </div>
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Donnell Green office"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── VALUES GRID ──────────────────────────────────────────── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: FileText,
              title: "Transparency",
              desc: "Clear rates, terms, and expectations.",
            },
            {
              icon: Zap,
              title: "Speed with Care",
              desc: "Move quickly without sacrificing guidance.",
            },
            {
              icon: MessageCircle,
              title: "Expert Advice",
              desc: "Match clients with the right loan product.",
            },
            {
              icon: Handshake,
              title: "Relationship First",
              desc: "Build long-standing partnerships, not one-time transactions.",
            },
            {
              icon: TrendingUp,
              title: "Client Growth",
              desc: "Support clients as they build wealth through homeownership.",
              className: "sm:col-span-2 lg:col-span-1",
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 70}>
              <div
                className={`flex flex-col rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 ${
                  item.className || ""
                }`}
              >
                <item.icon
                  className="h-7 w-7 text-[#0F6D69]"
                  strokeWidth={1.8}
                />
                <h3 className="mt-3 font-display text-xl font-semibold text-midnight-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-midnight-ink/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ─── EXPERIENCE YOU CAN TRUST ─────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="flex-1 p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                  Experience You Can Trust
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  24 Years of Service
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  With 8 years in the mortgage industry, 12 years in finance, 13
                  years in sales, and 24 years in customer service, I bring a
                  wealth of experience to every transaction. My background has
                  taught me the importance of listening, educating, and
                  advocating for my clients.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  Backed by Lumin Lending's support system, I help ease the
                  mortgage process and make your transaction seamless. Whether
                  you're buying your first home or refinancing, I'm here to
                  guide you every step of the way.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <a
                    href={REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-midnight-ink hover:text-[#0F6D69] hover:underline"
                  >
                    5.0 · 39 Reviews
                  </a>
                </div>
                <p className="mt-1 text-xs text-midnight-ink/50">
                  <a
                    href={NMLS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0F6D69] hover:underline"
                  >
                    NMLS# 1217575
                  </a>
                </p>
              </div>
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Donnell Green experience"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── LOAN PROGRAMS ────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                Loan Programs
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                More Than One Way to Finance a Property
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
                As a mortgage broker, I can help you compare programs for a
                range of goals and financial situations. Program availability
                and qualification requirements vary — we'll review which options
                fit your specific situation.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {loanPrograms.map((program) => (
                <span
                  key={program}
                  className="rounded-full border border-[#0F6D69]/20 bg-[#0F6D69]/5 px-4 py-2 text-xs font-medium text-[#0F6D69] transition-all duration-300 hover:bg-[#0F6D69] hover:text-white"
                >
                  {program}
                </span>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0F6D69] text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                  Apply Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </section>
        </Reveal>

        {/* ─── WHY CHOOSE ───────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
              Why Choose Donnell
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-midnight-ink">
              Strategic Mortgage Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
              I provide strategic mortgage solutions built to move you forward
              with confidence, clarity, and long‑term partnership.
            </p>
          </section>
        </Reveal>

        {/* ─── MISSION ──────────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] border border-border bg-[#0F6D69] p-8 text-white shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            </div>
            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-wider text-white/70">
                My Mission
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold">
                Your Homeownership <br />
                Journey Starts Here.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/80 leading-relaxed">
                My mission is to deliver 100% customer satisfaction by making
                the mortgage process seamless, educational, and respectful. I
                want you to feel important and confident every step of the way.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ─── HOW IT WORKS ─────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                How It Works
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Simple, Fast, Transparent
              </h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: "Apply Online In Minutes",
                  desc: "Start with a simple application – no hidden paperwork.",
                },
                {
                  icon: Clock,
                  title: "Decision as fast as 24 hours",
                  desc: "Get a response quickly so you can plan ahead.",
                },
                {
                  icon: Sparkles,
                  title: "Close with Confidence",
                  desc: "Get the right loan for your home purchase or refinance.",
                },
              ].map((step, idx) => (
                <Reveal key={step.title} delay={idx * 70}>
                  <div className="flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0F6D69]/10 text-[#0F6D69]">
                      <step.icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-midnight-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-midnight-ink/60">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0F6D69] text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </section>
        </Reveal>

        {/* ─── CONTACT INFO ─────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                Contact Donnell
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Let's Connect
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-midnight-ink/60">
                I don't have an office location to visit currently. In-person
                appointments can be scheduled by request.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <a
                href="tel:+16679002913"
                className="group flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white"
              >
                <Phone className="h-7 w-7 text-[#0F6D69]" strokeWidth={1.8} />
                <h3 className="mt-3 font-display text-lg font-semibold text-midnight-ink">
                  Call or Text
                </h3>
                <p className="mt-1 text-sm text-[#0F6D69]">(667) 900-2913</p>
              </a>

              <a
                href="mailto:donnell.green@luminlending.com"
                className="group flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white"
              >
                <Mail className="h-7 w-7 text-[#0F6D69]" strokeWidth={1.8} />
                <h3 className="mt-3 font-display text-lg font-semibold text-midnight-ink">
                  Email Me
                </h3>
                <p className="mt-1 text-xs text-[#0F6D69] break-all">
                  donnell.green@luminlending.com
                </p>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={LUMIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-midnight-ink/60 transition-colors hover:text-[#0F6D69]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                luminlending.com
              </a>
              <a
                href={NMLS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-midnight-ink/60 transition-colors hover:text-[#0F6D69]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                NMLS# 1217575
              </a>
              <a
                href={REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-midnight-ink/60 transition-colors hover:text-[#0F6D69]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Read Reviews
              </a>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-midnight-ink/40">
                Donnell Green · NMLS# 1217575 · Lumin Lending
              </p>
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}