import React from "react";
import Brand from "./Brand";

export default function Unauthorized() {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">
        <Brand />
      </div>
      <div className="card-body">
        <h5 className="card-title text-danger">Persona No Autorizada</h5>
      </div>
    </div>
  );
}
