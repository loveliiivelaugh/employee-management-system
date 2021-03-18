import React from 'react';
//components
import AdminTables from "./AdminTables";
//material-ui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//utilites
import { useAuth } from "./../util/auth.js";
import { 
  useRolesByOwner, 
  usePositionsByOwner, 
  useDepartmentsByOwner, 
  useProjectBiddingsByOwner, 
  usePortalMastersByOwner, 
} from './../util/db';

const AdminDashboard = ({ sections }) => {
  const auth = useAuth();
  const [activeSection, setActiveSection] = React.useState(sections[0]);

  const { 
    data: roleData, 
    status: roleStatus, 
    error: roleError 
  } = useRolesByOwner(auth.user.uid);

  const { 
    data: positionData, 
    status: positionStatus, 
    error: positionError 
  } = usePositionsByOwner(auth.user.uid);
  
  const { 
    data: departmentData, 
    status: departmentStatus, 
    error: departmentError 
  } = useDepartmentsByOwner(auth.user.uid);

  const { 
    data: projectBiddingData, 
    status: projectBiddingStatus, 
    error: projectBiddingError 
  } = useProjectBiddingsByOwner(auth.user.uid);

  const { 
    data: portalMasterData, 
    status: portalMasterStatus, 
    error: portalMasterError 
  } = usePortalMastersByOwner(auth.user.uid);

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
          {activeSection.name === "Role" &&
            <AdminTables 
              activeSection={activeSection}
              data={roleData}
            />
          }
          {activeSection.name === "Position" &&
            <AdminTables 
              activeSection={activeSection}
              data={positionData}
            />
          }
          {activeSection.name === "Department" &&
            <AdminTables 
              activeSection={activeSection}
              data={departmentData}
            />
          }
          {activeSection.name === "Project Bidding" &&
            <AdminTables 
              activeSection={activeSection}
              data={projectBiddingData}
            />
          }
          {activeSection.name === "Portal Master" &&
            <AdminTables 
              activeSection={activeSection}
              data={portalMasterData}
            />
          }
        </Grid>
      </Grid>
  )
}

export default AdminDashboard;