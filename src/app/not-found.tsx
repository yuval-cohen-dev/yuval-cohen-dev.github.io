"use client";

import React, { useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";

const NotFoundPage: React.FC = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();  
    };
  }, []);

  useEffect(() => {
    nProgress.done();
  },[])

  return (
    <div className="h-full flex-1 flex flex-col items-center justify-center text-white overflow-hidden">
      <h1 className="text-6xl font-extrabold text-purple-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-center text-gray-400">
        Sorry, the page you were looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
  
};

export default NotFoundPage;
