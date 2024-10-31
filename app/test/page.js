import React from "react";
import Credential from "../components/Credential";

export default function Tests() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Credential />
          </div>
        </div>
      </div>
    </div>
  );
}
