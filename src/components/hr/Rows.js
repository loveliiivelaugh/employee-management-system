
import TableCell from '@material-ui/core/TableCell';

export const HrUsersRow = ({ row }) => {
  return (
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
  )
}

export const HrSalaryRow = ({ row }) => {
  return (
    <>
      <TableCell>{row.employeeName && row.employeeName}</TableCell>
      <TableCell>{row.salary && row.salary}</TableCell>
      <TableCell>{row.bankName && row.bankName}</TableCell>
      <TableCell>{row.accountNo && row.accountNo}</TableCell>
      <TableCell>{row.accountHolder && row.accountHolder}</TableCell>
      <TableCell>{row.ifsc && row.ifsc}</TableCell>
      <TableCell>{row.taxDeduction && row.taxDeduction}</TableCell>
    </>
  )
}

export const HrLeaveApplicationRow = ({ row }) => {
  return (
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
  )
}

export const HrCompanyRow = ({ row }) => {
  return (
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
  )
}

{/* HR/ROLE */}
export const HrRoleRow = ({ row }) => {
  return (
    <>
      <TableCell>{row.company && row.company}</TableCell>
      <TableCell>{row.role && row.role}</TableCell>
    </>
  )
}

{/* HR/POSITION */}
export const HrPositionRow = ({ row }) => {
  return (
    <>
      <TableCell>{row.company && row.company}</TableCell>
      <TableCell>{row.position && row.position}</TableCell>
    </>
  )
}
{/* HR/DEPARTMENETS */}
export const HrDepartmentsRow = ({ row }) => {
  return (
    <>
      <TableCell>{row.company && row.company}</TableCell>
      <TableCell>{row.position && row.position}</TableCell>
    </>
  )
}
{/* HR/COUNTRIES */}
export const HrCountriesRow = ({ row }) => {
  return (
    <>
      <TableCell>{row.country && row.country}</TableCell>
    </>
  )
}
{/* HR/STATE */}
export const HrStatesRow = ({ row }) => {
  return (
    <>
      <TableCell>{row.country && row.country}</TableCell>
      <TableCell>{row.state && row.state}</TableCell>
    </>
  )
}
{/* HR/CITIES */}
export const HrCitiesRow = ({ row }) => {
  return (
    <>
      <TableCell>{row.country && row.country}</TableCell>
      <TableCell>{row.state && row.state}</TableCell>
      <TableCell>{row.city && row.city}</TableCell>
    </>
  )
}