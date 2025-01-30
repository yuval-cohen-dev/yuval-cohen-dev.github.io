"use client";
import Motion from "@Motion";
import { FaGithub } from "react-icons/fa";
import {
  PROJECTS,
  HERO_IMAGE,
  SOCIAL_LINKS,
  ABOUT_TEXT,
  ABOUT_TITLE,
  HERO_DESCRIPTION,
  HERO_TEXT,
  GITHUB_LINK,
  CONTACT_DESCRIPTION,
  CONTACT_TITLE,
  HERO_IMAGE_ALT,
} from "@constants";
import ScrollTopButton from "@/components/ScrollTopButton";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Messenger from "@/components/Messenger";
import ProjectList from "@/components/project/ProjectList";
import SocialLinks from "@/components/social/SocialLinks";
import { useEffect, useLayoutEffect } from "react";
import nProgress from "nprogress";
import Link from "next/link";

function HeroExtra() {
  return (
    <Link
      href={GITHUB_LINK}
      target="_blank"
      className="bg-black text-white px-8 py-4 rounded-full flex items-center transform hover:scale-105 transition duration-300"
    >
      <FaGithub className="mr-2 text-white" />
      View My Work
    </Link>
  );
}
const SCROLL_UP_THRESHOLD_PERCENTAGES = 40;

export default function Home() {
  useLayoutEffect(() => {
    nProgress.start();
  }, []);

  useEffect(() => {
    nProgress.done();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Motion
        type="div"
        className="h-screen flex flex-col text-center bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Hero
          backgroundImage={HERO_IMAGE}
          description={HERO_DESCRIPTION}
          text={HERO_TEXT}
          alt={HERO_IMAGE_ALT}
        >
          <HeroExtra />
        </Hero>
      </Motion>

      {PROJECTS.length > 0 && (
        <Motion
          type="section"
          className="py-20 px-8 bg-blue-1000"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ProjectList projects={PROJECTS} />
        </Motion>
      )}

      <Motion
        type="section"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <AboutSection text={ABOUT_TEXT} title={ABOUT_TITLE} />
      </Motion>

      <Motion
        type="section"
        className="py-20 px-8 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <ContactForm title={CONTACT_TITLE} description={CONTACT_DESCRIPTION} />
        <SocialLinks socialLinks={SOCIAL_LINKS} />
      </Motion>

      <Motion type="section">
        <ScrollTopButton threshold={SCROLL_UP_THRESHOLD_PERCENTAGES} />
        <Messenger />
      </Motion>
    </div>
  );
}
