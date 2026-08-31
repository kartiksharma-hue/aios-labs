import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { fontVariables } from "@/lib/fonts";
import { site } from "@/lib/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <head>
        <Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-ZJ2X3GQCP2"
/>
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZJ2X3GQCP2');
  `}
</Script>
        {/*
          Runs before first paint. Marks the document as JS-capable so reveal
          animations can prime their hidden state without hiding content from
          users whose JavaScript never arrives, and flags whether the home
          page intro is still owed to this session — see src/lib/intro.ts.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              `document.documentElement.classList.add('js');` +
              `try{if(sessionStorage.getItem('aios:intro-played')!=='1')` +
              `document.documentElement.dataset.intro='play'}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-base text-ink flex min-h-full flex-col">
        <a
          href="#main"
          className="bg-signal text-ink-inverse sr-only rounded-xs px-4 py-2 text-small font-medium focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
