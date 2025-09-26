import "./globals.css";

import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fanciful-pithivier-308482.netlify.app"),
  title: {
    default: "LA County Fire Medic Bot",
    template: "%s • LA County Fire Medic Bot",
  },
  description:
    "Enterprise-grade EMS protocol assistant powered by Next.js and the Los Angeles County Prehospital Care Manual.",
  openGraph: {
    type: "website",
    title: "LA County Fire Medic Bot",
    description:
      "Reference the LA County Prehospital Care Manual anywhere. Built on Next.js with MCP-powered retrieval.",
    url: "https://fanciful-pithivier-308482.netlify.app",
    siteName: "LA County Fire Medic Bot",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LA County Fire Medic Bot interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LA County Fire Medic Bot",
    description: "Next.js-powered medic assistant for LA County protocols.",
    images: ["/og-image.png"],
  },
  themeColor: "#b91c1c",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="siteHeaderInner">
            <div className="brand">
              <div className="brandMark" aria-hidden="true">🚒</div>
              <div className="brandText">
                <div className="brandTitle">LA County Fire</div>
                <div className="brandSubtitle">Medic Bot • Prehospital Care Manual</div>
              </div>
            </div>
            <div className="envBadge">Enterprise</div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
