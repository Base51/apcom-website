import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { EventCard } from "@/components/cards/EventCard";
import { buildMetadata } from "@/lib/seo";
import { events } from "@/data/events";

export const metadata: Metadata = buildMetadata({ title: "Eventos" });

export default function EventosPage() {
  const sorted = [...events].sort((a, b) =>
    a.startDate.localeCompare(b.startDate)
  );

  return (
    <Section>
      <Container className="flex flex-col gap-10">
        <PageHeader
          as="h1"
          size="xl"
          eyebrow="Agenda"
          title="Eventos"
          description="Torneios, treinos abertos e workshops por todo o país."
        />

        {sorted.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Sem eventos disponíveis de momento.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
