import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import Swal from 'sweetalert2'
import { useGetProductDetailsData } from "../../services/internal/useGetProductDetailsData";
import { ProductDetails } from '../../components/productDetailsComponents/ProductDetails';
import Spinner from '../../assets/spinner.gif';
import "./ProductDetailsContainer.css"

export const ProductDetailsContainer = ()=>{
  const { isLoading, setIsLoading } = useContext(IsLoadingContext)
  const {idProduct, idCollection} = useParams() 
  const [productData, setProductData] = useState(null)
  const { getProductDetailsData } = useGetProductDetailsData()
  const history = useNavigate()

  const onLoadHandler = (e)=>{    
    e.target.id === 'firstSlideImage' && setIsLoading(false)
  }

  const getProductDetailsDataHandler = async()=>{
    const getProductDetailsDataResponse = await getProductDetailsData(idProduct, idCollection)
    if(getProductDetailsDataResponse){
      setProductData(getProductDetailsDataResponse)
    }
    else{
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Error requesting products'        
      });
      history('/home')
    }
      
  }

  useEffect(()=>{
    getProductDetailsDataHandler(idProduct, idCollection)           
    //eslint-disable-next-line  
  },[idProduct])

  useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })       
  },[])  

  return(         
    <div className="ItemDetailsContainer" onLoad={onLoadHandler} >      
        <div className={isLoading === true ? "spinnerContainer" : "hidden"} >
          <img src={Spinner} alt="Spinner" />        
        </div>               
        {
          productData !== null &&  <ProductDetails name={productData.name} price={productData.price} images={productData.images} description={productData.longDescription} productData={productData}/>
        }       
    </div>     
  )   
}

                                


