import type { ReactNode } from "react";

type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div data-reveal className="section-heading">
      <p className="section-label">
        {number} — {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}