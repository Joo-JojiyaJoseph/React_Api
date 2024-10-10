import React, { useEffect, useState } from 'react'
import  {createContext} from 'react';

export const AppContext=createContext();

 const ContextProvider =(props)=>{
    
const [baseUrlImage, setBaseUrlImage] = useState('');
const [logo, setLogo] = useState('');
const [brochure, setBrochure] = useState('');

async function getBaseUrlImage() {
    try {
        const res = await fetch("https://capricornuae.com/AdminApi/api/baseimageurl");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setBaseUrlImage(data.imageurl);
        console.log("from Appcontext:")
        // console.log(data.imageurl)
      } 
      catch (error) {
        console.log("from Appcontext:error fetcting baseimage url")
      }
    }

    async function getLogo() {
      try {
          const reslogo = await fetch("https://capricornuae.com/AdminApi/api/logo");
          if (!reslogo.ok) {
            throw new Error(`Error: ${reslogo.status} ${reslogo.statusText}`);
          }
          const datalogo = await reslogo.json();
          setLogo(datalogo.logo.image);
          console.log("from Appcontext:")
          // console.log(datalogo.logo.image)
        } 
        catch (error) {
          console.log("from Appcontext:error fetcting logo url")
        }
      }
      async function getBrochure() {
        try {
            const resbrochure = await fetch("http://127.0.0.1:8000/api/brochure");
            if (!resbrochure.ok) {
              throw new Error(`Error: ${resbrochure.status} ${resbrochure.statusText}`);
            }
            const databrochure = await resbrochure.json();
            setBrochure(databrochure.brochure);
            console.log("from Appcontext:")
            // console.log(databrochure.brochure.image)
          } 
          catch (error) {
            console.log("from Appcontext:error fetcting brochure url")
          }
        }

useEffect(() => {
  getBaseUrlImage();
  getLogo();
  getBrochure();
}, []);
    // const phone="+1 12345678"
    //  const name="joj"
    return(
        <AppContext.Provider value={{baseUrlImage,logo,brochure}}>
            {props.children}
        </AppContext.Provider>
    )

 }
 export default ContextProvider