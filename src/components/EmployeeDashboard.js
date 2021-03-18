import React from 'react';
//components
import EmployeeTables from "./EmployeeTables";
//material-ui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//utilites
import { useAuth } from "../util/auth.js";
import { 
  useInfoByOwner, 
  useEducationByOwner, 
  useDependentsByOwner, 
  useExperienceByOwner, 
  useLeaveApplicationsByOwner, 
} from '../util/db';

const AdminDashboard = ({ sections }) => {
  const auth = useAuth();
  const [activeSection, setActiveSection] = React.useState(sections[0]);

  const { 
    data: infoData, 
    status: infoStatus, 
    error: infoError 
  } = useInfoByOwner(auth.user.uid);

  const { 
    data: educationData, 
    status: educationStatus, 
    error: educationError 
  } = useEducationByOwner(auth.user.uid);
  
  const { 
    data: dependentsData, 
    status: dependentsStatus, 
    error: dependentsError 
  } = useDependentsByOwner(auth.user.uid);

  const { 
    data: experienceData, 
    status: experienceStatus, 
    error: experienceError 
  } = useExperienceByOwner(auth.user.uid);

  const { 
    data: leaveAppData, 
    status: leaveAppStatus, 
    error: leaveAppError 
  } = useLeaveApplicationsByOwner(auth.user.uid);

  //function to find selected section by matching names
  const getSectionData = (activeSection) => {
    let i;
    for ( i = 0; i < sections.length; i++ ) {
      if ( activeSection === sections[i].name) {
        return sections[i];
      }
    }
  };

  const handleClick = (e, sectionName) => {
    e.preventDefault();
    const section = getSectionData(sectionName);
    setActiveSection(section);
  };
  
  return (
      <Grid container={true} spacing={4}>
        <Grid item={true} xs={12} md={4}>
          <header>
            <h3>{auth.user.role}</h3>
          </header>
          <ul>
            {sections ? sections.map((section, i) => (
              <li key={i}>
                <Button 
                  variant="text" 
                  className="btn" 
                  onClick={(e) => handleClick(e, section.name)}
                >
                  {section.name}
                </Button>
                </li>
            )) : "Your sections index will go here."}
          </ul>
        </Grid>
        <Grid item={true} xs={12} md={8}>
          {activeSection.name === "Personal Information" &&
            <EmployeeTables 
              activeSection={activeSection}
              data={infoData}
            />
          }
          {activeSection.name === "Education" &&
            <EmployeeTables 
              activeSection={activeSection}
              data={educationData}
            />
          }
          {activeSection.name === "Dependents" &&
            <EmployeeTables 
              activeSection={activeSection}
              data={dependentsData}
            />
          }
          {activeSection.name === "WorkExp" &&
            <EmployeeTables 
              activeSection={activeSection}
              data={experienceData}
            />
          }
          {activeSection.name === "Leave Application" &&
            <EmployeeTables 
              activeSection={activeSection}
              data={leaveAppData}
            />
          }
        </Grid>
      </Grid>
  )
}

export default AdminDashboard;