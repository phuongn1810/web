import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { Routes, Route} from "react-router";
import { HashRouter, Link } from "react-router-dom";
export default function App() {
 return (
  <div>
    <h1>Phuong Nguyen</h1>
  <HashRouter>
  <li><Link to="/Labs">Labs</Link></li>

      <li><Link to="/Kanbas">Kanbas</Link></li>

    <Routes>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />
    </Routes>
   
  </HashRouter>
  </div>
);}
