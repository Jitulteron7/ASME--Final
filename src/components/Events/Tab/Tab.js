import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tab_style.css";
import Tabpanel from "./Tabpanel/TabPanel";

const imgArr1 = [
  "/HVPC/3.jpg",
  "/HVPC/4.jpg",
  "/HVPC/6.jpg",
  "/HVPC/9.jpg",
  "/HVPC/11.jpg",
  "/HVPC/middle.jpg",
];

const imgArr2 = [
  "/IAM3D/3d1.jpg",
  "/IAM3D/3d2.jpg",
  "/IAM3D/3d3.jpg",
  "/IAM3D/3d4.jpg",
];
const imgArr3 = ["/SDC/SDC1.jpg", "/SDC/SDC2.jpg", "/SDC/SDC3.jpg"];

const TitleEvent = () => {
  return (
    <div className="event_header">
      <div className="event_container">
        <h3>Events</h3>
        <div className="border"></div>
      </div>
    </div>
  );
};
const ShowTab = () => (
  <>
    <TitleEvent />
    <Tabs>
      <TabList>
        <Tab>HPVC</Tab>
        <Tab>IAM3D</Tab>
        <Tab>SDC</Tab>
        <Tab>OLD GUARD</Tab>
      </TabList>

      <TabPanel>
        <Tabpanel
          img="/EventLogo/hpvc.png"
          title="HPVC"
          content=" Human Powered Vehicle Challenge"
          contentP="
          ASME's Human Powered Vehicle Challenge (HPVC) is an engineering design and innovation competition that gives students the opportunity to network and apply engineering principles through the design, fabrication, and racing of human powered vehicles.

    In layman's terms, HPVC basically requires a team to design a Human Powered Vehicle (HPV) keeping in mind the driver's posture and ergonomics, vehicle aerodynamics, chain drives etc. and then this vehicle is subjected to various stages of the competition viz. Safety inspection followed by Sprint events and culminating with the Endurance event. 

    Team Tejas from NITS, currently in it's sixth edition i.e. Tejas 6.0 has been representing NITS in this premier event with constant improvement in every iteration. 
    It was at ASME E-fest Asia Pacific 2020 that Team Tejas 5.0 had a big breakthrough securing the 1st position in the Men's Sprint event.

    The HPVC provides students with a great platform to learn and grow simultaneously.  
    Presently, team Tejas 6.0 have taken part in E-fest Digital 2021 due to the Covid scenario and the results are awaited.
          "
          header2="HPVC 2020-A tale of Tejas 5.0"
          content2="Team Tejas HPVC NITS participated in ASME E-fest Asia Pacific 2020 led by team captain Subhash Jaiswal and team vice captain Aviral Vardiya.
                The rest of the team included Imran Hussain, Milan Saini, Vaibhav Fatehpuriya, Gaurav Hissariya, Yashvardhan Shukla, Karan Chetri and Shivang Pandey from 3rd year.
                The team also included Inzamum Hussain, Prakhar Srivastava, Priyam Borkakoty, Farnaz Alam and Angita kar from 2nd year.
                The team aced the safety test fulfilling all the requirements.

                Post that the design event was held where the team presented a report on the requisite steps taken in fabrication of the vehicle and it's load carrying capabilities.

                Moving forward Team Tejas flaunting the number 18 participated in the Women's Sprint competition followed by the Men's sprint competition in which the team secured 1st position attaining a speed of 55kmph.
                Lastly, the endurance event was held. Team Tejas despite starting off well in the event suffered from a major setback when one of the HPV's tires got punctured unfortunately. Inspite of that, the team showed great resilience to stay afloat in the event and finish the race with new tires.

                With that concluded NITs HPVC team's journey in the competition with a perfectly deserved medal and new hopes and aspirations for future competitions."
          imgArr={imgArr1}
          imglogo="/EventLogo/hpvc.png"
        />
      </TabPanel>
      <TabPanel>
        <Tabpanel
          img="/EventLogo/iam3d logo.png"
          title="IAM3D"
          content="Innovative Additive Manufacturing 3D"
          contentP="The ASME Innovative Additive Manufacturing 3D (IAM3D) Challenge is designed to give mechanical and multi-disciplinary undergraduate students around the world, an opportunity to re-engineer existing products or create new designs. Students competing in IAM3D showcase their creativity by demonstrating the value added through their ingenuity, application of sound engineering design principles, and leveraging Additive Manufacturing technologies.
            The IAM3D Challenge is held at ASME’s global E-Fest and allows students to use their Additive Manufacturing technology to solve different challenges.
            The NIT Silchar IAM3D team went to compete in ASME’s E-Fest Asia Pacific for the first time, in the year 2020. The team designed a 3D printed drone from scratch and it was designed to be capable of carrying a payload using electromagnetic picking mechanism.
            At present, the NIT Silchar IAM3D team has participated in E-fest Digital 2021 due to the ongoing Covid scenario. The IAM3D 2021 team is being led by team captain Rajorshi Nath and vice-captain Triranga Bikrom Borah. The other team members include Sarfaraz Hussain, Bikashjyoti Das and Debanjana Purkayastha from 3rd year and Sohan Paul, Anit Bhattacharya and Dommeti Sai Prudhvi from 2nd year."
          header2="IAM3D 2020 – A milestone for the college team"
          content2="As a team, the NITS IAM3D team participated in ASME E-fest for the first time in the year 2020. The team was led by captain Mukunda Madhav Sharma and vice captain Abhishek Bordoloi, alongwith Abinash Saikia and Rizvaan Medhi as the executive members, all from 3rd year. The other team members included Rajorshi Nath, Triranga Bikrom Borah and Sarfaraz Hussain from 2nd year.
            The problem statement was to make a UARCV and complete a designed track caring a load using 3D printing technology. The team was able to qualify for the semi-finals successfully. With all the experiences that the team gained in their first ever E-fest, they aim to reach the zenith next time.
"
          imgArr={imgArr2}
          imglogo="/EventLogo/iam3d logo.png"
        />
      </TabPanel>
      <TabPanel>
        <Tabpanel
          img="/EventLogo/sdc.png"
          title="SDC"
          content=" Student Design Competition"
          contentP="The ASME Student Design Competition provides a platform for students to present their solutions to a range of design problems - from everyday household tasks to groundbreaking space exploration. Each team is required to design, construct and operate a prototype meeting the requirements of an annually determined problem statement. SDC is a Mechatronics based competition which aims in the creation of innovative designs to present solutions to a wide range of problems. The NIT Silchar SDC team went to compete in ASME’s E-Fest Asia Pacific for the first time, in the year 2019.
          The college team again participated at the E-fest in 2020 and begged the 2nd position. The problem statement for the 2020 competition was to build a bot that could make a paper tower from maximum hundred A4 sized papers.
          Presently, the NIT Silchar SDC team has participated in E-fest Digital 2021 due to the ongoing Covid scenario. The NITS SDC 2021 team is being led by team captain Arjoika Paul and vice-captain Sheetal Sahu. Other team members include Rohit Pathak and Jyotirmoi Deka from 3rd year and Yugabrat Gogoi, Debarka Chattopadhyay and Mrinmoi Borah from 2nd year. The problem statement for 2021 was to construct a radio controlled bot capable to load weights, move along given arrows and then unload them in another area."
          header2="SDC 2020 – MAKING THE DIFFERENCE"
          content2="The NITS SDC 2020 team not only bring experiences for themselves but also achievements for the college. The 2020 team had to build a bot that could make a paper tower from maximum 100 A4 sized papers. 
          The team was led by captain Sohail Alam and vice-captain Samudra Jeet Boruah. Other team members included Rajdeep Sarmah, Swarup Pandey and Parag Jyoti Nath from 3rd year and Arjoika Paul, Sheetal Sahu and Rohit Pathak from 2nd year. The team begged 1st position in the first round, 2nd position in the second round and 3rd position in the third round. Finally, the team qualified for the finals and secured 2nd position in SDC 2020."
          imgArr={imgArr3}
          imglogo="/EventLogo/sdc.png"
        />
      </TabPanel>
      <TabPanel>
        <Tabpanel
          img="/EventLogo/old guard.png"
          title="OLD GUARD"
          content=""
          contentP="Like all professionals, engineers must possess a well-developed ability to synthesize issues and communicate effectively to diverse audiences. Among the highlights of the ASME Engineering Festivals (or E-Fest) is the Oral Competition. This competition is designed to emphasize the value of an ability to  deliver clear, concise and effective oral presentations, particularly pertaining to some sphere in which an engineer is or should be involved. The competition’s sponsor, the ASME Old Guard Committee, offers significant prize money to competition winners. Each student presentation lasts fifteen minutes and is followed by a five minute “Question and Answer” period. First Place finalists from each E-Fest event are invited to compete at the Society level  competition at the International Mechanical Engineering Congress & Exposition (IMECE). Old Guard Oral Presentation in ASME E-fest Asia Pacific 2020 was participate by Aishwarya Buragohain  and M K S L Gayatri  and this was the first time that the ASME NITS Chapter is going to participate in  Old Guard Competition. "
          imgArr={false}
          imglogo="/EventLogo/old guard.png"
        />
      </TabPanel>
    </Tabs>
  </>
);

export default ShowTab;
