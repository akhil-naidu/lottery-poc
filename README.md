# GraphQL Codegen Configuration

This repository includes a GraphQL Codegen configuration to automatically generate TypeScript code based on your GraphQL schema and queries. The configuration is designed to work with [Hasura](https://hasura.io/) and is configured to use the Hasura GraphQL endpoint with the specified admin secret.

## Installation

Make sure you have Node.js and npm installed on your machine. Then, install the required packages by running:

```bash
npm install
```

## Configuration

The configuration file `codegen.ts` includes the settings for GraphQL Codegen. It specifies the GraphQL schema, the headers required for authentication, and the output paths for the generated TypeScript code.

```typescript
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      GRAPHQL_ENDPOINT: {
        headers: {
          "x-hasura-admin-secret": "HASURA_ADMIN_SECRET",
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
```

## Usage

To generate the TypeScript code, run the following command:

```bash
npm run generate
```

For continuous generation while developing, you can use the watch mode:

```bash
npm run generate watch
```

### Pre-scripts

The package.json file includes pre-scripts to ensure that the code generation runs before starting the application or during development.

```json
"prestart": "npm run generate",
"predev": "npm run generate"
```

## Dependencies

The configuration relies on the following GraphQL Codegen packages:

- @graphql-codegen/cli
- @graphql-codegen/introspection
- @graphql-codegen/typescript
- @graphql-codegen/typescript-graphql-request
- @graphql-codegen/typescript-operations
- @graphql-codegen/typescript-react-apollo

Additionally, the package uses "@parcel/watcher" for watching changes during development.

Make sure to install these packages using:

```bash
npm install @graphql-codegen/cli @graphql-codegen/introspection @graphql-codegen/typescript @graphql-codegen/typescript-graphql-request @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @parcel/watcher
```

## Working Status

The configuration is set up and ready to generate TypeScript code based on your GraphQL schema and queries. Ensure that the GraphQL server specified in the configuration is accessible and that the provided admin secret is valid.

Feel free to customize the configuration based on your project requirements. If you encounter any issues, refer to the [GraphQL Codegen documentation](https://graphql-code-generator.com/) for troubleshooting and additional features.

## Additional Customization and Resources

### Custom Fetcher with TypeScript-React-Query

If you are using [TypeScript-React-Query](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-query#using-custom-fetcher) and want to use a custom fetcher, you can follow the documentation provided by the official plugin.

### Integration with Nhost

For a guide on how to use GraphQL Codegen with React and TypeScript in conjunction with [Nhost](https://nhost.io/), check out the tutorial [How to Use GraphQL Code Generator with React Query](https://nhost.io/blog/how-to-use-graphql-code-generator-with-react-query) on the Nhost blog.

### Making GraphQL Codegen Work for You

Novu.co has a comprehensive guide titled [Making GraphQL Codegen Work for You: GraphQL Integration with React and TypeScript](https://novu.co/blog/making-graphql-codegen-work-for-you-graphql-integration-with-react-and-typescript/). This guide covers various aspects of integrating GraphQL Codegen with React and TypeScript and provides valuable insights.

### TypeScript-React-Apollo Plugin

If you prefer using the TypeScript-React-Apollo plugin, you can find detailed information on its usage in the [official documentation](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo). This plugin offers seamless integration of GraphQL Codegen with Apollo Client in a TypeScript and React environment.

Feel free to explore these resources for more customization options and insights into using GraphQL Codegen effectively in your project.
