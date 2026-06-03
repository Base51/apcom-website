import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Associação" });

export default function AssociacaoPage() {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <PageHeader
          as="h1"
          size="xl"
          eyebrow="Quem somos"
          title="A APCOM"
          description="Missão, estatutos e órgãos sociais da Associação Portuguesa de Combate Medieval."
        />
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-sm text-muted-foreground">
          TODO: história, missão e estatutos.
        </div>
      </Container>
    </Section>
  );
}
