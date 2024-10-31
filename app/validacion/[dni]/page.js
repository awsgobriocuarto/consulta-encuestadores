import Credential from "@/app/components/Credential";
import Unauthorized from "@/app/components/Unauthorized";
import { fetchSingleUser } from "@/app/lib/fectUsers";

export default async function Page({ params }) {
  let dni = params.dni;
  //console.log(dni);
  const singleUser = await fetchSingleUser(dni);

  return (
    <div className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            {singleUser?.length == 0 ? (
              <Unauthorized />
            ) : (
              <>
                {singleUser?.map((user) => (
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
