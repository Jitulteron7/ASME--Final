import React from "react";
import "./Team.css";
import img1 from "./assets/IMG20210412165453 - SAMUDRA JIT BORUAH 042.jpg";
import img2 from "./assets/IMG_20210413_225615 - SWARUP_PANDEY_048.jpg";
import img3 from "./assets/IMG_20200321_181927_372 - KARAN CHETRI.jpg";
import img4 from "./assets/IMG_20210404_114452 - ABHISHEK BORDOLOI _ 017.jpg";
import img7 from "./assets/IMG-20210421-WA0006 - ABHIMANYU PRATAP SINGH.jpg";
import img8 from "./assets/IMG20210420173812 - RIZVAAN MEDHI.jpg";
import img9 from "./assets/Triranga - 038_Triranga Bikrom Borah.jpg";
import img10 from "./assets/IMG_20210422_020248 - 043_Rajorshi Nath.jpg";
import img11 from "./assets/IMG_20210413_163729 - 003 Debanjana Purkayastha.jpg";
import img12 from "./assets/20210414_001326 - 017_Sumit Das.jpg";
import img13 from "./assets/IMG-20210407-WA0022-01 - 030Arjoika Paul.jpg";
import img14 from "./assets/IMG_20210325_162610 - SHEETAL SAHU.jpg";
import img15 from "./assets/20210413_152423 - 066_Prakhar Srivastava.jpg";
import img16 from "./assets/formal_dp.jpg";
import img17 from "./assets/IMG_20191218_105928__01__01 - MechA035 Swatha Das.jpg";
import img18 from "./assets/IMG_20200923_012441_004 - ME 002 Yugabrat Gogoi.jpg";
import img19 from "./assets/JUMAN - MechA59 Juman Bhuyan.jpg";
import img20 from "./assets/IMG20210413120627-01 - MECH_ 008_Kachali Sarma.jpg";
import img21 from "./assets/IMG_20200504_131147 - ME B 143.jpg";
import img22 from "./assets/IMG_20210413_171732 - ME B 128.jpg";
import img23 from "./assets/IMG_20181109_185947_555-01-01 - MechA032 Parthaprotim Rabha.jpg";
import img24 from "./assets/WhatsApp Image 2021-04-13 at 11.35.28 AM - ME_A_070 Tejaswini AVSV.jpg";
import img25 from "./assets/IMG_20210202_120725_823 - ME B 127 Sukumar.jpg";
import img26 from "./assets/Screenshot_2021-04-13-12-00-18-575_com.miui.gallery - MECH 075 Nitesh Kumar Singh.jpg";
import img27 from "./assets/image 1 - MECH 058 ANINDITA DEY.jpg";
import img28 from "./assets/IMG_20200306_213313_131 - mech 027 Ankit singh.png";
import img29 from "./assets/IMG20190712060655 - ME B 146 charitha sree.jpg";
import img30 from "./assets/Durgance.jpg";
import img31 from "./assets/Inzamum ASME - 009_Inzamum Hussain Mazumder.jpg";
import NavBar from "../Partials/navbar/Navbar";
import Footer from "../Partials/Foot/Footer";

const Team = () => {
  return (
    <>
      <NavBar />
      <div className="main_container_team">
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src="/GuestImage/guest7.jpg" alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Dr. K M Pandey
                    <br />
                    <span>ASME Faculty Advisor</span>
                  </h3>
                </div>
              </div>
              {/* <ui className="sci">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/samudra-jit-boruah-7195b915a">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui> */}
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src="/GuestImage/guest8.jpg" alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Dr. Biplab Das
                    <br />
                    <span>ASME E-Fest Advisor</span>
                  </h3>
                </div>
              </div>
              {/* <ui className="sci">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="www.linkedin.com/in/swaruppandeyofficial">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui> */}
            </div>
          </div>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img1} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Samudra Jeet Boruah
                    <br />
                    <span>Student Chair</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/samudrajeet.boruah.007">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/samudra-jit-boruah-7195b915a">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img2} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Swarup Pandey
                    <br />
                    <span>Vice Chair</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/swarup.pandey.758">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="www.linkedin.com/in/swaruppandeyofficial">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img3} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Karan Chetri
                    <br />
                    <span>Efest Advisor</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/karan.chetri.31">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/karan-chetri-390844160">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img4} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Abhishek Bordoloi
                    <br />
                    <span>Efest Advisor</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/abhishek.bordoloi.129">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abhishek-bordoloi-236619144">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img
                    src={
                      "https://media-exp1.licdn.com/dms/image/C4E03AQE1Co_v5od2Ow/profile-displayphoto-shrink_800_800/0/1617431271700?e=1626912000&v=beta&t=-RrwOrgtRoC7d03hgV4NxhG-NqCzxmmQFOyfl46JUVs"
                    }
                    alt=""
                  />
                </div>
                <div className="contentBx">
                  <h3>
                    Mukunda Sharma
                    <br />
                    <span>Efest Advisor</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/hikikomori97">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mukunda-madhab-sharma-166b09157/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img
                    src={
                      "https://media-exp1.licdn.com/dms/image/C5603AQEluiwdmAVkhg/profile-displayphoto-shrink_800_800/0/1587625737779?e=1626912000&v=beta&t=7tNccMfzWSMu7vYhVqYSqXPcHmMD__xbGXlfxdAKqMM"
                    }
                    alt=""
                  />
                </div>
                <div className="contentBx">
                  <h3>
                    Sohail Alam
                    <br />
                    <span>Efest Advisor</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/soh.xlm">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sohail-alam-a5bbbb144/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img7} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Abhimanyu Pratap Singh
                    <br />
                    <span>Executive Head</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/abhi.nits995777">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abhimanyu-pratap-singh">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img8} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Rizvaan Medhi
                    <br />
                    <span>Executive Head</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/rizvaan.medhi">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="www.linkedin.com/in/rizvaan-medhi-091a0b16b">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img31} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Inzamum Hussain Mazumder
                    <br />
                    <span>Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/inzamumhussain.mazumder.7">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/inzamumhussain/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img9} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Triranga Bikrom Borah
                    <br />
                    <span>Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/bikrom023">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/triranga-bikrom-borah-327251176">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img10} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Rajorshi Nath
                    <br />
                    <span>Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100010287973431">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rajorshinath">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img11} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Debanjana Purkayastha
                    <br />
                    <span>Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/debanjana.purkayastha.5">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/debanjana-purkayastha-5b26191b4">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img12} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Sumit Das
                    <br />
                    <span>Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100006618308604">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sumit-das-1b28a11b2">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img13} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Arjoika Paul
                    <br />
                    <span>Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/arjoika.paul">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/arjoika-paul-a8463717a">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img14} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Sheetal Sahu
                    <br />
                    <span>Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/SheetzSonu">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sheetzsonu">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img15} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Prakhar Srivastava
                    <br />
                    <span>Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/pra.khar.1004">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/mwlite/in/prakhar-srivastava-3a53a620a">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img16} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Sohan Paul
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100006964561539">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sohan-paul/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img17} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Swatha Das
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/swatha.das.5">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/swatha-das-9989a21bb">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img18} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Yugabrat Gogoi
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/yu.gabrat.77/">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="in.linkedin.com/in/yugabrat-gogoi-b119851b5">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img19} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Juman Bhuyan
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/juman.bhuyan.3   
">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/juman-bhuyan-2b785319b/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img20} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Kachali Sarma
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100012113804300">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kachali-sarma-b4694b1b0">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img21} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Adarsh Mishra
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100006877720594">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/adarsh-mishra-5b84871b0/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img22} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Chandraa Gogoi
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/chandraa.gogoi.5">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/chandraa-gogoi-37b6aa204">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img23} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Parthaprotim Rabha
                    <br />
                    <span>Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100005296785800">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/parthaprotim-rabha-74a3b71b7">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img24} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Tejaswini A V S V<br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100015511801037">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/tejaswini-a-v-s-v-4b648319a/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img25} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Prathipati Rajendra Sukumar
                    <br />
                    <span>Probationary Core Memberr</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/sukumar.prathipati.10">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sukumar-prathipati-9a59a41bb">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img26} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Nitesh Kumar Singh
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100005683931250">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/nitesh-kumar-singh-620b6219a">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img27} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Anindita Dey
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/anindita.dey.16940599">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/anindita-dey-8813411aa/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img28} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Ankit Singh
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100007706166757">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ankit-singh-0ab7021a2/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img29} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Swaprum charitha sree
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/charithasree.swaprum">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/swaprum-charitha-sree-b5977b1a9">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={img30} alt="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Durgance Gaur
                    <br />
                    <span>Probationary Core Member</span>
                  </h3>
                </div>
              </div>
              <ui className="sci">
                <li>
                  <a href="https://www.facebook.com/durgance.gaur/">
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/durgance-gaur/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
              </ui>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Team;
