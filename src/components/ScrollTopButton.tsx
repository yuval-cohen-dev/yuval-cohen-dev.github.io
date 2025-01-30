"use client";

import useScroll from "@/hooks/useScroll";
import { useEffect, useState } from "react";
import Motion from "./Motion";
import { AnimatePresence } from "framer-motion";

export default function ScrollTopButton({ threshold = 50 }) {
  const { scrollToPosition, getScrollPercentage, addScrollListener } =
    useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const { y } = getScrollPercentage();
      const isAbove = y > threshold;
      setIsVisible(isAbove);
    };

    const unsubscribe = addScrollListener(() => {
      checkScroll();
    });

    return () => {
      unsubscribe();
    };
  }, [threshold, addScrollListener, getScrollPercentage]);

  const scrollToTop = () => {
    scrollToPosition(0, 0, "smooth");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion
          type="div"
          style={{
            position: "fixed",
            bottom: "15%",
            right: "1.5%"
            // backgroundColor:"red"
          }}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={scrollToTop}
            className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-110 transition-all duration-300 flex items-center justify-center`}
            aria-label="Scroll to top"
            style={{
              display: "flex",
              flex: 1
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7-7-7 7M12 19V3"
              />
            </svg>
          </button>
        </Motion>
      )}
    </AnimatePresence>
  );
}
