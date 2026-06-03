import Link from "next/link";
import { Trophy } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { buttonVariants } from "@/components/ui/button";

export function NationalTeam() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <PageHeader
            eyebrow="Seleção Nacional"
            title="Representa Portugal"
            description="A seleção nacional APCOM reúne os melhores praticantes do país para competições internacionais oficiais."
          />
          <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-foreground/20">
            <Trophy
              className="h-6 w-6 text-muted-foreground"
              aria-hidden="true"
            />
            <h3 className="mt-4 text-xl font-semibold">Categorias</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Equipas masculinas, femininas e de combate individual em formatos
              1v1, 5v5 e 16v16 — homologadas pelas federações internacionais.
            </p>
            <Link
              href="/desporto"
              className={`${buttonVariants({ variant: "outline", size: "sm" })} mt-6`}
            >
              Saber mais
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
