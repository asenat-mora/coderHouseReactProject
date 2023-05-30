import { useContext, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../../context/CartContext";
import { Timestamp, writeBatch, query, where, documentId, collection, getDocs, addDoc } from "firebase/firestore";
import db from "../../firebase/database";

function Checkout(){
  const [loading, setLoading] = useState(false);
  const [orderId, setOrder] = useState('');

  const { cart, clear, getTotal } = useContext(CartContext);

  async function sendOrder({name, phone, email}){
    setLoading(true);
    try{
      const order = {
        buyer: {
          name,
          phone,
          email,
        },
        total: getTotal(),
        items: cart,
        date: Timestamp.fromDate(new Date()),
      }
      
      const batch = writeBatch(db);
      const outOfStock = [];

      const idList = order.items.map((item) => item.id);
      const productsQuery = query(collection(db, 'productos'), where(documentId(), 'in', idList));
      const querySnapshot = await getDocs(productsQuery);

      const {docs} = querySnapshot;

      docs.forEach((doc) => {
        const itemInCart = cart.find((item) => item.id === doc.id);

        if(doc.data().stock >= itemInCart.quantity){
          batch.update(doc.ref, {stock: doc.data().stock - itemInCart.quantity});
        }else{
          outOfStock.push({...doc.data(), id: doc.id});
        }
      });

      if(outOfStock.length === 0){
        await batch.commit();
        const docRef = await addDoc(collection(db, 'orders'), order);
        setOrder(docRef.id);
        clear();
      }else{
        alert('No hay stock de los siguientes productos: ' + outOfStock.map((item) => item.title).join(', '));
      }
      setLoading(false);
    }catch(error){
      console.error(error);
    }

  }

  if(loading){
    return <h1>Cargando...</h1>
  }

  if(orderId){
    return (
      <h1>Su orden de compra es: {orderId}</h1>
    )
  }
  
  return (  
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onSubmit={sendOrder}/>
    </div>
  )

}
export default Checkout;