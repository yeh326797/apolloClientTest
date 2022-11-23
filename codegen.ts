
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://flyby-gateway.herokuapp.com/",
  // documents: "src/**/*.graphql",
  generates: {
    "src/types/schema.ts": {
      plugins: ["typescript"]
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'src/types/schema.ts',
      },
      documents: "./src/*.graphql.ts",
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  }
};

export default config;
