import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {

  const token = localStorage.getItem("token"); 

if (!token || token === "undefined" || token === "null") {
  return <Navigate to="/login" replace />;
}

  return children;
};

export default PrivateRoute;