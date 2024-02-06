import React,{useState,useEffect,useContext} from "react";
import 'react-awesome-slider/dist/styles.css';
import "./patients_profile.css"
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import { Fragment, useRef} from 'react'
import Modal_patients from "../components/Modal_Patients";
import { useHttpClient } from "../../shared/components/hooks/http-hook";
import { AuthContext } from '../../shared/context/auth-context';
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
const PatientsProfile = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const params = useParams();
    const userId = params.patient_id;
    const [openModal, setOpenModal] = useState(false)
    const cancelButtonRef = useRef(null)
    const [data, setData] = useState("")
    const [images, setImages] = useState([])
    const Presp = async () => {
        setOpenModal(true)
        setData("Previous prescription")
        try {
          const formData = new FormData();
          formData.append('patientId', userId);
          formData.append('doctorId', `${auth.userId}`);
          const Response= await sendRequest(
            `https://med-deatils-api.onrender.com/api/details/doctors/get_prescriptions`,
            'POST',
            formData,
            {
              Authorization: `Bearer ${auth.token}`,
            }
          );
          setImages(Response);
          console.log(Response);
          console.log("Success");
        } catch (err) {
          console.log(err);
        }
  }
    const Report = () => {
      setOpenModal(true)
      setData("Previous Report")
  }
  useEffect(() => {
    const addPatient = async () => {
      try {
        const formData = new FormData();
        formData.append('patientId', userId);
        formData.append('doctorId', `${auth.userId}`);
        const Response=await sendRequest(
          `https://med-deatils-api.onrender.com/api/details/doctors/getPatient`,
          'POST',
          formData,
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        setData(Response.patient);
        console.log(Response.patient);
        console.log("Success");
      } catch (err) {
        console.log(err);
      }
    };

    addPatient();
  }, []);

    return (
        <div>
          {isLoading && <LoadingSpinner asOverlay text="Fetching Your Patients..."/>}
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
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Sex</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.sex}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Age</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">20</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Height</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.height} cm</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 headtext">Weight</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.weight} kg</dd>
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
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.email}</dd>
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
    </div>
    )
}
export default PatientsProfile;