import type { ReactNode } from "react";

type TooltipProps = {
  content: string;
  children: ReactNode;
};

export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-56 -translate-x-1/2 rounded-full border border-black/10 bg-[#fffaf3] px-3 py-2 text-xs text-[#111111] opacity-0 shadow-xl transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
        {content}
      </span>
    </span>
  );
}