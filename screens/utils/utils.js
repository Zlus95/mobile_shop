export const sliced = (text) => {
  let slicedText = text.slice(0, 20);
  if (slicedText.length < text.length) {
    slicedText += "...";
  }
  return slicedText;
};

export const firstLetterToUppercase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
