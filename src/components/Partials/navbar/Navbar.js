import React from "react";
import "./nav.css";
import mainLogo from "../../ui_utils/img/asmelogowhite.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const location = useLocation();
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand logo" to="/">
          <img src={mainLogo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Events
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link  className="dropdown-item" to="/event/technoesis">TECNOESIS</Link>
                <Link  className="dropdown-item" to="/event/asme">ASME E-FEST</Link>
                
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                Team
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

// import React from "react";
// import "./nav.css"
// import mainLogo from "../../ui_utils/img/asmelogowhite.png";
// import {Link,useLocation} from "react-router-dom"

// const NavBar=()=>{
//   const location=useLocation();
//     return( <header id="header" classNameName="" style={{backgroundColor:"transparent",position:"absolute",top:0,width:"100%"}}>
//     {/* <div classNameName="container-fluid"> */}
//       <div classNameName="row justify-content-center">
//         <div classNameName="col-xl-9 d-flex align-items-center justify-content-lg-between">
//         {/* "assets/asme-logo.png" */}
//           <Link to="/" classNameName="logo me-auto me-lg-0">
//               <img src={mainLogo} alt="" classNameName="img-fluid" />
//           </Link>
//           <nav id="navbar" classNameName="navbar order-last order-lg-0">
//             <ul>
//             {/* active */}
//               <li><Link classNameName="nav-link scrollto " to="/">Home</Link></li>
//               <li><Link classNameName="about_link" to="about" >About</Link></li>
//               <li classNameName="dropdown"><a href="#"><span>Events</span> <i classNameName="bi bi-chevron-down" /></a>
//                 <ul>
//                   <li><Link to="/event/tecnoesis">Tecnoesis</Link></li>
//                   <li classNameName="dropdown"><Link to="/event/asme"><span>ASME e-fest</span> <i classNameName="bi bi-chevron-right" /></Link>
//                     {/* <ul>
//                       <li><a href="#">HPVC</a></li>
//                       <li><a href="#">IAM3D</a></li>
//                       <li><a href="#">SDC</a></li>
//                       <li><a href="#">Oral Competition</a></li>
//                     </ul> */}
//                   </li>
//                 </ul>
//               </li>
//               <li><Link classNameName="nav-link scrollto" to="/gallery">Gallery</Link></li>
//               <li><Link classNameName="nav-link scrollto " to="/team">Team</Link></li>
//               <button type="button" classNameName="btn btn-outline-light btn-sm">Subscribe</button>
//             </ul>
//             <i classNameName="bi bi-list mobile-nav-toggle" />
//           </nav>
//           {/* .navbar */}
//         </div>
//       {/* </div> */}
//     </div>
//     </header>)
// }

// export default NavBar;
