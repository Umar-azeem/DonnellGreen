"use client";

import { useState } from "react";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  MessageCircle,
  FileText,
  Home,
  DollarSign,
  Clock,
  ShieldCheck,
  ArrowRight,
  Navigation,
  Calendar,
  Video,
} from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: Home,
    faqs: [
      {
        question: "What's the first step to buying a home?",
        answer:
          "The first step is getting pre-approved. This tells you how much you can afford, shows sellers you're a serious buyer, and helps you shop with confidence. I'll review your income, assets, and credit, then provide a pre-approval letter — usually within 24 hours. From there, we'll connect you with a real estate agent if you don't already have one and guide you through the entire process.",
      },
      {
        question: "How long does the mortgage process take?",
        answer:
          "From application to closing, most home purchases take 30–45 days. Refinances typically close in 21–30 days. With   system and my 21 years of customer service experience, I help keep your transaction seamless and on track. I'll give you a clear timeline upfront and keep you updated at every milestone.",
      },
      {
        question: "Do I need a real estate agent?",
        answer:
          "While not required, having a buyer's agent is highly recommended — and typically costs you nothing, as the seller usually pays the commission. I work with a trusted network of agents and can connect you with someone who fits your needs. If you already have an agent, I'm happy to coordinate directly with them.",
      },
      {
        question: "What documents do I need to get started?",
        answer:
          "Typically, you'll need: recent pay stubs (30 days), W-2s or tax returns (2 years), bank statements (2 months), a government-issued ID, and proof of any other income. If you're self-employed, we'll need additional documentation. I'll provide a personalized checklist so you know exactly what's needed — no guesswork.",
      },
    ],
  },
  {
    id: "loan-options",
    label: "Loan Options",
    icon: FileText,
    faqs: [
      {
        question: "What types of loans do you offer?",
        answer:
          "I offer a wide range of products including Conventional, FHA, VA, USDA, Jumbo, and Adjustable-Rate Mortgages (ARMs). I also specialize in refinancing — rate-and-term, cash-out, and streamline options — as well as HELOCs and investment property financing. We'll match you with the right loan based on your goals, credit, and long-term plans.",
      },
      {
        question: "What's the difference between FHA and Conventional loans?",
        answer:
          "FHA loans are government-insured, allowing lower credit scores (as low as 580) and down payments as low as 3.5%. Conventional loans typically require higher credit (620+) but can offer lower mortgage insurance costs and more flexibility for well-qualified buyers. I'll compare both side-by-side so you can see which saves you more over time.",
      },
      {
        question: "Should I choose a fixed-rate or adjustable-rate mortgage?",
        answer:
          "Fixed-rate mortgages lock in your interest rate for the life of the loan — ideal if you plan to stay long-term. ARMs start lower but adjust after an initial period — often better if you plan to sell or refinance within 5–7 years. We'll review your timeline and risk tolerance to choose wisely.",
      },
      {
        question: "Can I get a loan if I'm self-employed?",
        answer:
          "Absolutely. I work with many self-employed borrowers and have access to bank statement loans, profit-and-loss statement loans, and other flexible documentation options. We'll review your income streams and find a program that fits. My 10 years in finance help me navigate complex income scenarios.",
      },
    ],
  },
  {
    id: "rates-costs",
    label: "Rates & Costs",
    icon: DollarSign,
    faqs: [
      {
        question: "How are interest rates determined?",
        answer:
          "Rates are influenced by market conditions, the Federal Reserve, your credit score, down payment, loan type, and term. I monitor rates daily and will lock you in at the best possible time. I'll also show you how buying points or adjusting your down payment can lower your rate.",
      },
      {
        question: "What closing costs should I expect?",
        answer:
          "Closing costs typically range from 2%–5% of the loan amount and include lender fees, title insurance, appraisal, and prepaid taxes/insurance. I'll provide a Loan Estimate within 3 business days of your application so there are no surprises. I also offer options to cover closing costs through seller concessions or lender credits.",
      },
      {
        question: "Do you offer no-closing-cost refinances?",
        answer:
          "Yes — in some cases, we can roll closing costs into the loan or accept a slightly higher rate to cover them. Whether this makes sense depends on how long you plan to stay in the home. I'll run the numbers so you can decide with confidence.",
      },
      {
        question: "How much do I need for a down payment?",
        answer:
          "It depends on the loan program. FHA requires 3.5%, Conventional as low as 3%, VA and USDA can be 0%. I also work with down payment assistance programs in Maryland and beyond. We'll explore every option to minimize your out-of-pocket costs.",
      },
    ],
  },
  {
    id: "process-support",
    label: "Process & Support",
    icon: ShieldCheck,
    faqs: [
      {
        question: "What happens after I apply?",
        answer:
          "Once you apply, I'll review your documents and send your file to processing. An appraiser will be ordered, your loan will go through underwriting, and we'll work through any conditions together. I'll keep you informed at every step and coordinate with your agent, title company, and attorney to ensure a smooth closing.",
      },
      {
        question: "Will I work with you directly throughout the process?",
        answer:
          "Yes. Unlike some lenders where you're passed between departments, I stay personally involved from application to closing. My 21 years in customer service means you'll always feel respected, informed, and important. You'll have my direct cell — (667) 900-2913 — for any questions.",
      },
      {
        question: "What if my credit isn't perfect?",
        answer:
          "That's okay — many of my clients don't have perfect credit. I'll review your situation, suggest quick improvements, and match you with programs that work for your score today. I also offer credit-building guidance so you can qualify for better terms in the future.",
      },
      {
        question: "Can I get pre-approved before house hunting?",
        answer:
          "Absolutely — and you should. Pre-approval gives you a clear budget, strengthens your offer, and speeds up the process once you find a home. I offer fast pre-approvals, often within 24 hours, so you can shop with confidence.",
      },
    ],
  },
];

