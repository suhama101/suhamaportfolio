"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type HeroStat = {
  value: number;
  label: string;
};

type HeroStatsProps = {
  stats: HeroStat[];
};

export default function HeroStats({ stats }: HeroStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayValues, setDisplayValues] = useState<number[]>(() => stats.map(() => 0));

  const resolvedStats = useMemo(() => stats, [stats]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    let animationFrame = 0;
    let started = false;

    const animate = () => {
      if (started) {
        return;
      }

      started = true;
      const startTime = performance.now();

      const tick = (time: number) => {
        const progress = Math.min((time - startTime) / 1500, 1);
        setDisplayValues(resolvedStats.map((stat) => Math.round(stat.value * progress)));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(tick);
        }
      };

      animationFrame = window.requestAnimationFrame(tick);
    };

    const startIfVisible = () => {
      const rect = container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        animate();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          animate();
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(container);
    window.requestAnimationFrame(startIfVisible);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [resolvedStats]);

  return (
    <div ref={containerRef} data-reveal className="grid gap-6 pt-8 sm:grid-cols-2 xl:grid-cols-4">
      {resolvedStats.map((stat, index) => (
        <div key={stat.label} className="stat-card" style={{ transitionDelay: `${index * 100}ms` }}>
          <span className="stat-value">{displayValues[index].toString().padStart(2, "0")}</span>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}