import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextThemesProvider } from "@/components/NextThemesProvider";
import { AntdConfigProvider } from "@/components/AntConfigProviderWrapper";
import Footer from "@/components/footer";
import { Theme } from "@radix-ui/themes";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "anon-notes",
  description: "Anonymous Notes/Messages from a Link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sora.variable}>
        <NextThemesProvider>
          <AntdRegistry>
            <AntdConfigProvider>
              <Theme accentColor="gray" grayColor="slate">
                {children}
                <Footer />
              </Theme>
            </AntdConfigProvider>
          </AntdRegistry>
        </NextThemesProvider>
      </body>
    </html>
  );
}
