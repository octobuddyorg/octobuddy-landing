import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-text.png";
import PuffiBot001 from "@/assets/images/sections-filler/puffi-bot-001.png";
import PuffiBot002 from "@/assets/images/sections-filler/puffi-bot-002.png";
import PuffiBotImg from "@/assets/images/puffi-bot.png";
export default function PuffiBot() {
  return (
    <>
      <section className=" py-[1rem] relative w-full min-h-[20rem] mx-auto flex flex-col md:flex-row md:items-center md:justify-center">
        <Image
          src={PuffiBot001}
          alt="PuffiBot001"
          className="w-[8rem] h-auto mx-auto absolute top-[0] right-0 -z-10"
        />
        <Image
          src={PuffiBot002}
          alt="PuffiBot002"
          className="w-[4rem] h-auto mx-auto absolute bottom-[0] left-0 -z-10"
        />
        <Image
          src={PuffiBotImg}
          alt="PuffiBotImg"
          className="w-full max-w-[40rem] h-auto mx-auto "
        />
        <div className="w-full md:max-w-[50%] h-auto mx-auto px-[1.5rem]">
          <h1 className=" font-nok md:text-[16rem] text-[8rem] leading-[1] bg-gradient-to-r from-[#58aee2] to-[#98e8f8] bg-clip-text text-transparent">
            Puffi
          </h1>
          <h4 className="text-[#657B85] font-inter md:text-[2.5rem] text-[1.5rem] max-w-[30rem] font-semibold">
            Puffi is your kid-friendly, Goofy bestie.
          </h4>
          <p className="max-w-[36rem] mt-4 text-[#6C6C6C] font-poppins text-[1.25rem] font-italic">
            Playful, silly, and endlessly fun, Puffi sparks laughter while also
            providing a safe learning experience for kids. Trained on a kid-safe
            AI model with parental controls and safe-chat filters, Puffi offers
            big reactions, endless banter, and zero unsafe surprises — helping
            children explore, play, and learn worry-free.
          </p>
        </div>
      </section>
    </>
  );
}
