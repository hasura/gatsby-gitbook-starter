const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#000',
  },
};
