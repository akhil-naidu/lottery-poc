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
    "./generated/graphql.ts": {
      documents: "queries/**/*.{ts,tsx,graphql}",
      overwrite: true,
      plugins: [
        {
          typescript: {},
          typescriptOperations: {},
          typescriptReactQuery: {},
        },
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
