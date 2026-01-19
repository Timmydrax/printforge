import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 border-b border-orange-500" : "text-gray-900"}`}
      >{children}</Link>
    </li>
  )
}