import { useEffect, useState } from "react";
import { Courses } from "./Courses";
import { getCourses } from "../../api/courses/courses";
import { useSelector } from "react-redux";
import { NothingHerePage } from "../../components/NothingHerePage";

export const CoursesContainer = () => {
  const [courses, setCourses] = useState([]);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    getCourseData(token);
  }, [token]);
  const getCourseData = async (token) => {
    let res = await getCourses(token);
    if (res && res.data) {
      setCourses(res.data);
    }
  };
  return courses.length < 0 ? (
    <Courses courses={courses} />
  ) : (
    <NothingHerePage />
  );
};
