import { CircleLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <CircleLoader color='#a85232' size={100} />;
      </div>
    );
  if (user && isAdmin) return children;
  return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
