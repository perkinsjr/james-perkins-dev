
import { defineSchema, defineConfig } from "tinacms";
import type { TinaTemplate } from "@tinacms/cli";
import { TinaFieldInner } from "@tinacms/schema-tools";


export const filenameToLabel = (filename: string) => {
  return filename
    .replace(/.md+$/, "")
    .split(/[.\/]+/)
    .pop()
    .replace("-", " ");
};

export const categoriesReferenceField: TinaFieldInner<false> = {
  type: "object",
  label: "Categories",
  name: "categories",
  list: true,
  ui: {
    itemProps: (item) => {
      return {
        label: item.category
          ? filenameToLabel(item.category)
          : "No category selected",
      };
    },
  },
  fields: [
    {
      label: "Category",
      name: "category",
      type: "reference",
      collections: ["category"],
    },
  ],
};
export const authorReferenceField: TinaFieldInner<false> = {
  type: "object",
  label: "Authors",
  name: "authors",
  list: true,
  ui: {
    itemProps: (item) => {
      return {
        label: item.author
          ? filenameToLabel(item.author)
          : "No author selected",
      };
    },
  },
  fields: [
    {
      label: "Author",
      name: "author",
      type: "reference",
      collections: ["author"],
    },
  ],
};
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
  config: {
    media: {
      tina: {
        publicFolder: "public",
        syncFolder: "",
      },
    },
  },
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
  label: "Category",
  name: "category",
  path: "content/data/categories",
  format: "md",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "object",
      label: "Related Categories",
      name: "related",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.category
              ? filenameToLabel(item.category)
              : "No category selected",
          };
        },
      },
      fields: [
        {
          label: "Category",
          name: "category",
          type: "reference",
          collections: ["category"],
        },
      ],
    },
    
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
  ],
},
{
label: "Author",
name: "author",
path: "content/data/authors",
format: "md",
fields: [
  {
    type: "string",
    label: "Title",
    name: "title",
  },
  {
    type: "string",
    label: "Email",
    name: "email",
  },
  {
    type: "string",
    label: "Name",
    name: "name",
  },
  {
    type: "string",
    label: "Twitter",
    name: "twitter",
  },
  {
    type: "string",
    label: "Github",
    name: "github",
  },
  {
    type: "string",
    label: "LinkedIn",
    name: "linkedin",
  },
  {
    type: "string",
    label: "Bio",
    name: "bio",
    ui: {
      component: "textarea",
    },
  },
  {
    type: "image",
    label: "Image",
    name: "image",
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
        authorReferenceField,
        categoriesReferenceField,
        {
          type: "string",
          label: "Description",
          name: "description",
          ui: {
            component: () => {
              return(
                <div></div>
              )
            }
          }
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
              fields: [
                {
                  type: 'string',
                  label: 'Title',
                  name: 'title',
                  ui:{
                    defaultValue: 'Newsletter',
                  }
                },
              ]
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
  schema,
  cmsCallback: (cms) => {
    cms.flags.set('branch-switcher', true);
    cms.flags.set("experimentalData", true);
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["page"].includes(collection.name)) {
          if (document._sys.filename === "home") {
            return `/`;
          }
          return undefined;
        }
        if (["page"].includes(collection.name)) {
          return undefined
        }
        return `/${collection.name}/${document._sys.filename}`;
      });
      cms.plugins.add(RouteMapping);
      
    });
    return cms;
  },
});
export default schema;


