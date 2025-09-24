"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { GetMyShineDialog } from "@/components/booking/get-my-shine-dialog";
import { Menu } from "lucide-react";

const services = [
  {
    title: "Signature Full Detail",
    description:
      "Inside and out rejuvenation with ceramic sealant, interior deep clean, and gloss restoration.",
    href: "#services",
  },
  {
    title: "Interior Revival",
    description:
      "Steam, ozone, and fabric protection to reset your cabin to like-new comfort.",
    href: "#services",
  },
  {
    title: "Exterior Protection",
    description:
      "Foam wash, paint decontamination, and ceramic booster for lasting shine.",
    href: "#services",
  },
];

const navLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "FAQs", href: "#faqs" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background,box-shadow,backdrop-filter]",
        isScrolled
          ? "bg-surface/85 backdrop-blur border-b border-white/10 shadow-[0_12px_40px_rgba(15,52,87,0.08)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Logo className="shrink-0" variant="dark" />
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex items-center gap-1 text-sm font-medium text-ink/80">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-ink/80 hover:text-ink data-[state=open]:text-ink">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="rounded-3xl border border-border bg-surface-alt/95 p-4 shadow-[0_24px_65px_rgba(13,44,73,0.12)]">
                <ul className="grid gap-2">
                  {services.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={service.href}
                          className="block rounded-2xl p-4 transition hover:bg-muted/80"
                        >
                          <p className="text-base font-semibold text-ink">
                            {service.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navLinks.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-foreground/80 transition hover:bg-muted hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition hover:text-ink"
          >
            Call (800) 555-0123
          </Link>
          <GetMyShineDialog>
            <Button className="rounded-full px-6 text-sm font-semibold shadow-[0_18px_36px_rgba(18,136,254,0.25)]">
              Get My Shine
            </Button>
          </GetMyShineDialog>
        </div>
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-border/70"
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs border-l border-border/60 bg-surface">
              <SheetHeader>
                <SheetTitle>
                  <Logo variant="dark" />
                </SheetTitle>
                <SheetDescription className="text-left text-sm text-muted-foreground">
                  Premium detailing that meets you where you are.
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Services
                  </p>
                  <ul className="mt-3 space-y-2">
                    {services.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-2xl bg-muted/60 px-4 py-3 text-sm font-semibold text-ink"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Separator />
                <ul className="space-y-2">
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-2xl px-4 py-3 text-sm font-semibold text-ink hover:bg-muted/80"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Separator />
                <div className="flex flex-col gap-3">
                  <Link
                    href="tel:+18005550123"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Call us at (800) 555-0123
                  </Link>
                  <GetMyShineDialog
                    onOpenChange={(next) => {
                      if (next) {
                        setOpen(false);
                      }
                    }}
                  >
                    <Button className="w-full rounded-full text-sm font-semibold shadow-[0_18px_36px_rgba(18,136,254,0.25)]">
                      Book a Detail
                    </Button>
                  </GetMyShineDialog>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full rounded-full text-sm font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="#pros">Become a Pro</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
