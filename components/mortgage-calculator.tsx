"use client";

import { useMemo, useState } from "react";

interface CalcInputs {
  homePrice: number;
  downPayment: number;
  downPaymentMode: "percent" | "dollar";
  loanTerm: number;
  interestRate: number;
  propertyTax: number; // annual
  homeInsurance: number; // annual
  hoa: number; // monthly
  pmiRate: number; // annual % of loan
}

const DEFAULTS: CalcInputs = {
  homePrice: 450000,
  downPayment: 20,
  downPaymentMode: "percent",
  loanTerm: 30,
  interestRate: 6.5,
  propertyTax: 5400,
  homeInsurance: 1800,
  hoa: 0,
  pmiRate: 0.5,
};

const currency = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

const currency2 = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

/** Standard amortizing monthly payment (P&I). */
function monthlyPI(principal: number, annualRate: number, years: number) {
  if (principal <= 0 || years <= 0) return 0;
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
}

/** Build a yearly amortization summary (for the table). */
function amortizationSchedule(
  principal: number,
  annualRate: number,
  years: number
) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const payment = monthlyPI(principal, annualRate, years);
  let balance = principal;
  let totalInterest = 0;
  const rows: {
    year: number;
    principalPaid: number;
    interestPaid: number;
    balance: number;
  }[] = [];

  for (let year = 1; year <= years; year++) {
    let yearPrincipal = 0;
    let yearInterest = 0;
    for (let m = 0; m < 12 && balance > 0; m++) {
      const interest = balance * r;
      let principalPart = payment - interest;
      if (principalPart > balance) principalPart = balance;
      balance -= principalPart;
      yearPrincipal += principalPart;
      yearInterest += interest;
    }
    totalInterest += yearInterest;
    rows.push({
      year,
      principalPaid: yearPrincipal,
      interestPaid: yearInterest,
      balance: Math.max(balance, 0),
    });
  }
  return { rows, totalInterest, payment };
}

