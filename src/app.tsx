import { TransProvider } from "@mbarzda/solid-i18next";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ICU from "i18next-icu";

import "./app.css";
import { Layout } from "./layout/Layout";
import { LOCALES } from "./locales";
import "./material-icons.css";
import "./normalize.css";
import { Suspense } from "solid-js";

export default function App() {
  const i18nextInstance = i18next.createInstance({
    load: "all",
    resources: LOCALES,
  });
  i18nextInstance.use(LanguageDetector);
  i18nextInstance.use(ICU);

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <TransProvider instance={i18nextInstance}>
            <Suspense>
              <Layout>{props.children}</Layout>
            </Suspense>
          </TransProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
