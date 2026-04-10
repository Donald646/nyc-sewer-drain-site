import Link from "next/link";
import { BUSINESS, NAV_ITEMS } from "@/lib/business";
import { LogoMark } from "./Icons";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#EEEEEC]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] gap-12 pb-14 border-b border-[#EEEEEC]">
          <div className="flex flex-col gap-5 max-w-[440px]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#0A1F3E] flex items-center justify-center">
                <LogoMark className="w-[20px] h-[20px] text-[#0A1F3E]" />
              </div>
              <span className="font-display text-[18px] font-medium text-[#0A1F3E] tracking-[-0.015em]">
                NYC Sewer &amp; Drain
              </span>
            </div>
            <p className="text-[14px] leading-[1.65] text-[#5A5F6A]">
              A family-owned plumbing company serving New York City and Nassau
              County since {BUSINESS.establishedYear}. Licensed, insured, and
              on call around the clock.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="font-display text-[22px] font-medium text-[#0A1F3E] hover:text-[#C5171E] transition-colors tabular tracking-[-0.01em] mt-1"
            >
              {BUSINESS.phone}
            </a>
            <div className="text-[13px] text-[#5A5F6A] leading-relaxed">
              {BUSINESS.address.line1}
              <br />
              {BUSINESS.hours.emergency} · emergency dispatch
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-[11px] font-medium text-[#0A1F3E] tracking-[0.2em] uppercase">
              Navigate
            </h3>
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[14px] text-[#5A5F6A] hover:text-[#0A1F3E] transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-[11px] font-medium text-[#0A1F3E] tracking-[0.2em] uppercase">
              Service Areas
            </h3>
            <div className="flex flex-col gap-3">
              {BUSINESS.areas.map((area) => (
                <span key={area} className="text-[14px] text-[#5A5F6A]">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-8 text-[12px] text-[#8B92A1]">
          <div>
            © {new Date().getFullYear()} {BUSINESS.fullName}. All rights
            reserved.
          </div>
          <div>
            {BUSINESS.license} · {BUSINESS.bbb}
          </div>
        </div>
      </div>
    </footer>
  );
}
