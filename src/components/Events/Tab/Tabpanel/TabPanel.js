import React,{useEffect} from "react";
import "./tabpanel.css";

const Tabpanel = (props) => {
    useEffect(()=>{
        myFunction()
    },[])
    function myFunction() {
        var dots = document.getElementById("read_more_now");
        
        var btnText = document.getElementById("btn_read_more");
        
        console.log(btnText,"btnText");
            
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          
          btnText.innerHTML = "Read less"; 
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read more"; 
        }

        if(props.title==="OLD GUARD"){
            btnText.innerHTML = "End";    
            dots.style.display = "none";   
        }
      }
  return (
    <div className="tab_panel">
      <div className="banner">
        <div className="title">
          <div className="title_inside">
            <header>{props.title}</header>
            <p>{props.content}</p>
          </div>
        </div>
        <div className="background_color"></div>
      </div>
      <div className="content">
        <div className="write">
          <p>
            {props.contentP}
            <div>
              <h3 style={{ margin: "5% 0", fontWeight: "bold" }}>
                {props.header2}
              </h3>
              <span id="read_more_now">
              {props.content2}
              </span>
              {props.title!="OLD GUARD"?(<button onClick={myFunction} id="btn_read_more"></button>):<button id="btn_read_more"></button>}
              
            </div>
          </p>
        </div>

        <div className="logo">
          <img src={props.imglogo} />
        </div>
      </div>
      <div className="images">
        {props.imgArr != false
          ? props.imgArr.map((item) => {
              console.log(item, "img jitul");
              return <img src={item} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Tabpanel;
