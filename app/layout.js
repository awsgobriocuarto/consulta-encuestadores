import "./styles/app.scss";

export const metadata = {
  title: "Encuestadores",
  description: "Sistema de consulta de encuestadores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
