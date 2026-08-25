"use client";

import { FadeIn } from "@/components/FadeIn";
import { useRef, useState } from "react";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="font-display font-medium text-sm md:text-base tracking-widest text-text-muted uppercase mb-6">Veja em ação</p>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-text">
            A plataforma em movimento.
          </h2>
        </FadeIn>

        <FadeIn>
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-bg-card cursor-pointer group"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              preload="none"
              playsInline
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/onze-motion.webm" type="video/webm" />
              <source src="/onze-motion.mp4" type="video/mp4" />
            </video>

            {/* Play/pause overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-bg/40 transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-bg">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-bg ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
