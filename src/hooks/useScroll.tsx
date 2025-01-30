"use client";

import { useEffect, useRef, useCallback } from "react";

export default function useScroll() {
  const scrollPosition = useRef({ x: 0, y: 0 });
  const isScrolling = useRef({ x: false, y: false, general: false });
  const lastScrollDirection = useRef({
    x: null as "left" | "right" | null,
    y: null as "up" | "down" | null
  });
  const scrollPercentage = useRef({ x: 0, y: 0 });
  const listeners = useRef(
    new Set<
      (event: {
        x: number;
        y: number;
        isScrollingX: boolean;
        isScrollingY: boolean;
        isScrolling: boolean;
        directionX: "left" | "right" | null;
        directionY: "up" | "down" | null;
        scrollPercentageX: number;
        scrollPercentageY: number;
      }) => void
    >()
  );
  const scrollEndTimeout = useRef<NodeJS.Timeout | null>(null);
  const TIMEOUT = 150;

  const handleScroll = useCallback(() => {
    const currentX = window.scrollX;
    const currentY = window.scrollY;

    const isScrollingX = currentX !== scrollPosition.current.x;
    const isScrollingY = currentY !== scrollPosition.current.y;
    const wasScrolling = isScrolling.current.general;

    isScrolling.current = {
      x: isScrollingX,
      y: isScrollingY,
      general: isScrollingX || isScrollingY
    };

    lastScrollDirection.current = {
      x: isScrollingX
        ? currentX > scrollPosition.current.x
          ? "right"
          : "left"
        : null,
      y: isScrollingY
        ? currentY > scrollPosition.current.y
          ? "down"
          : "up"
        : null
    };

    scrollPosition.current = { x: currentX, y: currentY };

    const scrollableWidth =
      document.documentElement.scrollWidth - window.innerWidth;
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    scrollPercentage.current = {
      x: scrollableWidth > 0 ? (currentX / scrollableWidth) * 100 : 0,
      y: scrollableHeight > 0 ? (currentY / scrollableHeight) * 100 : 0
    };

    if (isScrolling.current.general || wasScrolling) {
      listeners.current.forEach((listener) => {
        listener({
          x: currentX,
          y: currentY,
          isScrollingX,
          isScrollingY,
          isScrolling: isScrolling.current.general,
          directionX: lastScrollDirection.current.x,
          directionY: lastScrollDirection.current.y,
          scrollPercentageX: scrollPercentage.current.x,
          scrollPercentageY: scrollPercentage.current.y
        });
      });
    }

    if (scrollEndTimeout.current) {
      clearTimeout(scrollEndTimeout.current);
    }
    scrollEndTimeout.current = setTimeout(() => {
      listeners.current.forEach((listener) => {
        listener({
          x: currentX,
          y: currentY,
          isScrollingX: false,
          isScrollingY: false,
          isScrolling: false,
          directionX: null,
          directionY: null,
          scrollPercentageX: scrollPercentage.current.x,
          scrollPercentageY: scrollPercentage.current.y
        });
      });
    }, TIMEOUT);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
      }
    };
  }, [handleScroll]);

  const addScrollListener = useCallback(
    (
      listener: (event: {
        x: number;
        y: number;
        isScrollingX: boolean;
        isScrollingY: boolean;
        isScrolling: boolean;
        directionX: "left" | "right" | null;
        directionY: "up" | "down" | null;
        scrollPercentageX: number;
        scrollPercentageY: number;
      }) => void
    ) => {
      listeners.current.add(listener);
      return () => {
        listeners.current.delete(listener);
      };
    },
    []
  );

  const scrollToPosition = useCallback(
    (x: number, y: number, behavior: ScrollBehavior = "smooth") => {
      window.scrollTo({ left: x, top: y, behavior });
    },
    []
  );

  return {
    getScrollPosition: () => scrollPosition.current,
    getScrollPercentage: () => scrollPercentage.current,
    isScrolling: () => isScrolling.current.general,
    isScrollingX: () => isScrolling.current.x,
    isScrollingY: () => isScrolling.current.y,
    getScrollDirection: () => lastScrollDirection.current,
    addScrollListener,
    scrollToPosition
  };
}
