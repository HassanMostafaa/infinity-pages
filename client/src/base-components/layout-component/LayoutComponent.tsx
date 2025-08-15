import { Providers } from "@/app/providers";
import { FooterNavigation } from "@/components/footer-navigation/FooterNavigation";
import { HeaderNavigation } from "@/components/header-navigation/HeaderNavigation";
import { getLayout } from "@/services/content/getLayout";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-zen-kaku-gothic-new",
});
export const LayoutComponent: FunctionComponent<PropsWithChildren> = async ({
  children,
}) => {
  const layoutData = await getLayout({ locale: "en" });
  return (
    <Providers>
      <div
        className={`${outfit.className} min-h-screen flex flex-col antialiased`}
      >
        {/* header */}
        {layoutData?.header && <HeaderNavigation {...layoutData?.header} />}
        {/* content */}
        <div className="flex-1">{children}</div>
        {/* footer */}
        {layoutData?.footer && <FooterNavigation {...layoutData?.footer} />}
      </div>
    </Providers>
  );
};
