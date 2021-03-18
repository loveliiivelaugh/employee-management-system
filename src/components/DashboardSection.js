import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
//components
import AdminDashboard from './AdminDashboard';
import EmployeeDashboard from './EmployeeDashboard';
import HrDashboard from './HrDashboard';
//data
import { ownerSections, employeeSections, hrSections } from './../data/sections';
//utilites
import { useRouter } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(3),
  },
}));

function DashboardSection(props) {
  const classes = useStyles();
  const auth = useAuth();
  const router = useRouter();

  const sections = 
    (auth.user.role === "owner" || auth.user.role === "admin" ) ? ownerSections :
    auth.user.role === "employee" ? employeeSections :
    auth.user.role === "hr" ? hrSections :
    [];
  

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {router.query.paid && auth.user.planIsActive && (
          <Box mx="auto" mb={4} maxWidth={400}>
            <Alert severity="success">
              You are now subscribed to the {auth.user.planId} plan
              <span
                role="img"
                aria-label="party"
                style={{ marginLeft: "10px" }}
              >
                🥳
              </span>
            </Alert>
          </Box>
        )}

        {auth.user.role === "admin" || auth.user.role === "owner" && <AdminDashboard sections={sections} /> }
        {auth.user.role === "hr" && <HrDashboard sections={sections}  /> }
        {auth.user.role === "employee" && <EmployeeDashboard sections={sections}  /> }

        

      </Container>
    </Section>
  );
}

export default DashboardSection;
