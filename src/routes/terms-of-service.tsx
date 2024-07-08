import { Trans } from "@mbarzda/solid-i18next";
import { buildUrl } from "~/lib/env";
import { TKEYS } from "~/locales";

export const termsOfServicePath = () => "/terms-of-service";
export const termsOfServiceUrl = () => buildUrl(termsOfServicePath());

export default function TermsOfService() {
  return (
    <>
      <div class="container max-w-screen-lg mx-auto p-6">
        <h1>
          <Trans key={TKEYS["terms-of-service"].title} />
        </h1>
      </div>
    </>
  );
}
