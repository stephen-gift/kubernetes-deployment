import { Metadata } from "next";

interface MetadataProps {
  prefix?: string;
  suffix?: string;
  path: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export const SEO = ({
  prefix,
  suffix,
  path,
  description = "🚀 [PROJECT_NAME] provides [WHAT_YOUR_APP_DOES] to help [TARGET_AUDIENCE] achieve [BENEFIT].",
  keywords = "[PROJECT_NAME], [PRIMARY_KEYWORD], [SECONDARY_KEYWORD], [EXTRA_KEYWORDS]",
  image = "/og-image.jpeg"
}: MetadataProps): Metadata => {
  const siteName = "[PROJECT_NAME]";
  const author = "[AUTHOR_OR_COMPANY]";
  const twitterHandle = "@[TWITTER_HANDLE]";
  const baseUrl = "https://[YOUR_DOMAIN].com";

  const title = `${prefix ? prefix + " | " : ""}${siteName}${
    suffix ? " - " + suffix : ""
  }`;

  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: twitterHandle,
      site: twitterHandle
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png"
    },
    manifest: "/site.webmanifest",
    verification: {
      google: "[GOOGLE_VERIFICATION_CODE]",
      yandex: "[YANDEX_VERIFICATION_CODE]",
      yahoo: "[YAHOO_VERIFICATION_CODE]"
    }
  };
};
