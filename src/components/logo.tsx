import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className, variant = "dark" }: LogoProps) {
  const superTextClasses = cn(
    "text-[1.45rem] font-display uppercase tracking-[0.26em] drop-shadow-[0_4px_12px_rgba(8,31,52,0.25)] transition-colors",
    variant === "dark" ? "text-ink" : "text-white",
  );

  const shinesTextClasses = cn(
    "text-[0.95rem] font-semibold uppercase tracking-[0.55em] drop-shadow-[0_4px_12px_rgba(8,31,52,0.25)] transition-colors",
    variant === "dark" ? "text-primary" : "text-[#b8e2ff]",
  );

  return (
    <Link
      href="/"
      aria-label="Super Shines home"
      className={cn(
        "group relative inline-flex items-center overflow-visible text-lg font-semibold transition-transform hover:scale-[1.01]",
        variant === "dark" ? "text-ink" : "text-white",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute inset-x-[-22%] inset-y-[-45%] -z-10 animate-[pulse_5s_ease-in-out_infinite] rounded-[140px] bg-[conic-gradient(at_30%_30%,rgba(255,255,255,0.45)_0deg,rgba(72,163,254,0.7)_140deg,rgba(18,136,254,0.55)_220deg,rgba(242,154,5,0.5)_320deg,rgba(255,255,255,0.45)_360deg)] blur-2xl opacity-50 transition-opacity group-hover:opacity-90" aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-x-[-12%] inset-y-[-20%] -z-[5] rotate-6 rounded-[130px] bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.85),rgba(72,163,254,0.35)_55%,rgba(18,136,254,0)_80%)] opacity-70 transition-opacity group-hover:opacity-95"
        aria-hidden
      />
      <span className="relative flex flex-col leading-[1.05] text-left">
        <span className={superTextClasses}>Super</span>
        <span className={shinesTextClasses}>Shines</span>
      </span>
    </Link>
  );
}
