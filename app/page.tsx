"use client";

import { Suspense } from "react";
import PageContent from "./components/PageContent";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center p-8 text-lg">Loading...</div>
      }
    >
      <PageContent />
    </Suspense>
  );
}
