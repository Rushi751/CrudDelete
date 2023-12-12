import { useState } from "react"
import { allStudent } from "./Student/allStudents"
import { allTeacher } from "./Teacher/allTeacher";
import Context from "./Context";
const Provider=(props)=>{
    const [students,setStudents]= useState(allStudent);
    const [teachers,setTeachers]= useState(allTeacher);
  
      return(
          <Context.Provider
              value={{
                  students,
                  setStudents,
                  teachers,
                  setTeachers
              }}
          >
               {props.children}
          </Context.Provider>
      )
  
  
  }
  export default Provider;