import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-text.png";
import footerContent from "@/assets/images/footer.png";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className=" py-[1rem] relative w-full min-h-[20rem] mx-auto flex flex-col items-center justify-center mb-[2.5rem]">
        <Image
          src={footerContent}
          alt="footerContent"
          className="w-full h-auto mx-auto "
        />

        <div className="w-full h-auto mx-auto px-[1.5rem] flex flex-col md:flex-row justify-between items-center mt-[3rem]">
          <h4 className="text-[#000000] font-ibrand md:text-[2rem] text-[1.5rem] md:max-w-[36rem] max-w-[30rem] font-semibold mb-[1.5rem] md:mb-0">
            Join the Octo Buddies waitlist,  Something big is coming very soon.
          </h4>
          <Button
            as={Link}
            color="primary"
            href="#"
            className="font-nok text-white text-[2.5rem] lg:text-[4.5rem] tracking-[0.2rem] rounded-[5rem] px-[2rem] md:px-[4rem] py-[0.75rem] h-auto"
          >
            Join the Waitlist
          </Button>
        </div>
      </footer>
      {/* copyright */}
      <div className="px-[1.5rem] py-[1rem] relative w-full mx-auto flex flex-row gap-[1.25rem] items-center justify-between">
        <h5 className="text-[#000000] font-poppins md:text-[2rem] text-[1.5rem] max-w-[36rem] font-[400]">
          Octobuddy @{year}
        </h5>
        <ul className="flex flex-row gap-[1.25rem] items-center justify-between">
          <li>
            <Link href="#">
              <FaSquareXTwitter className="text-[#656565] text-[1.5rem] md:text-[2rem]" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <RiInstagramFill className="text-[#656565] text-[1.5rem] md:text-[2rem]" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
