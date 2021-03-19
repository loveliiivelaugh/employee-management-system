import React from 'react';
//components
import HrTables from "./HrTables";
//material-ui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//utilites
import { useAuth } from "../util/auth.js";
import { 
  useUsersByOwner, 
  useSalariesByOwner, 
  useAllLeaveApplicationsByOwner, 
  useCompaniesByOwner,
  useAllRolesByOwner, 
  useAllPositionsByOwner,
  useAllDepartmentsByOwner, 
  useCountriesByOwner, 
  useStatesByOwner, 
  useCitiesByOwner, 
} from '../util/db';

const AdminDashboard = ({ sections }) => {
  const auth = useAuth();
  const [activeSection, setActiveSection] = React.useState(sections[0]);

  const { 
    data: usersData, 
    status: usersStatus, 
    error: usersError 
  } = useUsersByOwner(auth.user.uid);

  const { 
    data: salariesData, 
    status: salarieStatus, 
    error: salariesError 
  } = useSalariesByOwner(auth.user.uid);
  
  const { 
    data: leaveApplicationsData, 
    status: leaveApplicationsStatus, 
    error: leaveApplicationsError 
  } = useAllLeaveApplicationsByOwner(auth.user.uid);

  const { 
    data: companiesData, 
    status: companiesStatus, 
    error: companiesError 
  } = useCompaniesByOwner(auth.user.uid);

  const { 
    data: rolesData, 
    status: rolesStatus, 
    error: rolesError 
  } = useAllRolesByOwner(auth.user.uid);
  
  const { 
    data: positionsData, 
    status: positionsStatus, 
    error: positionsError 
  } = useAllPositionsByOwner(auth.user.uid);
  
  const { 
    data: departmentsData, 
    status: departmentsStatus, 
    error: departmentsError 
  } = useAllDepartmentsByOwner(auth.user.uid);
  
  const { 
    data: countriesData, 
    status: countriesStatus, 
    error: countriesError 
  } = useCountriesByOwner(auth.user.uid);
  
  const { 
    data: statesData, 
    status: statesStatus, 
    error: statesError 
  } = useStatesByOwner(auth.user.uid);
  
  const { 
    data: citiesData, 
    status: citiesStatus, 
    error: citiesError 
  } = useCitiesByOwner(auth.user.uid);

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
          {activeSection.name === "User" &&
            <HrTables 
              activeSection={activeSection}
              data={usersData}
            />
          }
          {activeSection.name === "Salary" &&
            <HrTables 
              activeSection={activeSection}
              data={salariesData}
            />
          }
          {activeSection.name === "Leave Application" &&
            <HrTables 
              activeSection={activeSection}
              data={leaveApplicationsData}
            />
          }
          {activeSection.name === "Company" &&
            <HrTables 
              activeSection={activeSection}
              data={companiesData}
            />
          }
          {activeSection.name === "Role" &&
            <HrTables 
              activeSection={activeSection}
              data={rolesData}
            />
          }
          {activeSection.name === "Position" &&
            <HrTables 
              activeSection={activeSection}
              data={positionsData}
            />
          }
          {activeSection.name === "Department" &&
            <HrTables 
              activeSection={activeSection}
              data={departmentsData}
            />
          }
          {activeSection.name === "Country" &&
            <HrTables 
              activeSection={activeSection}
              data={countriesData}
            />
          }
          {activeSection.name === "State" &&
            <HrTables 
              activeSection={activeSection}
              data={statesData}
            />
          }
          {activeSection.name === "City" &&
            <HrTables 
              activeSection={activeSection}
              data={citiesData}
            />
          }
        </Grid>
      </Grid>
  )
}

export default AdminDashboard;