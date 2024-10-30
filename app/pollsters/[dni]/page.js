export default async function Page({ params }) {
  let dni = params.dni;
  console.log(dni);

  let data = await fetch(
    "https://script.google.com/a/macros/riocuarto.gov.ar/s/AKfycbwMM2aK7MYn3RjAB4Va_nY5jJHd4KVMN67JGpjmRt9-oj-RJC_8bnu7e0A7Z6R1IF8mmA/exec?spreadsheetId=1jm2ScmDUQLx-9AtapediMRkHrQ95ZO29tzW-x3IJ3dY&sheet=users"
  );
  let users = await data.json();

  const filteredUsers = users.filter((user) => user.dni === dni);

  //console.log(filteredUsers.length);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            {filteredUsers?.length == 0 ? (
              <div className="card mb-3">
                {/* eslint-disable */}
                <img
                  src="https://riocuarto.gov.ar/assets/images/brand/brand-new-white.svg"
                  height="40"
                  class="card-img-top bg-danger"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-uppercase py-3">no existe</h5>
                </div>
              </div>
            ) : (
              <>
                {filteredUsers.map((user) => (
                  <div key={user.id} className="card mb-3">
                    <img
                      src="https://riocuarto.gov.ar/assets/images/brand/brand-new-white.svg"
                      height="40"
                      class="card-img-top bg-success"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title text-uppercase py-3">
                        {user.fname} {user.lname}
                      </h5>
                      <p className="card-text">
                        {user.dni} <br />
                        <small>dni</small>
                      </p>
                      <p className="card-text">
                        {user.phone} <br />
                        <small>telefono</small>
                      </p>
                      <p className="card-text">
                        {user.email} <br />
                        <small>email</small>
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
