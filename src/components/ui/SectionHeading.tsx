import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  index,
  label,
  title,
  sub,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-6 ${alignCls} ${className}`}>
      <div className="flex items-center gap-3">
        <span className="eyebrow text-gold/80">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-gold/70 to-transparent" />
        <span className="eyebrow text-white/50">{label}</span>
      </div>
      <h2 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {sub ? (
        <p className="max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
