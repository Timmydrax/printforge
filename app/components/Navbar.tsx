"use client";

import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import { usePathname } from "next/navigation";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4 pr-2">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <Image
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="w-50 h-auto hidden md:block"
              width={175}
              height={150}
            />
            {/* Mobile Logo */}
            <Image
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="w-10 h-auto block md:hidden"
              width={300}
              height={63}
            />
          </div>
        </Link>
        <ul className="flex items-center gap-1.5">
          <NavLink
            href="/3d-models"
            isActive={pathname.startsWith("/3d-models")}
          >
            3D Models
          </NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
