import Credential from "@/app/components/Credential";
import Unauthorized from "@/app/components/Unauthorized";
import { fetchSingleUser, fetchUsers } from "@/app/lib/fectUsers";
import Link from "next/link";

export default async function Page({ params }) {
  let dni = params.dni;
  //console.log(dni);
  const users = await fetchUsers();
  const sigleUser = await fetchSingleUser(dni);

  return (
    <div className="vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            {sigleUser?.length == 0 ? (
              <Unauthorized />
            ) : (
              <>
                {sigleUser?.map((user) => (
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
          <div className="col-md-4">
            <Credential />
            <Unauthorized />
            <hr />
            <h5>Validacion</h5>
            {sigleUser?.map((user) => (
              <div key={user.id}>
                {user.status === "inactivo" ? (
                  <Unauthorized />
                ) : (
                  <Credential
                    id={user.id}
                    fname={user.fname}
                    lname={user.lname}
                    dni={user.dni}
                    date={user.date}
                    survey={user.survey}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="col-md-4">
            {users.map((user) => (
              <div key={user.id}>
                <Link href={`/validacion/${user.dni}`}>
                  {user.fname} {user.lname}
                </Link>{" "}
                | {user.dni} |{" "}
                {user.status == "activo" ? (
                  <span className="badge text-bg-success">{user.status}</span>
                ) : (
                  <span className="badge text-bg-danger">{user.status}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
