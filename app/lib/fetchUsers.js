/**
 * Configuration for the Google Sheets API.
 * In a production environment, these should be in environment variables.
 */
const CONFIG = {
  API_URL: process.env.GOOGLE_SCRIPT_URL || "https://script.google.com/a/macros/riocuarto.gov.ar/s/AKfycbwMM2aK7MYn3RjAB4Va_nY5jJHd4KVMN67JGpjmRt9-oj-RJC_8bnu7e0A7Z6R1IF8mmA/exec",
  SPREADSHEET_ID: process.env.SPREADSHEET_ID || "1jm2ScmDUQLx-9AtapediMRkHrQ95ZO29tzW-x3IJ3dY",
  SHEET_NAME: process.env.SHEET_NAME || "users",
};

/**
 * Common function to fetch data from the Google Sheet API
 * @returns {Promise<Array>}
 */
async function fetchFromSheet() {
  const url = new URL(CONFIG.API_URL);
  url.searchParams.append("spreadsheetId", CONFIG.SPREADSHEET_ID);
  url.searchParams.append("sheet", CONFIG.SHEET_NAME);

  try {
    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API responded with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data from sheet:", error);
    return [];
  }
}

/**
 * Fetches all users from the spreadsheet
 * @returns {Promise<Array>}
 */
export async function fetchUsers() {
  return await fetchFromSheet();
}

/**
 * Fetches matching active users by DNI.
 * @param {string|number} dni 
 * @returns {Promise<Array>}
 */
export async function fetchSingleUser(dni) {
  const users = await fetchFromSheet();
  const searchDni = String(dni).trim();

  // Return filtered active users matching the DNI
  return users.filter((user) => 
    String(user.dni).trim() === searchDni && 
    user.status?.toLowerCase() === "activo"
  );
}
