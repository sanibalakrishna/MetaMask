import "./App.css";
import Home from "./Pages/Home";
import Started from "./Pages/Started";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route exact path="/" Component={Started} />
          <Route exact path="/home/*" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
