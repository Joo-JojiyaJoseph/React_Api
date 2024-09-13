import React, { useEffect, useState } from 'react'
import  {createContext} from 'react';

export const AppContext=createContext();

 const ContextProvider =(props)=>{
    
const [baseUrlImage, setBaseUrlImage] = useState('');

async function getBaseUrlImage() {
    try {
        const res = await fetch("/api/baseimageurl");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setBaseUrlImage(data.imageurl);
        console.log("from Appcontext:")
        console.log(data.imageurl)
      } 
      catch (error) {
        console.log("from Appcontext:error fetcting baseimage url")
      }
    }
useEffect(() => {
  getBaseUrlImage();
}, []);
    // const phone="+1 12345678"
    //  const name="joj"
    return(
        <AppContext.Provider value={{baseUrlImage}}>
            {props.children}
        </AppContext.Provider>
    )

 }
 export default ContextProvider