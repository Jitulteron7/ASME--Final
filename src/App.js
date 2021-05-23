import './App.css';
import Home from "./components/Home/Home";
import Event from "./components/Events/Events";
import GalleryGrid from "./components/Gallery/Gallery";
import {BrowserRouter,Route,Redirect} from "react-router-dom"
import Techno from "./components/Technosis/Technoesis";
import Team from "./components/Team/Team"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/event/asme" component={Event} />
    <Route exact path="/event/technoesis" component={Techno} />
    <Route exact path="/team" component={Team} />
    <Route exact path="/gallery" component={GalleryGrid} />
    </BrowserRouter>
    
    </div>
  );
}

export default App;
