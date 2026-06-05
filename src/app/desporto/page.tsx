import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Desporto" });

export default function DesportoPage() {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <PageHeader
          as="h1"
          size="xl"
          eyebrow="O desporto"
          title="Combate medieval"
          description="Regras, formatos de competição e equipamento federado."
        />
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-sm text-muted-foreground">
          TODO: descrição do desporto e formatos de combate.
        </div>
      </Container>
    </Section>
  );
}
