"use client";

import { useState } from "react";
import {
  Target,
  FileText,
  Home,
  Percent,
  ListChecks,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

type TabKey =
  | "gettingStarted"
  | "loanOptions"
  | "refinance"
  | "costsRates"
  | "process";

interface Tab {
  id: TabKey;
  label: string;
}

const APPLY_URL =
  "/contact";

const tabImages: Record<TabKey, string> = {
  gettingStarted: "/img/h1.jpg",
  loanOptions: "/img/h2.jpg",
  refinance: "/img/h3.jpg",
  costsRates: "/img/h4.jpg",
  process: "/img/h5.jpg",
};

const tabs: Tab[] = [
  { id: "gettingStarted", label: "Getting Started" },
  { id: "loanOptions", label: "Loan Options" },
  { id: "refinance", label: "Refinance & Home Equity" },
  { id: "costsRates", label: "Costs & Rates" },
  { id: "process", label: "How the Process Works" },
];

export default function TabSec() {
  const [activeTab, setActiveTab] = useState<TabKey>("gettingStarted");

  const renderContent = () => {
    switch (activeTab) {
      case "gettingStarted":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              Start with a plan that fits your goals
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Buying a home or changing your current mortgage starts with
              understanding your options. I&apos;ll review your goals, income,
              credit, and available funds, then help you compare loan programs
              and estimated costs.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "Buying a home:",
                  desc: "Find out what you may qualify for before making an offer.",
                },
                {
                  title: "Down payment:",
                  desc: "Review your available funds, eligible gifts, and assistance programs.",
                },
                {
                  title: "Monthly payment:",
                  desc: "Look beyond principal and interest to understand taxes, insurance, and any mortgage insurance.",
                },
                {
                  title: "Clear next steps:",
                  desc: "Know what documents are needed and what to expect from application to closing.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-white/80 sm:text-base"
                >
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">{item.title}</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "loanOptions":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              More than one way to finance a property
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              As a mortgage broker, I can help you compare programs for a range
              of goals and financial situations.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "Home purchases and refinances:",
                  desc: "Conventional, FHA, VA, jumbo, and super jumbo loans.",
                },
                {
                  title: "Investment and business properties:",
                  desc: "DSCR, private money, hard money, and commercial loans for properties with five or more units.",
                },
                {
                  title: "Building a home:",
                  desc: "Construction financing options.",
                },
                {
                  title: "Alternative income documentation:",
                  desc: "Bank statement and ITIN loan options.",
                },
                {
                  title: "Other loan structures:",
                  desc: "Interest-only products, where available.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-white/80 sm:text-base"
                >
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">{item.title}</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-white/60 sm:text-sm">
              Program availability and qualification requirements vary.
              We&apos;ll review which options fit your specific situation.
            </p>
          </div>
        );

      case "refinance":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              Make your current home work for your goals
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Your mortgage and home equity needs can change over time. I can
              help you compare ways to access equity, including the payment
              structure, upfront costs, and what you may owe later.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "Refinance:",
                  desc: "Explore a new mortgage structure or access equity through a cash-out refinance.",
                },
                {
                  title: "HELOC:",
                  desc: "Access an approved line of credit using available home equity.",
                },
                {
                  title: "Home equity loan:",
                  desc: "Receive a lump sum with scheduled repayment.",
                },
                {
                  title: "Home Equity Investment (HEI):",
                  desc: "Receive funds in exchange for a future payment tied in part to your home's value. HEIs typically do not require monthly payments, but a lump sum becomes due under the agreement's terms, such as when you sell the home or the term ends.",
                },
                {
                  title: "Reverse mortgage:",
                  desc: "For eligible homeowners, explore ways to access equity without a required monthly mortgage payment. Taxes, insurance, and property obligations still apply.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-white/80 sm:text-base"
                >
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">{item.title}</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "costsRates":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              Understand the full cost, not just the rate
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              A lower interest rate does not always mean a lower overall cost.
              I&apos;ll help you compare the details so you can make an informed
              decision.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "Interest rate and APR:",
                  desc: "Understand what each number represents.",
                },
                {
                  title: "Points and lender fees:",
                  desc: "See how upfront costs may affect your rate.",
                },
                {
                  title: "Closing costs:",
                  desc: "Review lender charges, title fees, taxes, insurance, and other applicable expenses.",
                },
                {
                  title: "Cash to close:",
                  desc: "Know how your down payment, deposits, credits, and closing costs come together.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-white/80 sm:text-base"
                >
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">{item.title}</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-white/60 sm:text-sm">
              Your actual terms depend on the loan program, property, credit
              profile, and lender approval.
            </p>
          </div>
        );

      case "process":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              From first conversation to closing
            </h3>
            <ol className="space-y-4">
              {[
                {
                  title: "Tell me your goal.",
                  desc: "We'll discuss the property, your timeline, and what you want the financing to accomplish.",
                },
                {
                  title: "Review your options.",
                  desc: "I'll help you compare eligible programs, estimated payments, and upfront costs.",
                },
                {
                  title: "Complete the application.",
                  desc: "You'll provide the documents needed for the lender to review your finances and the property.",
                },
                {
                  title: "Work through approval.",
                  desc: "I'll keep you informed as the appraisal, title work, and underwriting move forward.",
                },
                {
                  title: "Prepare for closing.",
                  desc: "We'll review the final figures and next steps before you sign.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-medium text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="mt-0.5 text-sm text-white/70">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#EEDBCC] py-16 sm:py-20">
      <style jsx>{`
        .tab-scroll {
          scrollbar-width: thin;
          scrollbar-color: #0f6d69 transparent;
        }
        .tab-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .tab-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .tab-scroll::-webkit-scrollbar-thumb {
          background-color: #0f6d69;
          border-radius: 9999px;
        }
        .tab-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #96694f;
        }
      `}</style>

      <div className="pointer-events-none absolute -left-32 -top-32 size-64 rounded-full bg-[#0F6D69]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-[#0F6D69]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[#0F6D69]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#0F6D69]">
            Resource Center
          </span>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-midnight-ink sm:text-4xl">
            Things to <span className="text-[#0F6D69]">Know</span>
          </h2>
          <p className="mt-2 text-sm text-midnight-ink/50">
            Mortgage options for where you are and where you want to go.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative z-20">
          <div className="tab-scroll -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex w-max min-w-full gap-1 rounded-2xl border border-[#EEDBCC] bg-white/70 p-1 backdrop-blur-sm sm:w-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 touch-manipulation whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-light transition-all duration-300 active:scale-95 sm:px-5 ${
                    activeTab === tab.id
                      ? "bg-[#0F6D69] text-white shadow-md"
                      : "text-midnight-ink/60 hover:bg-[#EEDBCC]/50 hover:text-midnight-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel */}
          <div className="relative mt-6 overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <img
                src={tabImages[activeTab]}
                alt=""
                className="h-full w-full object-cover blur-sm"
                style={{ transform: "scale(1.05)" }}
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(168, 126, 98, 0.4)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="relative z-10 p-6 text-white sm:p-8">
              {renderContent()}

              <div className="mt-8 flex justify-center border-t border-white/20 pt-6">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-light text-[#0F6D69] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.25)]"
                >
                  Apply Today
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}