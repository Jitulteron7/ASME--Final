import React from "react";
import "./tabpanel.css";
{/* <img src={props.img} style={{height:"350px",width:"100%"}} /> */}
const Tabpanel=(props)=>{
    return(
    <div className="tab_panel">
        <div className="banner">
            
            <div className="title">
                <div className="title_inside">
                    <header>{props.title}</header>
                    <p>{props.content}</p>
                </div>
            </div>
            <div className="background_color">
            </div>
            
        </div>
        <div className="content">
               <div className="write">
                    <p>
                        {props.contentP}
                    </p>
               </div> 
               <div className="logo">
                <img src={props.imglogo} />
               </div>
        </div>
        <div className="images">
            {props.imgArr!=false?props.imgArr.map((item)=>{
                console.log(item,"img jitul")
                return(
            
                    <img src={item}/>
                )
            }):null}
        </div>
    </div>)
}

export default Tabpanel;