import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth, user } = useAuth();
    const location = useLocation();

    console.log(user?.type);

    function HandlerUser() {
        if (user?.type === allowedRoles) {
            return <Outlet />;
        } else if (user?.email) {
            return (
                <Navigate
                    to="/unauthorized"
                    state={{ from: location }}
                    replace
                />
            );
        } else {
            return <Navigate to="/" state={{ from: location }} replace />;
        }
    }

    return HandlerUser();
};

export default RequireAuth;
