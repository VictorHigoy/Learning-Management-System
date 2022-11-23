import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NotRequireAuth = () => {
    const { role } = useAuth();

    function HandlerUser() {
        if (!role) {
            return <Outlet />;
        } else if (role === "student") {
            return <Navigate to="student/home" replace />;
        } else if (role === "teacher") {
            return <Navigate to="teacher/home" replace />;
        } else if (role === "admin") {
            return <Navigate to="admin/home" replace />;
        } else {
            return <Navigate to="developer/home" replace />;
        }
    }

    return HandlerUser();
    // return !user?.type ? <Outlet /> : <Navigate to="student/home" replace />;
};

export default NotRequireAuth;
