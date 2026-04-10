/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BUSINESS, HERO_IMAGE } from "@/lib/business";
import { PhoneIcon, ArrowRight, Quote } from "@/components/Icons";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Services />
      <Approach />
      <Reviews />
      <ContactBlock />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-16 lg:gap-20 items-center">
          {/* Text column */}
          <div className="flex flex-col gap-10">
            <h1 className="font-display font-light text-[46px] md:text-[64px] lg:text-[74px] leading-[1] tracking-[-0.025em] text-[#0A1F3E]">
              All your plumbing
              <br />
              needs, one call away.
            </h1>
            <p className="text-[17px] md:text-[19px] leading-[1.6] text-[#5A5F6A] max-w-[540px]">
              Drain cleaning, sewer repair, water heaters, burst pipes, and
              24/7 emergencies — one licensed team for every plumbing job
              across the five boroughs and Nassau County. BBB A+ rated since
              2020.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href={BUSINESS.phoneHref}
                className="group flex items-center gap-4 bg-[#0A1F3E] hover:bg-[#C5171E] transition-colors duration-300 text-white pl-5 pr-7 py-4 rounded-full"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                  <PhoneIcon className="w-[18px] h-[18px]" />
                </span>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-medium text-white/70 tracking-[0.16em] uppercase">
                    Call 24/7
                  </span>
                  <span className="font-display text-[20px] font-medium tabular tracking-[-0.01em]">
                    {BUSINESS.phone}
                  </span>
                </span>
              </a>
              <Link
                href="/contact"
                className="group flex items-center gap-2 text-[15px] font-medium text-[#0A1F3E] hover:text-[#C5171E] transition-colors"
              >
                <span className="relative">
                  Request a written quote
                  <span className="absolute left-0 -bottom-[2px] h-px w-full bg-current transition-all" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Photo column */}
          <div className="relative w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F1EFE9]">
              <img
                src={HERO_IMAGE}
                alt="Plumbing fixture installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div className="font-display text-[13px] font-light tracking-[0.02em]">
                Brooklyn · {BUSINESS.establishedYear}
              </div>
              <div className="text-[11px] font-medium text-white/80 tracking-[0.14em] uppercase">
                Family-owned
              </div>
            </div>
            {/* Subtle dark scrim for caption legibility */}
            <div
              className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent 0%, rgba(10,31,62,0.7) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Services — no icons, no badges, no counters, just clean text cards
// ─────────────────────────────────────────────────────────────
const SERVICES = [
  {
    title: "Drain Cleaning",
    body: "Kitchen sinks, showers, tubs, and toilet drains cleared quickly. Camera inspection available on stubborn clogs.",
  },
  {
    title: "Sewer Line Repair",
    body: "Full main line repairs, root removal, and replacement. Trenchless cured-in-place options on request.",
  },
  {
    title: "Water Main Service",
    body: "Installation, repair, and replacement of water main lines. We handle all permits and inspections.",
  },
  {
    title: "Water Heaters",
    body: "Tank and tankless installation, repair, and replacement. All major brands, same-day service common.",
  },
  {
    title: "Leak &amp; Pipe Repair",
    body: "Burst pipes, slow leaks, faucet and fixture repair. Copper and PEX plumbing specialists.",
  },
  {
    title: "24/7 Emergency",
    body: "Backups, floods, and burst pipes. On-call around the clock, across New York City. No weekend surcharge.",
  },
];

