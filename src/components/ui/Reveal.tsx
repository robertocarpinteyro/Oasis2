"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Etiqueta semántica del contenedor. */
  as?: "div" | "section" | "li" | "article" | "span";
  y?: number;
};

/**
 * Animación de entrada al hacer scroll. Respeta prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  y = 28,
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
