import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);

  function searchInTheCart(id){
    return cart.find((item) => item.id === id)//find regresa lo primero que encuentra
  }

  function addItem(item, quantity){
    const foundItem = searchInTheCart(item.id);
    if(foundItem){
      foundItem.quantity += quantity;
      setCart([...cart]);
    }else{//cuando foundItem es undefined se ejecuta este bloque
      setCart([
        ...cart,//utilizar el spread operator, para poner en el nuevo arreglo todo lo que habia en el carrito
        {
          ...item,
          quantity
        }
      ])
    }
  }
  //sacar item del carrito
  function removeItem(id){
    const newCart = cart.filter((item) => item.id !== id);//filtra el anterior carrito y saca el item deseado y se crea un nuevo arreglo
    setCart(newCart);//pasa el nuevo carrito al setCart de estado
  }

  function clear(){
    setCart([]);
  }

  function getTotal(){
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }


  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear, getTotal}}>
      {children}
    </CartContext.Provider>
  )

}

