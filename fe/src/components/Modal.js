import {useState,useEffect} from 'react'
import axis from '../config/axios'
function Modal({onModal,forms}) {

const[studentsData,setStudentsData]=useState([])
const[collegesData,setCollegesData]=useState([])
const[programsData,setProgramsData]=useState([])
const[coursesData,setCoursesData]=useState([])


  return (
    <>  
        <div className={`${forms ? 'hidden' : 'block'}h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black/40`}>
            <div class="bg-white rounded-md w-4/12">
                <div class="">
                    <div class="bg-indigo-700 text-white font-bold text-xl py-3 px-4 flex justify-between items-center">
                        <h3>Modal {forms && <p>FOrm</p>}</h3>

                        <button className='transition ease-in-out hover:scale-125 hover:rotate-180 duration-500 '>
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div> 

                    <div class="">
                        <div class="container mx-auto px-10 py-4">
                            <div>
                                <label className='block text-md'>Student Name</label>
                                <select class= "mt-1 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value="ward"></select>
                            </div>
                            <div>
                                <label className='block text-md mt-4'>College Name</label>
                                <select class= "mt-2 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value="ward"></select>
                            </div>
                            <div>
                                <label className='block text-md mt-4'>Program Name</label>
                                <select class= "mt-2 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value="ward"></select>
                            </div>
                            <div>
                                <label className='block text-md mt-4'>Course Name</label>
                                <select class= "mt-2 border-2 border-black rounded-md py-1 w-full focus:ring-0 focus:border-black" value="ward"></select>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end items-center gap-4 px-10 pb-4 pt-3">
                        <div >
                            <button class="text-gray-700 hover:text-gray-900 " onClick={onModal}>Cancel</button>
                        </div>
                        <div >
                            <button class="bg-indigo-700 py-1 px-8 rounded-md text-white hover:bg-indigo-600">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal