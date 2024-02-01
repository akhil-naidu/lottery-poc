# Project Name: Lottery POC

## Overview

This project is a proof of concept (POC) for a lottery application using Next.js and Hasura GraphQL. It includes the setup for code generation using `@graphql-codegen/cli` to generate TypeScript types, React Query hooks, and more based on GraphQL queries.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd lottery-poc
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Code Generation

The project uses `@graphql-codegen/cli` for code generation. The configuration is defined in the `codegen.ts` file. To generate the code, run the following command:

```bash
npm run generate
```

To run code generation in watch mode:

```bash
npm run generate watch
```

**Note**: There are some errors in the generated `graphql.ts` file related to React Query. Need to resolve those.

## GraphQL Configuration

The GraphQL configuration is specified in the `codegen.ts` file. It includes the GraphQL endpoint URL, headers, and code generation settings.

```typescript
// codegen.ts
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
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: "graphql-request",
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

## Scripts

- `npm run dev`: Start Next.js development server.
- `npm run build`: Build the Next.js application.
- `npm start`: Start the Next.js application in production mode.
- `npm run lint`: Run linting checks.
- `npm run generate`: Run GraphQL code generation.
- `npm run generate watch`: Run GraphQL code generation in watch mode.

## Dependencies

- `@radix-ui/react-slot`: ^1.0.2
- `@tanstack/react-query`: ^5.18.0
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.1.0
- `graphql`: ^16.8.1
- `graphql-request`: ^6.1.0
- `lucide-react`: ^0.316.0
- `next`: 14.1.0
- `react`: ^18
- `react-dom`: ^18
- `tailwind-merge`: ^2.2.1
- `tailwindcss-animate`: ^1.0.7

## Dev Dependencies

- `@graphql-codegen/cli`: ^5.0.0
- `@graphql-codegen/introspection`: ^4.0.0
- `@graphql-codegen/typescript`: ^4.0.1
- `@graphql-codegen/typescript-graphql-request`: ^6.1.0
- `@graphql-codegen/typescript-operations`: ^4.0.1
- `@graphql-codegen/typescript-react-query`: ^6.0.0
- `@parcel/watcher`: ^2.4.0
- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18
- `autoprefixer`: ^10.0.1
- `eslint`: ^8
- `eslint-config-next`: ^14.1.0
- `hasura-cli`: ^2.36.1
- `postcss`: ^8
- `tailwindcss`: ^3.3.0
- `ts-node`: ^10.9.2
- `typescript`: ^5.3.3
