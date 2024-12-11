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
    title: "Connect with your roots",
    text: "Discover authentic Indian products directly from local artisans and sellers. Bridge the distance between your memories and your homeland.",
  },
  {
    id: 2,
    image: require("@/assets/images/image2.png"),
    title: "Bring India Closer",
    text: "Explore unique handcrafted products, traditional attires, festive decorations, and cultural treasures – all verified and shipped directly to your doorstep.",
  },
  {
    id: 3,
    image: require("@/assets/images/image3.png"),
    title: "Your Cultural Connection",
    text: "Support local artisans, preserve traditions, and stay connected to your heritage with just a few taps. Every purchase tells a story",
  },
];
