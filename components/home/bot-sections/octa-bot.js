import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-text.png";
import OctoBot001 from "@/assets/images/sections-filler/octo-bot-001.png";
import OctoBot002 from "@/assets/images/sections-filler/octo-bot-002.png";
import OctoBotImg from "@/assets/images/octo-bot.png";
export default function OctoBot() {
  return (
    <>
      <section className=" py-[1rem] relative w-full min-h-[20rem] mx-auto flex flex-col md:flex-row md:items-center md:justify-center">
        <Image
          src={OctoBot001}
          alt="OctoBot001"
          className="w-[8rem] h-auto mx-auto absolute top-[0] right-0 -z-10"
        />
        <Image
          src={OctoBot002}
          alt="OctoBot002"
          className="w-[4rem] h-auto mx-auto absolute bottom-[0] left-0 -z-10"
        />
        <Image
          src={OctoBotImg}
          alt="OctoBotImg"
          className="w-full max-w-[40rem] h-auto mx-auto "
        />
        <div className="w-full md:max-w-[50%] h-auto mx-auto px-[1.5rem]">
          <h1 className=" font-nok md:text-[16rem] text-[8rem] leading-[1] bg-gradient-to-r from-[#ff6801] to-[#ffc873] bg-clip-text text-transparent">
            Octo
          </h1>
          <h4 className="text-[#9F7141] font-inter md:text-[2.5rem] text-[1.5rem] max-w-[30rem] font-semibold">
            Octo is the buddy you can Always look up to.
          </h4>
          <p className="max-w-[36rem] mt-4 text-[#6C6C6C] font-poppins text-[1.25rem] font-italic">
            Advanced, specialized, and highly intelligent, Octo delivers
            conversations that feel alive — from quick facts to clever insights.
            Built on an AI model designed for reasoning, knowledge, and
            emotional resonance, Octo makes learning playful, engaging, and
            meaningful for everyone.
          </p>
        </div>
      </section>
    </>
  );
}
