import { IGenFooterNavigation } from "@/types";
import Link from "next/link";
import React, { FunctionComponent } from "react";

export const FooterNavigation: FunctionComponent<IGenFooterNavigation> = ({
  Columns,
}) => {
  console.log("FooterNavigation Columns:", Columns);
  return (
    <div className=" py-10 responsive">
      {Columns && Columns.length > 0 && (
        <div className="flex gap-32 flex-wrap">
          {Columns.map((column, index) => (
            <div key={index} className="flex flex-col gap-4 w-fit">
              {column?.Title && (
                <h3 className="text-lg font-semibold">{column.Title}</h3>
              )}
              {column?.Links && column.Links.length > 0 && (
                <ul className="space-y-1">
                  {column.Links.map((link, linkIndex) => {
                    const isExternal = link?.IsExternal;
                    return (
                      <li key={linkIndex}>
                        {!isExternal ? (
                          <Link href={link?.page?.MetaData?.Slug || "#"}>
                            {link?.page?.MetaData?.NavigationName}
                          </Link>
                        ) : (
                          <Link href={link?.ExternalUrl || "#"}>
                            {link?.Text}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
