import { defineConfig } from "tinacms";
import { post_templateFields } from "./templates";

import { config as dotenvConfig } from 'dotenv';
import { defineConfig } from 'some-library'; // Replace 'some-library' with the actual library you are using

// Load the environment variables from the .env file
dotenvConfig();

// Retrieve the values from the environment variables
const clientId = process.env.CLIENT_ID || '<your-tina-cloud-projects-client-id>';
const token = process.env.TOKEN || '<your-tina-cloud-projects-token>';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId, // Get this from tina.io
  token, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "content/posts",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...post_templateFields(),
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...post_templateFields(),
        ],
      },
    ],
  },
});
