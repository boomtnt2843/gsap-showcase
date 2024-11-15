"use client";

import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import CreditSection from "./components/CreditSection";
import HeroSection from "./components/HeroSection";
import ScrollSection from "./components/ScrollSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Hero Section Animations
    const tl = gsap.timeline();
    tl.from(".animate-heading", { duration: 1, opacity: 0, y: -50 })
      .from(
        ".animate-subtext",
        { duration: 1, opacity: 0, y: 20, delay: 0.3 },
        "-=0.5"
      )
      .from(".animate-button", {
        duration: 0.5,
        opacity: 0,
        scale: 0.8,
        delay: 0.1,
      });

    // Scroll Section Animation
    gsap.from(".scroll-section-box", {
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top center",
        end: "+=400",
        scrub: true,
      },
      opacity: 0,
      scale: 0.5,
      y: 50,
      duration: 1,
    });

    // Credit Section Animation
    gsap.from(".credit-section-content", {
      scrollTrigger: {
        trigger: ".credit-section",
        start: "top center",
        end: "+=300",
        scrub: true,
      },
      x: -100,
      opacity: 0,
      duration: 1,
    });

    // Spinning shapes in the credit section
    gsap.to(".shape", {
      rotation: 360,
      duration: 10,
      ease: "linear",
      repeat: -1, // Loop infinitely
    });
  }, []);

  return (
    <div>
      <Head>
        <title>GSAP Showcase</title>
        <meta
          name="description"
          content="Showcase of animations with GSAP and Next.js"
        />
      </Head>
      <HeroSection />
      <ScrollSection />
      <CreditSection />
      <FooterSection />
    </div>
  );
}
