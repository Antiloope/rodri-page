# Local Node is not required. Docker is the supported toolchain
# so the site can be developed and built on a clean machine
# and still emit a static tree for GitHub Pages.
FROM node:22-bookworm AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS dev
COPY . .
EXPOSE 4200
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]

FROM deps AS build
COPY . .
ARG BASE_HREF=/
RUN npx ng build --configuration production --base-href ${BASE_HREF}

FROM nginx:1.27-alpine AS preview
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/rodri-page/browser /usr/share/nginx/html
