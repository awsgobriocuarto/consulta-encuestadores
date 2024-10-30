import Credential from "@/app/components/Credential";
import Unauthorized from "@/app/components/Unauthorized";

export default async function Page({ params }) {
  let dni = params.dni;
  //console.log(dni);

  let data = await fetch(
    "https://script.google.com/a/macros/riocuarto.gov.ar/s/AKfycbwMM2aK7MYn3RjAB4Va_nY5jJHd4KVMN67JGpjmRt9-oj-RJC_8bnu7e0A7Z6R1IF8mmA/exec?spreadsheetId=1jm2ScmDUQLx-9AtapediMRkHrQ95ZO29tzW-x3IJ3dY&sheet=users"
  );
  let users = await data.json();

  const filteredUsers = users.filter(
    (user) => user.dni === dni && user.status === "activo"
  );
  console.log(filteredUsers);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            {filteredUsers?.length == 0 ? (
              <Unauthorized />
            ) : (
              <>
                {filteredUsers?.map((user) => (
                  <div key={user.id}>
                    <Credential
                      id={user.id}
                      fname={user.fname}
                      lname={user.lname}
                      dni={user.dni}
                      date={user.date}
                      survey={user.survey}
                    />
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
