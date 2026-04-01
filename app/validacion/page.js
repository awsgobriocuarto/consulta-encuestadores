import Unauthorized from "../components/Unauthorized";

export const dynamic = "force-dynamic";

export default function Pollsters() {
  return (
    <div className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Unauthorized />
          </div>
        </div>
      </div>
    </div>
  );
}
