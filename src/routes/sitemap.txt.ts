// import type { APIEvent } from "@solidjs/start/server";

import { indexUrl } from ".";
import { imprintUrl } from "./imprint";
import { privacyPolicyUrl } from "./privacy-policy";
import { termsOfServiceUrl } from "./terms-of-service";

export async function GET() {
  const lines = [
    indexUrl(),
    imprintUrl(),
    privacyPolicyUrl(),
    termsOfServiceUrl(),
  ];

  return new Response(lines.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
