import "./globals.css";

import React from "react";

export const metadata = {
  title: "LA County Fire Medic Bot",
  description: "Enterprise EMS Protocol Assistant for LA County Fire Department",
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
