"use client";

import { motion } from "framer-motion";

export function TextReveal({
  text,
  className,
  delayPerWord = 0.08,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delayPerWord?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{
            duration: 0.5,
            delay: i * delayPerWord,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
