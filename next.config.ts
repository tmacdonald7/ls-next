import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/codex-voicepad",
        destination: "/voiceprompt",
        permanent: true,
      },
      {
        source: "/voice-prompt",
        destination: "/voiceprompt",
        permanent: true,
      },
      {
        source: "/voiceprompts",
        destination: "/voiceprompt",
        permanent: true,
      },
      {
        source: "/voicepad",
        destination: "/voiceprompt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
