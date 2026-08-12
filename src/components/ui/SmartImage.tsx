"use client";

import { useState } from "react";
import { Gem } from "lucide-react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
};

export default function SmartImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  priority = false,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.16),rgba(15,15,15,1)_65%)] ${wrapperClassName}`}
      >
        <Gem className="h-10 w-10 text-gold/50" strokeWidth={1} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
