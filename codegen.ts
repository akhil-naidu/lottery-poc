import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://hasura-template-production.up.railway.app/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": "iwillhack",
        },
      },
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    "./generated/gql/": {
      documents: "queries/**/*.{ts,tsx}",
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node",
        "typescript-react-query",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
