import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <BrowserRouter>
      {/* <Router> */}
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes >
      {/* </Router> */}
    </BrowserRouter >
  );
}

export default App;
