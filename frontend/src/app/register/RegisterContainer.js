import { useDispatch } from "react-redux";
import { register } from "../../api/authentication/authentication";
import { Register } from "./Register";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../api/student/student";
import { onLoginSuccess } from "../store/authReducer/AuthReducer";

export const RegisterContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    const registerObj = {
      name: e.name,
      password: e.password,
    };
    let res = await register(registerObj);
    if (res.status === 201) {
      const studentObj = {
        studentId: res.data.user.uuid,
        name: e.name,
        email: e.email,
        enrolledCourses: [],
      };
      await addStudent(res.data.token, studentObj).then(() => {
        dispatch(
          onLoginSuccess({
            token: res.data.token,
            isAuth: true,
            user: res.data.user,
          })
        );
      });
      alert("Registration Success");
    } else {
      alert("Registration Failed");
    }
  };
  return <Register onSubmit={handleOnSubmit} />;
};
