import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
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
      overwrite: true,
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node",
        "typescript-react-query",
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        withMutationFn: false,
        preResolveTypes: true,
        skipTypename: false,
        avoidOptionals: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
      config: { minify: true },
    },
  },
};

export default config;
