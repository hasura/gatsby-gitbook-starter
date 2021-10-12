// Parses the custom added it to keep the url hash un-affected irrespective of translation
// This is a hot-fix that relies on syntax
// Ex: ## GraphQL Mutations Title can be in any language {#graphql-mutations}
// The custom id should be enclosed with in `{#id-in-english}` in english.
export const customIdParser = (content) => {
  const [text, id] = content.split("{#");
  if (!!text && !!id) {
    return {
      content: text,
      id: id.replace('}', '').replace(/\s+/g, '').toLowerCase()
    }
  }

  return {
    content,
    id: content.replace(/\s+/g, '').toLowerCase()
  }
}