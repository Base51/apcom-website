import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export function buildMetadata(
  overrides: Partial<Metadata> & { title?: string; description?: string } = {},
): Metadata {
  const title = overrides.title
    ? `${overrides.title} — ${SITE.name}`
    : `${SITE.name} — ${SITE.fullName}`;
  const description = overrides.description ?? SITE.description;

  return {
    title,
    description,
    openGraph: { title, description, url: SITE.url, siteName: SITE.name },
    ...overrides,
  };
}
