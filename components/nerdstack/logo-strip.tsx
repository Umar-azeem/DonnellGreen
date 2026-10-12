import {
  LayoutGrid,
  DollarSign,
  CreditCard,
  Building,
  Landmark,
  Home,
  Handshake,
  FileText,
  Truck,
  SquareStack,
  Rocket,
  Wallet,
  Briefcase,
  Store,
  ArrowLeftRight,
  Coins,
  TrendingUp,
  HandCoins,
  Globe,
  BarChart3,
  RefreshCw,
  PiggyBank,
  Banknote,
  Hammer,
  Percent,
  Calculator,
  Wrench,
  Users,
  Flag,
  Key,
} from "lucide-react";

const names = [
  "All Loan Programs",
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "All Loan Programs": LayoutGrid,
  Purchase: Home,
  "Rate & Term Refinance": RefreshCw,
  "Cash-Out Refinance": HandCoins,
  Conventional: Landmark,
  FHA: Building,
  VA: Flag,
  Jumbo: TrendingUp,
  HELOCs: CreditCard,
  "Interest-Only Products": Percent,
  "Reverse Mortgage": ArrowLeftRight,
  "DSCR Loans": BarChart3,
  "Bank Statement Loans": FileText,
  "P&L Loans": Calculator,
  "Fix & Flip Loans": Hammer,
  "Bridge Loans": ArrowLeftRight,
  "Private & Hard Money": Coins,
  "ITIN Loans": Globe,
  "Commercial 5+ Units": Store,
  "Construction Loans": Wrench,
};

export function LogoStrip() {
  const row = [...names, ...names];
  return (
    <section className="px-4 py-12">
      <p className="mb-8 text-center font-mono text-[10px] uppercase tracking-[0.75px] text-black">
        Loan programs for where you are and where you want to go
      </p>
      <div className="relative mx-auto max-w-[1000px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="ns-marquee flex w-max items-center gap-12">
          {row.map((n, i) => {
            const Icon = iconMap[n];
            return (
              <span
                key={i}
                className="flex items-center gap-2 whitespace-nowrap font-display text-[22px] font-normal tracking-[-0.5px] text-[#0F6D69]"
              >
                {Icon && <Icon className="h-5 w-5" />}
                {n}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}