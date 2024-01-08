import { ReactNode, createContext, useState } from "react";
import { ImageSourcePropType } from "react-native";

export type CoffeeCartData = {
  id: string;
  coffeeId: number;
  title: string;
  size: string;
  image: ImageSourcePropType;
  price: number;
  amount: number;
};

export type CartContextDataProps = {
  addCart: (coffee: CoffeeCartData) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  remove: (id: string) => void;
  toastCartVisible: CoffeeCartData | null;
  cart: CoffeeCartData[];
  totalValue: number;
  reset: () => void;
};

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps
);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeCartData[]>([]);
  const [toastCartVisible, setToastCartVisible] = useState<CoffeeCartData | null>(null);

  function addCart(coffee: CoffeeCartData) {
    setCart((oldValue) => [...oldValue, coffee]);
    setToastCartVisible(coffee);
    setTimeout(() => {
      setToastCartVisible(null);
    }, 4500);
  }

  function remove(id: string) {
    const newCart = cart;
    const removeCartById = newCart.filter((item) => item.id !== id);
    setCart([...removeCartById]);
  }

  function increase(id: string) {
    const newCart = cart;
    const increaseCart = newCart.map((coffee) => {
      if (id === coffee.id) {
        return {
          ...coffee,
          amount: coffee.amount + 1,
        };
      } else {
        return {
          ...coffee,
        };
      }
    });
    setCart([...increaseCart]);
  }

  function decrease(id: string) {
    const newCart = cart;
    const findCoffee = newCart.filter((item) => item.id === id);
    if (findCoffee[0].amount === 1) {
      return remove(id);
    }
    const decreaseCart = newCart.map((coffee) => {
      if (id === coffee.id) {
        return {
          ...coffee,
          amount: coffee.amount - 1,
        };
      } else {
        return {
          ...coffee,
        };
      }
    });
    setCart([...decreaseCart]);
  }

  function reset() {
    setCart([]);
  }

  const totalValue = cart.reduce((total, currentValue) => {
    return (total += currentValue.amount * currentValue.price);
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, toastCartVisible, addCart, remove, increase, decrease, totalValue, reset }}
    >
      {children}
    </CartContext.Provider>
  );
}
