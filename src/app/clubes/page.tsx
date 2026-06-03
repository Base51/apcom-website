import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Clubes" });

export default function ClubesPage() {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <PageHeader
          as="h1"
          size="xl"
          eyebrow="Onde praticar"
          title="Clubes filiados"
          description="Encontra um clube perto de ti e começa a treinar."
        />
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-sm text-muted-foreground">
          TODO: listagem e filtros de clubes.
        </div>
      </Container>
    </Section>
  );
}
