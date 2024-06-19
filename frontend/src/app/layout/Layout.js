import { useDispatch, useSelector } from "react-redux";
import { styles } from "./Layout.styles";
import { onLogoutSuccess } from "../store/authReducer/AuthReducer";
import "./Layout.css";
import { useLocation, useNavigate } from "react-router-dom";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useSelector((state) => state.auth.user);
  console.log("location", location.pathname);
  const adminOption = [
    {
      name: "Students",
      action: () => {
        navigate("/students");
      },
      isActive: location.pathname === "/students",
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
  const studentOption = [
    {
      name: "Home",
      action: () => {
        navigate("/home");
      },
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
      name: "Logout",
      action: () => {
        console.log("Logout");
        dispatch(onLogoutSuccess());
      },
      isActive: false,
    },
  ];

  const option = role === "admin" ? adminOption : studentOption;
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
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
