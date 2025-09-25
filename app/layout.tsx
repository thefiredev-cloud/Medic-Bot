import "./globals.css";
import React from "react";

export const metadata = {
  title: "EmergiBot",
  description: "LA County EMS Protocol Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
