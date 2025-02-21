"use client"
import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { useHover } from '@mantine/hooks';
import { usePathname } from "next/navigation";

type Props = {
  text: string,
  icon: string,
  linkTarget: string
}

const NavLink: React.FC<Props> = ({
  text,
  icon,
  linkTarget
}) => {
  const pathname = usePathname();
  const { hovered, ref } = useHover();
  const isActive = pathname.startsWith(linkTarget);

  return (
    <Link href={linkTarget} className="block">
      <button
        ref={ref as React.RefObject<any>}
        className={`w-[190px] text-left rounded-[6px] text-sm transition duration-75 delay-50 ease-linear px-[15px] py-[10px] ${isActive ? 'bg-[#dde8f3] text-[#121212]' : 'text-[#747682] hover:bg-[#dde8f3] hover:text-[#121212]'}`}
      >
        <div className="flex items-center space-x-3">
          <div className="w-[18px] h-[18px]">
            <Icon
              width="18"
              height="18"
              icon={icon}
              color={hovered || isActive ? '#0053A6' : '#747682'}
            />
          </div>

          <p>
            {text}
          </p>
        </div>
      </button>
    </Link>
  )
}

export default NavLink