function Services() {
  return (
    <section id="services" className="w-full bg-[#FAF9F7] border-y border-[#EEEEEC]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 items-start mb-16">
          <h2 className="font-display font-light text-[40px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#0A1F3E]">
            What we do.
          </h2>
          <p className="text-[17px] leading-[1.65] text-[#5A5F6A] max-w-[560px] lg:pt-5">
            We handle the residential and commercial jobs most plumbers turn
            down — from a kitchen clog at 2 AM to a full sewer line
            replacement. Every job quoted in writing before work begins, and
            backed by our workmanship guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EEEEEC] border border-[#EEEEEC]">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 p-8 md:p-10 bg-white min-h-[220px]"
            >
              <h3
                className="font-display font-normal text-[24px] text-[#0A1F3E] tracking-[-0.015em]"
                dangerouslySetInnerHTML={{ __html: service.title }}
              />
              <p
                className="text-[14.5px] leading-[1.65] text-[#5A5F6A]"
                dangerouslySetInnerHTML={{ __html: service.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Approach — prose-driven principles, no icons, no grid stats
// ─────────────────────────────────────────────────────────────
function Approach() {
  const principles = [
    {
      n: "I",
      title: "One price, in writing.",
      body: "Every job is quoted in writing before we start. No bait-and-switch, no surprise line items, no weekend surcharge. What we quote is what you pay.",
    },
    {
      n: "II",
      title: "Workmanship that outlasts us.",
      body: "Every repair is backed by our written guarantee. Parts are covered by manufacturer warranty, and major installations carry extended coverage from our team.",
    },
    {
      n: "III",
      title: "A real person, every call.",
      body: "Call at 3 AM on a holiday and someone will pick up. Justin runs the shop and answers when he can — otherwise you'll reach a dispatcher who knows the job, not a call center.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[620px] mb-20">
          <h2 className="font-display font-light text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.025em] text-[#0A1F3E]">
            How we work.
          </h2>
          <p className="mt-8 text-[17px] leading-[1.7] text-[#5A5F6A]">
            Three things guide every job we take. They&rsquo;re the reason our
            customers keep our number in their phone and hand it to their
            neighbors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {principles.map((p) => (
            <div
              key={p.n}
              className="flex flex-col gap-5 pt-8 border-t border-[#0A1F3E]"
            >
              <div className="font-display text-[14px] font-medium text-[#C5171E] tabular tracking-[0.14em]">
                {p.n}
              </div>
              <h3 className="font-display font-normal text-[26px] leading-[1.15] text-[#0A1F3E] tracking-[-0.015em]">
                {p.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#5A5F6A]">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-[#EEEEEC]">
          <p className="font-display font-light text-[22px] md:text-[28px] leading-[1.35] text-[#0A1F3E] tracking-[-0.015em] max-w-[640px]">
            Want to know more about the people behind the truck?
          </p>
          <Link
            href="/about"
            className="group flex items-center gap-2 text-[15px] font-medium text-[#0A1F3E] hover:text-[#C5171E] transition-colors shrink-0"
          >
            <span className="relative">
              Read our story
              <span className="absolute left-0 -bottom-[2px] h-px w-full bg-current" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Reviews — two quotes, no avatar circles, no star spam
// ─────────────────────────────────────────────────────────────
function Reviews() {
  const reviews = [
    {
      quote:
        "Burst pipe at 11 PM on a Saturday. Called Justin and his team was at my door in under 45 minutes. Fixed the pipe, cleaned up the mess, and charged what was on the written quote. Absolute lifesavers.",
      name: "James P.",
      area: "Park Slope, Brooklyn",
    },
    {
      quote:
        "Three plumbers quoted me for a sewer line replacement — all way more expensive and none would really explain what was wrong. These guys showed me the camera footage, talked through the options, and did the work at half the price. Done right.",
      name: "Anna K.",
      area: "Astoria, Queens",
    },
  ];

  return (
    <section className="w-full bg-[#0A1F3E] text-white">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[620px] mb-16">
          <h2 className="font-display font-light text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.025em] text-white">
            What our customers say.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7] text-white/70">
            Five stars across Google and the BBB. Here&rsquo;s a small sample
            of the notes we&rsquo;ve saved from the people who&rsquo;ve trusted
            us with their homes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="flex flex-col gap-8 pt-10 border-t border-white/15"
            >
              <Quote className="w-8 h-8 text-[#C5171E]" />
              <blockquote className="font-display font-light text-[22px] md:text-[26px] leading-[1.45] text-white tracking-[-0.01em]">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 text-[14px] text-white/60">
                <span className="font-medium text-white">{r.name}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span>{r.area}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Contact block — phone, hours, areas, single CTA
// ─────────────────────────────────────────────────────────────
function ContactBlock() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-14 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-display font-light text-[42px] md:text-[64px] leading-[1] tracking-[-0.03em] text-[#0A1F3E]">
              Ready when
              <br />
              you are.
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5A5F6A] max-w-[500px]">
              Call for emergency service any time, day or night. For
              non-urgent work, we&rsquo;re happy to walk you through a written
              quote over the phone — no obligation, no runaround.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-4 mt-4 group"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#C5171E] group-hover:bg-[#9F0F16] transition-colors text-white">
                <PhoneIcon className="w-5 h-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] font-medium text-[#8B92A1] tracking-[0.16em] uppercase">
                  Call 24/7
                </span>
                <span className="font-display text-[36px] md:text-[42px] font-light text-[#0A1F3E] tabular tracking-[-0.02em]">
                  {BUSINESS.phone}
                </span>
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-10 pt-2 lg:pt-6">
            <InfoRow label="Emergency">
              <span>{BUSINESS.hours.emergency}</span>
              <span className="text-[#8B92A1]"> · every day</span>
            </InfoRow>
            <InfoRow label="Regular hours">
              <span>{BUSINESS.hours.regular}</span>
              <br />
              <span>{BUSINESS.hours.saturday}</span>
            </InfoRow>
            <InfoRow label="Based in">
              <span>{BUSINESS.address.line1}</span>
            </InfoRow>
            <InfoRow label="Service areas">
              <span className="text-[#0A1F3E]">
                {BUSINESS.areas.join(" · ")}
              </span>
            </InfoRow>
            <InfoRow label="Credentials">
              <span>{BUSINESS.license}</span>
              <br />
              <span>{BUSINESS.bbb}</span>
            </InfoRow>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-8 pt-5 border-t border-[#EEEEEC]">
      <div className="font-display text-[11px] font-medium text-[#8B92A1] tracking-[0.18em] uppercase md:w-[170px] shrink-0 pt-[6px]">
        {label}
      </div>
      <div className="text-[15.5px] text-[#0A1F3E] leading-[1.65]">
        {children}
      </div>
    </div>
  );
}
