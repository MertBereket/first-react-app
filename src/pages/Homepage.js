import AddUser from "../components/AddUser";
import GetUser from "../components/GetUser";

function Homepage() {
  const bg = {
    backgroundColor: "#f2f2f2",
    height: "100vh",
  };
  return (
    <div style={bg} className="d-flex align-items-center">
      <div className="w-100 row m-0 align-items-center p-4">
        <div className="col-4">
          <AddUser />
        </div>
        <div className="col-8">
          <GetUser />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
