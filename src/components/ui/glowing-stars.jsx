"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={cn(
        "relative bg-gradient-to-b from-white via-pink-200 p-4 mx-4 max-w-72 h-full rounded-xl  dark:border-pink-200",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}) => {
  return (
    <p className={cn("text-base text-neutral-500", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}) => {
  return (
    <h2 className={cn("font-bold text-2xl text-neutral-700", className)}>
      {children}
    </h2>
  );
};

export const Illustration = ({ mouseEnter }) => {
  const stars = 108;
  const columns = 18;

  const [glowingStars, setGlowingStars] = useState([]);

  const highlightedStars = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-48 p-1 w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 3.5, 3.2, 1.5] : 1,
        background: isGlowing ? "#fff" : "#e882b2",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("bg-[#e882b2] h-[1px] w-[1px] rounded-full relative z-20")}
    />
  );
};

const Glow = ({ delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-white blur-[1px] shadow-2xl shadow-white"
    />
  );
};

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="flex py-20 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>{title}</GlowingStarsTitle>
        <div className="flex justify-between items-end ">
          <GlowingStarsDescription>
            {description}
          </GlowingStarsDescription>
        </div>
        <div className=" absolute bottom-4 right-4 h-8 w-8 rounded-full flex items-center justify-center">
          <Link href={link} target="_blank">
            <SiGithub color="white" />
          </Link>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}
