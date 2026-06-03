"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import logoLight from "@/assets/images/apcom_brand.png";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

let logoDark: StaticImageData | null = null;
try {
  // Loaded synchronously by the bundler when present; falls through if missing.
  // Replace with a static import once the dark variant is in place:
  //   import logoDark from "@/assets/images/apcom_brand_dark.png";
  logoDark = require("@/assets/images/apcom_brand_dark.png").default;
} catch {
  logoDark = null;
}

type LogoProps = {
  className?: string;
  priority?: boolean;
  /** Rendered height in px. Width scales from the source aspect ratio. */
  height?: number;
};

export function Logo({ className, priority = false, height = 36 }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Pre-mount, render the dark-on-light variant if available to avoid an
  // invisible white-on-white flash in light mode. Falls back to white logo.
  const src =
    mounted && resolvedTheme === "dark"
      ? logoLight
      : (logoDark ?? logoLight);

  return (
    <Image
      src={src}
      alt={SITE.fullName}
      height={height}
      priority={priority}
      placeholder="blur"
      className={cn("h-auto w-auto select-none", className)}
      style={{ height }}
    />
  );
}
