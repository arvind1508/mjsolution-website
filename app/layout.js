import "./globals.css";

export const metadata = {
  title: "MJ Solutions | Commercial Interior Design & Contracting in Mumbai",
  description:
    "MJ Solutions delivers turnkey commercial and residential interior design, space planning, false ceiling, POP and gypsum solutions in Mumbai.",
  keywords: [
    "MJ Solutions",
    "commercial interior design Mumbai",
    "turnkey interior contractor",
    "false ceiling",
    "pop and gypsum",
    "custom furniture",
    "office interior design",
    "residential interiors",
  ],
  openGraph: {
    title: "MJ Solutions | Transforming Spaces For Future",
    description:
      "Turnkey interior design and contracting in Mumbai for commercial and residential spaces.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJ Solutions | Transforming Spaces For Future",
    description:
      "Commercial design and contracting with fast-response consultation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
