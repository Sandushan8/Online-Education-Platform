import { useEffect, useState } from "react";
import { Student } from "./Student";
import {
  deleteStudent,
  getStudents,
  addStudent,
  updateStudent,
} from "../../api/student/student";
import { NothingHerePage } from "../../components/NothingHerePage/NothingHerePage";
import { CreateEditStudentModal } from "./CreateEditStudentModal/CreateEditStudentModal";
import { register } from "../../api/authentication/authentication";

export const StudentContainer = () => {
  const [student, setStudent] = useState([]);
  const [option, setOption] = useState(null);
  useEffect(() => {
    getStudentData();
  }, []);

  const getStudentData = async () => {
    let res = await getStudents();
    if (res && res.data) {
      setStudent(res.data);
    }
  };

  const deleteStudentData = async (id) => {
    let res = await deleteStudent(id);
    if (res.status === 200) {
      getStudentData();
    }
  };

  const createOrEditFunction = async (user) => {
    console.log("user", user);
    const registerObj = {
      name: user.name,
      password: user.password,
      role: "student",
    };
    if (!user.id) {
      let regRes = await register(registerObj);
      if (regRes.status === 201) {
        const studentObj = {
          studentId: regRes.data.user.uuid,
          name: user.name,
          email: user.email,
          enrolledCourses: [],
        };
        let res = await addStudent(studentObj);
        if (res && res.data) {
          alert("Student Added Successfully");
          getStudentData();
          setOption(null);
        }
      }
    } else {
      const obj = {
        studentId: user.studentId,
        name: user.name,
        email: user.email,
        enrolledCourses: user.enrolledCourses,
      };
      let res = await updateStudent(user.id, obj);
      if (res && res.data) {
        alert("Student Updated Successfully");
        getStudentData();
        setOption(null);
      }
    }
  };

  return (
    <>
      {student.length > 0 ? (
        <Student
          student={student}
          setOption={(option) => setOption(option)}
          deleteStudentData={(id) => deleteStudentData(id)}
        />
      ) : (
        <NothingHerePage
          buttonText={"Add New Student"}
          onClick={() => setOption({ option: "create", value: {} })}
        />
      )}
      {option ? (
        <CreateEditStudentModal
          option={option}
          close={() => setOption(null)}
          onSubmit={(val) => createOrEditFunction(val)}
        />
      ) : null}
    </>
  );
};
