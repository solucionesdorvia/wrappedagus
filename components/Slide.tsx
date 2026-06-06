import { ReactNode } from "react";

type Props = {
  id: string;
  className?: string;
  children: ReactNode;
  bg?: string;
};

export function Slide({ id, className = "", children, bg = "bg-black" }: Props) {
  return (
    <section
      id={id}
      className={`relative w-full h-[100svh] min-h-[100svh] overflow-hidden flex items-center justify-center ${bg} ${className}`}
    >
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 sm:px-10">
        {children}
      </div>
    </section>
  );
}