// Google Maps embed for 40 W. Chesapeake Ave, Suite 400, Towson, MD 21204
const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.753423548588!2d-76.60288668463568!3d39.40227197949297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80ee5b0e3c1e9%3A0x6e2e5b8b8b8b8b8b!2s40%20W%20Chesapeake%20Ave%2C%20Towson%2C%20MD%2021204!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState("getting-started");

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const activeFaqs =
    faqCategories.find((cat) => cat.id === activeCategory)?.faqs || [];

  return (
    <PageShell
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      description="Everything you need to know about working with Donnell Green"
    >
      <div className="mx-auto max-w-[1000px] space-y-12">
        {/* ─── INTRO ─────────────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[32px] border border-border bg-[#0F6D69] p-8 text-center shadow-card-soft sm:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <HelpCircle className="h-8 w-8 text-white" strokeWidth={1.6} />
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Your Questions, Answered
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 leading-relaxed">
                Whether you're buying your first home, refinancing, or exploring
                investment options, I've compiled answers to the questions I
                hear most often. If you don't see yours here, reach out — I'm
                always happy to help.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="tel:+16679002913">
                  <Button className="bg-white text-[#0F6D69] shadow-md transition-all duration-300 hover:bg-[#96694f] hover:text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (667) 900-2913
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white transition-all duration-300 hover:bg-white hover:text-[#0F6D69]"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── CATEGORY TABS ─────────────────────────────────────────── */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-[#0F6D69] bg-[#0F6D69] text-white shadow-md"
                      : "border-border bg-lift-white text-midnight-ink hover:border-[#0F6D69] hover:text-[#0F6D69]"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ─── FAQ LIST ──────────────────────────────────────────────── */}
        <div className="space-y-4">
          {activeFaqs.map((faq, idx) => {
            const key = `${activeCategory}-${idx}`;
            const isOpen = openItems[key];
            return (
              <Reveal key={key} delay={idx * 50}>
                <div className="overflow-hidden rounded-[20px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-0.5">
                  <button
                    onClick={() => toggleItem(key)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-[#0F6D69]/5"
                  >
                    <span className="font-display text-lg font-semibold text-midnight-ink">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#0F6D69] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm text-midnight-ink/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ─── GOOGLE MAP SECTION ───────────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="grid lg:grid-cols-2">
              {/* Left — Office Image */}
              <div className="relative h-72 w-full lg:h-auto lg:min-h-[420px]">
                <img
                  src="/img/map.webp"
                  alt="Donnell Green office – comfortable interview space"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right — Interview details */}
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                  Schedule an Interview
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  Let's Connect
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  Whether you're buying your first home or refinancing, I'm
                  happy to meet in person or connect virtually — whichever works
                  best for you. Pick a time that suits your schedule and let's
                  talk.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F6D69]/10 text-[#0F6D69]">
                      <Calendar className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-ink">
                        Flexible Scheduling
                      </p>
                      <p className="text-sm text-midnight-ink/60">
                        Weekdays & evenings available
                        <br />
                        <span className="text-xs text-midnight-ink/40">
                          (Eastern Standard Time)
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F6D69]/10 text-[#0F6D69]">
                      <Video className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-ink">
                        Meeting Options
                      </p>
                      <p className="text-sm text-midnight-ink/60">
                        In-person or virtual
                        <br />
                        <span className="text-xs text-midnight-ink/40">
                          Zoom, Google Meet, or phone call
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F6D69]/10 text-[#0F6D69]">
                      <Phone className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-ink">
                        Office & Cell
                      </p>
                      <a
                        href="tel:+16679002913"
                        className="text-sm text-[#0F6D69] hover:underline"
                      >
                        (667) 900-2913
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button className="bg-[#0F6D69] text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Interview
                    </Button>
                  </Link>
                  <a href="tel:+16679002913">
                    <Button
                      variant="outline"
                      className="border-[#0F6D69] text-[#0F6D69] transition-all duration-300 hover:bg-[#0F6D69] hover:text-white"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── STILL HAVE QUESTIONS ─────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                Still Have Questions?
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Let's Talk It Through
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
                Every situation is unique. If your question isn't answered here,
                reach out directly — I'll give you a straight answer, no
                pressure, no obligation.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <a
                href="tel:+16679002913"
                className="group flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0F6D69]/10 text-[#0F6D69] transition group-hover:bg-[#0F6D69] group-hover:text-white">
                  <Phone className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-midnight-ink">
                  Call or Text
                </h3>
                <p className="mt-1 text-sm text-[#0F6D69]">(667) 900-2913</p>
              </a>

              <a
                href="mailto: donnell.green@luminlending.com"
                className="group flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0F6D69]/10 text-[#0F6D69] transition group-hover:bg-[#0F6D69] group-hover:text-white">
                  <Mail className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-midnight-ink">
                  Email Me
                </h3>
                <p className="mt-1 text-xs text-[#0F6D69] break-all">
                  donnell.green@luminlending.com
                </p>
              </a>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact">
                <Button className="bg-[#0F6D69] text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                  Get Pre-Approved Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* ─── DISCLAIMER ───────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white/50 p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-midnight-ink/50">
              <ShieldCheck className="h-4 w-4" />
              <span>Donnell Green · NMLS# 1217575 ·</span>
            </div>
            <p className="mt-2 text-xs text-midnight-ink/40 leading-relaxed">
              This information is for educational purposes only and does not
              constitute a commitment to lend. All loans subject to credit
              approval and property appraisal. Rates and terms subject to
              change.
            </p>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}
