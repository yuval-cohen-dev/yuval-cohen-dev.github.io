"use client";

import NProgressBar from "./NProgressBar";

export default function ProgressBar() {
  return (
    <>
      <NProgressBar
        startPosition={0.3}
        stopDelayMs={200}
        showOnShallow={true}
      />
    </>
  );
}
