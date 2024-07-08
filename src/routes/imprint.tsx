import { Trans } from "@mbarzda/solid-i18next";
import { buildUrl } from "~/lib/env";
import { TKEYS } from "~/locales";

export const imprintPath = () => "/imprint";
export const imprintUrl = () => buildUrl(imprintPath());

export default function Imprint() {
  return (
    <>
      <div class="container max-w-screen-lg mx-auto p-6">
        <h1>
          <Trans key={TKEYS.imprint.title} />
        </h1>
      </div>
    </>
  );
}
