"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.foreground/4),transparent_60%)]"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex max-w-3xl flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Shield className="h-4 w-4" aria-hidden="true" />
            Associação Portuguesa de Combate Medieval
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            O desporto de combate medieval em Portugal.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            Clubes, treinos e competições — uma comunidade nacional dedicada
            à prática segura e federada do combate histórico.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/clubes"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Encontra um clube
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/desporto"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Conhece o desporto
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
