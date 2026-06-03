"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight transition-colors duration-200 hover:text-foreground"
          aria-label={SITE.fullName}
        >
          {SITE.name}
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm md:flex"
          aria-label="Principal"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Abrir menu"
                  className="md:hidden"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{SITE.name}</SheetTitle>
              </SheetHeader>
              <nav
                className="mt-6 flex flex-col gap-1 px-4"
                aria-label="Mobile"
              >
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-base text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
