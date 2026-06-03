import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { mainNav } from "@/data/navigation";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo height={40} />
          <p className="max-w-sm text-sm text-muted-foreground">
            {SITE.fullName}
          </p>
        </div>

        <nav
          className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3"
          aria-label="Footer"
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
      </Container>
      <Container className="mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.fullName}
      </Container>
    </footer>
  );
}
