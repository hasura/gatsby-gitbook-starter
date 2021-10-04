export const INDEX_TYPES = Object.freeze({
  blog: "blog",
  docs: "docs",
  learn: "learn",
});

export const SEARCH_INDICES = [
  { name: `blog-production`, title: `Hasura Blog`, type: INDEX_TYPES.blog },
  { name: `graphql-docs-prod`, title: `Hasura GraphQL Engine Docs`, type: INDEX_TYPES.docs },
  { name: `learn-intro-graphql`, title: `Learn Intro GraphQL`, type: INDEX_TYPES.learn },
  { name: `learn-elm-graphql`, title: `Learn ELM GraphQl`, type: INDEX_TYPES.learn },
  { name: `learn-flutter-graphql`, title: `Learn Flutter GraphQL`, type: INDEX_TYPES.learn },
  { name: `learn-database-mysql`, title: `Learn Database MySQL`, type: INDEX_TYPES.learn },
  {
    name: `learn-database-postgresql`,
    title: `Learn Database PostgreSQL`,
    type: INDEX_TYPES.learn,
  },
  { name: `learn-hasura-backend`, title: `Learn Hasura Backend`, type: INDEX_TYPES.learn },
  { name: `learn-hasura-auth-slack`, title: `Learn Hasura Auth Slack`, type: INDEX_TYPES.learn },
  { name: `learn-react-apollo-hooks`, title: `Learn React Apollo Hooks`, type: INDEX_TYPES.learn },
  { name: `learn-react-apollo`, title: `Learn React Apollo`, type: INDEX_TYPES.learn },
  {
    name: `learn-typescript-react-apollo`,
    title: `Learn TypeScript React Apollo`,
    type: INDEX_TYPES.learn,
  },
  { name: `learn-angular-apollo`, title: `Learn Angular Apollo`, type: INDEX_TYPES.learn },
  { name: `learn-vue-apollo`, title: `Learn Vue Apollo`, type: INDEX_TYPES.learn },
  { name: `learn-ios-apollo`, title: `Learn IOS Apollo`, type: INDEX_TYPES.learn },
  { name: `learn-svelte-apollo`, title: `Learn Svelte Apollo`, type: INDEX_TYPES.learn },
  { name: `learn-android-apollo`, title: `Learn Android Apollo`, type: INDEX_TYPES.learn },
  {
    name: `learn-react-native-apollo`,
    title: `Learn React Native Apollo`,
    type: INDEX_TYPES.learn,
  },
  {
    name: `learn-reason-react-apollo`,
    title: `Learn Reason React Apollo`,
    type: INDEX_TYPES.learn,
  },
];
