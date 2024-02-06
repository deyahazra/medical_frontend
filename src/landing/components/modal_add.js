import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { TextField } from '@mui/material';
import { useHttpClient } from "../../shared/components/hooks/http-hook";
import { AuthContext } from '../../shared/context/auth-context';
import Swal from 'sweetalert2';


const Modal_Add = (props) =>  {

    const [patientEmail, setPatientEmail] = useState('');
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const handlePatientEmailChange = (event) => {
        setPatientEmail(event.target.value);
        };
    const handleApi = async () => {
        try {
            const formData = new FormData();
            formData.append('patientEmail', patientEmail);
            formData.append('doctorId', `${auth.userId}`);
            await sendRequest(
                `https://med-deatils-api.onrender.com/api/details/doctors/add_patient`,
                'POST',
                formData,
                {
                    Authorization: `Bearer ${auth.token}`
                }
                );
                Swal.fire({
                    title: 'Success!',
                    text: 'Patient added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                    })
            props.setOpen(false);
            } catch (err) {
                console.log(err);
                }
        };
    

        // props.setOpen(false)    

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={props.cancelButtonRef} onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Add Patient and Doctor details
                      </Dialog.Title>
                      <div className="mt-2">
                    <TextField
                        label="Patient Email ID"
                        variant="outlined"
                        value={patientEmail}
                        onChange={handlePatientEmailChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleApi}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => props.setOpen(false)}
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
  )
}
export default Modal_Add;
