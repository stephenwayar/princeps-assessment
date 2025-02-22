"use client"
import React, { useEffect, useRef } from "react";
import { useDisclosure } from "@mantine/hooks";
import SideNav from "@/components/nav/SideNav";
import SearchBar from "@/components/topBar/SearchBar";
import { SideNavDrawer } from "@/components/nav/SideNavDrawer";

interface Props { children: React.ReactNode }

export default function DashboardLayout({ children }: Props) {
  const startX = useRef(0);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0].clientX < 30) { // Detect touch near the left edge (30px)
        startX.current = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (startX.current < 30 && e.touches[0].clientX - startX.current > 50) {
        open(); // Open drawer when swiped right
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [open]);

  return (
    <React.Fragment>
      <div className="hidden md:block">
        <SideNav />
      </div>

      <div className="md:ml-[14rem]">
        <SideNavDrawer
          opened={opened}
          close={close}
        />

        {!opened && (
          <div
            onTouchStart={open}
            className="fixed top-0 left-0 h-full w-6 z-40 md:hidden"
          />
        )}

        <div className="pb-20">
          <SearchBar />
          
          <div className="pt-6 px-4 sm:px-8">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}