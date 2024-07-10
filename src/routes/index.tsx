import { Trans } from "@mbarzda/solid-i18next";
import { A } from "@solidjs/router";
import { buildUrl } from "~/lib/env";
import { TKEYS } from "~/locales";

export const indexPath = () => "/";
export const indexUrl = () => buildUrl(indexPath());

const REGISTRATION_URL = import.meta.env.VITE_REGISTRATION_URL;
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL;
const SUPPORT_EMAIL_ADDRESS = import.meta.env.VITE_SUPPORT_EMAIL_ADDRESS;

export default function Home() {
  return (
    <>
      <section class="container max-w-screen-lg flex flex-col justify-center p-6 mb-6 mx-auto">
        <div class="flex flex-col justify-center text-center rounded-sm">
          <h1 class="my-8 text-5xl font-display uppercase leading-tight lg:my-16">
            <Trans key={TKEYS["landing-page"].heading} />
          </h1>
          <h2 class="mt-0 mb-16 text-lg font-display lg:mb-24">
            <Trans key={TKEYS["landing-page"].subheading} />
          </h2>
        </div>

        <div class="flex justify-center">
          <A
            class="px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            href={REGISTRATION_URL}
          >
            <Trans key={TKEYS["landing-page"]["get-started"]} />
          </A>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section class="container max-w-screen-lg flex flex-col justify-center p-6 my-6 mx-auto">
        {/* <h3 class="mb-6 text-2xl font-display font-bold">
          <Trans key={TKEYS["landing-page"]["why-choose-us"].title} />
        </h3> */}
        <div class="flex flex-col justify-center md:flex-row">
          <div class="my-4 p-4 flex-1 text-center md:mx-2">
            <h4 class="mb-4 text-xl font-display font-semibold">
              <Trans
                key={TKEYS["landing-page"]["why-choose-us"].sections[1].title}
              />
            </h4>
            <p class="p-1 text-base text-slate-600 dark:text-gray-400">
              <Trans
                key={TKEYS["landing-page"]["why-choose-us"].sections[1].content}
              />
            </p>
          </div>

          <div class="my-4 p-4 flex-1 text-center md:mx-2">
            <h4 class="mb-4 text-xl font-display font-semibold">
              <Trans
                key={TKEYS["landing-page"]["why-choose-us"].sections[2].title}
              />
            </h4>
            <p class="p-1 text-base text-slate-600 dark:text-gray-400">
              <Trans
                key={TKEYS["landing-page"]["why-choose-us"].sections[2].content}
              />
            </p>
          </div>

          <div class="my-4 p-4 flex-1 text-center md:mx-2">
            <h4 class="mb-4 text-xl font-display font-semibold">
              <Trans
                key={TKEYS["landing-page"]["why-choose-us"].sections[3].title}
              />
            </h4>
            <p class="p-1 text-base text-slate-600 dark:text-gray-400">
              <Trans
                key={TKEYS["landing-page"]["why-choose-us"].sections[3].content}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section class="container max-w-screen-lg flex flex-col justify-center p-6 my-6 mx-auto">
        <h3 class="mb-8 text-2xl font-display">
          <Trans key={TKEYS["landing-page"]["key-features"].title} />
        </h3>
        <div class="flex flex-col lg:grid lg:grid-cols-2">
          {/* <hr class="h-px col-span-full border-gray-300 dark:border-gray-500" /> */}

          <div class="my-4 p-4 lg:col-span-full">
            <h4 class="mb-4 text-xl font-display font-semibold">
              <Trans
                key={TKEYS["landing-page"]["key-features"].features[1].title}
              />
            </h4>
            <ul class="list-disc ml-6">
              <li class="mb-2">
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[1]
                        .sections[1].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[1]
                        .sections[1].content
                    }
                  />
                </p>
              </li>
              <li class="mb-2">
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[1]
                        .sections[2].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[1]
                        .sections[2].content
                    }
                  />
                </p>
              </li>
              <li>
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[1]
                        .sections[3].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[1]
                        .sections[3].content
                    }
                  />
                </p>
              </li>
            </ul>
          </div>

          <div class="hidden lg:block"></div>

          <hr class="h-px col-span-full border-gray-300 dark:border-gray-500" />

          <div class="my-4 p-4 lg:col-span-full">
            <h4 class="mb-4 text-xl font-display font-semibold">
              <Trans
                key={TKEYS["landing-page"]["key-features"].features[2].title}
              />
            </h4>
            <ul class="list-disc ml-6">
              <li class="mb-2">
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[2]
                        .sections[1].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[2]
                        .sections[1].content
                    }
                  />
                </p>
              </li>
              <li class="mb-2">
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[2]
                        .sections[2].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[2]
                        .sections[2].content
                    }
                  />
                </p>
              </li>
              <li>
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[2]
                        .sections[3].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[2]
                        .sections[3].content
                    }
                  />
                </p>
              </li>
            </ul>
          </div>

          <div class="hidden lg:block"></div>

          <hr class="h-px col-span-full border-gray-300 dark:border-gray-500" />

          <div class="my-4 p-4 lg:col-span-full">
            <h4 class="mb-4 text-xl font-display font-semibold">
              <Trans
                key={TKEYS["landing-page"]["key-features"].features[3].title}
              />
            </h4>
            <ul class="list-disc ml-6">
              <li class="mb-2">
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[3]
                        .sections[1].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[3]
                        .sections[1].content
                    }
                  />
                </p>
              </li>
              <li class="mb-2">
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[3]
                        .sections[2].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[3]
                        .sections[2].content
                    }
                  />
                </p>
              </li>
              <li>
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[3]
                        .sections[3].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[3]
                        .sections[3].content
                    }
                  />
                </p>
              </li>
            </ul>
          </div>

          <div class="hidden lg:block"></div>

          <hr class="h-px col-span-full border-gray-300 dark:border-gray-500" />

          <div class="my-4 p-4 lg:col-span-full">
            <h4 class="mb-4 text-xl font-display font-semibold">
              <Trans
                key={TKEYS["landing-page"]["key-features"].features[4].title}
              />
            </h4>
            <ul class="list-disc ml-6">
              <li class="mb-2">
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[4]
                        .sections[1].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[4]
                        .sections[1].content
                    }
                  />
                </p>
              </li>
              <li>
                <h5 class="text-base font-display font-semibold inline">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[4]
                        .sections[2].title
                    }
                  />
                  :{" "}
                </h5>
                <p class="text-base inline text-slate-600 dark:text-gray-400">
                  <Trans
                    key={
                      TKEYS["landing-page"]["key-features"].features[4]
                        .sections[2].content
                    }
                  />
                </p>
              </li>
            </ul>
          </div>

          <div class="hidden lg:block"></div>
        </div>
      </section>

      {/* Ready to Launch Your Website? */}
      <section class="container max-w-screen-lg flex flex-col justify-center p-6 mt-6 mx-auto">
        <h3 class="mb-6 text-center text-2xl font-display">
          <Trans
            key={TKEYS["landing-page"]["ready-to-launch-your-website"].title}
          />
        </h3>
        <div class="flex flex-col justify-center md:grid md:grid-cols-2">
          <div class="my-8 px-2 py-4 md:grid md:grid-cols-subgrid md:col-span-2">
            <div class="mb-8 md:m-0">
              <h4 class="text-xl font-display font-semibold text-center md:text-start">
                <Trans
                  key={
                    TKEYS["landing-page"]["ready-to-launch-your-website"]
                      .sections[1].title
                  }
                />
              </h4>
              <p class="text-base text-slate-600 text-center md:text-start dark:text-gray-400">
                <Trans
                  key={
                    TKEYS["landing-page"]["ready-to-launch-your-website"]
                      .sections[1].content
                  }
                />
              </p>
            </div>

            <div class="flex justify-center items-center">
              <A
                class="px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                href={REGISTRATION_URL}
              >
                <Trans key={TKEYS["landing-page"]["register"]} />
              </A>
            </div>
          </div>

          <div class="mx-auto my-8 px-2 py-4 md:grid md:grid-cols-subgrid md:col-span-2">
            <div class="mb-8 md:m-0">
              <h4 class="text-xl font-display font-semibold text-center md:text-start">
                <Trans
                  key={
                    TKEYS["landing-page"]["ready-to-launch-your-website"]
                      .sections[2].title
                  }
                />
              </h4>
              <p class="text-base text-slate-600 text-center md:text-start dark:text-gray-400">
                <Trans
                  key={
                    TKEYS["landing-page"]["ready-to-launch-your-website"]
                      .sections[2].content
                  }
                />
              </p>
            </div>
            <div class="flex justify-center items-center">
              <A
                class="px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                href={DASHBOARD_URL}
                target="_blank"
              >
                <Trans key={TKEYS["landing-page"]["open-dashboard"]} />
              </A>
            </div>
          </div>

          <div class="mt-8 mb-32 px-2 py-4 md:grid md:grid-cols-subgrid md:col-span-2">
            <div class="mb-8 md:m-0">
              <h4 class="text-xl font-display font-semibold text-center md:text-start">
                <Trans
                  key={
                    TKEYS["landing-page"]["ready-to-launch-your-website"]
                      .sections[3].title
                  }
                />
              </h4>
              <p class="text-base text-slate-600 text-center md:text-start dark:text-gray-400">
                <Trans
                  key={
                    TKEYS["landing-page"]["ready-to-launch-your-website"]
                      .sections[3].content
                  }
                />
              </p>
            </div>
            <div class="flex justify-center items-center">
              <a
                class="px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                href={"mailto:" + SUPPORT_EMAIL_ADDRESS}
              >
                <Trans key={TKEYS["landing-page"]["contact-us"]} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
