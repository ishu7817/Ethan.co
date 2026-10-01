import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nafae.co",
  description: "Motion Design Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
     <head>
  <link rel="preconnect" href="https://api.fontshare.com" />
  <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://api.fontshare.com/v2/css?f[]=chillax@200,300,400,500,600,700&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://api.fontshare.com/v2/css?f[]=array@400,600&display=swap"
  />
</head>
      <body className="min-h-full flex flex-col">
        <ReactLenis
          root
          options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
        >
          {children}
        </ReactLenis>{" "}
      </body>
    </html>
  );
}