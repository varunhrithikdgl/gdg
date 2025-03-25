import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome, {user?.username}</h1>
    </div>
  );
};

export default Dashboard;
