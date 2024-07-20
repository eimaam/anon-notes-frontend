import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Providers } from "@/components/ThemeProvider";
import { AntdConfigProvider } from "@/components/AntConfigProviderWrapper";
import Footer from "@/components/footer";

const sora = Sora({ subsets: ["latin"] });

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
      <body className={sora.className}>
        <Providers>
          <AntdRegistry>
            <AntdConfigProvider>
              {children}
              <Footer />
            </AntdConfigProvider>
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
