"use client";
import AboutSection from "@/components/AboutSection";
import { ABOUT_TEXT, ABOUT_TITLE } from "@constants";

export default function Page() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800">
      <AboutSection
        text={ABOUT_TEXT}
        title={ABOUT_TITLE}
      ></AboutSection>
    </div>
  );
}
