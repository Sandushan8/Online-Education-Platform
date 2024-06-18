import { useDispatch } from "react-redux";
import { styles } from "./Layout.styles";
import { onLogoutSuccess } from "../store/authReducer/AuthReducer";
import "./Layout.css";
import { useLocation, useNavigate } from "react-router-dom";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location.pathname);
  const option = [
    {
      name: "Home",
      action: () => {},
      isActive: location.pathname === "/home",
    },
    {
      name: "Courses",
      action: () => {
        navigate("/courses");
      },
      isActive: location.pathname === "/courses",
    },
    {
      name: "Enrollment",
      action: () => {
        navigate("/enrollment");
      },
      isActive: location.pathname === "/enrollment",
    },
    {
      name: "Logout",
      action: () => {
        console.log("Logout");
        dispatch(onLogoutSuccess());
      },
      isActive: false,
    },
  ];
  return (
    <div>
      <div style={styles.topBar}>
        {option.map((item) => {
          return (
            <p
              className="nav"
              style={{ color: item.isActive ? "white" : "black" }}
              onClick={() => item.action()}
            >
              {item.name}
            </p>
          );
        })}
      </div>
      {children}
    </div>
  );
};
