const defaultFontSize = 16;

export const pxToRem = (size, defaultSize = defaultFontSize) => {
  const remSize = (parseFloat(size) / defaultSize) * 1;
  return `${remSize}rem`;
};

export const remToPx = (size, defaultSize = defaultFontSize) => {
  const pxSize = parseFloat(size) * defaultSize;
  return `${pxSize}px`;
};
