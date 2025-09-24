import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, MapPin } from "lucide-react";

const serviceAreas = [
  {
    title: "Central Pinellas County",
    cities: [
      "St. Petersburg",
      "Gulfport",
      "Seminole",
      "Pinellas Park",
      "Safety Harbor",
      "Palm Harbor",
      "Dunedin",
    ],
  },
  {
    title: "Gulf Beach Cities",
    cities: [
      "St. Pete Beach",
      "Treasure Island",
      "Madeira Beach",
      "Redington Shores & North Redington",
      "Indian Shores & Indian Rocks Beach",
      "Belleair Beach & Belleair Shores",
      "Clearwater Beach",
    ],
  },
];

export function ServiceAreas() {
  return (
    <SectionWrapper id="service-areas" className="space-y-8">
      <div className="flex flex-col gap-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="w-fit rounded-full bg-primary/10 text-primary"
        >
          Pinellas County service area
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          Serving St. Pete through Palm Harbor
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="text-lg text-muted-foreground"
        >
          We detail across Pinellas County—from downtown St. Petersburg and
          Seminole to Palm Harbor, Dunedin, and every gulf-side beach town in
          between.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {serviceAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <p className="text-lg font-semibold text-ink">{area.title}</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {area.cities.map((city) => (
                <li key={city} className="flex items-start gap-2">
                  <Droplets className="mt-1 h-3 w-3 text-primary/60" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary/40 px-6 py-6 text-sm font-semibold text-primary hover:bg-primary/10"
      >
        Live outside Pinellas? Request coverage
      </Button>
    </SectionWrapper>
  );
}
