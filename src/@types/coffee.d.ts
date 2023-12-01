import { ImageSourcePropType } from "react-native";

export type CoffeeData = {
  id: number;
  title: string;
  description: string;
  price: number;
  sizes: string[];
  type: number;
  type_label: string;
  image: ImageSourcePropType;
};
