import TradicionalImage from "../assets/expresso.png";
import AmericanoImage from "../assets/americano.png";
import CremosoImage from "../assets/expressocremoso.png";
import LatteImage from "../assets/latte.png";
import GeladoImage from "../assets/gelado.png";

import CapuccinoImage from "../assets/capuccino.png";
import MocaccinoImage from "../assets/mochaccino.png";
import ChocolateQuenteImage from "../assets/chocolatequente.png";

import CubanoImage from "../assets/cubano.png";
import HavaianoImage from "../assets/havaiano.png";
import ArabeImage from "../assets/arabe.png";
import IrlandesImage from "../assets/irlandes.png";

export const COFFEES = [
  {
    title: "Tradicionais",
    data: [
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
        id: 2,
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 1,
        type_label: "Tradicional",
        image: AmericanoImage,
      },
      {
        id: 3,
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 1,
        type_label: "Tradicional",
        image: CremosoImage,
      },
      {
        id: 4,
        title: "Latte",
        description: "Café expresso com o dobro de leite e espuma cremosa",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 1,
        type_label: "Tradicional",
        image: LatteImage,
      },
      {
        id: 5,
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 1,
        type_label: "Tradicional",
        image: GeladoImage,
      },
    ],
  },
  {
    title: "Doces",
    data: [
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
        id: 7,
        title: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 2,
        type_label: "Doce",
        image: MocaccinoImage,
      },
      {
        id: 8,
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 2,
        type_label: "Doce",
        image: ChocolateQuenteImage,
      },
    ],
  },
  {
    title: "Especiais",
    data: [
      {
        id: 9,
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 3,
        type_label: "Especial",
        image: CubanoImage,
      },
      {
        id: 10,
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 3,
        type_label: "Especial",
        image: HavaianoImage,
      },
      {
        id: 11,
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 3,
        type_label: "Especial",
        image: ArabeImage,
      },
      {
        id: 12,
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.9,
        sizes: ["114ml", "140ml", "227ml"],
        type: 3,
        type_label: "Especial",
        image: IrlandesImage,
      },
    ],
  },
];
