import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Routes>
            <Route path="/"></Route>
          </Routes>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
