import { Roboto } from "next/font/google";
import React, { PropsWithChildren, ReactElement } from "react";
import { DEFAULT_LANG, SupportedLangs } from "../types";
import Body from "./Body";
import Footer from "./footer";
import Header from "./header";
import { ThemeProvider } from "./theme/ThemeContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const LayoutWrapper = ({
  children,
  lang = DEFAULT_LANG,
}: PropsWithChildren<{ lang?: SupportedLangs }>) => {
  return (
    <html lang={lang}>
      <ThemeProvider>
        <Body className={roboto.className}>
          <Header lang={lang} />
          <main className="flex min-h-screen flex-col items-center justify-between p-10 sm:p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              {children}
            </div>
          </main>
          <Footer />
          <div id="container" />
        </Body>
      </ThemeProvider>
    </html>
  );
};

export const withLayout = <T extends {}>(
  WrappedComponent: React.ComponentType<T>
) => {
  function LayoutWrappedComponent(props: T) {
    return (
      <LayoutWrapper>
        <WrappedComponent {...props} />
      </LayoutWrapper>
    );
  }

  return LayoutWrappedComponent;
};
