import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "http://135.181.116.96:3005/";
// const baseUrl = "http://localhost:3000";
const brandName = "Time of Times";

export const metadata: Metadata = {
  title: {
    default: brandName,
    template: `%s | ${brandName}`,
  },
  description:
    "Today's News Carved in NFT. Every day, one global event is captured as a unique, historical collectible NFT, featuring AI and artist-created artwork. Create, vote, trade, and hold 'NFTs of the Day'.",

  keywords: [
    "Historically Valuable NFTs",
    "NFT of the Day",
    "News NFT",
    "Historical NFT",
    "Collectible NFT",
    "Crypto Art",
    "AI Art NFT",
    "Digital Collectibles",
    "NFT Marketplace",
    "Daily NFT",
    "Unique NFT",
  ],

  authors: [{ name: "Community Team", url: baseUrl }],
  creator: brandName,

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title: `Historically Valuable NFTs | ${brandName}`,
    description:
      "Every day, one global event is captured as a unique, historical collectible NFT. Vote, trade, and hold the 'NFT of the Day'.",
    url: baseUrl,
    siteName: brandName,
    images: [
      {
        url: `${baseUrl}/cover.png`,
        width: 1200,
        height: 630,
        alt: "Historically Valuable NFTs: Today's News Carved in NFT",
      },
      {
        url: `${baseUrl}/web-app-manifest-192x192.png`,
        width: 192,
        height: 192,
        type: "image/png",
        alt: "Historically Valuable NFTs: Today's News Carved in NFT",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `NFT of the Day | Historical Collectibles`,
    description:
      "The platform for 'NFTs of the Day': one global event, one AI artwork, one artist's creation, minted daily.",
    images: [`${baseUrl}/cover.png`],
    creator: "@NFTOfTheDay",
    site: "@NFTOfTheDay",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FF4F3A" />
      </head>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
