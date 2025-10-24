import React, { useRef } from "react";
import ChuchuBot from "@/components/home/bot-sections/chuchu-bot";
import OctoBot from "@/components/home/bot-sections/octa-bot";
import PuffiBot from "@/components/home/bot-sections/pufffi-bot";
import HeroSection from "@/components/home/hero-section";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

export default function Home() {
  // Create refs for each section
  const octoRef = useRef(null);
  const chuchuRef = useRef(null);
  const puffiRef = useRef(null);

  const handleScrollTo = (section) => {
    const refs = { octo: octoRef, chuchu: chuchuRef, puffi: puffiRef };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header onScrollTo={handleScrollTo} />
      <HeroSection />
      <div ref={octoRef}></div>
      <OctoBot />
      <div ref={chuchuRef}></div>
      <ChuchuBot />
      <div ref={puffiRef}></div>
      <PuffiBot />
      <Footer />
    </>
  );
}
