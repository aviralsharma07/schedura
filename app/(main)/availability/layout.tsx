import React, { ReactNode, Suspense } from "react";

export default function AvailabilityLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto">
      <Suspense fallback={<div>Loading Events...</div>}>{children}</Suspense>
    </div>
  );
}
