import { useDispatch } from "react-redux";
import { login } from "../../api/authentication/authentication";
import { Login } from "./Login";
import { onLoginSuccess } from "../store/authReducer/AuthReducer";

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const handleOnSubmit = async (e) => {
    let res = await login(e);
    if (res.status === 200) {
      console.log("Login Success");
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
