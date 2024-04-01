interface ConfigColor {
  color: { primary: string };
  size: 'large' | 'default' | 'small';
}

export const customTheme: ConfigColor = {
  color: {
    primary: "red",
  },
  size: "large",
};

