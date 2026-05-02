import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  /** "white" | "alt" | "dark" — controls section background */
  variant?: "white" | "alt" | "dark";
  /** Additional Tailwind classes */
  className?: string;
  children: ReactNode;
}

/**
 * Universal section container.
 * Enforces consistent vertical padding and max-width across all divisions.
 */
export default function SectionWrapper({
  id,
  variant = "white",
  className = "",
  children,
}: SectionWrapperProps) {
  const bg =
    variant === "alt"
      ? "bg-brand-alt-bg"
      : variant === "dark"
      ? "bg-brand-footer text-white"
      : "bg-white";

  return (
    <section id={id} className={`${bg} py-20 lg:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">{children}</div>
    </section>
  );
}
