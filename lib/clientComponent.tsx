"use client";

import { noOpAction } from "@/lib/noOpServerAction";

export const TestClientComponent = () => {
  return (
    <div>
      <button onClick={() => noOpAction()}>Test Server Action</button>
    </div>
  );
};
