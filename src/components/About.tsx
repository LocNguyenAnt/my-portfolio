import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  const descriptionText =
    "Tôi là lập trình viên đam mê tạo ra trải nghiệm web sống động và hiệu quả.";

  useGSAP(
    () => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      const el = descriptionRef.current;
      if (el) {
        el.innerHTML = "";

        const chars = descriptionText.split("");
        chars.forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.opacity = "0";
          el.appendChild(span);
        });

        gsap.to(el.querySelectorAll("span"), {
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          duration: 0.05,
          stagger: 0.03,
          ease: "none",
        });
      }

      gsap.from(leftTextRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftTextRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(rightTextRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightTextRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 py-16 flex flex-col gap-20"
    >
      <div className="text-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          Về Tôi
        </h2>
        <p ref={descriptionRef} className="mt-4 text-gray-300 max-w-xl mx-auto">
          Tôi là lập trình viên đam mê tạo ra trải nghiệm web sống động và hiệu
          quả.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div
          ref={leftTextRef}
          className="bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-3">Kỹ năng chuyên môn</h3>
          <ul className="list-disc list-inside text-gray-200">
            <li>React.js, TypeScript, Next.js</li>
            <li>GSAP, Framer Motion</li>
            <li>RESTful API, GraphQL</li>
            <li>Firebase, Supabase</li>
          </ul>
        </div>

        <div
          ref={rightTextRef}
          className="bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-3">Sở thích & mục tiêu</h3>
          <p className="text-gray-200">
            Tôi thích kết hợp thiết kế và công nghệ để tạo sản phẩm thân thiện
            với người dùng. Mục tiêu là trở thành full-stack dev có tư duy sản
            phẩm & thẩm mỹ cao.
          </p>
        </div>
      </div>
    </section>
  );
}
