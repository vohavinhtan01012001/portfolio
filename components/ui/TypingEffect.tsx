"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function TypingEffect({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  className,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timer);
    }

    const currentText = texts[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink text-[#8b5cf6]">|</span>
    </span>
  );
}
