import * as React from 'react';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditUsersModal from "./hr-forms/EditUsersModal";
import EditSalariesModal from "./hr-forms/EditSalariesModal";
import EditAllDepartmentsModal from "./hr-forms/EditAllDepartmentsModal";
import EditAllLeaveApplicationsModal from "./hr-forms/EditAllLeaveApplicationsModal";
import EditCompaniesModal from "./hr-forms/EditCompaniesModal";
import EditAllRolesModal from "./hr-forms/EditAllRolesModal";
import EditAllPositionsModal from "./hr-forms/EditAllPositionsModal";
import EditCountriesModal from "./hr-forms/EditCountriesModal";
import EditStatesModal from "./hr-forms/EditStatesModal";
import EditCitiesModal from "./hr-forms/EditCitiesModal";
import Title from './Title';
import { SortByAlphaRounded } from '@material-ui/icons';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {
  const [creatingProject, setCreatingProject] = React.useState(false);
  
  const [updatingProjectId, setUpdatingProjectId] = React.useState(null);

  console.info(creatingProject, props.activeSection.name, props.data)
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
            .filter(role => 
              ( role.section === props.activeSection.name ))
            .map((row) => (
              <TableRow key={row.id}>

                {/* HR/USERS */}
                {row.section === "User" &&
                <>
                  <TableCell>{row.company && row.company }</TableCell>
                  <TableCell>{row.email && row.email }</TableCell>
                  <TableCell>{row.accounts && row.accounts }</TableCell>
                  <TableCell>{row.firstName && row.firstName }</TableCell>
                  <TableCell>{row.middleName && row.middleName }</TableCell>
                  <TableCell>{row.lastName && row.lastName }</TableCell>
                  <TableCell>{row.number && row.number }</TableCell>
                  <TableCell>{row.role && row.role }</TableCell>
                  <TableCell>{row.position && row.position }</TableCell>
                  <TableCell>{row.department && row.department }</TableCell>
                  <TableCell>{row.jobDate && row.jobDate }</TableCell>
                </>
                }
                {/* HR/SALARY */}
                {row.section === "Salary" &&
                <>
                  <TableCell>{row.employeeName && row.employeeName}</TableCell>
                  <TableCell>{row.salary && row.salary}</TableCell>
                  <TableCell>{row.bankName && row.bankName}</TableCell>
                  <TableCell>{row.accountNo && row.accountNo}</TableCell>
                  <TableCell>{row.accountHolder && row.accountHolder}</TableCell>
                  <TableCell>{row.ifsc && row.ifsc}</TableCell>
                  <TableCell>{row.taxDeduction && row.taxDeduction}</TableCell>
                </>
                }
                {/* HR/LEAVE APPLICATION */}
                {row.section === "Leave Application" &&
                <>
                  <TableCell>{row.empCode && row.empCode}</TableCell>
                  <TableCell>{row.name && row.name}</TableCell>
                  <TableCell>{row.leaveType && row.leaveType}</TableCell>
                  <TableCell>{row.from && row.from}</TableCell>
                  <TableCell>{row.to && row.to}</TableCell>
                  <TableCell>{row.ifsc && row.ifsc}</TableCell>
                  <TableCell>{row.leaveReason && row.leaveReason}</TableCell>
                  <TableCell>{row.status && row.status}</TableCell>
                </>
                }
                {/* HR/COMPANY */}
                {row.section === "Company" &&
                <>
                  <TableCell>{row.company && row.company}</TableCell>
                  <TableCell>{row.address && row.address}</TableCell>
                  <TableCell>{row.country && row.country}</TableCell>
                  <TableCell>{row.state && row.state}</TableCell>
                  <TableCell>{row.city && row.city}</TableCell>
                  <TableCell>{row.postal && row.postal}</TableCell>
                  <TableCell>{row.website && row.website}</TableCell>
                  <TableCell>{row.email && row.email}</TableCell>
                  <TableCell>{row.contactName && row.contactName}</TableCell>
                  <TableCell>{row.contactNo && row.contactNo}</TableCell>
                  <TableCell>{row.fax && row.fax}</TableCell>
                  <TableCell>{row.panNo && row.panNo}</TableCell>
                </>
                }
                {/* HR/ROLE */}
                {row.section === "Role" &&
                <>
                  <TableCell>{row.company && row.company}</TableCell>
                  <TableCell>{row.role && row.role}</TableCell>
                </>
                }
                {/* HR/POSITION */}
                {row.section === "Position" &&
                <>
                  <TableCell>{row.company && row.company}</TableCell>
                  <TableCell>{row.position && row.position}</TableCell>
                </>
                }
                {/* HR/DEPARTMENETS */}
                {row.section === "Department" &&
                <>
                  <TableCell>{row.company && row.company}</TableCell>
                  <TableCell>{row.position && row.position}</TableCell>
                </>
                }
                {/* HR/COUNTRIES */}
                {row.section === "Country" &&
                <>
                  <TableCell>{row.company && row.company}</TableCell>
                  <TableCell>{row.position && row.position}</TableCell>
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

      {creatingProject && (props.activeSection.name === "User") &&
        <EditUsersModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Salary") &&
        <EditSalariesModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Leave Application") &&
        <EditAllLeaveApplicationsModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Company") &&
        <EditCompaniesModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Role") &&
        <EditAllRolesModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Position") &&
        <EditAllPositionsModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Department") &&
        <EditAllDepartmentsModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Country") &&
        <EditCountriesModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "State") &&
        <EditStatesModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "City") &&
        <EditCitiesModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }
    </React.Fragment>
  );
}