import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {}, []);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none none",
          onEnter: () => {
            gsap.to(sectionRef.current, {
              opacity: 1,
              y: 0,
              scale: 1.0,
              ease: "back.out(1.7)",
              duration: 1.5,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
            });
          },
          onLeave: () => {
            gsap.to(sectionRef.current, {
              opacity: 0.5,
              y: 50,
              scale: 0.8,
              ease: "power2.out",
              duration: 1,
              boxShadow: "none",
            });
          },
          onEnterBack: () => {
            gsap.to(sectionRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: "back.out(1.7)",
              duration: 1.5,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
            });
          },
          onLeaveBack: () => {
            gsap.to(sectionRef.current, {
              opacity: 0.5,
              y: 50,
              scale: 0.8,
              ease: "power2.out",
              duration: 1,
              boxShadow: "none",
            });
          },
        },
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 1.5,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen p-10 bg-gray-100 text-black"
    >
      <h2 className="text-3xl font-semibold mb-4">About me</h2>
      <p>Welcome to my portfolio</p>
    </section>
  );
}
