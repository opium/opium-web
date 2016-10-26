export function loadImage(src) {
  return new Promise((resolve) => {
    const tmpImage = new Image();
    tmpImage.onload = (image) => {
      resolve(image.currentTarget.src);
    };
    tmpImage.src = src;
  });
}
