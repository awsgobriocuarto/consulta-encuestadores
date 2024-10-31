import Brand from "./Brand";

export default function Credential({ id, fname, lname, dni, date, survey }) {
  return (
    <div className="credential">
      <div className="card">
        <div className="card-header">
          <Brand />
        </div>
        <div className="card-body">
          <h5 className="card-message">Persona Autorizada</h5>
          {id && (
            <>
              <p className="card-title">{survey}</p>

              <p className="card-text">
                {fname} {lname}
              </p>
              <p className="card-small">Nombre</p>
              <p className="card-text">{dni}</p>
              <p className="card-small">DNI</p>
              <p className="card-text">{date}</p>
              <p className="card-small">Fecha</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
