import { useDispatch } from "react-redux";
import { login } from "../../api/authentication/authentication";
import { Login } from "./Login";
import {
  onLoginSuccess,
  onStudentLogin,
} from "../store/authReducer/AuthReducer";
import { getStudentById } from "../../api/student/student";
import { useState } from "react";

export const LoginContainer = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const handleOnSubmit = async (e) => {
    try {
      let res = await login(e);
      if (res.status === 200) {
        console.log("Login Success", res.data.user);
        if (res.data.user.role === "student") {
          let val = await getStudentById({
            token: res.data.token,
            id: res.data.user.uuid,
          });
          const payload = {
            studentId: val.data._id,
            name: val.data.name,
            email: val.data.email,
            enrolledCourses: val.data.enrolledCourses,
          };
          dispatch(onStudentLogin({ student: payload }));
        }
        dispatch(
          onLoginSuccess({
            token: res.data.token,
            isAuth: true,
            user: res.data.user,
          })
        );
        alert("Login Success");
      }
      if (res?.response?.status === 404) {
        setError(true);
      }
    } catch (e) {
      alert("Login Failed");
      console.log("Login Failed", e);
    }
  };
  return <Login error={error} onSubmit={handleOnSubmit} />;
};
