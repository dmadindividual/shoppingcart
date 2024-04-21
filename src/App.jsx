import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";

import Dashboard from "./components/Dashboard";
import RootLayout from "./components/RootLayout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          </Route>
      
        </Routes>
      </Router>
    </div>
  );
};

export default App;
