import { useEffect, useState } from "react";
import { Courses } from "./Courses";
import {
  deleteCourse,
  getCourses,
  addCourse,
  updateCourse,
} from "../../api/courses/courses";
import { NothingHerePage } from "../../components/NothingHerePage/NothingHerePage";
import { CreateEditCourseModal } from "./CreateEditCourseModal/CreateEditCourseModal";

export const CoursesContainer = () => {
  const [courses, setCourses] = useState([]);
  const [option, setOption] = useState(null);
  useEffect(() => {
    getCourseData();
  }, []);

  const getCourseData = async () => {
    let res = await getCourses();
    if (res && res.data) {
      setCourses(res.data);
    }
  };

  const deleteCourseData = async (id) => {
    let res = await deleteCourse(id);
    if (res.status === 200) {
      getCourseData();
    }
  };

  const createOrEditFunction = async (course) => {
    console.log("course", course);
    const obj = {
      title: course.title,
      description: course.description,
      benefits: course.benefits,
    };
    if (!course.id) {
      let res = await addCourse(obj);
      if (res && res.data) {
        getCourseData();
        setOption(null);
      }
    } else {
      let res = await updateCourse(course.id, obj);
      if (res && res.data) {
        getCourseData();
        setOption(null);
      }
    }
  };

  return (
    <>
      {courses.length > 0 ? (
        <Courses
          courses={courses}
          setOption={(option) => setOption(option)}
          deleteCourseData={(id) => deleteCourseData(id)}
        />
      ) : (
        <NothingHerePage
          buttonText={"Add New Course"}
          onClick={() => setOption({ option: "create", value: {} })}
        />
      )}
      {option ? (
        <CreateEditCourseModal
          option={option}
          close={() => setOption(null)}
          onSubmit={(val) => createOrEditFunction(val)}
        />
      ) : null}
    </>
  );
};
