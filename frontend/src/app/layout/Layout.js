import { useDispatch } from "react-redux";
import { styles } from "./Layout.styles";
import { onLogoutSuccess } from "../store/authReducer/AuthReducer";
import "./Layout.css";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const option = [
    { name: "Home", action: () => {} },
    { name: "Courses", action: () => {} },
    { name: "Enrollment", action: () => {} },
    {
      name: "Logout",
      action: () => {
        console.log("Logout");
        dispatch(onLogoutSuccess());
      },
    },
  ];
  return (
    <div>
      <div style={styles.topBar}>
        {option.map((item) => {
          return (
            <p className="nav" onClick={() => item.action()}>
              {item.name}
            </p>
          );
        })}
      </div>
      {children}
    </div>
  );
};
