export const generateProducts = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    description: `This is a detailed description. It highlights features and benefits.`,
    image: `https://picsum.photos/200?random=${i + 1}`,
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // Between 3.0 and 5.0

    price: Math.floor(Math.random() * 100) + 1,
  }));
