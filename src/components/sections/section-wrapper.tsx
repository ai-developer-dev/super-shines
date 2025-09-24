import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-6 py-16", className)}>
      {children}
    </section>
  );
}
