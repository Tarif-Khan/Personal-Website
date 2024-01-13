import React from "react";
import "./index.css";
function Topbar() {
  return (
    <div className="topbar">
      <div></div>
      <div className="topbar-right">
        <a
          className="btn btn-primary"
          href="https://www.linkedin.com/in/tarif-khan-a23897229/"
        >
          My Linkedin
        </a>

        <a className="btn btn-success" href="https://github.com/Tarif-Khan">
          My Github
        </a>

        <a className="btn btn-info" href="https://github.com/Tarif-Khan">
          Download My Resume here
        </a>
      </div>
    </div>
  );
}

export default Topbar;
