import { Title } from "@solidjs/meta";
import { ParentProps } from "solid-js";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Trans } from "@mbarzda/solid-i18next";
import { TKEYS } from "~/locales";

export function Layout(props: ParentProps) {
  return (
    <>
      <Header />

      <main class="min-h-screen overflow-auto break-words text-balance text-dark dark:text-light bg-light dark:bg-dark">
        {props.children}
      </main>

      <Footer />
    </>
  );
}
