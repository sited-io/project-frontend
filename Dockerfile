FROM node:22-alpine

RUN mkdir -p /home/node/app/node_modules/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./ 

USER node

RUN npm ci

COPY --chown=node:node src ./src
COPY --chown=node:node public ./public
COPY --chown=node:node app.config.ts postcss.config.js tailwind.config.js tsconfig.json ./

ARG VITE_SUPPORT_EMAIL_ADDRESS
ARG VITE_DASHBOARD_URL
ARG VITE_REGISTRATION_URL

RUN npm run build

CMD [ "node", "/home/node/app/.output/server/index.mjs" ]
