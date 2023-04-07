import Link from "next/link";
import HomeBanner from "./HomeBanner";
import React,{useState} from 'react';
import Script from "next/script";
const HomeFooter = ()=>
{
    const closeBanner=()=>{
        
       setHomeBanner(<></>)
    }
    const [homeBanner,setHomeBanner]=useState(<HomeBanner closeBanner={closeBanner}/>)
    return (
    <>

        <p className="mt-1 block text-left mx-[12%] text-center mb-4 text-[65%] sm:text-[100%]">
           If You Not Found The Result &nbsp;
            <Link href="https://jntuh.co.in/jntuh-results/" >
                <a target="_blank" className="font-bold text-[#9C1A8B]" >
                    CLICK HERE
                </a>
            </Link>
        </p>
        <p className="mt-1 block text-left mx-[12%] text-center mb-4 text-[67%] sm:text-[100%]">
          If you found this app useful, please support me by . &nbsp;
            <Link href="https://jntuh.co.in/" >
                <a className="font-bold text-[#9C1A8B]">
                    sharing it with your friends.
                </a>
            </Link>
        </p>
         {homeBanner} 


        

    </>      
    )
}
export default HomeFooter;
