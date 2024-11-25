import React, { ReactNode, Suspense } from "react";

export default function AvailabilityLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto">
      <Suspense fallback={<div>Loading Availability...</div>}>{children}</Suspense>
    </div>
  );
}
