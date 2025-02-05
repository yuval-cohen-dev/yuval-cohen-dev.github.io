"use client";

import { motion, MotionProps } from "framer-motion"; 
import React from "react";
import NoScript from "./NoScript";

interface CustomMotionProps<Tag extends keyof JSX.IntrinsicElements>
  extends MotionProps {
  type?: Tag;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const Motion = <Tag extends keyof JSX.IntrinsicElements>({
  type,
  children,
  className,
  ...props
}: CustomMotionProps<Tag>) => {
  const Component = type ? (motion as any)[type] : motion.div;
  const NoScriptComponent: React.ElementType = type ? type : "div";
  return (
    <>
      {/* <NoScript>
        <NoScriptComponent className={className} {...props}>
          {children}
        </NoScriptComponent>
      </NoScript> */}
      <Component
        className={className}
        {...props}
      >
        {children}
      </Component>
    </>
  );
};

export default Motion;
