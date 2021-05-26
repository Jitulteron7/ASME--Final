import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tab_style.css";
import Tabpanel from "./Tabpanel/TabPanel";
import img1 from "../../ui_utils/img/banner1.jpg";

const imgArr1 = ["/Planeador/1.jpg", "/Planeador/2.jpg", "/Planeador/3.jpg"];

const imgArr2 = ["/Aeromania/1.jpg", "/Aeromania/2.jpg"];

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
        <Tab>PLANEADOR</Tab>
        <Tab>AEROMANIA</Tab>
        <Tab>HYDRO ROCKETRY</Tab>
        <Tab>DRAFT RITZ</Tab>
      </TabList>

      <TabPanel>
        <Tabpanel
          img={img1}
          title="Planeador"
          content="The Planeador event under ASME module of Tecnoesis"
          contentP="The Planeador event under ASME module of Tecnoesis, is held with the aim of allowing students showcase their engineering skills, imagination and creativity. In this competition, the students are required to make a glider that is supported in flight by the dynamic reaction of air against its lifting surfaces and whose free flight does not depend on an engine. "
          imgArr={imgArr1}
        />
      </TabPanel>
      <TabPanel>
        <Tabpanel
          img={img1}
          title="Aeromania "
          content="AEROMANIA under ASME module of Tecnoesis"
          contentP="AEROMANIA under ASME module of Tecnoesis, allows students to build their very own RC plane and get thrilled to see the limits they can achieve with it. 
Don’t know how to build one? There is nothing to worry,cause ASME holds a workshop on how to build an RC plane from the scratch and holds the competition on the last day.
"
          imgArr={imgArr2}
        />
      </TabPanel>
      <TabPanel>
        <Tabpanel
          img={img1}
          title="Hydro Rocketry"
          content=" Hydro Rocketry under ASME module of Tecnoesis"
          contentP="This amateur rocketry competition under ASME module, is held with the objective to create interest in rocketry among young engineers and encourage them to share their innovative ideas. The participants are required to build a single stage amateur rocket which runs on water."
          imgArr={false}
        />
      </TabPanel>
      <TabPanel>
        <Tabpanel
          img={img1}
          title="Draft Ritz"
          content=" Draft Ritz under ASME module of Tecnoesis "
          contentP="Draft Ritz, the annual designing competition under ASME NIT Silchar chapter, allows students to test their imaginative skills to design the problem statement within the shortest time and also visualize their vision coming in life in front of them and get amazed by the capabilities they hold. The objective of introducing Draft Ritz is to create interest among young innovators towards designing new things in future."
          imgArr={false}
        />
      </TabPanel>
    </Tabs>
  </>
);

export default ShowTab;