export default function MortgageCalculator() {
  const [inputs, setInputs] = useState<CalcInputs>(DEFAULTS);
  const [showSchedule, setShowSchedule] = useState(false);

  const set = <K extends keyof CalcInputs>(key: K, value: CalcInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const results = useMemo(() => {
    const loanAmount =
      inputs.downPaymentMode === "percent"
        ? inputs.homePrice * (1 - inputs.downPayment / 100)
        : Math.max(inputs.homePrice - inputs.downPayment, 0);

    const pi = monthlyPI(loanAmount, inputs.interestRate, inputs.loanTerm);
    const monthlyTax = inputs.propertyTax / 12;
    const monthlyIns = inputs.homeInsurance / 12;
    const monthlyHoa = inputs.hoa;

    // PMI only when LTV > 80%
    const ltv = inputs.homePrice > 0 ? loanAmount / inputs.homePrice : 0;
    const pmiMonthly =
      ltv > 0.8 ? (loanAmount * (inputs.pmiRate / 100)) / 12 : 0;

    const totalMonthly = pi + monthlyTax + monthlyIns + monthlyHoa + pmiMonthly;
    const { totalInterest, rows } = amortizationSchedule(
      loanAmount,
      inputs.interestRate,
      inputs.loanTerm
    );

    return {
      loanAmount,
      pi,
      monthlyTax,
      monthlyIns,
      monthlyHoa,
      pmiMonthly,
      totalMonthly,
      totalInterest,
      totalCost: loanAmount + totalInterest,
      ltv,
      rows,
    };
  }, [inputs]);

  const downPercent =
    inputs.homePrice > 0
      ? (inputs.downPaymentMode === "percent"
          ? inputs.downPayment
          : (inputs.downPayment / inputs.homePrice) * 100)
      : 0;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---------------- INPUTS ---------------- */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Mortgage Calculator
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Estimate your monthly payment, including taxes, insurance, HOA, and
            PMI.
          </p>

          <div className="mt-6 space-y-5">
            {/* Home price */}
            <Field
              label="Home Price"
              prefix="$"
              value={inputs.homePrice}
              onChange={(v) => set("homePrice", v)}
            />

            {/* Down payment */}
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Down Payment
                </label>
                <div className="flex overflow-hidden rounded-md border border-slate-200 text-xs">
                  <button
                    type="button"
                    onClick={() => set("downPaymentMode", "percent")}
                    className={`px-2.5 py-1 ${
                      inputs.downPaymentMode === "percent"
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600"
                    }`}
                  >
                    %
                  </button>
                  <button
                    type="button"
                    onClick={() => set("downPaymentMode", "dollar")}
                    className={`px-2.5 py-1 ${
                      inputs.downPaymentMode === "dollar"
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600"
                    }`}
                  >
                    $
                  </button>
                </div>
              </div>
              <Field
                label=""
                prefix={inputs.downPaymentMode === "percent" ? "%" : "$"}
                value={inputs.downPayment}
                onChange={(v) => set("downPayment", v)}
              />
              <p className="mt-1 text-xs text-slate-500">
                {downPercent.toFixed(1)}% down ·{" "}
                {currency(
                  inputs.downPaymentMode === "percent"
                    ? inputs.homePrice * (inputs.downPayment / 100)
                    : inputs.downPayment
                )}{" "}
                cash
              </p>
            </div>

            {/* Term + rate */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Loan Term
                </label>
                <select
                  value={inputs.loanTerm}
                  onChange={(e) => set("loanTerm", Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                >
                  <option value={10}>10 years</option>
                  <option value={15}>15 years</option>
                  <option value={20}>20 years</option>
                  <option value={25}>25 years</option>
                  <option value={30}>30 years</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Interest Rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    value={inputs.interestRate}
                    onChange={(e) =>
                      set("interestRate", Number(e.target.value))
                    }
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pr-7 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                    %
                  </span>
                </div>
              </div>
            </div>

            {/* Taxes / insurance / HOA / PMI */}
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-3">
              <summary className="cursor-pointer select-none text-sm font-medium text-slate-700">
                Taxes, Insurance & Other Costs
              </summary>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Property Tax (annual)"
                  prefix="$"
                  value={inputs.propertyTax}
                  onChange={(v) => set("propertyTax", v)}
                />
                <Field
                  label="Home Insurance (annual)"
                  prefix="$"
                  value={inputs.homeInsurance}
                  onChange={(v) => set("homeInsurance", v)}
                />
                <Field
                  label="HOA (monthly)"
                  prefix="$"
                  value={inputs.hoa}
                  onChange={(v) => set("hoa", v)}
                />
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    PMI Rate (annual %)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.05"
                      value={inputs.pmiRate}
                      onChange={(e) =>
                        set("pmiRate", Number(e.target.value))
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pr-7 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      %
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Applied only when LTV &gt; 80%.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* ---------------- RESULTS ---------------- */}
        <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <p className="text-sm text-slate-400">Estimated Monthly Payment</p>
          <p className="mt-1 text-4xl font-semibold tracking-tight">
            {currency2(results.totalMonthly)}
          </p>

          {/* Breakdown bar */}
          <div className="mt-6">
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-800">
              <Segment
                value={results.pi}
                total={results.totalMonthly}
                color="bg-emerald-400"
              />
              <Segment
                value={results.monthlyTax}
                total={results.totalMonthly}
                color="bg-sky-400"
              />
              <Segment
                value={results.monthlyIns}
                total={results.totalMonthly}
                color="bg-amber-400"
              />
              <Segment
                value={results.pmiMonthly}
                total={results.totalMonthly}
                color="bg-rose-400"
              />
              <Segment
                value={results.monthlyHoa}
                total={results.totalMonthly}
                color="bg-violet-400"
              />
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              <LegendRow
                color="bg-emerald-400"
                label="Principal & Interest"
                value={currency2(results.pi)}
              />
              <LegendRow
                color="bg-sky-400"
                label="Property Tax"
                value={currency2(results.monthlyTax)}
              />
              <LegendRow
                color="bg-amber-400"
                label="Home Insurance"
                value={currency2(results.monthlyIns)}
              />
              {results.pmiMonthly > 0 && (
                <LegendRow
                  color="bg-rose-400"
                  label="PMI"
                  value={currency2(results.pmiMonthly)}
                />
              )}
              {results.monthlyHoa > 0 && (
                <LegendRow
                  color="bg-violet-400"
                  label="HOA"
                  value={currency2(results.monthlyHoa)}
                />
              )}
            </ul>
          </div>

          {/* Loan summary */}
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-800 pt-4 text-sm">
            <Summary label="Loan Amount" value={currency(results.loanAmount)} />
            <Summary label="LTV" value={`${(results.ltv * 100).toFixed(1)}%`} />
            <Summary
              label="Total Interest"
              value={currency(results.totalInterest)}
            />
            <Summary label="Total Cost" value={currency(results.totalCost)} />
          </div>

          <button
            type="button"
            onClick={() => setShowSchedule((s) => !s)}
            className="mt-6 w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
          >
            {showSchedule ? "Hide" : "Show"} Amortization Schedule
          </button>

          <a
            href="/contact"
            className="mt-3 block w-full rounded-lg border border-slate-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get Pre-Approved
          </a>
        </div>
      </div>

      {/* ---------------- AMORTIZATION TABLE ---------------- */}
      {showSchedule && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Yearly Amortization
            </h3>
            <p className="text-xs text-slate-500">
              Principal vs. interest paid each year, and remaining balance.
            </p>
          </div>
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-3">Year</th>
                  <th className="px-6 py-3">Principal Paid</th>
                  <th className="px-6 py-3">Interest Paid</th>
                  <th className="px-6 py-3">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {results.rows.map((row) => (
                  <tr key={row.year} className="hover:bg-slate-50">
                    <td className="px-6 py-3 font-medium text-slate-900">
                      {row.year}
                    </td>
                    <td className="px-6 py-3 text-emerald-600">
                      {currency(row.principalPaid)}
                    </td>
                    <td className="px-6 py-3 text-rose-600">
                      {currency(row.interestPaid)}
                    </td>
                    <td className="px-6 py-3 text-slate-700">
                      {currency(row.balance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-slate-400">
        This calculator provides estimates only and is not a loan offer or
        commitment to lend. Actual payments may vary based on lender fees,
        escrow requirements, and program specifics.
      </p>
    </div>
  );
}

/* ---------------- Small presentational helpers ---------------- */

function Field({
  label,
  value,
  onChange,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
}) {
  return (
    <div>
      {label && (
        <label className="mb-1 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full rounded-lg border border-slate-200 bg-white py-2 pr-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 ${
            prefix ? "pl-7" : "pl-3"
          }`}
        />
      </div>
    </div>
  );
}

function LegendRow({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-slate-300">
        <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
        {label}
      </span>
      <span className="font-medium text-white">{value}</span>
    </li>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-slate-400">{label}</p>
      <p className="font-medium text-white">{value}</p>
    </div>
  );
}

function Segment({
  value,
  total,
  color,
}: {
  value: number;
  total: number;
  color: string;
}) {
  if (value <= 0 || total <= 0) return null;
  const width = (value / total) * 100;
  return <div className={color} style={{ width: `${width}%` }} />;
}