import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Super Shines home"
      className={cn(
        "group relative inline-flex items-center overflow-visible text-lg font-semibold text-ink transition-transform hover:scale-[1.01]",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-x-[-22%] inset-y-[-45%] -z-10 animate-[pulse_5s_ease-in-out_infinite] rounded-[140px] bg-[conic-gradient(at_30%_30%,rgba(255,255,255,0.55)_0deg,rgba(72,163,254,0.75)_120deg,rgba(18,136,254,0.65)_210deg,rgba(242,154,5,0.6)_330deg,rgba(255,255,255,0.55)_360deg)] blur-2xl opacity-70" aria-hidden />
      <span className="pointer-events-none absolute inset-x-[-12%] inset-y-[-20%] -z-[5] rotate-6 rounded-[130px] bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.9),rgba(72,163,254,0.4)_50%,rgba(18,136,254,0)_75%)] opacity-80" aria-hidden />
      <span className="relative flex flex-col leading-[1.05] text-left">
        <span className="text-[1.45rem] font-display uppercase tracking-[0.26em] text-ink drop-shadow-[0_4px_12px_rgba(8,31,52,0.25)]">
          Super
        </span>
        <span className="text-[0.95rem] font-semibold uppercase tracking-[0.55em] text-primary drop-shadow-[0_4px_12px_rgba(8,31,52,0.25)]">
          Shines
        </span>
      </span>
    </Link>
  );
}
