import { ReactNode, CSSProperties, ElementType } from "react";

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

export function Reveal({
  children,
  as = "div",
  type = "up",
  delay = 0,
  className = "",
  style,
  href,
}: Props) {
  const Tag = as as ElementType;
  return (
    <Tag
      href={href}
      className={`${classMap[type]} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
