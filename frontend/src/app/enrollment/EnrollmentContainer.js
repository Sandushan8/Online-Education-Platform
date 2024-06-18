import { useEffect, useState } from "react";
import { Enrollment } from "./Enrollment";
import {
  deleteEnrollment,
  getEnrollment,
  updateEnrollment,
  addEnrollment,
} from "../../api/enrollment/enrollment";
import { NothingHerePage } from "../../components/NothingHerePage/NothingHerePage";
import { CreateEditEnrollmentModal } from "./CreateEditEnrollmentModal/CreateEditEnrollmentModal";
import { getStudents } from "../../api/student/student";
import { getCourses } from "../../api/courses/courses";

export const EnrollmentContainer = () => {
  const [enrollment, setEnrollment] = useState([]);
  const [students, setStudent] = useState([]);
  const [courses, setCourses] = useState([]);
  const [option, setOption] = useState(null);
  useEffect(() => {
    getEnrollmentData();
    getStudentData();
    getCourseData();
  }, []);

  const getEnrollmentData = async () => {
    let res = await getEnrollment();
    if (res && res.data) {
      setEnrollment(res.data);
    }
  };

  const getStudentData = async () => {
    let res = await getStudents();
    if (res && res.data) {
      setStudent(res.data);
    }
  };
  const getCourseData = async () => {
    let res = await getCourses();
    if (res && res.data) {
      setCourses(res.data);
    }
  };

  const deleteEnrollmentData = async (id) => {
    console.log("id", id);
    let res = await deleteEnrollment(id);
    if (res.status === 200) {
      getEnrollmentData();
    }
  };

  const createOrEditFunction = async (enrollment) => {
    const obj = {
      course: enrollment.course,
      note: enrollment.note,
      student: enrollment.student,
    };
    if (!enrollment.id) {
      console.log("obj", obj);
      let res = await addEnrollment(obj);
      console.log("res", res);
      if (res && res.data) {
        getEnrollmentData();
        setOption(null);
      }
    } else {
      let res = await updateEnrollment(enrollment.id, obj);
      if (res && res.data) {
        getEnrollmentData();
        setOption(null);
      }
    }
  };

  return (
    <>
      {enrollment.length > 0 ? (
        <Enrollment
          enrollment={enrollment}
          students={students}
          courses={courses}
          setOption={(option) => setOption(option)}
          deleteEnrollmentData={(id) => deleteEnrollmentData(id)}
        />
      ) : (
        <NothingHerePage
          buttonText={"Add New Enrollment"}
          onClick={() => setOption({ option: "create", value: {} })}
        />
      )}

      {option ? (
        <CreateEditEnrollmentModal
          option={option}
          students={students}
          courses={courses}
          close={() => setOption(null)}
          onSubmit={(val) => createOrEditFunction(val)}
        />
      ) : null}
    </>
  );
};
