import Link from "next/link";
import { Calendar } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { EventCard } from "@/components/cards/EventCard";
import { buttonVariants } from "@/components/ui/button";
import { events } from "@/data/events";

export function Events() {
  const today = new Date().toISOString().split("T")[0];
  const upcoming = events
    .filter((e) => e.startDate >= today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .slice(0, 3);

  return (
    <Section className="bg-muted/30">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <PageHeader
            eyebrow="Agenda"
            title="Próximos eventos"
            description="Torneios, treinos abertos e workshops por todo o país."
          />
          <Link
            href="/eventos"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Ver agenda completa
          </Link>
        </div>

        {upcoming.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <Calendar
              className="h-10 w-10 text-muted-foreground"
              aria-hidden="true"
            />
            <h3 className="text-xl font-semibold">Sem eventos agendados</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Volta em breve — novos torneios e treinos abertos são anunciados regularmente.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
