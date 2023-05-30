import { useEffect, useState } from "react";
import db from "../firebase/database";
import { collection, getDocs, query, where } from "firebase/firestore";

function useGetProducts(brandId){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const productsCol = collection(db, "productos");

  async function getAllProducts(){
    const productsSnapshot = await getDocs(productsCol);
    const productsList = productsSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    setProducts(productsList);
  }

  async function getProductsByBrand(brandId){
    const productsQuery = query(productsCol, where("brand", "==", parseInt(brandId)));
    const productsSnapshot = await getDocs(productsQuery);
    const productsList = productsSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    setProducts(productsList);
  }


  useEffect(() => {
    setLoading(true);
    if(!brandId){
      getAllProducts().then(() => setLoading(false));
    }else{
      getProductsByBrand(brandId).then(() => setLoading(false));
    }
  },[brandId])

  return { products, loading };
}

export default useGetProducts;