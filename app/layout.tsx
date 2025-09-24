export const metadata = {
  title: "EmergiBot - LA County EMS Protocols",
  description: "LA County EMS protocol assistant for fire and first responders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", background: "#0b0d10", color: "#e6e9ee", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
