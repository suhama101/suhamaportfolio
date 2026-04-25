type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4d433a] sm:text-base">
        {description}
      </p>
    </div>
  );
}