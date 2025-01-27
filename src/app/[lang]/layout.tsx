import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { PageProps } from "./types";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [
    {
      lang: "kr",
    },
  ];
}

export default function RootLayout({
  children,
  params,
}: Readonly<
  {
    children: React.ReactNode;
  } & PageProps
>) {
  const { lang } = params;
  return (
    <html lang={lang}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
