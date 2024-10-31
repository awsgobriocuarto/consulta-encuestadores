export async function fetchUsers() {
  const response = await fetch(
    "https://script.google.com/a/macros/riocuarto.gov.ar/s/AKfycbwMM2aK7MYn3RjAB4Va_nY5jJHd4KVMN67JGpjmRt9-oj-RJC_8bnu7e0A7Z6R1IF8mmA/exec?spreadsheetId=1jm2ScmDUQLx-9AtapediMRkHrQ95ZO29tzW-x3IJ3dY&sheet=users",
    { cache: "no-store" }
  );
  const users = await response.json();
  return users;
}

export async function fetchSingleUser(dni) {
  const response = await fetch(
    "https://script.google.com/a/macros/riocuarto.gov.ar/s/AKfycbwMM2aK7MYn3RjAB4Va_nY5jJHd4KVMN67JGpjmRt9-oj-RJC_8bnu7e0A7Z6R1IF8mmA/exec?spreadsheetId=1jm2ScmDUQLx-9AtapediMRkHrQ95ZO29tzW-x3IJ3dY&sheet=users",
    { cache: "no-store" }
  );

  const users = await response.json();

  // Filtramos los usuarios activos con el dni proporcionado
  const user = users.filter(
    (user) => user.dni === dni && user.status === "activo"
  );
  return user;
}
