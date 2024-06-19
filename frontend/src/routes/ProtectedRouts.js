import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "../app/layout/Layout";
import { CoursesContainer } from "../app/courses/CoursesContainer";
import { EnrollmentContainer } from "../app/enrollment/EnrollmentContainer";
import { StudentContainer } from "../app/student/StudentContainer";
import { HomeContainer } from "../app/home/HomeContainer";

export const ProtectedRoutes = () => {
  const {
    user: { role },
  } = useSelector((state) => state.auth);
  return (
    <Routes>
      {role === "admin" ? (
        <>
          <Route
            path="/students"
            element={
              <Layout>
                <StudentContainer />
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
        </>
      ) : (
        <>
          <Route
            path="/home"
            element={
              <Layout>
                <HomeContainer />
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
        </>
      )}
      <Route
        path="*"
        element={
          <Navigate to={role === "student" ? "/home" : "/students"} replace />
        }
      />
    </Routes>
  );
};
