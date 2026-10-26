// app/data/loanPrograms.ts

export interface LoanProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  features?: string[];
  idealFor?: string[];
  steps: {
    step: number;
    title: string;
    description: string;
  }[];
  testimonials: {
    name: string;
    text: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

export const loanPrograms: LoanProgram[] = [
  {
    id: "purchase",
    title: "Purchase Loans",
    subtitle: "Financing to buy your next home or investment property",
    description:
      "Purchase loans fund the acquisition of a property. We match you to the right program — conventional, FHA, VA, jumbo, DSCR, and more — based on your profile and goals.",
    longDescription:
      "A purchase loan is used to buy a property. The right program depends on occupancy (primary, second home, investment), credit, down payment, and documentation type. We shop conventional, FHA, VA, jumbo, DSCR, bank statement, and ITIN options so you get the most competitive fit rather than a one-size-fits-all quote. Pre-approval first, then a locked rate, then underwriting and closing.",
    icon: "Home",
    benefits: [
      "Access to conventional, FHA, VA, jumbo, DSCR, and ITIN programs",
      "Pre-approval to strengthen your offer",
      "Down payment options as low as 3% (program dependent)",
      "Fixed and adjustable rate options",
      "Guidance through the full contract-to-close process",
      "Competitive pricing across multiple lender channels",
    ],
    features: [
      "Program matching — we place you in the loan type that fits your file",
      "Rate lock options during the contract period",
      "Full doc, bank statement, P&L, and DSCR paths available",
    ],
    idealFor: [
      "First-time homebuyers",
      "Move-up buyers",
      "Second-home buyers",
      "Real estate investors purchasing rentals",
    ],
    steps: [
      { step: 1, title: "Pre-approval", description: "Share your income, assets, and goals for a quick pre-approval letter." },
      { step: 2, title: "Program selection", description: "We compare conventional, FHA, VA, jumbo, and specialty options for your scenario." },
      { step: 3, title: "Contract & rate lock", description: "Once your offer is accepted, we lock your rate and order the appraisal." },
      { step: 4, title: "Underwriting", description: "Your file is underwritten and any conditions are cleared." },
      { step: 5, title: "Closing", description: "Sign final documents and receive funding at closing." },
    ],
    testimonials: [
      { name: "Jenna & Paul, First-Time Buyers", text: "We were nervous first-time buyers. They walked us through FHA vs. conventional, got us pre-approved fast, and we closed in 28 days." },
    ],
    faqs: [
      { question: "How much do I need for a down payment?", answer: "It depends on the program — as low as 3% for some conventional loans, 3.5% for FHA, and 0% for eligible VA borrowers." },
      { question: "Should I get pre-approved first?", answer: "Yes. Pre-approval tells sellers you're a serious buyer and clarifies your budget before you shop." },
      { question: "Can I buy an investment property?", answer: "Yes — we offer DSCR, bank statement, and conventional investment-property loans." },
      { question: "How long does closing take?", answer: "Typically 21–45 days depending on program, appraisal, and title work." },
      { question: "Can I use gift funds?", answer: "Many programs allow gift funds for down payment and closing costs with proper documentation." },
    ],
    ctaText: "GET PRE-APPROVED",
    ctaLink: "/contact",
  },
  {
    id: "rate-term-refinance",
    title: "Rate & Term Refinance",
    subtitle: "Lower your rate or change your loan term without taking cash out",
    description:
      "A rate-and-term refinance replaces your existing mortgage with a new one at a better rate, a different term, or both — with no cash taken out.",
    longDescription:
      "Rate-and-term refinancing pays off your current mortgage and replaces it with a new loan at a lower rate, a shorter or longer term, or a different program (e.g., FHA to conventional). The new loan balance stays roughly the same as the old payoff, aside from closing costs. Best used to lower your monthly payment, pay off the loan faster, or drop mortgage insurance.",
    icon: "RefreshCw",
    benefits: [
      "Lower your interest rate and monthly payment",
      "Shorten your term to build equity faster",
      "Remove or reduce mortgage insurance (program dependent)",
      "Switch loan types (e.g., FHA to conventional)",
      "No cash taken out — balance stays comparable",
      "Fixed or adjustable options",
    ],
    features: [
      "Rate reduction and term restructuring",
      "No cash-out — clean payoff of existing lien",
      "Appraisal waivers available on many files",
    ],
    idealFor: [
      "Homeowners with rates above current market",
      "Borrowers wanting to drop PMI/MIP",
      "Owners wanting a 15-year payoff",
      "Borrowers exiting an ARM into a fixed rate",
    ],
    steps: [
      { step: 1, title: "Rate review", description: "We compare your current rate and terms against today's market." },
      { step: 2, title: "Break-even analysis", description: "We calculate how long it takes closing costs to pay for themselves." },
      { step: 3, title: "Application", description: "Submit your application and documentation for the new loan." },
      { step: 4, title: "Underwriting & appraisal", description: "Your file is underwritten; an appraisal is ordered if required." },
      { step: 5, title: "Closing", description: "The old loan is paid off and the new loan is recorded." },
    ],
    testimonials: [
      { name: "The Nguyen Family", text: "We dropped our rate by 1.25% and removed PMI. The break-even was under two years — an easy decision." },
    ],
    faqs: [
      { question: "How is this different from a cash-out refi?", answer: "A rate-and-term refi leaves your balance roughly the same; a cash-out refi lets you borrow additional equity." },
      { question: "Will I need an appraisal?", answer: "Often not — many rate-and-term refis qualify for an appraisal waiver, but it depends on the program and your file." },
      { question: "Can I shorten my term?", answer: "Yes. Many borrowers refinance from a 30-year to a 15-year to save interest and build equity faster." },
      { question: "What are typical closing costs?", answer: "Usually 2–5% of the loan amount; we provide a Loan Estimate within three business days of application." },
      { question: "Can I roll closing costs into the loan?", answer: "In many cases yes, subject to program limits and loan-to-value." },
    ],
    ctaText: "CHECK MY RATE",
    ctaLink: "/contact",
  },
  {
    id: "cash-out-refinance",
    title: "Cash Out Refinance",
    subtitle: "Tap your home equity for cash while refinancing your mortgage",
    description:
      "A cash-out refinance replaces your mortgage with a larger loan and pays you the difference in cash, giving you access to your home equity.",
    longDescription:
      "Cash-out refinancing pays off your existing mortgage and any liens, then disburses the remaining equity to you as cash. You can typically borrow up to 80% of your home's value (higher in some programs). Common uses include debt consolidation, home improvements, and large purchases. Rates are often lower than personal loans or credit cards, and the interest may be tax-deductible if funds are used to improve the home — consult your tax advisor.",
    icon: "DollarSign",
    benefits: [
      "Access your home equity as cash",
      "Consolidate higher-interest debt",
      "Fund renovations or major purchases",
      "Potentially lower rate than unsecured options",
      "One loan instead of multiple payments",
      "Fixed-rate options available",
    ],
    features: [
      "Borrow against equity — typically up to 80% LTV",
      "Debt consolidation and renovation use cases",
      "Conventional, FHA, and VA cash-out options",
    ],
    idealFor: [
      "Homeowners with significant equity",
      "Borrowers consolidating high-interest debt",
      "Owners funding renovations",
      "Borrowers needing a large lump sum",
    ],
    steps: [
      { step: 1, title: "Equity review", description: "We estimate your available equity based on current value and payoff." },
      { step: 2, title: "Use-of-funds plan", description: "Confirm how much cash you need and how it will be used." },
      { step: 3, title: "Application & appraisal", description: "Apply and complete the appraisal required for the new loan." },
      { step: 4, title: "Underwriting", description: "Your file is reviewed against the program's LTV and credit guidelines." },
      { step: 5, title: "Closing & disbursement", description: "The old loan is paid off and your cash is disbursed at closing." },
    ],
    testimonials: [
      { name: "Teresa M., Homeowner", text: "We consolidated $40k of credit card debt into our mortgage and cut our monthly payments by $600. The process was smoother than we expected." },
    ],
    faqs: [
      { question: "How much can I take out?", answer: "Typically up to 80% of your home's appraised value, minus your current mortgage balance and closing costs." },
      { question: "Is the interest tax-deductible?", answer: "Interest may be deductible if the funds are used to buy, build, or improve the home. Consult a tax advisor." },
      { question: "Can I cash out with an FHA or VA loan?", answer: "Yes — FHA and VA both offer cash-out refinance programs with their own LTV limits." },
      { question: "Will my rate go up?", answer: "Not necessarily. Cash-out rates are often close to rate-and-term rates, though pricing can be slightly higher depending on LTV and credit." },
      { question: "How long does it take?", answer: "Typically 30–45 days, longer if an appraisal or title work is complex." },
    ],
    ctaText: "SEE MY EQUITY",
    ctaLink: "/contact",
  },
  {
    id: "conventional",
    title: "Conventional Loans",
    subtitle: "Flexible, non-government-backed financing for strong borrowers",
    description:
      "Conventional loans are not government-insured. They offer competitive rates and flexible terms for borrowers with solid credit and documented income.",
    longDescription:
      "Conventional loans conform to Fannie Mae and Freddie Mac guidelines (or are jumbo if they exceed conforming limits). They are not backed by the federal government, which gives lenders more flexibility on terms and property types. Down payments can be as low as 3% for qualified first-time buyers, and PMI can often be removed once you reach 20% equity.",
    icon: "Landmark",
    benefits: [
      "Competitive rates for strong credit profiles",
      "Down payments as low as 3% (first-time buyers)",
      "PMI removable at 20% equity",
      "Flexible terms: 10, 15, 20, 25, 30 years",
      "Fixed and adjustable rate options",
      "Broad property-type eligibility",
    ],
    features: [
      "Conforming loan limits (higher in high-cost areas)",
      "PMI cancellation at 78–80% LTV",
      "Second-home and investment-property options",
    ],
    idealFor: [
      "Borrowers with good credit (620+)",
      "First-time buyers with 3% down",
      "Move-up buyers",
      "Second-home purchasers",
    ],
    steps: [
      { step: 1, title: "Pre-qualification", description: "Review credit, income, and assets against conventional guidelines." },
      { step: 2, title: "Program comparison", description: "Compare conventional vs. FHA/VA/jumbo for your scenario." },
      { step: 3, title: "Application & docs", description: "Submit pay stubs, W-2s, bank statements, and tax returns as required." },
      { step: 4, title: "Underwriting & appraisal", description: "File is underwritten and the property is appraised." },
      { step: 5, title: "Closing", description: "Sign and fund." },
    ],
    testimonials: [
      { name: "Alex & Priya, Move-Up Buyers", text: "Conventional gave us the best rate and we avoided FHA's mortgage insurance. Our loan officer ran both scenarios side by side." },
    ],
    faqs: [
      { question: "What credit score do I need?", answer: "Generally 620+, though pricing improves significantly at 740+." },
      { question: "Can I put down less than 20%?", answer: "Yes — 3% for qualified first-time buyers, 5%+ for others. PMI applies below 20% down." },
      { question: "When can PMI be removed?", answer: "Typically at 80% LTV upon request, and automatically at 78% LTV based on the original amortization schedule." },
      { question: "What is the conforming loan limit?", answer: "Set annually by FHFA; higher in designated high-cost areas. Loans above the limit are jumbo." },
      { question: "Can I buy an investment property?", answer: "Yes, with larger down payments and reserve requirements." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "fha",
    title: "FHA Loans",
    subtitle: "Government-insured loans with flexible credit and down payment",
    description:
      "FHA loans are insured by the Federal Housing Administration, making them accessible to borrowers with lower credit scores and smaller down payments.",
    longDescription:
      "FHA loans are backed by the FHA and require as little as 3.5% down with a 580+ credit score (10% down at 500–579). They are more forgiving on credit history, allow higher debt-to-income ratios, and permit gift funds and co-borrowers. Mortgage insurance (MIP) is required for the life of the loan in most cases unless you refinance out.",
    icon: "ShieldCheck",
    benefits: [
      "Down payment as low as 3.5%",
      "Credit scores from 500 (with larger down payment)",
      "More flexible DTI and credit history standards",
      "Gift funds and co-borrowers allowed",
      "Assumable loans in some cases",
      "Streamline refinance options later",
    ],
    features: [
      "FHA mortgage insurance (MIP) required",
      "3.5% down at 580+ credit",
      "Higher DTI tolerances than conventional",
    ],
    idealFor: [
      "First-time homebuyers",
      "Borrowers with lower credit scores",
      "Buyers with limited down payment savings",
      "Borrowers with prior credit events",
    ],
    steps: [
      { step: 1, title: "Eligibility check", description: "Confirm credit, DTI, and property eligibility for FHA." },
      { step: 2, title: "Pre-approval", description: "Get pre-approved with an FHA lender." },
      { step: 3, title: "FHA appraisal", description: "The property must meet FHA minimum property requirements." },
      { step: 4, title: "Underwriting", description: "File is underwritten against FHA guidelines." },
      { step: 5, title: "Closing", description: "Sign and fund; MIP begins with the first payment." },
    ],
    testimonials: [
      { name: "Danielle R., First-Time Buyer", text: "My credit wasn't perfect and FHA let me buy with 3.5% down. Two years later I refinanced into a conventional loan and dropped MIP." },
    ],
    faqs: [
      { question: "What credit score do I need?", answer: "580+ for 3.5% down; 500–579 requires 10% down." },
      { question: "Can I remove MIP?", answer: "Generally MIP lasts for the life of the loan unless you refinance out or put 10%+ down (in which case it ends after 11 years)." },
      { question: "Are there property condition requirements?", answer: "Yes — the FHA appraisal enforces minimum property standards for safety and soundness." },
      { question: "Can I use gift funds?", answer: "Yes, FHA allows documented gift funds for down payment and closing costs." },
      { question: "Can I refinance later?", answer: "Yes — FHA Streamline and FHA-to-conventional refinances are common exit paths." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "va",
    title: "VA Loans",
    subtitle: "Zero-down financing for eligible veterans, service members, and surviving spouses",
    description:
      "VA loans are guaranteed by the U.S. Department of Veterans Affairs and offer eligible borrowers 0% down, no PMI, and competitive rates.",
    longDescription:
      "VA loans are backed by the VA and available to eligible veterans, active-duty service members, National Guard/Reserve members, and surviving spouses. Key advantages: 0% down, no monthly mortgage insurance, competitive rates, and limited closing costs. A VA funding fee applies (waived for some disabled veterans) and can be financed into the loan.",
    icon: "Star",
    benefits: [
      "0% down payment",
      "No monthly mortgage insurance",
      "Competitive interest rates",
      "Limited closing costs",
      "Reusable entitlement in many cases",
      "Assumable for future buyers",
    ],
    features: [
      "VA funding fee (financed or paid at closing)",
      "No PMI — ever",
      "Seller concessions allowed",
    ],
    idealFor: [
      "Veterans",
      "Active-duty service members",
      "National Guard and Reserve members",
      "Eligible surviving spouses",
    ],
    steps: [
      { step: 1, title: "COE verification", description: "We help you obtain your Certificate of Eligibility." },
      { step: 2, title: "Pre-approval", description: "Get pre-approved with a VA lender." },
      { step: 3, title: "VA appraisal", description: "The property must meet VA minimum property requirements." },
      { step: 4, title: "Underwriting", description: "File is underwritten against VA guidelines." },
      { step: 5, title: "Closing", description: "Sign and fund; funding fee is paid or financed." },
    ],
    testimonials: [
      { name: "Sgt. Mike H., U.S. Army (Ret.)", text: "Zero down and no PMI saved us thousands. The team handled my COE and we closed in 30 days." },
    ],
    faqs: [
      { question: "Who is eligible?", answer: "Veterans, active-duty service members, National Guard/Reserve members with qualifying service, and some surviving spouses." },
      { question: "What is the funding fee?", answer: "A one-time VA fee (typically 1.25–3.3% of the loan) that can be financed. It is waived for veterans receiving disability compensation." },
      { question: "Is there a loan limit?", answer: "Full entitlement generally removes the limit; partial entitlement scenarios have limits set by county." },
      { question: "Can I use VA more than once?", answer: "Yes — entitlement can be restored or reused in many cases." },
      { question: "Can I buy a condo?", answer: "Yes, if the project is VA-approved or qualifies for a waiver." },
    ],
    ctaText: "CHECK MY ELIGIBILITY",
    ctaLink: "/contact",
  },
  {
    id: "jumbo",
    title: "Jumbo Loans",
    subtitle: "Financing above conforming limits for higher-value properties",
    description:
      "Jumbo loans exceed the conforming loan limit and finance higher-value homes. They typically require stronger credit and larger reserves.",
    longDescription:
      "Jumbo loans are non-conforming — they exceed the FHFA conforming limit for the county. Lenders underwrite them in-house or through jumbo investors, with stricter credit, reserve, and documentation requirements. Rates can be competitive with conforming loans for strong borrowers. Appraisal and underwriting timelines are often slightly longer.",
    icon: "Gem",
    benefits: [
      "Finance homes above the conforming limit",
      "Competitive rates for strong profiles",
      "Fixed and ARM options",
      "Interest-only options available (program dependent)",
      "Higher loan amounts for high-cost areas",
      "Portfolio and investor channels available",
    ],
    features: [
      "Non-conforming loan amounts",
      "Stricter credit and reserve requirements",
      "Full-doc and asset-based paths on some programs",
    ],
    idealFor: [
      "Buyers of high-value homes",
      "Borrowers in high-cost markets",
      "High-net-worth borrowers",
      "Investors purchasing premium properties",
    ],
    steps: [
      { step: 1, title: "Scenario review", description: "Confirm loan amount, LTV, and reserve requirements for jumbo." },
      { step: 2, title: "Pre-approval", description: "Get pre-approved with a jumbo lender." },
      { step: 3, title: "Full documentation", description: "Provide detailed income, asset, and tax documentation." },
      { step: 4, title: "Appraisal & underwriting", description: "Jumbo appraisal and in-house underwriting." },
      { step: 5, title: "Closing", description: "Sign and fund." },
    ],
    testimonials: [
      { name: "The Whitfields", text: "Our loan was above the conforming limit. They placed us with a jumbo investor at a rate that beat our bank's quote." },
    ],
    faqs: [
      { question: "What is the jumbo threshold?", answer: "Any loan above the FHFA conforming limit for the county — higher in designated high-cost areas." },
      { question: "How much do I need to put down?", answer: "Typically 10–20%, though some programs allow less with strong compensating factors." },
      { question: "What reserves are required?", answer: "Often 6–12 months of PITI, depending on LTV and loan amount." },
      { question: "Are jumbo rates higher?", answer: "Not always — for strong borrowers, jumbo pricing can be competitive with conforming." },
      { question: "Can I do interest-only?", answer: "Some jumbo programs offer interest-only periods; eligibility depends on LTV and reserves." },
    ],
    ctaText: "GET A JUMBO QUOTE",
    ctaLink: "/contact",
  },
  {
    id: "heloc",
    title: "HELOCs (Home Equity Lines of Credit)",
    subtitle: "A revolving credit line secured by your home equity",
    description:
      "A HELOC lets you borrow against your home equity on a revolving basis — draw, repay, and reuse during the draw period.",
    longDescription:
      "A Home Equity Line of Credit is a second lien secured by your home. During the draw period (often 10 years) you can draw, repay, and redraw up to your limit; you pay interest only on what you use. After the draw period, the line typically converts to a repayment period. HELOCs are useful for renovations, debt consolidation, and cash-flow smoothing without refinancing your first mortgage.",
    icon: "CreditCard",
    benefits: [
      "Revolving access to home equity",
      "Pay interest only on what you draw",
      "Keep your existing first-mortgage rate",
      "Draw period typically 10 years",
      "Often lower cost than unsecured credit",
      "Interest may be tax-deductible if used to improve the home",
    ],
    features: [
      "Second-lien revolving line",
      "Interest-only payments during draw period",
      "Variable and fixed-rate options (fixed-rate advances on some programs)",
    ],
    idealFor: [
      "Homeowners with equity who want flexibility",
      "Borrowers funding phased renovations",
      "Borrowers consolidating debt without refinancing",
      "Homeowners who want to keep a low first-mortgage rate",
    ],
    steps: [
      { step: 1, title: "Equity review", description: "Determine your available equity and combined LTV." },
      { step: 2, title: "Application", description: "Apply and provide income, asset, and property documentation." },
      { step: 3, title: "Appraisal (if required)", description: "Some HELOCs require an appraisal or automated valuation." },
      { step: 4, title: "Closing", description: "Sign the line agreement; draw period begins." },
      { step: 5, title: "Draw & repay", description: "Draw as needed and repay during the draw period." },
    ],
    testimonials: [
      { name: "Karen & Tom, Homeowners", text: "We used a HELOC to fund a kitchen remodel in phases. We only paid interest on what we drew, and kept our 3% first mortgage." },
    ],
    faqs: [
      { question: "How is a HELOC different from a cash-out refi?", answer: "A HELOC is a revolving second lien; a cash-out refi replaces your first mortgage with a larger one." },
      { question: "What is the draw period?", answer: "Typically 10 years, followed by a repayment period of up to 20 years." },
      { question: "Are HELOC rates fixed or variable?", answer: "Most are variable (tied to prime), though many lenders offer fixed-rate advance options." },
      { question: "Can I get a HELOC with bad credit?", answer: "It's harder; most lenders want 620+ and sufficient equity. Some specialty lenders go lower." },
      { question: "Will a HELOC affect my first mortgage?", answer: "No — it's a separate second lien; your first mortgage stays in place." },
    ],
    ctaText: "APPLY FOR A HELOC",
    ctaLink: "/contact",
  },
  {
    id: "interest-only",
    title: "Interest-Only Products",
    subtitle: "Lower initial payments with interest-only periods",
    description:
      "Interest-only loans let you pay only interest for an initial period, lowering your monthly payment before principal repayment begins.",
    longDescription:
      "Interest-only loans feature an initial period (often 5–10 years) during which you pay only interest. After that, payments increase to include principal amortization. These products can improve cash flow and are common for jumbo, investment, and high-income borrowers, but they carry payment-shock risk if not planned for. Best used with a clear exit strategy.",
    icon: "Clock",
    benefits: [
      "Lower initial monthly payments",
      "Frees up cash flow during the IO period",
      "Useful for high-income or commission-based borrowers",
      "Available on jumbo and some conventional/investment programs",
      "Can be paired with investment strategies",
      "Fixed or ARM structures",
    ],
    features: [
      "Interest-only period (typically 5–10 years)",
      "Amortization begins after IO period",
      "Common on jumbo and investor programs",
    ],
    idealFor: [
      "High-income borrowers with variable cash flow",
      "Investors maximizing cash flow",
      "Borrowers with a planned refinance/sale exit",
      "Jumbo borrowers seeking payment flexibility",
    ],
    steps: [
      { step: 1, title: "Eligibility review", description: "Confirm program availability for your loan amount and profile." },
      { step: 2, title: "Payment comparison", description: "Compare IO vs. fully amortizing payments and break-even." },
      { step: 3, title: "Application", description: "Apply with full documentation." },
      { step: 4, title: "Underwriting & appraisal", description: "Underwrite and appraise the property." },
      { step: 5, title: "Closing", description: "Sign and fund; IO period begins." },
    ],
    testimonials: [
      { name: "Brian K., Investor", text: "The IO period let me keep cash free for a second acquisition. I have a clear plan to refi before amortization kicks in." },
    ],
    faqs: [
      { question: "What happens after the IO period?", answer: "Payments increase to include principal amortization over the remaining term." },
      { question: "Are rates higher?", answer: "Often slightly higher than fully amortizing loans, depending on the program." },
      { question: "Who should consider IO?", answer: "Borrowers with strong income and a clear exit plan — not those stretching to qualify." },
      { question: "Are IO loans risky?", answer: "They carry payment-shock risk if income doesn't grow or a refinance isn't available. We model the post-IO payment before you commit." },
      { question: "Are IO loans available on investment properties?", answer: "Yes, on select investor and DSCR programs." },
    ],
    ctaText: "EXPLORE IO OPTIONS",
    ctaLink: "/contact",
  },
  {
    id: "reverse-mortgage",
    title: "Reverse Mortgage",
    subtitle: "Convert home equity into tax-free cash flow for eligible homeowners 62+",
    description:
      "A reverse mortgage lets homeowners 62+ access equity without monthly mortgage payments, with the loan repaid when the home is sold or the borrower passes.",
    longDescription:
      "A reverse mortgage (typically an FHA-insured HECM) allows homeowners 62 and older to convert equity into cash — as a lump sum, monthly payments, or a line of credit — without making monthly mortgage payments. The loan is repaid when the home is sold, the last borrower moves out permanently, or passes away. Borrowers must continue paying taxes, insurance, and maintenance. Counseling is required.",
    icon: "RotateCcw",
    benefits: [
      "No monthly mortgage payments required",
      "Access equity as lump sum, monthly, or line of credit",
      "Stay in your home",
      "Non-recourse — heirs aren't personally liable beyond the home's value",
      "Funds are generally tax-free (consult your advisor)",
      "FHA-insured HECM options available",
    ],
    features: [
      "Available to homeowners 62+",
      "HECM counseling required",
      "Must maintain taxes, insurance, and upkeep",
    ],
    idealFor: [
      "Homeowners 62+ with significant equity",
      "Retirees seeking supplemental income",
      "Seniors wanting to eliminate a mortgage payment",
      "Borrowers funding healthcare or living expenses",
    ],
    steps: [
      { step: 1, title: "Eligibility & counseling", description: "Confirm age/equity eligibility and complete required HECM counseling." },
      { step: 2, title: "Application", description: "Submit the application and supporting documentation." },
      { step: 3, title: "Appraisal", description: "An FHA appraisal establishes the home's value." },
      { step: 4, title: "Underwriting", description: "Financial assessment and underwriting." },
      { step: 5, title: "Closing & disbursement", description: "Close and choose your disbursement method." },
    ],
    testimonials: [
      { name: "Eleanor P., Retiree", text: "I eliminated my mortgage payment and set up a line of credit for emergencies. I can stay in my home and my heirs won't owe more than it's worth." },
    ],
    faqs: [
      { question: "Do I still own my home?", answer: "Yes — you retain title and stay in the home; the lender has a lien." },
      { question: "Who is eligible?", answer: "Homeowners 62+ with sufficient equity, and the home must be your primary residence." },
      { question: "Do I still pay taxes and insurance?", answer: "Yes — you must stay current on property taxes, homeowners insurance, and upkeep." },
      { question: "How is it repaid?", answer: "When the home is sold, the last borrower moves out permanently, or passes away. Non-recourse protection applies to heirs." },
      { question: "Is counseling required?", answer: "Yes — HECM counseling from a HUD-approved counselor is required before closing." },
    ],
    ctaText: "LEARN MORE",
    ctaLink: "/contact",
  },
  {
    id: "dscr",
    title: "DSCR Loans",
    subtitle: "Investment-property financing based on rental cash flow, not personal income",
    description:
      "DSCR loans qualify investment properties based on the property's debt service coverage ratio — rental income vs. mortgage payment — rather than personal income.",
    longDescription:
      "Debt Service Coverage Ratio (DSCR) loans are investor-focused. Qualification hinges on the property's rental income covering its mortgage payment (typically 1.0x–1.25x), not on W-2 income or tax returns. This makes them ideal for self-employed borrowers, real estate investors scaling portfolios, and properties held in LLCs. Rates are typically higher than conventional investment loans, and prepayment penalties are common.",
    icon: "Calculator",
    benefits: [
      "No personal income documentation required",
      "Qualify based on rental cash flow",
      "LLC and entity vesting allowed",
      "Scale your portfolio without income limits",
      "Short-term rental (Airbnb) income accepted on some programs",
      "Fast close times on many programs",
    ],
    features: [
      "DSCR ratio (rent ÷ PITI) drives approval",
      "No tax returns or W-2s required",
      "Entity vesting and non-warrantable condos allowed",
    ],
    idealFor: [
      "Real estate investors",
      "Self-employed borrowers",
      "Portfolio landlords",
      "Short-term rental operators",
    ],
    steps: [
      { step: 1, title: "Property & rent review", description: "Confirm market rent and calculate the DSCR ratio." },
      { step: 2, title: "Program selection", description: "Match to a DSCR lender based on LTV, credit, and reserves." },
      { step: 3, title: "Application", description: "Apply with property, entity, and rent documentation." },
      { step: 4, title: "Appraisal & underwriting", description: "Appraisal with rent schedule; DSCR-focused underwriting." },
      { step: 5, title: "Closing", description: "Sign and fund; investors can typically close in 21–30 days." },
    ],
    testimonials: [
      { name: "Raj S., Portfolio Investor", text: "I couldn't qualify conventionally after a big write-off year. DSCR got me into two more rentals in under a month each." },
    ],
    faqs: [
      { question: "What is a DSCR ratio?", answer: "Rental income divided by the property's total payment (PITI). Most programs want 1.0x or higher." },
      { question: "Do I need tax returns?", answer: "No — DSCR programs typically don't require personal income documentation." },
      { question: "Can I close in an LLC?", answer: "Yes — entity vesting is a standard feature of DSCR programs." },
      { question: "Are short-term rentals allowed?", answer: "Some programs accept STR income with documentation; others require long-term leases." },
      { question: "Are there prepayment penalties?", answer: "Often yes — typically a 1–5 year step-down. We disclose them upfront." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "bank-statement",
    title: "Bank Statement Loans",
    subtitle: "Qualify using bank statements instead of tax returns",
    description:
      "Bank statement loans let self-employed borrowers qualify using 12–24 months of bank statements rather than tax returns.",
    longDescription:
      "Bank statement loans are a self-employed borrower's alternative to full documentation. Underwriters calculate qualifying income by averaging deposits or applying an expense factor to 12–24 months of statements. They are ideal for business owners with heavy write-offs that understate taxable income. Rates are typically higher than conventional loans, and LTV limits may be lower.",
    icon: "FileText",
    benefits: [
      "No tax returns required",
      "Qualify based on actual cash flow",
      "Ideal for business owners with write-offs",
      "12- or 24-month statement options",
      "Personal or business statements accepted",
      "Available for purchase and refinance",
    ],
    features: [
      "Deposit averaging or expense-factor income calc",
      "Self-employed and 1099 borrowers welcome",
      "Higher rates than full-doc programs",
    ],
    idealFor: [
      "Self-employed borrowers",
      "Business owners with significant write-offs",
      "1099 commission earners",
      "Borrowers whose tax returns understate income",
    ],
    steps: [
      { step: 1, title: "Statement review", description: "Share 12–24 months of bank statements for a preliminary review." },
      { step: 2, title: "Income calculation", description: "We model qualifying income based on the lender's methodology." },
      { step: 3, title: "Application", description: "Submit the application and supporting documents." },
      { step: 4, title: "Underwriting & appraisal", description: "Underwrite and appraise the property." },
      { step: 5, title: "Closing", description: "Sign and fund." },
    ],
    testimonials: [
      { name: "Luis G., Contractor", text: "My write-offs made my tax returns look weak. The bank statement loan qualified me on what I actually deposit each month." },
    ],
    faqs: [
      { question: "How many months of statements do I need?", answer: "Usually 12 or 24 months, depending on the program." },
      { question: "Is business or personal income used?", answer: "Both are accepted; many programs average business deposits and apply an expense factor." },
      { question: "Are rates higher?", answer: "Yes — typically 0.75–2%+ higher than full-doc conventional loans." },
      { question: "Can I get a bank statement loan with a large down payment?", answer: "Yes, and stronger LTV can improve pricing and program availability." },
      { question: "Can I use it for investment properties?", answer: "Yes — investor and DSCR hybrid programs are available." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "pl-loans",
    title: "P&L Loans",
    subtitle: "Qualify with a profit-and-loss statement instead of tax returns",
    description:
      "P&L loans let self-employed borrowers qualify using a CPA-prepared profit-and-loss statement rather than full tax returns.",
    longDescription:
      "P&L loans are a lighter-documentation option for self-employed borrowers. Instead of full tax returns, underwriters rely on a year-to-date profit-and-loss statement (often CPA-prepared) plus a small set of supporting documents. They sit between bank statement loans and full documentation in terms of speed and requirements. Rates are higher than conventional, and LTV limits are typically 80–90%.",
    icon: "Calculator",
    benefits: [
      "No full tax returns required",
      "CPA-prepared P&L accepted",
      "Faster than full documentation in many cases",
      "Good fit for growing businesses",
      "Available for purchase and refinance",
      "Investor-friendly options exist",
    ],
    features: [
      "P&L statement drives income calculation",
      "Lighter documentation set",
      "Higher rates than full-doc programs",
    ],
    idealFor: [
      "Self-employed borrowers",
      "Business owners with clean books",
      "Borrowers with recent tax filings pending",
      "1099 and K-1 earners",
    ],
    steps: [
      { step: 1, title: "Documentation review", description: "Provide your P&L and supporting business documents." },
      { step: 2, title: "Income validation", description: "Underwriter reviews P&L and verifies revenue." },
      { step: 3, title: "Application", description: "Submit the application and program-specific docs." },
      { step: 4, title: "Underwriting & appraisal", description: "Underwrite and appraise." },
      { step: 5, title: "Closing", description: "Sign and fund." },
    ],
    testimonials: [
      { name: "Dana W., Agency Owner", text: "My CPA prepared a P&L and I qualified quickly without waiting on amended returns. It was a much smoother process than full doc." },
    ],
    faqs: [
      { question: "Who prepares the P&L?", answer: "A CPA or licensed tax professional is preferred; some lenders accept self-prepared P&Ls with supporting documentation." },
      { question: "How is this different from a bank statement loan?", answer: "P&L loans use a profit-and-loss statement; bank statement loans use deposit history. Some borrowers qualify more easily on one vs. the other." },
      { question: "Are rates higher than conventional?", answer: "Yes — expect pricing similar to or slightly below bank statement programs." },
      { question: "Can I use a P&L loan for an investment property?", answer: "Yes, on many investor programs." },
      { question: "What LTV is available?", answer: "Typically 80–90%, depending on program and credit." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "fix-and-flip",
    title: "Fix and Flip Loans",
    subtitle: "Short-term financing to acquire and renovate investment properties",
    description:
      "Fix and flip loans are short-term, asset-based loans that fund the purchase and renovation of a property to resell.",
    longDescription:
      "Fix and flip loans are short-term (typically 6–24 months), asset-based loans that cover purchase plus rehab costs. Qualification is driven by the property's after-repair value (ARV) and the borrower's experience, rather than personal income. Funds are drawn in stages as renovations progress. Most are interest-only and repaid via sale or refinance.",
    icon: "Hammer",
    benefits: [
      "Finances purchase plus renovation",
      "Qualification based on ARV and experience",
      "Interest-only payments during the project",
      "Draws released as work is completed",
      "Short terms (6–24 months)",
      "Fast close times on many programs",
    ],
    features: [
      "After-repair value (ARV) underwriting",
      "Rehab draws released in stages",
      "Interest-only, short-term structure",
    ],
    idealFor: [
      "Experienced flippers",
      "Investors acquiring distressed properties",
      "Real estate professionals",
      "Borrowers with a clear exit strategy",
    ],
    steps: [
      { step: 1, title: "Scope & ARV review", description: "Share the property, rehab scope, and ARV estimate." },
      { step: 2, title: "Loan sizing", description: "We size the loan against purchase price, rehab budget, and ARV." },
      { step: 3, title: "Application & appraisal", description: "Apply and complete the appraisal (often with ARV support)." },
      { step: 4, title: "Closing & draws", description: "Close, then draw rehab funds in stages as work is completed." },
      { step: 5, title: "Exit", description: "Sell or refinance to repay the loan." },
    ],
    testimonials: [
      { name: "Carlos M., Full-Time Investor", text: "The draws kept my rehab on schedule and I didn't tie up my own cash. Closed in 12 days on my last flip." },
    ],
    faqs: [
      { question: "How much can I borrow?", answer: "Typically up to 70–75% of ARV, plus a portion of rehab costs." },
      { question: "Do I need experience?", answer: "Most lenders prefer at least one completed flip; some allow first-timers with strong reserves." },
      { question: "How are draws handled?", answer: "Rehab funds are released in stages as work is completed and inspected." },
      { question: "What is the term?", answer: "Usually 6–24 months, interest-only." },
      { question: "What is the exit strategy?", answer: "Sale of the property or a refinance into long-term financing." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "bridge",
    title: "Bridge Loans",
    subtitle: "Short-term financing to bridge the gap between two transactions",
    description:
      "Bridge loans provide short-term capital to close on a new property before your current one sells, or to bridge timing gaps.",
    longDescription:
      "Bridge loans are short-term (typically 6–24 months) loans secured by real estate, used to bridge timing gaps — buying before selling, funding a down payment, or covering a short-term capital need. They are often interest-only and repaid when the bridge event resolves (sale, refinance, or long-term financing). Qualification can be asset-based, and rates are higher than long-term mortgages.",
    icon: "Link2",
    benefits: [
      "Buy before you sell",
      "Short-term capital for timing gaps",
      "Often interest-only",
      "Asset-based qualification options",
      "Fast close times",
      "Can be used for down payment gaps",
    ],
    features: [
      "Short-term (6–24 months) structure",
      "Secured by real estate",
      "Interest-only payments common",
    ],
    idealFor: [
      "Buyers who need to move before selling",
      "Investors with time-sensitive opportunities",
      "Borrowers awaiting a liquidity event",
      "Homeowners funding a new purchase before a sale closes",
    ],
    steps: [
      { step: 1, title: "Scenario review", description: "Confirm the bridge event and exit strategy." },
      { step: 2, title: "Loan sizing", description: "Size the loan against available equity and exit timeline." },
      { step: 3, title: "Application & appraisal", description: "Apply and complete the appraisal/valuation." },
      { step: 4, title: "Closing", description: "Sign and fund." },
      { step: 5, title: "Exit", description: "Repay via sale, refinance, or long-term financing." },
    ],
    testimonials: [
      { name: "The Hendersons", text: "We bought our new home before our old one sold. The bridge loan made the timing work, and we paid it off at closing." },
    ],
    faqs: [
      { question: "How long is a bridge loan?", answer: "Typically 6–24 months, depending on the exit timeline." },
      { question: "How is it repaid?", answer: "Usually from the sale of the existing property or a refinance into long-term financing." },
      { question: "Do I need income documentation?", answer: "Some bridge programs are asset-based; others require income. We'll match you to the right path." },
      { question: "Are rates higher?", answer: "Yes — bridge loans carry higher rates than long-term mortgages due to their short term and risk profile." },
      { question: "Can I use a bridge loan for an investment property?", answer: "Yes — bridge financing is common for time-sensitive investment purchases." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "private-hard-money",
    title: "Private and Hard Money Loans",
    subtitle: "Asset-based financing from private lenders for time-sensitive deals",
    description:
      "Private and hard money loans are short-term, asset-based loans from private lenders, used when speed and flexibility matter more than rate.",
    longDescription:
      "Hard money and private loans are short-term (often 6–24 months), asset-based loans funded by private investors or funds rather than banks. Qualification is driven primarily by the property's value and the borrower's exit strategy, with less emphasis on credit and income. They close quickly (sometimes in days) and are commonly used for distressed purchases, flips, and bridge scenarios. Rates and fees are higher than institutional loans.",
    icon: "Coins",
    benefits: [
      "Fast closings (often 7–14 days)",
      "Asset-based qualification",
      "Less emphasis on credit and income",
      "Flexible underwriting",
      "Good for distressed or unique properties",
      "Short-term, interest-only structures",
    ],
    features: [
      "Private/individual and fund lenders",
      "Value-based lending with clear exit",
      "Higher rates and points than institutional loans",
    ],
    idealFor: [
      "Investors with time-sensitive deals",
      "Borrowers who don't fit bank guidelines",
      "Distressed-property purchases",
      "Borrowers with a clear exit strategy",
    ],
    steps: [
      { step: 1, title: "Deal review", description: "Share the property, purchase price, and exit strategy." },
      { step: 2, title: "Term sheet", description: "Receive a term sheet with rate, points, and term." },
      { step: 3, title: "Application & valuation", description: "Apply and complete an appraisal or valuation." },
      { step: 4, title: "Closing", description: "Close quickly once docs are signed." },
      { step: 5, title: "Exit", description: "Repay via sale or refinance." },
    ],
    testimonials: [
      { name: "Victor A., Investor", text: "The bank said 45 days; my hard money lender closed in 9. That speed won me the deal." },
    ],
    faqs: [
      { question: "How fast can a hard money loan close?", answer: "Often 7–14 days, sometimes faster for simple files." },
      { question: "Do I need good credit?", answer: "Credit matters less; lenders focus on the property value and your exit strategy." },
      { question: "What are typical terms?", answer: "6–24 months, interest-only, with 2–5 points and rates higher than institutional loans." },
      { question: "What LTV is available?", answer: "Typically 60–70% of value, higher on strong deals." },
      { question: "Can I use hard money for a primary residence?", answer: "Some private lenders allow it, but most hard money is for investment/non-owner-occupied properties." },
    ],
    ctaText: "GET A TERM SHEET",
    ctaLink: "/contact",
  },
  {
    id: "itin",
    title: "ITIN Loans",
    subtitle: "Mortgage financing for borrowers who file taxes with an ITIN",
    description:
      "ITIN loans allow borrowers who file taxes with an Individual Taxpayer Identification Number — rather than a Social Security Number — to finance a home.",
    longDescription:
      "ITIN loans are mortgage programs for borrowers without a Social Security Number who file taxes using an ITIN. They typically require larger down payments (often 10–20%+), higher reserves, and alternative credit documentation. Rates are higher than conventional loans. These programs serve immigrant and non-resident borrowers who can document income and residency.",
    icon: "Globe",
    benefits: [
      "No Social Security Number required",
      "Qualify using an ITIN",
      "Alternative credit documentation accepted",
      "Purchase and refinance options",
      "Available in many states",
      "Builds toward future conventional financing",
    ],
    features: [
      "ITIN-based qualification",
      "Larger down payment requirements",
      "Alternative credit and income documentation",
    ],
    idealFor: [
      "ITIN filers",
      "Immigrant borrowers",
      "Borrowers without traditional credit",
      "Self-employed ITIN borrowers",
    ],
    steps: [
      { step: 1, title: "Eligibility review", description: "Confirm ITIN status, residency, and documentation." },
      { step: 2, title: "Pre-approval", description: "Get pre-approved with an ITIN lender." },
      { step: 3, title: "Documentation", description: "Provide ITIN, tax returns, income, and residency documents." },
      { step: 4, title: "Appraisal & underwriting", description: "Appraise and underwrite the file." },
      { step: 5, title: "Closing", description: "Sign and fund." },
    ],
    testimonials: [
      { name: "Marisol & Jose", text: "We filed with ITINs for years and thought we couldn't buy. They found a program and we closed with 15% down." },
    ],
    faqs: [
      { question: "What is an ITIN loan?", answer: "A mortgage program that allows borrowers who file taxes with an ITIN to qualify without a Social Security Number." },
      { question: "How much do I need to put down?", answer: "Typically 10–20%+, depending on the program and credit profile." },
      { question: "What documents are required?", answer: "ITIN, tax returns, proof of income, residency documentation, and bank statements." },
      { question: "Are rates higher?", answer: "Yes — ITIN loans are priced above conventional loans due to the added risk and documentation." },
      { question: "Can I refinance later?", answer: "Yes, once you build credit and meet conventional guidelines, refinancing is possible." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "commercial-5-plus",
    title: "Commercial 5+ Units",
    subtitle: "Financing for apartment buildings and mixed-use properties with 5+ units",
    description:
      "Commercial loans for residential properties with five or more units, mixed-use buildings, and other commercial real estate.",
    longDescription:
      "Properties with five or more residential units are financed as commercial real estate. Underwriting focuses on the property's net operating income (NOI) and debt service coverage ratio (DSCR), plus borrower experience and reserves. Loan terms are typically 5–10 years with longer amortization, and rates are higher than residential mortgages. We work with banks, credit unions, and commercial lenders.",
    icon: "Building2",
    benefits: [
      "Financing for 5+ unit residential and mixed-use",
      "Qualification based on property NOI and DSCR",
      "Terms typically 5–10 years with 25–30 year amortization",
      "Fixed and floating rate options",
      "Portfolio and agency lenders available",
      "Scales with your investment strategy",
    ],
    features: [
      "NOI and DSCR-driven underwriting",
      "Commercial appraisal and environmental review",
      "Recourse and non-recourse options",
    ],
    idealFor: [
      "Apartment building investors",
      "Mixed-use property owners",
      "Commercial real estate investors",
      "Portfolio landlords scaling up",
    ],
    steps: [
      { step: 1, title: "Property review", description: "Review rent rolls, operating statements, and T-12." },
      { step: 2, title: "Loan sizing", description: "Size the loan against NOI and DSCR targets." },
      { step: 3, title: "Application", description: "Submit the commercial application and sponsor documentation." },
      { step: 4, title: "Appraisal & underwriting", description: "Commercial appraisal, environmental review, and underwriting." },
      { step: 5, title: "Closing", description: "Sign and fund; loan is serviced." },
    ],
    testimonials: [
      { name: "Northside Holdings", text: "They placed our 12-unit with a commercial lender that understood our business plan and closed on schedule." },
    ],
    faqs: [
      { question: "Why are 5+ units commercial?", answer: "Agency and banking guidelines classify residential properties with five or more units as commercial real estate." },
      { question: "What DSCR is required?", answer: "Typically 1.20–1.25x, depending on the lender and property type." },
      { question: "What terms are available?", answer: "Commonly 5–10 year terms with 25–30 year amortization, fixed or floating." },
      { question: "Do I need a personal guarantee?", answer: "Many commercial loans require a personal guarantee; non-recourse options exist for stronger deals." },
      { question: "How long does closing take?", answer: "Typically 45–90 days due to appraisal, environmental, and legal work." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "construction",
    title: "Construction Loans",
    subtitle: "Financing to build a new home or fund a major renovation",
    description:
      "Construction loans fund the ground-up build of a new home or a major renovation, with draws released as work progresses.",
    longDescription:
      "Construction loans are short-term, interest-only loans that fund building costs in stages. Funds are drawn as construction milestones are completed and inspected. At completion, the loan typically converts to — or is refinanced into — a permanent mortgage. Qualification considers the builder, plans, budget, and borrower profile. Construction-to-permanent (C2P) loans combine both phases into one closing.",
    icon: "HardHat",
    benefits: [
      "Funds the build in stages as work progresses",
      "Interest-only during construction",
      "Construction-to-permanent (C2P) single-close options",
      "Draw schedules tied to completed milestones",
      "Available for custom builds and major renovations",
      "Can be paired with long-term financing",
    ],
    features: [
      "Draw-based funding with inspections",
      "Builder and plans review required",
      "C2P single-close option available",
    ],
    idealFor: [
      "Custom home builders",
      "Buyers building on owned land",
      "Homeowners planning major renovations",
      "Investors developing single-family properties",
    ],
    steps: [
      { step: 1, title: "Plan & budget review", description: "Review plans, specs, and the construction budget." },
      { step: 2, title: "Builder approval", description: "We vet the builder and contract." },
      { step: 3, title: "Appraisal", description: "As-completed appraisal and cost review." },
      { step: 4, title: "Closing & draws", description: "Close, then draws are released per inspection milestones." },
      { step: 5, title: "Completion & conversion", description: "At completion, loan converts to permanent or refinances." },
    ],
    testimonials: [
      { name: "The Riveras", text: "The construction-to-perm loan meant one closing. Draws were released on schedule and we moved in on time." },
    ],
    faqs: [
      { question: "How are draws released?", answer: "In stages tied to completed milestones, verified by inspection." },
      { question: "What is a construction-to-permanent loan?", answer: "A single-close loan that funds construction and then converts to a permanent mortgage at completion." },
      { question: "Do I need to own the land?", answer: "Often yes, though some programs allow a land purchase to be included." },
      { question: "What credit is required?", answer: "Typically 620–680+, depending on the program." },
      { question: "How long does construction financing last?", answer: "Commonly 12–18 months, depending on the build." },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
];