import "./globals.css";
import "@/styles/index.scss";
import Layout from "@/components/wrappers/Layout";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import { GET__getUser } from "@/services/queries-ssr";
import { AppWrapper } from "@/context/AppWrapper";
import { Toaster } from "@/components/ui/shadcn/sonner";
import { TooltipProvider } from "@/components/ui/shadcn/tooltip";

export const pacaembu = localFont({
  src: "../public/fonts/Pacaembu.woff2",
  variable: "--t-font-family-global",
});

export const metadata = {
  title: "Online Resume Builder | Free Resume Maker",
  description:
    "✓ Create a professional resume that results in interview callbacks with Enhancv's Resume Builder ✓ Premium & free templates ✓ Fill in your details & apply to jobs.",
};

export default async function RootLayout({ children }) {
  const user = await GET__getUser();
  return (
    <html lang="en">
      <body className={`${pacaembu.variable}`}>
        <NextTopLoader
          color="var(--t-primary-branding-color)"
          showSpinner={false}
          height={2}
          zIndex={999999}
        />
        <TooltipProvider>
          <AppWrapper user={user}>
            <Layout>{children}</Layout>
          </AppWrapper>
        </TooltipProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
