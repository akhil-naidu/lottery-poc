import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!]: {
        headers: {
          "x-hasura-admin-secret":
            process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "",
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
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
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
