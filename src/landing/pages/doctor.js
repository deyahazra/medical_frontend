
import React, { useState } from "react";
import PermanentDrawerLeft from "../components/sidebar";
import "./doctor.css"
import Profile from "../components/profile";
import Patients from "../components/patients";

const Doctors = () => {
    const [activeButton, setActiveButton] = React.useState('');
    const getActiveButton = (activeButton) => {
        setActiveButton(activeButton);
        console.log(activeButton);
    }
    return (
        <div>
        <div>
        <PermanentDrawerLeft className="sidebar" getActiveButton={getActiveButton} />
        </div>
        <div className="content">
         {activeButton === '' ? <div><Profile/></div> : null}   
        {activeButton === 'Profile' ? <div><Profile/></div> : null}
        {activeButton === 'Dashboard' ? <div>Dashboard</div> : null}
        {activeButton === 'Patients' ? <div><Patients/></div> : null}
        {activeButton === 'Appointments' ? <div>Appointments</div> : null}
        {activeButton === 'Magic AI' ? <div>Magic AI</div> : null}
        </div>
        </div>
    )
}
export default Doctors;
