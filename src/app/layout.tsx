import type { Metadata } from "next";
import { Afacad, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/global/Header";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "[PROJECT_NAME]",
  description: "[PROJECT_NAME] - [TAGLINE_OR_SHORT_DESCRIPTION]",
  appleWebApp: {
    title: "[PROJECT_NAME]"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${afacad.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </ReduxProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
