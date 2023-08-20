import { getFirestore, doc, collection, getDocs, where, query } from "firebase/firestore"; 

export const useGetProductDetailsData = ()=>{
  const getProductDetailsData = async(idProduct, idCollection)=>{
    try{       
      const db = getFirestore()
      const queryDoc = doc(db, "products", "backpack collections")        
      const queryCollection = collection(queryDoc, idCollection)
      const queryFilter = query(queryCollection, where("id", "==", Number(idProduct)))
      const productDataResponse = await getDocs(queryFilter)      
      return productDataResponse ? productDataResponse.docs[0].data() : false         
    }   

    catch (error) {
      console.error(error);
      return false
    }   
  }  

  return({
    getProductDetailsData
  })
}