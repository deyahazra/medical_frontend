import React,{useState} from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../pages/patients_profile.css"
import Webcam from 'react-webcam';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePrescription } from '@fortawesome/free-solid-svg-icons'
import { useHttpClient } from "../../shared/components/hooks/http-hook";
import { AuthContext } from '../../shared/context/auth-context';
const Modal_patients = (props) => {
  const webcamRef = useRef(null)
    return (
        <div>
        <Transition.Root show={props.openModal} as={Fragment}>
        <Dialog as="div" className=" relative z-10" initialFocus={props.cancelButtonRef} onClose={props.setOpenModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className=" fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  w-full h-full">
  
                <div className=" flex min-h-screen items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FontAwesomeIcon icon={faFilePrescription} />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-green-500 ">
                        {props.data}
                      </Dialog.Title>
                      <div className="mt-2" style={{ height: '100%' }}>
                       
                      <Webcam 
                          width='640px'
                          height='480px'
                          id="webcam"
                          ref={webcamRef}
                          style={{
                            position: 'absolute',
                            left: 120,
                            top: 100,
                            padding: '0px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => props.setOpenModal(false)}
                    ref={props.cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
              
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
        </div>
    )
}
export default Modal_patients;