import { IGenPageContentDynamicZone, Maybe } from "@/types";

export const Page = ({
  sections,
}: {
  sections: Maybe<Maybe<IGenPageContentDynamicZone>[]>;
}) => (
  <>
    {sections?.map((section, index) => {
      const key = section?.__typename ?? `section-${index}`;
      return <div key={key}>{renderer(section)}</div>;
    })}
  </>
);

function renderer(section: Maybe<IGenPageContentDynamicZone>) {
  switch (section?.__typename) {
    case "ComponentHeroSectionHeroWithSlides":
      return <div>HeroWithSlides</div>;
    case "ComponentSectionsThreeColumnsSwiper":
      return <div>ThreeColumnsSwiper</div>;
    case "ComponentSectionsTitleDescriptionCtAs":
      return <div>TitleDescriptionCtAs</div>;
    case "ComponentSectionsTitleDescriptionMedia":
      return <div>TitleDescription</div>;
    case "Error":
      return <div>Error: {JSON.stringify(section)}</div>;
    default:
      return null;
  }
}
