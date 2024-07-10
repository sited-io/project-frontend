import { useTransContext } from "@mbarzda/solid-i18next";
import { A } from "@solidjs/router";
import _ from "lodash";
import { Show, createEffect, createSignal, onMount } from "solid-js";
import { isServer } from "solid-js/web";

import { DarkModeIcon } from "~/components/assets/DarkModeIcon";
import { LanguageIcon } from "~/components/assets/LanguageIcon";
import { LightModeIcon } from "~/components/assets/LightModeIcon";
import { SitedIoLogo } from "~/components/assets/SitedIoLogo";
import { MdIconButton } from "~/components/form/MdIconButton";
import { getNextLanguageKey, TKEYS } from "~/locales";
import { indexPath } from "~/routes";

const LOCAL_STORAGE_THEME_KEY = "theme";
const LOCAL_STORAGE_THEME_LIGHT = "light";
const LOCAL_STORAGE_THEME_DARK = "dark";

export function Header() {
  const [trans, { getI18next, changeLanguage }] = useTransContext();

  const [isDarkMode, setIsDarkMode] = createSignal(false);

  onMount(() => {
    if (!isServer) {
      const storedTheme = localStorage?.getItem(LOCAL_STORAGE_THEME_KEY);
      if (!_.isNil(storedTheme)) {
        if (storedTheme === LOCAL_STORAGE_THEME_DARK) {
          setIsDarkMode(true);
        } else {
          setIsDarkMode(false);
        }
        return;
      }
      if (
        window &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDarkMode(true);
      }
    }
  });

  createEffect(() => {
    const html = _.first(document.getElementsByTagName("html"));
    if (isDarkMode()) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  });

  function handleToggleTheme() {
    setIsDarkMode(!isDarkMode());
    if (!isServer && localStorage) {
      const mode = isDarkMode()
        ? LOCAL_STORAGE_THEME_DARK
        : LOCAL_STORAGE_THEME_LIGHT;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, mode);
    }
  }

  function handleToggleLanguage() {
    const currentLanguage = getI18next()?.language;

    if (!_.isNil(currentLanguage)) {
      const lang = getNextLanguageKey(currentLanguage);
      changeLanguage(lang);
    }
  }

  return (
    <>
      <nav class="bg-light border-gray-200 dark:bg-dark">
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
          aria-label="Global"
        >
          <A
            class="flex items-center space-x-3 rtl:space-x-reverse"
            href={indexPath()}
            aria-label={trans(TKEYS.header.actions["go-to-home"])}
          >
            <SitedIoLogo />
          </A>

          <div>
            <MdIconButton
              onClick={handleToggleTheme}
              aria-label={trans(TKEYS.header.actions["change-mode"])}
            >
              <Show when={isDarkMode()} fallback={<DarkModeIcon />}>
                <LightModeIcon />
              </Show>
            </MdIconButton>

            <MdIconButton
              onClick={handleToggleLanguage}
              aria-label={trans(TKEYS.header.actions["change-language"])}
            >
              <LanguageIcon />
            </MdIconButton>
          </div>
        </div>
      </nav>
    </>
  );
}
