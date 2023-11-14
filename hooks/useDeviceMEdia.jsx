"use client";
import { screen } from "@/utils/screens";
import { useEffect } from "react";
import { useMedia } from "react-use";

export function useDeviceMedia() {
  // const screenWidth = window?.innerWidth;
  // const isMobile = screenWidth < 744;
  // const isTablet = screenWidth >= 744 && screenWidth < 1440;
  // const isDesktop = screenWidth > 1440;
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  const isTablet = useMedia(screen.breakpoints.tablet.media);
  const isDesktop = useMedia(screen.breakpoints.desktop.media);

  return { isMobile, isTablet, isDesktop };
}
