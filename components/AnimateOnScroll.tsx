"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "fade-scale"
  | "blur-in";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "footer";
  variant?: AnimationVariant;
  duration?: number;
}

const VARIANT_STYLES: Record<
  AnimationVariant,
  { hidden: React.CSSProperties; visible: React.CSSProperties }
> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translateY(40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-left": {
    hidden: { opacity: 0, transform: "translateX(-40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    hidden: { opacity: 0, transform: "translateX(40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-scale": {
    hidden: { opacity: 0, transform: "scale(0.92)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

export function AnimateOnScroll({
  children,
  id,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "fade-up",
  duration = 0.6,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) setVisible(true);
    },
    [],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-60px",
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  const variantStyles = VARIANT_STYLES[variant];
  const baseTransitions = [
    `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    `transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    `filter ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  ].join(", ");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={className}
      style={{
        ...(visible ? variantStyles.visible : variantStyles.hidden),
        transition: baseTransitions,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </Tag>
  );
}
