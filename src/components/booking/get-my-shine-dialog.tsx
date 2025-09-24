"use client";

import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TOP_US_MANUFACTURERS } from "@/data/vehicle-makes";
import { cn } from "@/lib/utils";
import { Check, Loader2 } from "lucide-react";

export function GetMyShineDialog({
  children,
  className,
  onOpenChange,
}: {
  children: React.ReactNode;
  className?: string;
  onOpenChange?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const models = useMemo(() => {
    const found = TOP_US_MANUFACTURERS.find((item) => item.make === make);
    return found?.models ?? [];
  }, [make]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    setSubmitting(true);

    // Simulate async submit
    setTimeout(() => {
      console.table(payload);
      setSubmitting(false);
      setOpen(false);
      onOpenChange?.(false);
      setMake("");
      setModel("");
    }, 1200);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        onOpenChange?.(next);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn(
          "max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-border/60 bg-white/95 p-6 backdrop-blur-xl",
          className,
        )}
      >
        <DialogHeader className="space-y-2 text-left">
          <Badge className="rounded-full bg-primary/10 text-primary">Next up: Schedule</Badge>
          <DialogTitle className="text-2xl font-display uppercase tracking-[0.2em] text-ink">
            Lock in your shine
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Tell us about your vehicle and we&apos;ll match you with a certified detailer in your area.
          </p>
        </DialogHeader>
        <form className="mt-6 space-y-5" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" name="firstName" placeholder="Jordan" autoComplete="given-name" required />
            <Field label="Last name" name="lastName" placeholder="Ellis" autoComplete="family-name" required />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" autoComplete="tel" required />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="make">Vehicle make</Label>
              <select
                id="make"
                name="make"
                required
                value={make}
                onChange={(event) => {
                  setMake(event.target.value);
                  setModel("");
                }}
                className="h-11 w-full rounded-2xl border border-border bg-white px-4 text-sm font-medium text-ink shadow-[inset_0_1px_1px_rgba(12,40,72,0.08)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="" disabled>
                  Select make
                </option>
                {TOP_US_MANUFACTURERS.map((manufacturer) => (
                  <option key={manufacturer.make} value={manufacturer.make}>
                    {manufacturer.make}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <select
                id="model"
                name="model"
                required
                disabled={!make}
                value={model}
                onChange={(event) => setModel(event.target.value)}
                className="h-11 w-full rounded-2xl border border-border bg-white px-4 text-sm font-medium text-ink shadow-[inset_0_1px_1px_rgba(12,40,72,0.08)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:bg-muted/40"
              >
                <option value="" disabled>
                  {make ? "Select model" : "Select make first"}
                </option>
                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Vehicle year" name="year" type="number" min="1990" max={new Date().getFullYear() + 1} placeholder="2024" required />
            <Field label="ZIP code" name="zip" placeholder="90028" required autoComplete="postal-code" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Anything else we should know?</Label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Ceramic coated last year, needs a maintenance wash."
              className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink shadow-[inset_0_1px_1px_rgba(12,40,72,0.08)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              We reply within 45 minutes. By submitting, you agree to our terms and consent to receive updates.
            </p>
            <Button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-5 text-sm font-semibold shadow-[0_18px_36px_rgba(18,136,254,0.25)]"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit request
                  <Check className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
  min,
  max,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  min?: number | string;
  max?: number | string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        min={min}
        max={max}
        className="h-11 rounded-2xl border border-border bg-white px-4 text-sm font-medium text-ink shadow-[inset_0_1px_1px_rgba(12,40,72,0.08)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
