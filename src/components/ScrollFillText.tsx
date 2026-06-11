"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollFillText({
  text,
  className = "",
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.55"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;
          return (
            <Word key={`${word}-${i}`} word={word} range={[start, end]} progress={scrollYProgress} />
          );
        })}
      </Tag>
    </div>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, [
    "var(--color-text-muted)",
    "var(--color-accent)",
  ]);

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em] transition-none">
      {word}
    </motion.span>
  );
}
