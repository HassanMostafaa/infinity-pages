import { IGenHeaderNavigation } from "@/types";
import Image from "next/image";
import { FunctionComponent } from "react";

export const HeaderNavigation: FunctionComponent<IGenHeaderNavigation> = ({
  Links,
  Logo,
}) => {
  return (
    <div className="sticky top-0 z-50 responsive flex justify-between gap-4 bg-white py-2">
      {Logo?.url && (
        <div className="relative h-[70px] min-w-[100px]">
          <Image
            priority
            src={process.env.NEXT_PUBLIC_STRAPI_URL + Logo.url}
            alt={Logo.alternativeText ?? ""}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      {Links && Links?.length > 0 && (
        <nav className="flex flex-wrap items-center gap-8">
          {Links.map((link, index) => (
            <a
              key={index}
              href={link?.Page?.MetaData?.Slug || "#"}
              className="text-base font-medium text-slate-600 hover:text-slate-500"
            >
              {link?.Page?.MetaData?.NavigationName}
            </a>
          ))}
        </nav>
      )}
      {Logo?.url && (
        <div className="relative opacity-0 h-[70px] min-w-[100px]">
          <Image
            priority
            src={process.env.NEXT_PUBLIC_STRAPI_URL + Logo.url}
            alt={Logo.alternativeText ?? ""}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </div>
  );
};
