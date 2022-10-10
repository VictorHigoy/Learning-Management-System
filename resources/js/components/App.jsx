import { Routes, Route, Navigate } from "react-router-dom";
import StudentLayout from "./layouts/authenticatedLayout/StudentNavigationBar/StudentLayout";
import Course from "../pages/student/Course";
import Dashboard from "../pages/student/Dashboard";
import AdminLayout from "./layouts/authenticatedLayout/AdminNavigationBar/AdminLayout";
import Login from "./authentication/Login";
import RequireAuth from "./authentication/RequireAuth";
import NotRequireAuth from "./authentication/notRequireAuth";
import UnAuthorized from "./layouts/unAuthorized";
import Missing from "./layouts/Missing";

function App() {
    return (
        <Routes>
            <Route element={<NotRequireAuth />}>
                <Route path="/" element={<Login />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={"student"} />}>
                <Route element={<StudentLayout />}>
                    <Route path="/student/home" element={<Dashboard />}></Route>
                    <Route path="/student/course" element={<Course />}></Route>
                </Route>
            </Route>

            <Route element={<RequireAuth allowedRoles={"admin"} />}>
                <Route path="/admin/home" element={<AdminLayout />}></Route>
            </Route>

            {/* UnAuthorized Pages */}
            <Route path="unauthorized" element={<UnAuthorized />} />

            {/* 404 ERROR */}
            <Route path="*" element={<Missing />} />
        </Routes>
    );
}

export default App;
