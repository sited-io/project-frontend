import { ParentProps } from "solid-js";

import { Footer } from "./Footer";
import { Header } from "./Header";

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
