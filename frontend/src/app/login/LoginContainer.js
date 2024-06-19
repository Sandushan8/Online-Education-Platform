import { useDispatch } from "react-redux";
import { login } from "../../api/authentication/authentication";
import { Login } from "./Login";
import {
  onLoginSuccess,
  onStudentLogin,
} from "../store/authReducer/AuthReducer";
import { getStudentById } from "../../api/student/student";

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const handleOnSubmit = async (e) => {
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
    }
  };
  return <Login onSubmit={handleOnSubmit} />;
};
