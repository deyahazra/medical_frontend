import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import logo from "../../images/Logo.png"
import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faChartLine,faHospitalUser ,faCalendarCheck,faWandMagicSparkles, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 270;

export default function PermanentDrawerLeft(props) {
  const [activeButton, setActiveButton] = React.useState('');
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    props.getActiveButton(buttonName);
  };
  return (
      <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#e5ebeb",
          color: "red",
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          overflow: 'hidden'
        }
      }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        >
    
        <img className='image' src={logo} alt="Image description" />
        <Divider />
        <button className={`sidebuttons ${activeButton === 'Profile' ? 'active' : ''}`} onClick={() => handleButtonClick('Profile')}>
        <FontAwesomeIcon icon={faUser} style={{marginRight: '2rem',color: "#27ae60",}} />
          <span>Profile</span>
        </button>
        <button className={`sidebuttons ${activeButton === 'Dashboard' ? 'active' : ''}`} onClick={() => handleButtonClick('Dashboard')}>
        <FontAwesomeIcon icon={faChartLine} style={{ marginRight: '1.7rem' ,color: "#27ae60"}} />
          <span>Dashboard</span>
        </button>
        <Divider />
        <button className={`sidebuttons ${activeButton === 'Patients' ? 'active' : ''}`} onClick={() => handleButtonClick('Patients')}>
        <FontAwesomeIcon icon={faHospitalUser} style={{ marginRight: '1.7rem' ,color: "#27ae60"}}/>
          <span>Patients</span>
        </button>
        <button className={`sidebuttons ${activeButton === 'Appointments' ? 'active' : ''}`} onClick={() => handleButtonClick('Appointments')}>
        <FontAwesomeIcon icon={faCalendarCheck} style={{ marginRight: '2rem' ,color: "#27ae60"}} />
          <span>Appointments</span>
        </button>
        <button className={`sidebuttons ${activeButton === 'Magic AI' ? 'active' : ''}`} onClick={() => handleButtonClick('Magic AI')}>
        <FontAwesomeIcon icon={faWandMagicSparkles} style={{ marginRight: '1.6rem' ,color: "#27ae60"}}/>
          <span>Magic AI</span>
          </button>
        <button className='sidebuttons'style={{ position: 'absolute', bottom: '0', left: '0', right: '0' ,marginBottom:'1rem' }}>
        <FontAwesomeIcon icon={faRightFromBracket} style={{ marginRight: '1.6rem' ,color: "#27ae60"}}/>
          <span>Logout</span>
          </button>
      </Drawer>
  );
}