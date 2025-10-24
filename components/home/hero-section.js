import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-text.png";
import heroRightImage from "@/assets/images/hero-right-img.png";
export default function HeroSection() {
  return (
    <>
      <section className="px-[1.5rem] py-[1rem] relative w-full  mx-auto flex flex-col">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-full max-w-[100rem] h-auto mx-auto"
        />
        <Image
          src={heroRightImage}
          alt="HeroRightImage"
          className="w-full md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[80rem] h-auto mx-auto md:absolute md:bottom-[4rem] md:right-0"
        />
        <div className="md:mt-[6rem] max-w-[30rem]">
          <h5 className="font-poppines text-[#8E8E8E] text-[1.25rem] md:text-[2rem] font-[600] mb-[0.4rem]">
            Your Cute, Smart AI Buddies
          </h5>
          <p className="font-ibrand text-[#8E8E8E] text-[1.15rem] md:text-[1.5rem] font-[600]">
            Whether you’re looking for laughs, comfort, or company, your buddy
            is here.
          </p>
        </div>
      </section>
    </>
  );
}
