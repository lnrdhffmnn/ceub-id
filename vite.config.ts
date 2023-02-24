import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "CEUB ID",
        short_name: "CEUB ID",
        description: "CEUB ID",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        lang: "pt-BR",
        icons: [
          {
            src: "icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        screenshots: [
          {
            src: "screenshots/home-1.webp",
            sizes: "1080x2340",
            type: "image/webp",
            platform: "narrow",
            label: "Home page",
          },
          {
            src: "screenshots/home-2.webp",
            sizes: "1080x2340",
            type: "image/webp",
            platform: "narrow",
            label: "Home page with qr code",
          },
          {
            src: "screenshots/settings.webp",
            sizes: "1080x2340",
            type: "image/webp",
            platform: "narrow",
            label: "Settings page",
          },
        ],
      },
    }),
  ],
});
