import Home from "./Home";
import Topbar from "./Topbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

function Website() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, flexDirection: "column" }}>
          <Topbar />

          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Website;
