// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            lang="en"
            name="description"
            content="Empowering individuals and businesses to effortlessly create websites and online shops with automated design and comprehensive ecommerce tools."
          />
          <meta
            lang="de"
            name="description"
            content="Ermöglicht es Einzelpersonen und Unternehmen, mühelos Websites und Online-Shops mit automatisiertem Design und umfassenden E-Commerce-Werkzeugen zu erstellen."
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&family=Noto+Sans:wght@300;400;500;600"
          />
          <title lang="en">
            sited.io | effortlessly create websites and online shops
          </title>
          <title lang="de">
            sited.io | erstelle mühelos Websites und Online-Shops
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
