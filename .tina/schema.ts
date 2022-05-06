
import { defineSchema, defineConfig } from "tinacms";
import type { TinaTemplate } from "@tinacms/cli";

const heroBlock : TinaTemplate = {
  name: 'hero',
  label: 'Hero',
  fields: [
    {
      type: 'string',
      label: 'Heading',
      name: 'heading',
    },
    {
      type: 'string',
      label: 'Subeheading',
      name: 'subheading',
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'image',
      name: 'image',
      label: 'Hero Image',
    }
  ],
}

const contentSection : TinaTemplate = {
  name: 'content',
  label: 'Content Section',
  fields: [
    {
      type: 'object',
      label: 'Content Items',
      name: 'items',
      list: true,
      fields: [
            {
              name: "image",
              label: "Content Image",
              type: "image",
            },
            {
              name: "name",
              label: "Content Name",
              type: "string",
            },
            {
              name: "description",
              label: "Description",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
            {
              name: "href",
              label: "Link",
              type: "string",
            },
          ],
    },
  ]
}

const featureSection : TinaTemplate = {
  name: 'features',
  label: 'Features',
  fields: [
    {
      type: 'object',
      label: 'Feature Items',
      name: 'items',
      list: true,
      fields: [
        {
          label: "Article",
          name: "article",
          type: "reference",
          collections: ["post"],
        }
          ],
    },
  ],
}

const videoSection : TinaTemplate = {
  name: 'video',
  label: 'Video Section',
  fields: [
    {
      type: 'object',
      label: 'Video Items',
      name: 'items',
      list: true,
      fields: [
            {
              name: "title",
              label: "Video Title",
              type: "string",
            },
            {
              name: "description",
              label: "Description",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
            {
              name: "url",
              label: "Video URL",
              type: "string",
            },
          ],
    },
  ]
};

const schema =  defineSchema({
  collections: [
    {
      label: 'Page Content',
      name: 'page',
      path: 'content/page',
      fields: [
        {
          type: "object",
          list: true,
          name: 'blocks',
          label: 'Sections',
          templates: [heroBlock, featureSection,contentSection,videoSection],
        },
      ],
    },
    {
      label: 'Blog Posts',
      name: 'post',
      path: 'content/post',
      format: "mdx",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "datetime",
          label: "Published Date",
          name: "date",
        },
        {
          type: "image",
          label: "Cover Image",
          name: "image",
        },
        {
          type: "string",
          label: "Author",
          name: "author",
        },
        {
          type: "string",
          label: "Author Twitter Handle",
          name: "authorTwitter",
        },
        {
          type: "string",
          label: "Category",
          name: "category",
          options: ["tutorials", "thoughts", "productivity","podcast","roll your tweet"],
          list: true
        },
        {
          type: "string",
          label: "Tags",
          name: "tags",
          options: ["nextjs", "javascript", "devops","tailwind","thoughts", "productivity","devrel","astro"],
          list: true
        },
        {
          type: "string",
          label: "Description",
          name: "description",
        },
        {
          type: 'rich-text',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          templates: [
            {
              name: 'newsletter',
              label: 'Newsletter',
              fields: [],
            },
            {
              name: 'youtube',
              label: 'Youtube Video',
              fields: [
                {
                  type: "string",
                  label: "Youtube video URL",
                  name: "url",
                },
              ],
            },
            {
              name: 'carbon',
              label: 'Carbon Ads',
              fields: [],
            }
          ]
        },
      ],
    },
  ],
})





// Your tina config
// ==============
const branch = 'main'
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:4001/graphql'
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`

export const tinaConfig = defineConfig({
  apiURL,
  schema,
  mediaStore: async () => {
    const pack = await import('next-tinacms-cloudinary');
    return pack.TinaCloudCloudinaryMediaStore;
  },
  cmsCallback: (cms) => {
    cms.flags.set('branch-switcher', true);

    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["page"].includes(collection.name)) {
          if (document.sys.filename === "home") {
            return `/`;
          }
          return undefined;
        }
        return `/${collection.name}/${document.sys.filename}`;
      });
      cms.plugins.add(RouteMapping);
      
    });
    return cms;
  },
});
export default schema;
