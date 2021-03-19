import * as React from 'react';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditInfoModal from "./employee-forms/EditInfoModal";
import EditEducationModal from "./employee-forms/EditEducationModal";
import EditDependentsModal from "./employee-forms/EditDependentsModal";
import EditExperienceModal from "./employee-forms/EditExperienceModal";
import EditLeaveApplicationsModal from "./employee-forms/EditLeaveApplicationsModal";
import Title from './Title';
import { SortByAlphaRounded } from '@material-ui/icons';

function preventDefault(event) {
  event.preventDefault();
}

export default function EmployeeTables(props) {
  const [creatingProject, setCreatingProject] = React.useState(false);
  
  const [updatingProjectId, setUpdatingProjectId] = React.useState(null);

  console.info(props)
  return (
    <React.Fragment>
      <div className="display-flex">
        <Title>{props.activeSection.name} Details</Title>
        <Button 
          variant="contained"
          size="medium"
          color="primary"
          onClick={() => setCreatingProject(true)}
        >+ Add</Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            {props.activeSection.headCells && 
              props.activeSection.headCells
              .map(cell => (
                <TableCell align="center">{cell.name}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data &&
            props.data.length !== 0 ? 
            props.data
            .filter(role => role.section === props.activeSection.name)
            .map((row) => (
              <TableRow key={row.id}>
                {/* HR/PERSONAL INFORMATION */}
                {row.section === "Personal Information" &&
                <>
                  <TableCell>{row.firstName && row.firstName}</TableCell>
                  <TableCell>{row.middleName && row.middleName}</TableCell>
                  <TableCell>{row.lastName && row.lastName}</TableCell>
                  <TableCell>{row.gender && row.gender}</TableCell>
                  <TableCell>{row.contact && row.contact}</TableCell>
                  <TableCell>{row.email && row.email}</TableCell>
                  <TableCell>{row.pan && row.pan}</TableCell>
                </>
                }
                {/* HR/EDUCATION */}
                {row.section === "Education" &&
                <>
                  <TableCell>{row.school && row.school}</TableCell>
                  <TableCell>{row.degree && row.degree}</TableCell>
                  <TableCell>{row.grade && row.grade}</TableCell>
                </>
                }
                {/* HR/DEPENDENTS */}
                {row.section === "Dependents" &&
                <>
                  <TableCell>{row.name && row.name}</TableCell>
                  <TableCell>{row.relationship && row.relationship}</TableCell>
                  <TableCell>{row.dob && row.dob}</TableCell>
                </>
                }
                {/* HR/WORK EXPERIENCE */}
                {row.section === "WorkExp" &&
                <>
                  <TableCell>{row.company && row.company}</TableCell>
                  <TableCell>{row.designation && row.designation}</TableCell>
                  <TableCell>{row.fromDate && row.fromDate}</TableCell>
                </>
                }
                {/* HR/LEAVE APPLICATION */}
                {row.section === "Leave Application" &&
                <>
                  <TableCell>{row.leaveType && row.leaveType}</TableCell>
                  <TableCell>{row.fromDate && row.fromDate}</TableCell>
                  <TableCell>{row.toDate && row.toDate}</TableCell>
                  <TableCell>{row.leaveReason && row.leaveReason}</TableCell>
                </>
                }
              </TableRow>
            )) :
            "Sorry, no data available at this time."
          }
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>

      {creatingProject && (props.activeSection.name === "Personal Information") &&
        <EditInfoModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Education") &&
        <EditEducationModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Dependents") &&
        <EditDependentsModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "WorkExp") &&
        <EditExperienceModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Leave Application") &&
        <EditLeaveApplicationsModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }
    </React.Fragment>
  );
}