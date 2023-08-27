import { useContext, useEffect } from "react"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider"
import Spinner from '../../assets/spinner.gif';
import "./AboutUs.css"

export const AboutUs = ()=>{
  const { setIsLoading, isLoading } = useContext(IsLoadingContext) 

  useEffect(()=>{
    setIsLoading(false)
    //eslint-disable-next-line
  },[])

  return(
    <>
      <div className={isLoading === true ? "spinnerContainer" : "hidden"} >      
        <img src={Spinner} alt="Spinner" />           
      </div>      
          
      <main className={isLoading === false ? "mainNosotros" : "hidden"}>
        <h2 className="aboutUsTitle">About Us</h2>
        <h3 className="subTitle1">Our Story</h3>
        <p className="aboutUsP1 aboutUsP">In the heart of the urban hustle and bustle, two passionate individuals came together with a dream in 2009. A dream to revolutionize the way people carried their worlds on their backs. That dream led to the inception of Pandora Backpacks. We, the co-founders, embarked on this exciting journey, uniting our shared passion and commitment to quality.</p>
        <p className="aboutUsP2 aboutUsP">Over the years, our days have been fueled by the relentless pursuit of excellence. Not just to sell backpacks, but to deliver an experience, to offer a blend of style and functionality, and to build a brand that resonates with passion, purpose, and performance.</p>
        <p className="aboutUsP3 aboutUsP">Our commitment goes beyond just our products. We believe in giving back and contributing positively to our community. Every purchase, every feedback, every interaction with our brand plays a part in shaping our narrative, and we're thankful for the trust and love we've received from our customers.</p>
        <h3 className="subTitle2">Unparalleled Technology</h3>
        <p className="aboutUsP4 aboutUsP">At Pandora Backpacks, we're not just about aesthetics; the science behind our products sets us apart. Every thread, zipper, and pocket is a testament to the advanced technology we employ. Our unique backpack technology ensures each product stands tall in terms of resistance and durability. But strength isn't the only virtue we vouch for.</p>
        <p className="aboutUsP5 aboutUsP">In our commitment to the planet, we've ensured that our manufacturing processes are environmentally friendly, leading to products that are as kind to nature as they are tough against wear and tear.</p>
        <p className="aboutUsP6 aboutUsP"> With high-performance metrics driving our design and manufacturing processes, we ensure that every Pandora Backpack not only looks good but also stands the test of time, adventures, and memories you'd build along the way. Choose Pandora, where innovation meets passion.</p>
      </main>    
    </>
  )
}