import Navbar from "./NavBar"
import {useState,useEffect} from 'react'
import axios from 'axios'

const Offers = () => {
  const[college,setCollege] = useState([])
  const[program,setProgram] = useState([])
  const[course,setCourse] = useState([])

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/courses")
    .then(res =>{
      console.log(res.data)
      setCourse(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/colleges")
    .then(res =>{
      console.log(res.data)
      setCollege(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/programs")
    .then(res =>{
      console.log(res.data)
      setProgram(res.data)
    })
  },[])


  return (
    <div>
        <Navbar/>

        <div class="container mx-auto ">
          <h1 class="font-bold text-4xl mt-5 flex gap-2 text-indigo-800 ">
            University Offers 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </h1>
            <div >
              <h1 class="font-bold text-3xl mt-12 mb-4">Courses</h1>
              {college.map(val =>
                <h1 key={val.id} class="font-medium text-xl text-slate-800 py-2 ">
                  {val.college_name} {`(${val.abbreviation})`}
                </h1>
              )}
            </div>

            <div >
              <h1 class="font-bold text-3xl mt-12 mb-4">Programs</h1>
              {program.map(val =>
                <h1 key={val.id} class="font-medium text-xl text-slate-800 py-2">
                  {val.program_name}  {`(${val.abbreviation})`}
                </h1>
              )}
            </div>

            <div >
              <h1 class="font-bold text-3xl mt-12 mb-4">Available Courses</h1>
              {course.map(val =>
                <h1 key={val.id} class="font-medium text-xl text-slate-800 py-2 flex gap-12 ">
                  <div class="font-bold">{val.program.abbreviation}</div> <div>{val.course_name}</div>
                </h1>
              )}
            </div>

        </div>
    </div>
  )
}

export default Offers