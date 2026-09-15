import Image from "next/image";

interface LogoProps {
  /** Taille en pixels (largeur = hauteur) */
  size?: number;
  /** Classes CSS supplémentaires */
  className?: string;
  /** Afficher le texte "JobBook" à côté du logo */
  withText?: boolean;
}

export function Logo({ size = 32, className = "", withText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="relative shrink-0 rounded-xl overflow-hidden shadow-sm"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo-jobbook.jpg"
          alt="JobBook"
          width={size}
          height={size}
          className="object-cover mix-blend-multiply dark:mix-blend-normal"
          priority
        />
      </div>
      {withText && (
        <span className="text-label-md tracking-widest uppercase text-on-surface font-bold">
          JobBook
        </span>
      )}
    </div>
  );
}
