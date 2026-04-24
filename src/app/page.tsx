import { SEO } from "@/components/global/SEO";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = SEO({
  prefix: "Home",
  path: "/",
  description: "Dummy sign-in page for template usage."
});

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-left">
          Welcome to <span className="text-primary">KUBERNETES DEPLOYMENT</span>
        </h1>
        </main>
    </div>
  );
}
