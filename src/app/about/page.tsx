import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { ArrowRight, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "NYC Sewer & Drain Pro Solutions is a family-owned plumbing company founded in 2020 by Justin Fortis. Licensed, insured, BBB A+ rated.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      {/* ─────── Opener ─────── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 pt-24 md:pt-32 pb-12">
          <div className="flex items-center gap-3 mb-8 text-[12px] text-[#8B92A1]">
            <Link href="/" className="hover:text-[#0A1F3E] transition-colors">
              Home
            </Link>
            <span>·</span>
            <span className="text-[#0A1F3E]">About</span>
          </div>
          <h1 className="font-display font-light text-[52px] md:text-[88px] lg:text-[104px] leading-[0.95] tracking-[-0.035em] text-[#0A1F3E] max-w-[980px]">
            Est. {BUSINESS.establishedYear}.
            <br />
            Still picking
            <br />
            up the phone.
          </h1>
        </div>
      </section>

      {/* ─────── The Story ─────── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="font-display text-[11px] font-medium text-[#C5171E] tracking-[0.22em] uppercase mb-5">
                Our Story
              </div>
              <p className="font-display font-light text-[22px] md:text-[28px] leading-[1.35] text-[#0A1F3E] tracking-[-0.015em]">
                A family-run plumbing company that treats every call like it
                came from the neighbor next door.
              </p>
            </div>
            <div className="flex flex-col gap-7 text-[17px] leading-[1.8] text-[#2B2F36] max-w-[660px]">
              <p>
                NYC Sewer &amp; Drain Pro Solutions was founded in{" "}
                {BUSINESS.establishedYear} by{" "}
                <strong className="font-medium">{BUSINESS.owner}</strong>,
                after years of working jobs across Brooklyn and Queens and
                seeing too many homeowners get overcharged for work that
                didn&rsquo;t hold up. He started the company with a simple
                idea: answer the phone when people call, quote the work
                honestly, and do it right the first time.
              </p>
              <p>
                Today we serve all five boroughs of New York City and parts
                of Nassau County. We&rsquo;re fully licensed as master
                plumbers, bonded, and insured. We carry an A+ rating with the
                Better Business Bureau — not because we asked, but because
                our customers keep saying the same things in their reviews.
              </p>
              <p>
                We still run the business the same way Justin did on day one.
                No dispatcher reading off a script. No weekend surcharges.
                No &ldquo;we&rsquo;ll have to see it first&rdquo; without
                coming to actually see it. A real person, a written quote, a
                job done well.
              </p>
              <p>
                Whether you&rsquo;re dealing with a slow kitchen drain or a
                collapsed sewer line, we&rsquo;re the team you want on your
                block.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── Pull Quote ─────── */}
      <section className="w-full bg-[#FAF9F7] border-y border-[#EEEEEC]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
          <blockquote className="max-w-[1040px]">
            <p className="font-display font-light text-[36px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.025em] text-[#0A1F3E]">
              &ldquo;If I wouldn&rsquo;t do it in my own mother&rsquo;s
              kitchen, I&rsquo;m not doing it in yours.&rdquo;
            </p>
            <footer className="mt-10 flex items-center gap-4 text-[14px] text-[#5A5F6A]">
              <div className="w-10 h-px bg-[#0A1F3E]" />
              <span className="font-medium text-[#0A1F3E]">
                {BUSINESS.owner}
              </span>
              <span>Owner &amp; Master Plumber</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ─────── Values ─────── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[680px] mb-20">
            <h2 className="font-display font-light text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.025em] text-[#0A1F3E]">
              What we stand for.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <Value
              n="I"
              title="Honest quotes, written down."
              body="Before we touch a tool, you get a written quote for the full job — materials, labor, and timeline. If we can't quote it without seeing it, the visit is free."
            />
            <Value
              n="II"
              title="Good work, guaranteed."
              body="Every repair we do is backed by our written workmanship guarantee. If something we fixed breaks again under normal use, we come back and make it right."
            />
            <Value
              n="III"
              title="Show up when we say."
              body="We commit to arrival windows and we stick to them. If we're running late, you get a call — not a mystery gap in your day."
            />
          </div>
        </div>
      </section>

      {/* ─────── Numbers ─────── */}
      <section className="w-full bg-white border-t border-[#EEEEEC]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-20 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <Stat number={new Date().getFullYear() - BUSINESS.establishedYear + "+"} label="Years serving NYC" />
            <Stat number="6" label="Boroughs + Nassau" />
            <Stat number="A+" label="BBB rating" />
            <Stat number="24/7" label="Emergency calls" />
          </div>
        </div>
      </section>

      {/* ─────── CTA ─────── */}
      <section className="w-full bg-[#0A1F3E] text-white">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-20 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <h2 className="font-display font-light text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.025em] max-w-[640px]">
              Need a plumber who&rsquo;ll actually answer?
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 text-[28px] md:text-[32px] font-display font-light tabular tracking-[-0.015em] hover:text-[#C5171E] transition-colors"
              >
                <PhoneIcon className="w-6 h-6" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="group flex items-center gap-2 text-[14px] font-medium text-white/80 hover:text-white transition-colors"
              >
                <span className="relative">
                  Or contact us
                  <span className="absolute left-0 -bottom-[2px] h-px w-full bg-current" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Value({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-5 pt-8 border-t border-[#0A1F3E]">
      <div className="font-display text-[14px] font-medium text-[#C5171E] tabular tracking-[0.14em]">
        {n}
      </div>
      <h3 className="font-display font-normal text-[26px] leading-[1.15] text-[#0A1F3E] tracking-[-0.015em]">
        {title}
      </h3>
      <p className="text-[15px] leading-[1.7] text-[#5A5F6A]">{body}</p>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-display font-light text-[56px] md:text-[72px] leading-none tracking-[-0.03em] text-[#0A1F3E] tabular">
        {number}
      </div>
      <div className="text-[12px] font-medium text-[#8B92A1] tracking-[0.16em] uppercase">
        {label}
      </div>
    </div>
  );
}
