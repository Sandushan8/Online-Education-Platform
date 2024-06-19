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
import { useSelector } from "react-redux";
import { addEnrollment } from "../../api/enrollment/enrollment";

export const CoursesContainer = () => {
  const [courses, setCourses] = useState([]);
  const [option, setOption] = useState(null);
  const {
    student: { studentId },
  } = useSelector((state) => state.auth);
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
      alert("Course Deleted Successfully");
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
        alert("Course Added Successfully");
        getCourseData();
        setOption(null);
      }
    } else {
      let res = await updateCourse(course.id, obj);
      if (res && res.data) {
        alert("Course Updated Successfully");
        getCourseData();
        setOption(null);
      }
    }
  };

  const enrollStudent = async (courseId) => {
    console.log("courseId", courseId);
    const obj = {
      course: courseId,
      student: studentId,
      note: "",
    };
    let res = await addEnrollment(obj);
    if (res && res.data) {
      alert("Student Enrolled Successfully");
    } else {
      alert("Student already enrolled");
    }
  };

  return (
    <>
      {courses.length > 0 ? (
        <Courses
          courses={courses}
          setOption={(option) => setOption(option)}
          deleteCourseData={(id) => deleteCourseData(id)}
          enrollStudent={(id) => enrollStudent(id)}
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
