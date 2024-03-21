import { ReactNode, createContext, useState } from 'react';

interface CartObject {
  id: number;
  title: string;
  coverImg: string;
  oldPrice: number;
  price: number;
  quantity?: number;
}

interface CartContextType {
  cart: CartObject[];
  setCart: React.Dispatch<React.SetStateAction<object[]>>;
}
interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType>();

export const CartContextProvider = ({children}: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartObject[]>([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};


