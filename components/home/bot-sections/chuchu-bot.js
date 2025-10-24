import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-text.png";
import ChuchuBot001 from "@/assets/images/sections-filler/chuchu-bot-001.png";
import ChuchuBot002 from "@/assets/images/sections-filler/chuchu-bot-002.png";
import ChuchuBotImg from "@/assets/images/chuchu-bot.png";
export default function ChuchuBot() {
  return (
    <>
      <section className=" py-[1rem] relative w-full min-h-[20rem] md:mx-auto flex flex-col-reverse md:flex-row md:items-center md:justify-center">
        <Image
          src={ChuchuBot001}
          alt="ChuchuBot001"
          className="w-[12rem] h-auto mx-auto absolute top-[0] right-0 -z-10"
        />
        <Image
          src={ChuchuBot002}
          alt="ChuchuBot002"
          className="w-[12rem] h-auto mx-auto absolute bottom-[0] left-0 -z-10"
        />

        <div className="w-full max-w-[40rem] h-auto md:mx-auto px-[1.5rem] md:flex md:flex-col  md:text-left">
          <h1 className=" font-nok md:text-[16rem] text-[8rem] leading-[1] bg-gradient-to-r from-[#7A5347] to-[#a1948f] bg-clip-text text-transparent">
            Chuchu
          </h1>
          <h4 className="text-[#BF8B7B] font-inter md:text-[2.5rem] text-[1.5rem] font-semibold">
            Bobo is your cozy, heartwarming companion.
          </h4>
          <p className=" mt-4 text-[#6C6C6C] font-poppins text-[1.25rem] font-italic">
            Calm, kind, and emotionally attuned, Roro is perfect for adults
            seeking comfort, reflection, or mindful conversation. Designed with
            an advanced emotional AI model, Roro listens, understands, and
            responds with genuine empathy, making every chat feel personal,
            soothing, and meaningful.
          </p>
        </div>
        <Image
          src={ChuchuBotImg}
          alt="ChuchuBotImg"
          className="w-full max-w-[40rem] h-auto mx-auto "
        />
      </section>
    </>
  );
}
