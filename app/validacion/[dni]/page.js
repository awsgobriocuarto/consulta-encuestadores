import { Suspense } from "react";
import Credential from "@/app/components/Credential";
import Unauthorized from "@/app/components/Unauthorized";
import { fetchSingleUser } from "@/app/lib/fetchUsers";

// This tells Next.js to not wait for the data at build time, but still allows streaming
export const dynamic = "force-dynamic";

/**
 * Loading Skeleton for the credential
 */
function CredentialSkeleton() {
  return (
    <div className="credential-loading">
       <Credential /> {/* This will show the Brand and "Cargando..." message */}
    </div>
  );
}

/**
 * Async component that fetches and displays user status
 */
async function UserStatus({ dni }) {
  if (!dni) return <Unauthorized />;

  const authorizedUsers = await fetchSingleUser(dni);
  const isAuthorized = authorizedUsers && authorizedUsers.length > 0;

  if (!isAuthorized) {
    return <Unauthorized />;
  }

  return (
    <>
      {authorizedUsers.map((user) => (
        <div key={user.id || user.dni} className="mb-3">
          <Credential
            id={user.id}
            fname={user.fname}
            lname={user.lname}
            dni={user.dni}
            date={user.date}
            survey={user.survey}
            showData={user.show_data === true || user.show_data === "TRUE" || user.show_data === "true"}
          />
        </div>
      ))}
    </>
  );
}

export default function Page({ params }) {
  const { dni } = params;

  return (
    <main className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Suspense fallback={<CredentialSkeleton />}>
              <UserStatus dni={dni} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
