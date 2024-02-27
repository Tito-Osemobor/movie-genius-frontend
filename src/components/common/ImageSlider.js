import shuffleArray from "../../utils/shuffleArray";

const importAllImages = () => {
  let imagePaths =[];

  for (let i = 1; i <= 33; i++) {
    imagePaths.push(`./us/image${i}.jpg`);
  }
  return shuffleArray(imagePaths);
};

export default importAllImages;
