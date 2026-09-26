"use client";

import { useState, useEffect } from "react";
import { HELLO_WORDS } from "@/constants/greetings";

export default function Typewriter() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = HELLO_WORDS[wordIndex];
    let typingSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText(currentWord.slice(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % HELLO_WORDS.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="inline-flex items-center text-black">
      {text}
      <span className="inline-block w-[3px] h-[1em] ml-1 bg-black/60 animate-pulse "></span>
    </span>
  );
}
