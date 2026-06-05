import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Event } from "@/types/event";

const CATEGORY_LABELS: Record<Event["category"], string> = {
  torneio: "Torneio",
  treino: "Treino",
  workshop: "Workshop",
  encontro: "Encontro",
};

function formatDateRange(startDate: string, endDate?: string): string {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("pt-PT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return endDate ? `${fmt(startDate)} – ${fmt(endDate)}` : fmt(startDate);
}

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col gap-0 p-0 transition-all duration-200 hover:ring-foreground/20">
      <CardHeader className="flex flex-col gap-3 p-6 pb-4">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            {CATEGORY_LABELS[event.category]}
          </span>
        </div>
        <CardTitle className="text-xl font-semibold leading-snug">
          {event.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 p-6 pt-0">
        {event.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {event.description}
          </p>
        )}
        <dl className="mt-1 flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
            <dt className="sr-only">Data</dt>
            <dd>{formatDateRange(event.startDate, event.endDate)}</dd>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <dt className="sr-only">Local</dt>
            <dd>{event.location}</dd>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 shrink-0" aria-hidden="true" />
            <dt className="sr-only">Organizador</dt>
            <dd>{event.organizer}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
