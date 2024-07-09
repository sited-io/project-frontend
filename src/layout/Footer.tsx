import { Trans } from "@mbarzda/solid-i18next";
import { A } from "@solidjs/router";
import { SitedIoLogo } from "~/components/assets/SitedIoLogo";
import { TKEYS } from "~/locales";
import { indexPath } from "~/routes";
import { imprintPath } from "~/routes/imprint";
import { privacyPolicyPath } from "~/routes/privacy-policy";
import { termsOfServicePath } from "~/routes/terms-of-service";

export function Footer() {
  return (
    <>
      <footer class="min-h-80 text-dark dark:text-light bg-slate-200 dark:bg-slate-800">
        <div class="py-20 px-4 max-w-screen-xl mx-auto">
          <A class="block w-fit" href={indexPath()}>
            <SitedIoLogo noBackground />
          </A>

          <div class="my-6 mx-4 grid grid-cols-5 gap-y-8">
            <div class="col-span-5 lg:col-span-3">
              <p class="text-display leading-normal">
                <Trans key={TKEYS.footer.summary} />
              </p>
            </div>

            <div class="col-start-3 col-end-6 lg:col-span-2 flex flex-col justify-end gap-5">
              <A class="text-end" href={imprintPath()}>
                <Trans key={TKEYS.imprint.title} />
              </A>
              <A class="text-end" href={termsOfServicePath()}>
                <Trans key={TKEYS["terms-of-service"].title} />
              </A>
              <A class="text-end" href={privacyPolicyPath()}>
                <Trans key={TKEYS["privacy-policy"].title} />
              </A>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
