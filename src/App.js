import {
  Routes,
  Route,
} from "react-router-dom";
import Inicio from "./page/Inicio";

function App() {
  return (
    <div className="container-sm" >
      <Routes>
        <Route path="/" element={<Inicio/>}/>
      </Routes>

    </div>
  );
}

export default App;
