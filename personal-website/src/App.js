import "./App.css";
import Website from "./Personal Website";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
<link href="../../vendors/fontawesome/css/all.css" rel="stylesheet" />;

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Website" />} />
          <Route path="/Website*" element={<Website />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
