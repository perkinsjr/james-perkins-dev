import { defineSchema } from '@tinacms/cli'
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
              name: "image",
              label: "Feature Image",
              type: "image",
            },
            {
              name: "title",
              label: "Feature Title",
              type: "string",
            },
            {
              name: "author",
              label: "Author",
              type: "string",
            },
            
            {
              type: "string",
              label: "Category",
              name: "category",
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
  ],
}

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
          templates: [heroBlock, featureSection,contentSection],
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
