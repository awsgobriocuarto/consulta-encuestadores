import Brand from "./Brand";

export default function Credential({ id, fname, lname, dni, date, survey, showData = true }) {
  return (
    <div className="credential">
      <div className="card border-primary">
        <div className="card-header">
          <Brand />
        </div>
        <div className="card-body">
          {id ? (
            <>
              <h5 className="card-message">Persona Autorizada</h5>
              <p className="card-title text-uppercase">{survey}</p>

              {showData && (
                <>
                  <p className="card-text">
                    {fname} {lname}
                  </p>
                  <p className="card-small">Nombre</p>
                  <p className="card-text">{dni}</p>
                  <p className="card-small">DNI</p>
                </>
              )}

              <p className="card-text">{date}</p>
              <p className="card-small">Fecha</p>
            </>
          ) : (
            <h5 className="card-message bg-secondary">Cargando información...</h5>
          )}
        </div>
      </div>
    </div>
  );
}
