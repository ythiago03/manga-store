import { ReactNode, createContext, useState } from 'react';

interface CartContextType {
  cart: object[];
  setCart: React.Dispatch<React.SetStateAction<object>>;
}
interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({children}: CartContextProviderProps) => {
  const [cart, setCart] = useState<object[]>([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};


