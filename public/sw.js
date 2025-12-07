if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => a(e, i),
      o = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-e9849328"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/dynamic-css-manifest.json",
          revision: "d751713988987e9331980363e24189ce",
        },
        {
          url: "/_next/static/cdCesE58YhgFGPCEDa-bm/_buildManifest.js",
          revision: "c7b2b98710ab435e5d335a326b8c31f6",
        },
        {
          url: "/_next/static/cdCesE58YhgFGPCEDa-bm/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/331.af519a167f8eb9a2.js",
          revision: "af519a167f8eb9a2",
        },
        {
          url: "/_next/static/chunks/372-b7f0f1be01a3594f.js",
          revision: "b7f0f1be01a3594f",
        },
        {
          url: "/_next/static/chunks/390.cc1fd4ef42caf90e.js",
          revision: "cc1fd4ef42caf90e",
        },
        {
          url: "/_next/static/chunks/855-60061d90cadc88fd.js",
          revision: "60061d90cadc88fd",
        },
        {
          url: "/_next/static/chunks/88aa147d-7b4e08b9f032044b.js",
          revision: "7b4e08b9f032044b",
        },
        {
          url: "/_next/static/chunks/9aadf96e-ceb6f9c7c15dfb2c.js",
          revision: "ceb6f9c7c15dfb2c",
        },
        {
          url: "/_next/static/chunks/framework-0f6453f7ca1dbb6d.js",
          revision: "0f6453f7ca1dbb6d",
        },
        {
          url: "/_next/static/chunks/main-f1245f9cd64da584.js",
          revision: "f1245f9cd64da584",
        },
        {
          url: "/_next/static/chunks/pages/_app-8393b41e1d370ef7.js",
          revision: "8393b41e1d370ef7",
        },
        {
          url: "/_next/static/chunks/pages/_error-d81c99316f731b9a.js",
          revision: "d81c99316f731b9a",
        },
        {
          url: "/_next/static/chunks/pages/id-3963cc6edda4b779.js",
          revision: "3963cc6edda4b779",
        },
        {
          url: "/_next/static/chunks/pages/id/about-bc8fb3377eeab93f.js",
          revision: "bc8fb3377eeab93f",
        },
        {
          url: "/_next/static/chunks/pages/id/showcase-6ba6569f5002502e.js",
          revision: "6ba6569f5002502e",
        },
        {
          url: "/_next/static/chunks/pages/index-da63fee0b8a4bfe5.js",
          revision: "da63fee0b8a4bfe5",
        },
        {
          url: "/_next/static/chunks/pages/maintenance-980638b35691da63.js",
          revision: "980638b35691da63",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-d16550afb1d90f75.js",
          revision: "d16550afb1d90f75",
        },
        {
          url: "/_next/static/css/e8bb4c390dfd18de.css",
          revision: "e8bb4c390dfd18de",
        },
        {
          url: "/album/ado-kyougen-cover.jpg",
          revision: "45af17fb87711879d45adc91471426f3",
        },
        {
          url: "/album/ado-uta-one-piece.jpg",
          revision: "705ca2a69a6cf5e59b3afa2226e0cce3",
        },
        {
          url: "/album/ado-zanmu-cover.jpg",
          revision: "3d78bb012401304e09c0979fa6516363",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        {
          url: "/images/after-hours-apple-music.jpg",
          revision: "256e81d7b6594b3f96bc69cf0ea9db2c",
        },
        {
          url: "/images/amp-image.jpg",
          revision: "545f279a8295e6a40e4f131cb7c8e76f",
        },
        {
          url: "/images/beat-headphone-banner.jpg",
          revision: "6151ccd54119e6aad96c6bb0af9630be",
        },
        {
          url: "/images/speaker-monitor.jpg",
          revision: "9eb498f6f24f74c0de0cba0b786f9e41",
        },
        {
          url: "/images/speaker-studio-reference.jpg",
          revision: "809e88ce575e1a8f4ce2e45dfa77c86d",
        },
        {
          url: "/product/chu2.jpg",
          revision: "cf5c7f0d00da112a1796a46dfbaef339",
        },
        {
          url: "/product/jcally-jm10.jpg",
          revision: "fb7228de39dda548c70ed4e1edcbd94c",
        },
        {
          url: "/product/kz-am01-dac.jpg",
          revision: "41e4ade0b39736f7c2f85fa0ec270487",
        },
        {
          url: "/product/nakamichi-mv200.png",
          revision: "e7427b9945332d9edd52d3935119408e",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
