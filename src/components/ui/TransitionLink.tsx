"use client";

import React from "react";

interface Props {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function TransitionLink({
  href,
  label,
  children,
  className,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    window.dispatchEvent(
      new CustomEvent("start-transition", {
        detail: { href, pageLabel: label },
      }),
    );
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
