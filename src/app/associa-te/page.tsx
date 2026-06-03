import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Associa-te" });

export default function AssociaTePage() {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <PageHeader
          as="h1"
          size="xl"
          eyebrow="Faz parte"
          title="Associa-te à APCOM"
          description="Adere à associação para competir, votar e aceder a eventos federados."
        />
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-sm text-muted-foreground">
          TODO: formulário de adesão e benefícios.
        </div>
      </Container>
    </Section>
  );
}
