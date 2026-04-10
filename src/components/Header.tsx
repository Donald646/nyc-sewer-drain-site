"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS, NAV_ITEMS } from "@/lib/business";
import { LogoMark, PhoneIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#EEEEEC]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 h-[88px] flex items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center gap-3.5 group shrink-0"
          aria-label={BUSINESS.name + " — home"}
        >
          <div className="relative w-10 h-10 rounded-full border border-[#0A1F3E] flex items-center justify-center">
            <LogoMark className="w-[22px] h-[22px] text-[#0A1F3E]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[18px] font-medium text-[#0A1F3E] tracking-[-0.015em]">
              NYC Sewer &amp; Drain
            </span>
            <span className="mt-1 text-[10px] font-medium text-[#8B92A1] tracking-[0.18em] uppercase">
              Pro Solutions · Est. {BUSINESS.establishedYear}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[14px]">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={
                  "relative transition-colors " +
                  (active
                    ? "text-[#0A1F3E] font-semibold"
                    : "text-[#5A5F6A] hover:text-[#0A1F3E]")
                }
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-[#0A1F3E]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5 shrink-0">
          <div className="hidden md:flex items-center gap-2 text-[#5A5F6A] text-[12px] font-medium">
            <span className="relative flex h-[6px] w-[6px]">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#C5171E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#C5171E]" />
            </span>
            <span>Open 24/7</span>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="group flex items-center gap-2.5 text-[#0A1F3E] font-display text-[16px] md:text-[18px] font-medium tabular tracking-[-0.01em] hover:text-[#C5171E] transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>{BUSINESS.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
