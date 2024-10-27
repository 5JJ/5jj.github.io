import { Inter } from "next/font/google";
import React, { PropsWithChildren, ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            {children}
          </div>
        </main>
      </body>
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
