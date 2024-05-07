
import './App.css';
import Beauty from './component/Beauty';
import Cat from './component/Cat';
import Cloths from './component/Cloths';
import Demo from './component/Demo';
import Demos from './component/Demos';
import Dog from './component/Dog';
import Fesion from './component/Fesion';
import Footer from './component/Footer';
import Furniture from './component/Furniture';
import Health from './component/Health';
import Heeader from './component/Heeder';
import Hoome from './component/Hoome';
import Mobile from './component/Mobile';
import Toy from './component/Toy';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <div>
     
     <Heeader/>
    <Cat/>
     <BrowserRouter>
            <Routes>
            
            <Route path="/" element= {<Hoome/>} />
              <Route path="/toy" element= {<Toy/>} />
              <Route path="/dog" element= {<Dog/>} />
              <Route path="/feshion" element= {<Fesion/>} />
              <Route path="/health" element= {<Health/>} />
              <Route path="/mobile" element= {<Mobile/>} />
              <Route path="/beauty" element= {<Beauty/>} />
              <Route path="/funriture" element= {<Furniture/>} />
              <Route path="/cloth" element= {<Cloths/>} />
              <Route path="/about" element= {<Demos/>} />
              <Route path="/home" element= {<Demo/>} />
            </Routes>
        </BrowserRouter>
        <Footer/>
    
     </div>
  );
}

export default App;
