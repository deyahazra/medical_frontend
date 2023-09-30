import React,{useState} from "react";
import 'react-awesome-slider/dist/styles.css';
import "./patients_profile.css"
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import { Fragment, useRef} from 'react'
import Modal_patients from "../components/Modal_Patients";
const PatientsProfile = () => {
    const [openModal, setOpenModal] = useState(false)
    const cancelButtonRef = useRef(null)
    const [data, setData] = useState("")
    const Presp = () => {
        setOpenModal(true)
        setData("Previous prescription")
    }
    const Report = () => {
      setOpenModal(true)
      setData("Previous Report")
  }
    return (
    <div className="pg"style={{ borderRadius: '16px' }}>
        <div className="flex justify-center items-start overflow-hidden">
        <img
          className="h-40 w-40 rounded-full ring-2 ring-white mt-20"
          src={
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
          alt="Patient image"
        />
        </div>
        <div className="ml-5 mr-5 mt-5 mb-5 shadow-lg rounded-lg overflow-hidden p-4">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Sex</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Female</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Age</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">20</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Height</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">5.5 feet</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Weight</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">56 kg</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Last Appointments</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ul className="list-disc pl-5">
                <li>January 1, 2022</li>
                <li>February 15, 2022</li>
                <li>March 22, 2022</li>
              </ul>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          </dl>
        </div>
        <div className="flex justify-center">
        <button onClick={Presp} className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Prescription
        </button>
        <button onClick={Report} className="ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Reports
        </button>
      </div>
      <Modal_patients openModal={openModal} setOpenModal={setOpenModal} cancelButtonRef={cancelButtonRef} data={data}/>
    </div>
    )
}
export default PatientsProfile;