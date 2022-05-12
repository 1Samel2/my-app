import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  Home  from "./page/Home";
import  NewRoom  from "./page/NewRoom";

/* import { AuthContextProvider } from './contexts/AuthContext'
 */

function App() {
    return (
        <Router>
        <Routes>
             <Route  path="/" element={<Home/>} />
             <Route  path="/rooms/new" element={<NewRoom/>} />
         </Routes>
     </Router>
    );
}

export default App;