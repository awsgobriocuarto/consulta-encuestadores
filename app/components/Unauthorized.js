import React from "react";
import Brand from "./Brand";

export default function Unauthorized() {
  return (
    <div className="unauthorized">
      <div className="card">
        <div className="card-header">
          <Brand />
        </div>
        <div className="card-body">
          <h5 className="card-message">Persona No Autorizada</h5>
        </div>
      </div>
    </div>
  );
}
