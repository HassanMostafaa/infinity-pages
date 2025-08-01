import { FooterNavigation } from "@/components/footer-navigation/FooterNavigation";
import { HeaderNavigation } from "@/components/header-navigation/HeaderNavigation";
import { getLayout } from "@/services/content/getLayout";
import React, { FunctionComponent, PropsWithChildren } from "react";

export const LayoutComponent: FunctionComponent<PropsWithChildren> = async ({
  children,
}) => {
  const layoutData = await getLayout({ locale: "en" });
  return (
    <div className="min-h-screen flex flex-col">
      {/* header */}
      {layoutData?.header && <HeaderNavigation {...layoutData?.header} />}
      {/* content */}
      <div className="flex-1">{children}</div>
      {/* footer */}
      {layoutData?.footer && <FooterNavigation {...layoutData?.footer} />}
    </div>
  );
};
