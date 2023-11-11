"use client";
import { screen } from "@/utils/screens";
import { useMedia } from "react-use";

export function useDeviceMedia() {
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  const isTablet = useMedia(screen.breakpoints.tablet.media);
  const isDesktop = useMedia(screen.breakpoints.desktop.media);

  return { isMobile, isTablet, isDesktop };
}
