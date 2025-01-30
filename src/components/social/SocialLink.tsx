import { SocialLinkItem } from "@/types/types";
import Link from "next/link";
import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from "react-icons/fa";

const ICONS: Record<string, React.ElementType> = {
  google: FaGoogle,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  facebook: FaFacebook
};

const COLORS: Record<string, string> = {
  google: "bg-red-500 hover:bg-red-600",
  github: "bg-black hover:bg-gray-800",
  linkedin: "bg-blue-700 hover:bg-blue-800",
  twitter: "bg-blue-400 hover:bg-blue-500",
  facebook: "bg-blue-600 hover:bg-blue-700"
};

const isValidSocial = (name: string): name is keyof typeof ICONS =>
  name in ICONS;

export default function SocialLink({
  socialLinkItem
}: {
  socialLinkItem: SocialLinkItem;
}) {
  const { name, link } = socialLinkItem;

  if (!isValidSocial(name)) {
    return null;
  }

  const Icon = ICONS[name];
  const bgColor = COLORS[name] || "bg-gray-500 hover:bg-gray-600";
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgColor} text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105`}
    >
      <Icon className="text-xl" />
      <span className="text-sm font-medium">{capitalizedName}</span>
    </Link>
  );
}
