import { Trans } from "@mbarzda/solid-i18next";
import { buildUrl } from "~/lib/env";
import { TKEYS } from "~/locales";

export const privacyPolicyPath = () => "/privacy-policy";
export const privacyPolicyUrl = () => buildUrl(privacyPolicyPath());

export default function PrivacyPolicy() {
  return (
    <>
      <div class="container max-w-screen-lg mx-auto p-6">
        <h1>
          <Trans key={TKEYS["privacy-policy"].title} />
        </h1>
      </div>
    </>
  );
}
