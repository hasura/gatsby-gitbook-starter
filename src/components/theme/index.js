const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#111216',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
  },
};
