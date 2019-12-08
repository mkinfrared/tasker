const generateRandomNumber = (min: number, max: number) => {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  const rounded = Math.round(random / 1000) * 1000;

  return rounded;
};

export default generateRandomNumber;
