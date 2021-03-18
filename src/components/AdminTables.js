import * as React from 'react';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditRoleModal from "./admin-forms/EditRoleModal";
import EditPositionModal from "./admin-forms/EditPositionModal";
import EditDepartmentModal from "./admin-forms/EditDepartmentModal";
import EditProjectBiddingModal from "./admin-forms/EditProjectBiddingModal";
import EditPortalMasterModal from "./admin-forms/EditPortalMasterModal";
import Title from './Title';
import { SortByAlphaRounded } from '@material-ui/icons';

function preventDefault(event) {
  event.preventDefault();
}

export default function AdminTables(props) {
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

      {creatingProject && (props.activeSection.name === "Role") &&
        <EditRoleModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Position") &&
        <EditPositionModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Department") &&
        <EditDepartmentModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Project Bidding") &&
        <EditProjectBiddingModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }

      {creatingProject && (props.activeSection.name === "Portal Master") &&
        <EditPortalMasterModal section={props.activeSection.name} onDone={() => setCreatingProject(false)} />
      }
    </React.Fragment>
  );
}