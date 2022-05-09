import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      {/* <Router> */}
      <Routes>
        <Route path="/">
          <Route index element={<PublicRoute><Login/></PublicRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute> } />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes >
      {/* </Router> */}
    </BrowserRouter >
  );
}

export default App;
