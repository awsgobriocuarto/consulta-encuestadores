import Brand from "./Brand";

export default function Credential({ id, fname, lname, dni, date, survey }) {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">
        <Brand />
      </div>
      <div className="card-body">
        <h5 className="card-title text-success">Persona Autorizada</h5>
        {id && (
          <>
            <p className="lead">{survey}</p>

            <p className="mb-2 card-text">
              {fname} {lname} <br />
              <small className="text-secondary">Nombre</small>
            </p>
            <p className="mb-2 card-text">
              {dni} <br />
              <small className="text-secondary">DNI</small>
            </p>
            <p className="mb-2 card-text">
              {date} <br />
              <small className="text-secondary">Fecha</small>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
