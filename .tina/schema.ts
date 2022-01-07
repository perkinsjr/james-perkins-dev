import { defineSchema } from '@tinacms/cli'

export default defineSchema({
  collections: [
    {
      label: 'Page Content',
      name: 'page',
      path: 'content/page',
      fields: [
        {
          name: 'body',
          label: 'Main Content',
          type: 'rich-text',
          isBody: true,
          templates: [
            {
              name: 'Hero',
              label: 'Hero',
              fields: [
                {
                  type: 'string',
                  name: 'heading',
                  label: 'Heading',
                },
                {
                  type: 'string',
                  name: 'subheading',
                  label: 'Subheading',
                }
                ,
                {
                  type: 'string',
                  name: 'description',
                  label: 'Description',
                  ui: {
                    component: 'textarea',
                  },
                },{
                  type: 'image',
                  name: 'image',
                  label: 'Hero Image',
                }
              ],
            },
            {
              name: "FeatureSection",
              label: "Feature",
              fields: [
                {
                  type: "object",
                  name: "featureList",
                  label: "Feature List",
                  list: true,
                  fields: [
                    {
                      name: "image",
                      label: "Feature Image",
                      type: "string",
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
            },
          ]
        },
      ],
    },
    {
      label: 'Blog Posts',
      name: 'post',
      path: 'content/post',
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
          options: ["tutorial", "thoughts", "productivity"],
          list: true
        },
        {
          type: "string",
          label: "Tags",
          name: "tags",
          options: ["nextjs", "javascript", "devops", "productivity"],
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
          ]
        },
      ],
    },
  ],
})
