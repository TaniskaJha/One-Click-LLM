import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "OneClickLLM",
      social: {
        github: "https://github.com/TaniskaJha/One-Click-LLM",
      },
      customCss: ["./src/tailwind.css"],
      sidebar: [
        {
          label: "Free Api",
          autogenerate: {
            directory: "free-demo-api",
          },
        },
        {
          label: "User Docs",
          autogenerate: {
            directory: "guides",
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
