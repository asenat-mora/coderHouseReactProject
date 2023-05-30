import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase/database";

function useGetProductDetail(productId){
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  async function getProductById(productId){
    const productDoc = doc(db, "productos", productId);//obtiene un producto por id, de la tabla productos de la BD de firebase
    const document = await getDoc(productDoc);
    if(document.exists()){
      setProduct({ ...document.data(), id: document.id});
    }
  }

  useEffect(() => {
    setLoading(true);
    getProductById(productId).then(() => setLoading(false));
  },[productId]);

  return { product, loading };
}

export default useGetProductDetail;