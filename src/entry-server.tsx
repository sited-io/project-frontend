// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { LANGUAGES } from "./locales";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Empowering individuals and businesses to effortlessly create websites and online shops with automated design and comprehensive ecommerce tools."
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&family=Noto+Sans:wght@300;400;500;600"
          />
          <title>
            sited.io | effortlessly create websites and online shops
          </title>

          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
