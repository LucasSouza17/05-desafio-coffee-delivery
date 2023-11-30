import TradicionalImage from "../assets/expresso.png";
import CapuccinoImage from "../assets/capuccino.png";
import CubanoImage from "../assets/cubano.png";

export const COFFEES_HIGHTLIGHT = [
  {
    id: 1,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    sizes: ["114ml", "140ml", "227ml"],
    type: 1,
    type_label: "Tradicional",
    image: TradicionalImage,
  },
  {
    id: 6,
    title: "Capuccino",
    description: "Bebida com canela feita de doses de café, leite e espuma",
    price: 9.9,
    sizes: ["114ml", "140ml", "227ml"],
    type: 2,
    type_label: "Doce",
    image: CapuccinoImage,
  },
  {
    id: 9,
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    sizes: ["114ml", "140ml", "227ml"],
    type: 3,
    type_label: "Especial",
    image: CubanoImage,
  },
];
