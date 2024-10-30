import Link from "next/link";

export default function Home() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center text-center">
      <div>
        <p className="lead text-uppercase">Encuestas Río Cuarto</p>
        <Link href="/pollsters" className="btn btn-primary mx-1">
          Consulta General
        </Link>
        <Link href="/validacion/38477705" className="btn btn-primary mx-1">
          Consulta Personal
        </Link>
      </div>
    </div>
  );
}
