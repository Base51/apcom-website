import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Junta-te à APCOM
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground md:text-base">
            Faz parte da comunidade nacional do combate medieval. Acede a
            eventos federados, formações e à seleção nacional.
          </p>
          <Link
            href="/associa-te"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            Associa-te
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
