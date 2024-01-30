import { CodegenConfig } from "@graphql-codegen/cli";

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
  documents: ["./**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./generated/gql/": {
      preset: "client",
    },
  },
};

export default config;
