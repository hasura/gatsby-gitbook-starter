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