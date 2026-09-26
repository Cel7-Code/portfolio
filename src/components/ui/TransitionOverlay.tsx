"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TransitionOverlay() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  // Posisi awal: menunggu dibawah layar
  const [position, setPosition] = useState("translate-y-[100vh]");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const handleTransition = (e: any) => {
      const { href, pageLabel } = e.detail;

      setLabel(pageLabel);
      setIsActive(true);
      setPosition("translate-y-[100vh]");

      setTimeout(() => {
        setPosition("-translate-y-[50vh]");
      }, 10);

      setTimeout(() => {
        router.push(href);

        setTimeout(() => {
          setPosition("-translate-y-[200vh]");
          setTimeout(() => {
            setIsActive(false);
            setPosition("translate-y-[100vh]");
          }, 1000);
        }, 1500);
      }, 1000);
    };

    window.addEventListener("start-transition", handleTransition);
    return () =>
      window.removeEventListener("start-transition", handleTransition);
  }, [router]);

  if (!isActive) return null;

  return (
    <div
      className={`fixed flex-col top-0 left-0 w-full h-[200vh] z-[999] flex items-center justify-center bg-white transition-transform duration-1000 ease-in-out ${position}`}
    >
      <p className="text-3xl font-caveat text-blue-900">You are going to...</p>
      <h1 className="text-blue-900 text-6xl font-bold tracking-widest uppercase">
        {label} page
      </h1>
    </div>
  );
}
