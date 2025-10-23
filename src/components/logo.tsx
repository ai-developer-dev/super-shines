import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Super Shines home"
      className={cn(
        "relative inline-flex items-center transition-transform hover:scale-105",
        className,
      )}
    >
      <Image
        src="/images/super-shines-logo.png"
        alt="Super Shines Auto Detailing"
        width={200}
        height={80}
        priority
        className={cn(
          "h-auto w-auto transition-opacity",
          variant === "light" && "brightness-0 invert",
        )}
        style={{ maxWidth: "200px", height: "auto" }}
      />
    </Link>
  );
}
