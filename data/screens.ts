export type Data = {
  id: number;
  image: any;
  title: string;
  text: string;
};

export const data: Data[] = [
  {
    id: 1,
    image: require("@/assets/images/image1.png"),
    title: "Explore a world of Craftsmanship",
    text: "From traditional handicrafts to modern design, discover the stories behind the Indian handicrafts.",
  },
  {
    id: 2,
    image: require("@/assets/images/image2.png"),
    title: "Empowering Artisans, Preserve Traditions",
    text: "Every Purchase supports skilled craftspeople and helps preserve India's rich heritage.",
  },
  {
    id: 3,
    image: require("@/assets/images/image3.png"),
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
