import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NYC Sewer & Drain Pro Solutions. 24/7 emergency dispatch, (718) 500-8493. Serving all five boroughs and Nassau County.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full">
      {/* ─────── Opener ─────── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="flex items-center gap-3 mb-8 text-[12px] text-[#8B92A1]">
            <Link href="/" className="hover:text-[#0A1F3E] transition-colors">
              Home
            </Link>
            <span>·</span>
            <span className="text-[#0A1F3E]">Contact</span>
          </div>
          <h1 className="font-display font-light text-[52px] md:text-[88px] lg:text-[104px] leading-[0.95] tracking-[-0.035em] text-[#0A1F3E]">
            Get in touch.
          </h1>
          <p className="mt-8 text-[18px] md:text-[20px] leading-[1.65] text-[#5A5F6A] max-w-[640px]">
            Call us any time — day or night, weekend or holiday. For
            non-urgent work, use the form below and we&rsquo;ll get back to
            you within a few hours.
          </p>
        </div>
      </section>

      {/* ─────── Phone & Info | Form ─────── */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-16 lg:gap-24">
            {/* Info column */}
            <div className="flex flex-col gap-12">
              <a
                href={BUSINESS.phoneHref}
                className="group flex flex-col gap-3 pb-10 border-b border-[#EEEEEC]"
              >
                <div className="flex items-center gap-3 text-[11px] font-medium text-[#8B92A1] tracking-[0.2em] uppercase">
                  <span className="relative flex h-[6px] w-[6px]">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#C5171E] opacity-75 animate-ping" />
                    <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#C5171E]" />
                  </span>
                  Open Now · 24/7 Dispatch
                </div>
                <div className="font-display font-light text-[44px] md:text-[60px] leading-[1] tracking-[-0.025em] text-[#0A1F3E] group-hover:text-[#C5171E] transition-colors tabular">
                  {BUSINESS.phone}
                </div>
              </a>

              <InfoBlock
                icon={<ClockIcon className="w-[18px] h-[18px]" />}
                label="Hours"
                lines={[
                  <span key="e">
                    <span className="text-[#0A1F3E] font-medium">
                      Emergency:
                    </span>{" "}
                    {BUSINESS.hours.emergency}
                  </span>,
                  <span key="r">
                    <span className="text-[#0A1F3E] font-medium">
                      Regular:
                    </span>{" "}
                    {BUSINESS.hours.regular}
                  </span>,
                  <span key="s">
                    <span className="text-[#0A1F3E] font-medium">
                      Saturday:
                    </span>{" "}
                    {BUSINESS.hours.saturday}
                  </span>,
                ]}
              />

              <InfoBlock
                icon={<MailIcon className="w-[18px] h-[18px]" />}
                label="Email"
                lines={[
                  <a
                    key="e"
                    href={`mailto:${BUSINESS.email}`}
                    className="text-[#0A1F3E] hover:text-[#C5171E] transition-colors underline underline-offset-4 decoration-[#EEEEEC] hover:decoration-[#C5171E]"
                  >
                    {BUSINESS.email}
                  </a>,
                  <span
                    key="r"
                    className="text-[#8B92A1] text-[14px]"
                  >
                    Replies within 2 business hours
                  </span>,
                ]}
              />

              <InfoBlock
                icon={<PinIcon className="w-[18px] h-[18px]" />}
                label="Based in"
                lines={[
                  <span key="a">{BUSINESS.address.line1}</span>,
                  <span
                    key="mail"
                    className="text-[#8B92A1] text-[14px]"
                  >
                    Mailing: {BUSINESS.address.mail}
                  </span>,
                ]}
              />

              <div className="flex flex-col gap-4 pt-8 border-t border-[#EEEEEC]">
                <div className="font-display text-[11px] font-medium text-[#8B92A1] tracking-[0.2em] uppercase">
                  Service Areas
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {BUSINESS.areas.map((area) => (
                    <span
                      key={area}
                      className="text-[15px] text-[#0A1F3E]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form column */}
            <form className="flex flex-col gap-7 p-8 md:p-12 bg-[#FAF9F7] border border-[#EEEEEC]">
              <div className="flex flex-col gap-2">
                <h2 className="font-display font-light text-[32px] md:text-[40px] leading-[1.1] text-[#0A1F3E] tracking-[-0.02em]">
                  Request a written quote.
                </h2>
                <p className="text-[14px] text-[#5A5F6A]">
                  For non-emergencies. For emergency service, please call us
                  directly.
                </p>
              </div>

              <Field label="Your name" htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="w-full bg-transparent border-b border-[#D1D0CA] py-3 text-[16px] text-[#0A1F3E] placeholder:text-[#8B92A1] focus:outline-none focus:border-[#0A1F3E] transition-colors"
                  placeholder="Jane Smith"
                />
              </Field>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Field label="Phone" htmlFor="phone">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="w-full bg-transparent border-b border-[#D1D0CA] py-3 text-[16px] text-[#0A1F3E] placeholder:text-[#8B92A1] focus:outline-none focus:border-[#0A1F3E] transition-colors"
                    placeholder="(718) 555-0100"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="w-full bg-transparent border-b border-[#D1D0CA] py-3 text-[16px] text-[#0A1F3E] placeholder:text-[#8B92A1] focus:outline-none focus:border-[#0A1F3E] transition-colors"
                    placeholder="jane@example.com"
                  />
                </Field>
              </div>
              <Field label="Borough / area" htmlFor="area">
                <select
                  id="area"
                  name="area"
                  className="w-full bg-transparent border-b border-[#D1D0CA] py-3 text-[16px] text-[#0A1F3E] focus:outline-none focus:border-[#0A1F3E] transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your area
                  </option>
                  {BUSINESS.areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="What do you need?" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-[#D1D0CA] py-3 text-[16px] text-[#0A1F3E] placeholder:text-[#8B92A1] focus:outline-none focus:border-[#0A1F3E] transition-colors resize-none"
                  placeholder="A brief description of the job — we'll follow up with questions."
                />
              </Field>
              <button
                type="submit"
                className="mt-4 self-start flex items-center gap-3 bg-[#0A1F3E] hover:bg-[#C5171E] transition-colors duration-300 text-white px-8 py-4 rounded-full font-display text-[15px] font-medium tracking-[-0.005em]"
              >
                Send request
                <span
                  className="inline-block w-6 h-px bg-white"
                  aria-hidden
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─────── Emergency band ─────── */}
      <section className="w-full bg-[#FAF9F7] border-y border-[#EEEEEC]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-[640px]">
              <div className="font-display text-[11px] font-medium text-[#C5171E] tracking-[0.22em] uppercase">
                Emergency?
              </div>
              <p className="font-display font-light text-[24px] md:text-[36px] leading-[1.2] tracking-[-0.02em] text-[#0A1F3E]">
                Burst pipe, backup, or flood? Don&rsquo;t use the form — call
                us directly.
              </p>
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-4 bg-[#C5171E] hover:bg-[#9F0F16] transition-colors text-white pl-5 pr-8 py-4 rounded-full"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15">
                <PhoneIcon className="w-[18px] h-[18px]" />
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-medium text-white/80 tracking-[0.16em] uppercase">
                  Call 24/7
                </span>
                <span className="font-display text-[22px] font-medium tabular tracking-[-0.01em]">
                  {BUSINESS.phone}
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoBlock({
  icon,
  label,
  lines,
}: {
  icon: React.ReactNode;
  label: string;
  lines: React.ReactNode[];
}) {
  return (
    <div className="flex flex-col gap-4 pt-8 border-t border-[#EEEEEC]">
      <div className="flex items-center gap-3 text-[#5A5F6A]">
        <span className="text-[#0A1F3E]">{icon}</span>
        <div className="font-display text-[11px] font-medium text-[#8B92A1] tracking-[0.2em] uppercase">
          {label}
        </div>
      </div>
      <div className="flex flex-col gap-1 text-[16px] leading-[1.6] text-[#0A1F3E]">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="font-display text-[11px] font-medium text-[#8B92A1] tracking-[0.18em] uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
