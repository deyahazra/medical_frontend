import React,{useState} from "react";
import { Container, TextField } from "@mui/material";
import "./patients.css"
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const stats = [
  { id: 1, name: 'No of patients this week', value: '44' },
  { id: 2, name: 'No of new Patients', value: '20' },
  { id: 3, name: 'Busiest day', value: 'Wednesday' },
]  
const Patients = () => {
    const [people, setPeople] = useState ([
        {
          id:1,
          name: 'Leslie Alexander',
          Age: '25',
          Gender:'F',
          Date: '2023-01-23',
          note: '',
          expanded: false,
        },
        {
            id:2,
            name: 'Leslie Alexander',
            Age: '25',
            Gender:'F',
            Date: '2023-01-23',
            note: '',
            expanded: false,
          },
          {
            id:3,
            name: 'Leslie Alexander',
            Age: '25',
            Gender:'F',
            Date: '2023-01-23',
            note: '',
            expanded: false,
          },
          {
            id:4,
            name: 'Leslie Alexander',
            Age: '25',
            Gender:'F',
            Date: '2023-01-23',
            note: '',
            expanded: false,
          },
          {
            id:5,
            name: 'Leslie Alexander',
            Age: '25',
            Gender:'F',
            Date: '2023-01-23',
            note: '',
            expanded: false,
          },
        
      ]);
    const handleViewMoreClick = (index) => {
        setPeople((prevPeople) =>
          prevPeople.map((person, i) =>
            i === index ? { ...person, expanded: !person.expanded } : person
          )
        );
      };
      const handleNoteChange = (event, index) => {
        setPeople((prevPeople) =>
          prevPeople.map((person, i) =>
            i === index ? { ...person, note: event.target.value } : person
          )
        );
      };
    return (
        <div>
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <TextField type="search" id="search" label="Search" sx={{ width: 800 }} />
        </Container>
        
        <div>
          <ul role="list" className="divide-y divide-gray-100 mt-20 ml-20 mr-20">
            {people.map((person, index) => (
              <li key={person.email} className="patientcard flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-lg font-semibold leading-6 text-gray-900">{person.name}</p>
                    <p className="mt-10 text-lg leading-5 text-gray-500">{person.Gender}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-lg leading-6 text-gray-900">Age: {person.Age}</p>
                  <div className="mt-1 text-sm leading-5 text-gray-500">Last Date: {person.Date}</div>
                  <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleViewMoreClick(index)}>
                    {person.expanded ? 'View Less' : 'View More'}
                  </button>
                  
                  {person.expanded && (
                    <li style={{ height: 'auto' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p className="mt-2 text-sm leading-5 text-gray-500">Notes:</p>
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '0.25rem' }}>
                            <input className="mr-20 mt-3 px-3 py-2" type="text" value={person.note} onChange={(event) => handleNoteChange(event, index)} placeholder="Add a note" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', flex: 1 }} />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Save</button>
                        </div>
                        <div className="ml-20 mt-3 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <Link to={`/patients_profile/${person.id}`}>Open Profile</Link>
                        </div>
                    </div>
                    </li>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 pagi">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
            <span className="font-medium">10</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
      </div>
    )
}
export default Patients;