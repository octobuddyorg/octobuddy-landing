import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";
import logo from "@/assets/images/OctoBuddy-logo.png";

export default function Header({ onScrollTo }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Octo", key: "octo", url: "/", target: "_self" },
    { name: "Chuchu", key: "chuchu", url: "/", target: "_self" },
    { name: "Puffi", key: "puffi", url: "/", target: "_self" },
  ];
  const menuHandleClick = (key) => {
    onScrollTo(key);
    setIsMenuOpen(false); // Close the menu after clicking
  };
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      justify="between"
      className="bg-white w-full"
      // sticky top-0 z-50
      maxWidth="full"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 w-full" justify="between">
        <NavbarBrand>
          <Link href="/">
            <Image src={logo} alt="OctoBuddy Logo" width={150} height={50} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex lg:gap-[2rem] gap-[1.25rem]  w-full"
        justify="between"
      >
        <NavbarBrand>
          <Link href="/">
            <Image src={logo} alt="OctoBuddy Logo" width={150} height={50} />
          </Link>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item?.name}-${index}`}>
            <Link
              className="w-full font-ibrand text-[#8E8E8E] text-[1.35rem] cursor-pointer"
              // href={item.url}
              size="lg"
              onClick={() => menuHandleClick(`${item.key}`)}
            >
              {item?.name}
            </Link>
          </NavbarItem>
        ))}
        <Button
          as={Link}
          color="warning"
          href="#"
          className="font-nok text-white text-[1.75rem] h-auto tracking-[0.1rem] rounded-[2rem]"
        >
          Join the Waitlist
        </Button>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item?.name}-${index}`}>
            <Link
              className="w-full font-ibrand text-[#8E8E8E] text-[1.35rem] cursor-pointer"
              // href={item.url}
              size="lg"
              onClick={() => menuHandleClick(`${item.key}`)}
            >
              {item?.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <Button
          as={Link}
          color="warning"
          href="#"
          className="font-nok text-white text-[1.75rem] h-auto tracking-[0.1rem] rounded-[2.5rem]"
          fullWidth
        >
          Join the Waitlist
        </Button>
      </NavbarMenu>
    </Navbar>
  );
}
