import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../app/home/Home";
import { useSelector } from "react-redux";
import { Layout } from "../app/layout/Layout";
import { CoursesContainer } from "../app/courses/CoursesContainer";
import { EnrollmentContainer } from "../app/enrollment/EnrollmentContainer";
import { StudentContainer } from "../app/student/StudentContainer";

export const ProtectedRoutes = () => {
  const {
    user: { role },
  } = useSelector((state) => state.auth);
  return (
    <Routes>
      {role !== "admin" ? (
        <>
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route
            path="/courses"
            element={
              <Layout>
                <CoursesContainer />
              </Layout>
            }
          ></Route>
          <Route
            path="/enrollment"
            element={
              <Layout>
                <EnrollmentContainer />
              </Layout>
            }
          ></Route>
          <Route
            path="/students"
            element={
              <Layout>
                <StudentContainer />
              </Layout>
            }
          ></Route>
        </>
      ) : null}
      <Route
        path="*"
        element={
          <Navigate to={role === "admin" ? "/home" : "/courses"} replace />
        }
      />
    </Routes>
  );
};
