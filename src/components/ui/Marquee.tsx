"use client";

import type { ReactNode } from "react";

/**
 * Cinta infinita (marquee) en CSS puro. Duplica los hijos para un loop sin saltos.
 */
export default function Marquee({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {children}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {children}
      </div>
    </div>
  );
}
