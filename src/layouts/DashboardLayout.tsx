"use client"
import React, { useEffect, useRef } from "react";
import { useDisclosure } from "@mantine/hooks";
import SideNav from "@/components/nav/SideNav";
import SearchBar from "@/components/topBar/SearchBar";
import { SideNavDrawer } from "@/components/nav/SideNavDrawer";

interface Props { children: React.ReactNode }

export default function DashboardLayout({ children }: Props) {
  const startX = useRef(0);
  const startY = useRef(0);
  const isTracking = useRef(false);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0].clientX < 30) { // Only start tracking near left edge
        startX.current = e.touches[0].clientX;
        startY.current = e.touches[0].clientY;
        isTracking.current = true;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTracking.current) return;

      const deltaX = e.touches[0].clientX - startX.current;
      const deltaY = e.touches[0].clientY - startY.current;

      // Check if horizontal swipe (more horizontal than vertical movement)
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 50) { // Minimum swipe distance
          open();
          isTracking.current = false; // Reset tracking
        }
      } else {
        // If more vertical movement, stop tracking as it's likely a scroll
        isTracking.current = false;
      }
    };

    const handleTouchEnd = () => {
      isTracking.current = false;
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
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