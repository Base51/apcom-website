import Link from "next/link";
import { MapPin, Mail, ClipboardCheck } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: MapPin,
    title: "Encontra um clube",
    description: "Consulta o mapa nacional e escolhe o clube mais próximo.",
  },
  {
    icon: Mail,
    title: "Contacta-os",
    description: "Marca um treino experimental — todos os clubes recebem novos praticantes.",
  },
  {
    icon: ClipboardCheck,
    title: "Associa-te",
    description: "Inscreve-te na APCOM para competir e aceder a eventos federados.",
  },
];

export function HowToStart() {
  return (
    <Section>
      <Container className="flex flex-col gap-10">
        <PageHeader
          eyebrow="Começa hoje"
          title="Como começar a praticar"
          description="Três passos simples para fazeres parte da comunidade APCOM."
        />
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-foreground/20"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                  {index + 1}
                </span>
                <Icon
                  className="h-5 w-5 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
        <div>
          <Link
            href="/clubes"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Ver todos os clubes
          </Link>
        </div>
      </Container>
    </Section>
  );
}
