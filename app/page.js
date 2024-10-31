import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            {/* eslint-disable-next-line */}
            <img
              height="200"
              src="/images/logo-color.png"
              alt="logo"
              className="mb-3"
            />
            <h5 className="text-primary text-uppercase">
              Encuestas Río Cuarto
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
