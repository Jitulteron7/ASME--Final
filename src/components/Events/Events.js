import  React from "react";
import ShowTab from "./Tab/Tab";
import TimeLine from "./TimeLine/TimeLine";
import BannerEvent from "./Banner/Banner";
import  Footer from "../Partials/Foot/Footer";
import Navbar from "../Partials/navbar/Navbar";
const Event=()=>{
    return(
        <>

            <Navbar/>
            <BannerEvent/>
            <TimeLine/>
            <ShowTab/>
            <Footer/>
        </>
    )
}


export default Event;