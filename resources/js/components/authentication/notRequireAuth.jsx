import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NotRequireAuth = () => {
    const { user } = useAuth();

    function HandlerUser() {
        if (!user?.type) {
            return <Outlet />;
        } else if (user?.type === "student") {
            return <Navigate to="student/home" replace />;
        } else if (user?.type === "teacher") {
            return <Navigate to="teacher/home" replace />;
        } else if (user?.type === "admin") {
            return <Navigate to="admin/home" replace />;
        } else {
            return <Navigate to="developer/home" replace />;
        }
    }

    return HandlerUser();
    // return !user?.type ? <Outlet /> : <Navigate to="student/home" replace />;
};

export default NotRequireAuth;
