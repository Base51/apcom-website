import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Contactos" });

export default function ContactosPage() {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <PageHeader
          as="h1"
          size="xl"
          eyebrow="Fala connosco"
          title="Contactos"
          description="Envia-nos uma mensagem ou contacta a direção."
        />
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-sm text-muted-foreground">
          TODO: formulário de contacto e direção.
        </div>
      </Container>
    </Section>
  );
}
