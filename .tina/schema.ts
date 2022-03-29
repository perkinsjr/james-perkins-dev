
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

export default defineSchema({
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
  mediaStore: async () => {
    const pack = await import('next-tinacms-cloudinary');
    return pack.TinaCloudCloudinaryMediaStore;
  },
  cmsCallback: (cms) => {
    //  add your CMS callback code here (if you want)

    // The Route Mapper
    /**
     * 1. Import `tinacms` and `RouteMappingPlugin`
     **/
    import("tinacms").then(({ RouteMappingPlugin }) => {
      /**
       * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
       **/
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["page"].includes(collection.name)) {
          if (document.sys.filename === "home") {
            return `/`;
          }
          return undefined
        }
        return `/${collection.name}/${document.sys.filename}`;
      });
      /**
       * 3. Add the `RouteMappingPlugin` to the `cms`.
       **/
      cms.plugins.add(RouteMapping);
      cms.flags.set('branch-switcher', true)
    });
  },
});
