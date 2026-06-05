import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & { id?: string };

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-12 md:py-16 lg:py-24", className)}
      {...props}
    />
  );
}
