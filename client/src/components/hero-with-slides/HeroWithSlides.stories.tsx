import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeroWithSlides, type IHeroWithSlides } from "./HeroWithSlides";

const meta: Meta<IHeroWithSlides> = {
  title: "Components/HeroWithSlides",

  component: HeroWithSlides,
  decorators: [
    (Story) => {
      return (
        <>
          <style
            dangerouslySetInnerHTML={{
              __html: `.sb-show-main.sb-main-padded{padding:0 !important;}`,
            }}
          />
          <Story />
        </>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<Meta<IHeroWithSlides>>;

export const Default: Story = {
  args: {
    Slides: [
      {
        id: "get-started",
        Title: "Welcome to Infinity Pages",
        Description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              },
            ],
          },
        ],
        Media: {
          url: "https://images.unsplash.com/photo-1452601323614-5ed44193e4f1?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "Hero Image",
          documentId: "",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 0,
        },
        Button: {
          Text: "Get Started",
          id: "get-started",
          IsExternal: true,
          ExternalUrl: "https://infinitypages.com",
        },
      },
      {
        id: "get-started",
        Title: "Welcome to Infinity Pages",
        Description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              },
            ],
          },
        ],
        Media: {
          url: "https://images.unsplash.com/photo-1452601323614-5ed44193e4f1?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "Hero Image",
          documentId: "",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 0,
        },
        Button: {
          Text: "Get Started",
          id: "get-started",
          IsExternal: true,
          ExternalUrl: "https://infinitypages.com",
        },
      },
      {
        id: "get-started",
        Title: "Welcome to Infinity Pages",
        Description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              },
            ],
          },
        ],
        Media: {
          url: "https://images.unsplash.com/photo-1452601323614-5ed44193e4f1?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "Hero Image",
          documentId: "",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 0,
        },
        Button: {
          Text: "Get Started",
          id: "get-started",
          IsExternal: true,
          ExternalUrl: "https://infinitypages.com",
        },
      },
      {
        id: "get-started",
        Title: "Welcome to Infinity Pages",
        Description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              },
            ],
          },
        ],
        Media: {
          url: "https://images.unsplash.com/photo-1452601323614-5ed44193e4f1?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "Hero Image",
          documentId: "",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 0,
        },
        Button: {
          Text: "Get Started",
          id: "get-started",
          IsExternal: true,
          ExternalUrl: "https://infinitypages.com",
        },
      },
    ],
    Breadcrumbs: [
      {
        ExternalUrl: "https://infinitypages.com",
        Text: "Home",
        id: "home1",
        IsExternal: true,
      },
    ],
  },
};
export const NoTitle: Story = {
  args: {
    Slides: [
      {
        id: "get-started",
        Title: "",
        Description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              },
            ],
          },
        ],
        Media: {
          url: "https://images.unsplash.com/photo-1452601323614-5ed44193e4f1?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "Hero Image",
          documentId: "",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 0,
        },
        Button: {
          Text: "Get Started",
          id: "get-started",
          IsExternal: true,
          ExternalUrl: "https://infinitypages.com",
        },
      },
    ],
    Breadcrumbs: [
      {
        ExternalUrl: "https://infinitypages.com",
        Text: "Home",
        id: "home1",
        IsExternal: true,
      },
    ],
  },
};
export const NoDescription: Story = {
  args: {
    Slides: [
      {
        id: "get-started",
        Title: "Welcome to Infinity Pages",
        Description: null,
        Media: {
          url: "https://images.unsplash.com/photo-1452601323614-5ed44193e4f1?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "Hero Image",
          documentId: "",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 0,
        },
        Button: {
          Text: "Get Started",
          id: "get-started",
          IsExternal: true,
          ExternalUrl: "https://infinitypages.com",
        },
      },
    ],
    Breadcrumbs: [
      {
        ExternalUrl: "https://infinitypages.com",
        Text: "Home",
        id: "home1",
        IsExternal: true,
      },
    ],
  },
};
export const NoButton: Story = {
  args: {
    Slides: [
      {
        id: "get-started",
        Title: "Welcome to Infinity Pages",
        Description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              },
            ],
          },
        ],
        Media: {
          url: "https://images.unsplash.com/photo-1452601323614-5ed44193e4f1?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "Hero Image",
          documentId: "",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 0,
        },
        Button: null,
      },
    ],
    Breadcrumbs: [
      {
        ExternalUrl: "https://infinitypages.com",
        Text: "Home",
        id: "home1",
        IsExternal: true,
      },
    ],
  },
};
export const NoContent: Story = {
  args: {
    Slides: [
      {
        id: "get-started",
        Title: "",
        Description: null,
        Media: {
          url: "https://images.unsplash.com/photo-1452601323614-5ed44193e4f1?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "Hero Image",
          documentId: "",
          hash: "",
          mime: "",
          name: "",
          provider: "",
          size: 0,
        },
        Button: null,
      },
    ],
    Breadcrumbs: [
      {
        ExternalUrl: "https://infinitypages.com",
        Text: "Home",
        id: "home1",
        IsExternal: true,
      },
    ],
  },
};
export const NoMedia: Story = {
  args: {
    Slides: [
      {
        id: "get-started",
        Title: "Welcome to Infinity Pages",
        Description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
              },
            ],
          },
        ],
        Media: null,
        Button: {
          Text: "Get Started",
          id: "get-started",
          IsExternal: true,
          ExternalUrl: "https://infinitypages.com",
        },
      },
    ],
    Breadcrumbs: [
      {
        ExternalUrl: "https://infinitypages.com",
        Text: "Home",
        id: "home1",
        IsExternal: true,
      },
    ],
  },
};
