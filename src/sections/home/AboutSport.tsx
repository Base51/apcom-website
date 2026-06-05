import { Shield, Swords, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    icon: Swords,
    title: "Combate desportivo",
    description:
      "Confrontos regrados com armas de torneio, equipamento certificado e árbitros qualificados.",
  },
  {
    icon: Shield,
    title: "Segurança em primeiro",
    description:
      "Treino progressivo, proteção integral e regulamentos federativos internacionais.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Uma rede nacional de clubes, equipas e praticantes de todas as idades.",
  },
];

export function AboutSport() {
  return (
    <Section className="bg-muted/30">
      <Container className="flex flex-col gap-10">
        <PageHeader
          eyebrow="O desporto"
          title="O que é o combate medieval"
          description="Uma modalidade de combate completo inspirada nas técnicas históricas dos séculos XIII a XV."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="p-6 transition-all duration-200 hover:ring-foreground/20"
            >
              <CardHeader className="!px-0">
                <Icon
                  className="h-6 w-6 text-muted-foreground"
                  aria-hidden="true"
                />
                <CardTitle className="mt-2 text-xl font-semibold">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="!px-0 text-sm text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
