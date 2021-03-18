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

  console.info(creatingProject, props.activeSection.name)
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
                <TableCell>{row.title ? row.title : "--"}</TableCell>
                <TableCell>{row.company ? row.company : "--"}</TableCell>
                <TableCell>{row.name ? row.name : "--"}</TableCell>
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