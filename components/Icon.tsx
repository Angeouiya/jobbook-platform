import { type CSSProperties } from "react";

interface IconProps {
  name: string;
  size?: number;
  fill?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Icon({ name, size = 24, fill = false, className = "", style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: fill ? "'FILL' 1" : undefined,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
