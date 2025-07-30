import { IGenHeaderNavigation } from "@/types";
import Image from "next/image";
import React, { FunctionComponent } from "react";

export const HeaderNavigation: FunctionComponent<IGenHeaderNavigation> = ({
  Links,
  Logo,
}) => {
  console.log("HeaderNavigation attributes:", { Links, Logo });
  return (
    <div>
      <div className="responsive flex justify-between gap-4">
        {Logo?.url && (
          <div className="relative h-[80px] w-[140px]">
            <Image
              src={Logo.url}
              alt={Logo.alternativeText ?? ""}
              fill
              className="object-contain"
            />
          </div>
        )}
        {Links && Links.length > 0 && (
          <nav className="flex border-4 flex-wrap items-center gap-4">
            {Links.map((link, index) => (
              <a
                key={index}
                href={link?.Page?.MetaData?.Slug || "#"}
                className="text-lg font-semibold text-gray-800 hover:text-blue-600"
              >
                {link?.Page?.MetaData?.NavigationName}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};
