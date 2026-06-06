"use client";

import {
  ReactNode,
  CSSProperties,
  ElementType,
  useEffect,
  useRef,
  useState,
  LegacyRef,
} from "react";

type RevealType = "up" | "in" | "scale" | "tilt";

const classMap: Record<RevealType, string> = {
  up: "anim-fade-up",
  in: "anim-fade-in",
  scale: "anim-scale-in",
  tilt: "anim-tilt-in",
};

type Props = {
  children?: ReactNode;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "span" | "li" | "ol" | "a" | "section";
  type?: RevealType;
  delay?: number; // en ms
  className?: string;
  style?: CSSProperties;
  href?: string;
};

/**
 * Wrapper que dispara su animación de entrada cuando entra en viewport.
 * Como las slides están en un contenedor con `translateY`, IntersectionObserver
 * detecta cuándo la slide es visible y arranca acá la animación.
 *
 * Una vez disparada, queda renderizada y no vuelve a animarse si la slide
 * sale y entra de nuevo.
 */
export function Reveal({
  children,
  as = "div",
  type = "up",
  delay = 0,
  className = "",
  style,
  href,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as ElementType;
  const animClass = show ? classMap[type] : "";
  const hiddenStyle: CSSProperties = show ? {} : { opacity: 0 };

  return (
    <Tag
      ref={ref as LegacyRef<HTMLElement>}
      href={href}
      className={`${animClass} ${className}`.trim()}
      style={{ ...hiddenStyle, animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
