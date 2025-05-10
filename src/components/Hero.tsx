import { useEffect, useRef } from "react";
import gsap from "gsap";
import React from "react";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold">
        Hello, my name is <span className="text-green-400">Lộc</span>
      </h1>
    </section>
  );
}
