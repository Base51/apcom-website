import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";

export function Clubs() {
  return (
    <Section>
      <Container className="flex flex-col gap-8">
        <PageHeader
          eyebrow="Onde praticar"
          title="Clubes filiados"
          description="Encontra um clube perto de ti para começar a treinar combate medieval."
        />
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-sm text-muted-foreground">
          TODO: grelha de clubes (cards reutilizáveis).
        </div>
      </Container>
    </Section>
  );
}
