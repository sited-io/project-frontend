import _ from "lodash";

import { DE } from "./de";
import { TKEYS } from "./keys";
import { EN } from "./en";

export { TKEYS };

export const LANGUAGES = {
  english: "en",
  german: "de",
};

export const LOCALES = {
  dev: {
    translation: EN,
  },
  [LANGUAGES.english]: {
    translation: EN,
  },
  [LANGUAGES.german]: {
    translation: DE,
  },
};

export function getNextLanguageKey(currentLanguageKey: string) {
  const languageKeys = _.values(LANGUAGES);

  if (_.isEmpty(languageKeys)) {
    throw new Error("List of languages was empty");
  }

  let currentIndex = _.findIndex(
    languageKeys,
    (key) => key === currentLanguageKey
  );

  // find language key with location like "en-US" --> "en"
  if (currentIndex < 0) {
    const cleanedLangageKey = currentLanguageKey.split("-")[0];
    currentIndex = _.findIndex(
      languageKeys,
      (key) => key === cleanedLangageKey
    );
  }

  const nextIndex = currentIndex + 1;

  if (nextIndex < languageKeys.length) {
    return languageKeys[nextIndex];
  }

  return languageKeys[0];
}
