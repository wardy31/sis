import Navbar from './NavBar'
import moment from 'moment'
import axios from '../config/axios'
import toastr from '../config/toastr'

import {useState,useEffect} from 'react'

function ManageStudent() {

const[modal, setModal] = useState('')
const[enrolleesData,setEnrolleesData] = useState([])
const[studentsData,setStudentsData]=useState([])
const[collegesData,setCollegesData]=useState([])
const[programsData,setProgramsData]=useState([])
const[coursesData,setCoursesData]=useState([])
const[student,setStudent]=useState('')
const[college,setCollege]=useState('')
const[program,setProgram]=useState('')
const[course,setCourse]=useState('')
const[id,setId] =useState(0);

useEffect(() =>{
    axios.get('students')
    .then(res =>{setStudentsData(res.data)})
},[])

useEffect(() =>{
    axios.get('colleges')
    .then(res =>{setCollegesData(res.data)})
},[])

useEffect(() =>{
    axios.get('programs')
    .then(res =>{setProgramsData(res.data)})
},[])

useEffect(() =>{
    axios.get('courses')
    .then(res =>{setCoursesData(res.data)})
},[])

useEffect(() => {
    axios.get('enrollees')
    .then(res => {setEnrolleesData(res.data)})
}, [])

function addEnrollee(e){
    e.preventDefault()

    let enrollee = {
      student_id: student,
      college_id: college,
      program_id: program,
      course_id: course  
    }
    axios.post('enrollees',enrollee)
    .then(res=>{
        setModal('close')
        setStudent('')
        setCollege('')
        setProgram('')
        setCourse('')
        toastr["success"]("Successfully Added!")

    })
}

function updateEnrollee(e){
   e.preventDefault()

   let enrollee = {
    student_id: student,
    college_id: college,
    program_id: program,
    course_id: course  
  }
   axios.put(`enrollees/${id}`,enrollee)
   .then(res=>{
    setModal('close')
    setStudent('')
    setCollege('')
    setProgram('')
    setCourse('')
    toastr["success"]("Successfully Updated!")

})
}

function deleteEnrollee(e){
    e.preventDefault()
 
    let enrollee = {
     student_id: student,
     college_id: college,
     program_id: program,
     course_id: course  
   }
    axios.delete(`enrollees/${id}`,enrollee)
    .then(res=>{
     setModal('close')
     setStudent('')
     setCollege('')
     setProgram('')
     setCourse('')
     toastr["success"]("Successfully Deleted!")
 })
 
 }

function handleModal(modal,data){
    setModal(modal)

    if(modal === 'update'){
        setStudent(data.student_id)
        setCollege(data.college_id)
        setProgram(data.program_id)
        setCourse(data.course_id)
        setId(data.id)
    }

    if(modal === 'delete'){
        setId(data.id)
    }
}
  return (
    <>
    <Navbar/>
    <div class="container mx-auto relative">
        <div class="my-4">
            <button class="flex gap-2 px-5 py-2 bg-emerald-500 text-white rounded-md" onClick={() => handleModal('add')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Enrollee
            </button>
        </div>
        <div class="overflow-x-auto">
            <table class="table-auto">
                <thead class="uppercase bg-indigo-800 text-white font-bold text-sm">
                    <tr>
                        <th class="py-3 px-6">id</th>
                        <th class="py-3 px-6">student #</th>
                        <th class="py-3 px-6">name</th>
                        <th class="py-3 px-6">college</th>
                        <th class="py-3 px-6">program</th>
                        <th class="py-3 px-6">course code</th>
                        <th class="py-3 px-6">course name</th>
                        <th class="py-3 px-6">date enrolled</th>
                        <th class="py-3 px-6">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {enrolleesData.map(value => 
                        <tr key={value.id} class="hover:text-black/60 bg-gray-50">
                           <td class="py-3 px-6">{value.id}</td>
                           <td class="py-3 px-6">{value.student.student_number}</td>
                           <td class="py-3 px-6">{value.student.last_name}, {value.student.first_name}</td>
                           <td class="py-3 px-6">{value.college.abbreviation}</td>
                           <td class="py-3 px-6">{value.program.program_name}</td>
                           <td class="py-3 px-6">{value.course.course_code}</td>
                           <td class="py-3 px-6">{value.course.course_name}</td>
                           <td class="py-3 px-6">{moment(value.created_at).format('YYY-MM-D hh:mm:ss')}</td>
                           <td class="py-3 px-6">
                                <button class="flex gap-2 items-center text-sm text-yellow-400 hover:text-yellow-300" onClick={()=> handleModal('update',value)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                    Update
                                </button>
                                <button class="flex gap-2 items-center text-sm text-red-700 mt-2 hover:text-red-500" onClick={()=> handleModal('delete',value)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                    Delete
                                </button>
                           </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>

    <div className={`${modal === 'add' ? 'block' : 'hidden'} h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black/50`}>
    <div class="bg-white rounded-md w-4/12">
        <div class="">
            <div class="bg-indigo-700 text-white font-bold text-xl py-3 px-4 flex justify-between items-center">
                <h3>Add</h3>
            </div> 

            <div class="">
                <form onSubmit={addEnrollee}>
                <div class="container mx-auto px-10 py-4">
                    <div>
                        <label className='block text-md'>Student Name</label>
                        <select class= "mt-1 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value={student} onChange={(e)=> setStudent(e.target.value)}>
                            <option>-- Select Options --</option>
                            {studentsData.map(val=>
                             <option key={val.id} value={val.id}>{val.first_name} {val.last_name}</option>
                            )}
                        </select>
                     </div>
                    <div>
                        <label className='block text-md mt-4'>College Name</label>
                        <select class= "mt-2 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value={college} onChange={(e)=> setCollege(e.target.value)}>
                            <option>-- Select Options --</option>
                            {collegesData.map(val=>
                             <option key={val.id} value={val.id}>{val.college_name} {`(${val.abbreviation})`}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <label className='block text-md mt-4'>Program Name</label>
                        <select class= "mt-2 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value={program} onChange={(e)=> setProgram(e.target.value)}>
                            <option>-- Select Options --</option>
                            {programsData.map(val=>
                             <option key={val.id} value={val.id}>{val.program_name}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <label className='block text-md mt-4'>Course Name</label>
                        <select class= "mt-2 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value={course} onChange={(e)=> setCourse(e.target.value)}>
                            <option>-- Select Options --</option>
                            {coursesData.map(val=>
                             <option key={val.id} value={val.id}>{val.course_name}</option>
                            )}
                        </select>
                    </div>
                </div>
            <div class="flex justify-end items-center gap-4 px-10 pb-4 pt-3">
                <div >
                    <button class="text-gray-700 hover:text-gray-900 text-sm " onClick={handleModal}>Cancel</button>
                </div>
                <div >
                    <button type='submit' class="bg-indigo-700 py-2 px-10 rounded-md text-sm text-white hover:bg-indigo-600">Add</button>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>

    <div className={`${modal === 'update' ? 'block' : 'hidden'} h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black/50`}>
    <div class="bg-white rounded-md w-4/12">
        <div class="">
            <div class="bg-indigo-700 text-white font-bold text-xl py-3 px-4 flex justify-between items-center">
                <h3>Update</h3>
            </div> 

            <div class="">
                <form onSubmit={updateEnrollee}>
                <div class="container mx-auto px-10 py-4">
                    <div>
                        <label className='block text-md'>Student Name</label>
                        <select class= "mt-1 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value={student} onChange={(e)=> setStudent(e.target.value)}>
                            <option>-- Select Options --</option>
                            {studentsData.map(val=>
                             <option key={val.id} value={val.id}>{val.first_name} {val.last_name}</option>
                            )}
                        </select>
                     </div>
                    <div>
                        <label className='block text-md mt-4'>College Name</label>
                        <select class= "mt-2 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value={college} onChange={(e)=> setCollege(e.target.value)}>
                            <option>-- Select Options --</option>
                            {collegesData.map(val=>
                             <option key={val.id} value={val.id}>{val.college_name} {`(${val.abbreviation})`}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <label className='block text-md mt-4'>Program Name</label>
                        <select class= "mt-2 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value={program} onChange={(e)=> setProgram(e.target.value)}>
                            <option>-- Select Options --</option>
                            {programsData.map(val=>
                             <option key={val.id} value={val.id}>{val.program_name}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <label className='block text-md mt-4'>Course Name</label>
                        <select class= "mt-2 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value={course} onChange={(e)=> setCourse(e.target.value)}>
                            <option>-- Select Options --</option>
                            {coursesData.map(val=>
                             <option key={val.id} value={val.id}>{val.course_name}</option>
                            )}
                        </select>
                    </div>
                </div>
            <div class="flex justify-end items-center gap-4 px-10 pb-4 pt-3">
                <div >
                    <button class="text-gray-700 hover:text-gray-900 text-sm " onClick={() => handleModal('close')}>Cancel</button>
                </div>
                <div >
                    <button type='submit' class="bg-indigo-700 py-2 px-10 rounded-md text-sm text-white hover:bg-indigo-600">Update</button>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>

    <div className={`${modal === 'delete' ? 'block' : 'hidden'} h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black/50`}>
    <div class="bg-white rounded-md w-4/12">
        <div class="">
            <div class="bg-indigo-700 text-white font-bold text-xl py-3 px-4 flex justify-between items-center">
                <h3>Delete</h3>
            </div> 

            <div class="">
            <form onSubmit={deleteEnrollee}>
                <div class="container mx-auto px-10 py-6 font-bold text-lg">
                    <h1>Are you sure to delete?</h1>
                </div>
  
            <div class="flex justify-end items-center gap-4 px-10 pb-4 pt-1">
                <div >
                    <button class="text-gray-700 hover:text-gray-900 text-sm " onClick={() => handleModal('close')}>Cancel</button>
                </div>
                <div >
                    <button type='submit' class="bg-red-600 py-2 px-10 rounded-md text-sm text-white hover:bg-red-500">Delete</button>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ManageStudent