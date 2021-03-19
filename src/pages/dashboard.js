import React from "react";
import DashboardSection from "./../components/DashboardSection";
import Navbar from "./../components/Navbar";
import { requireAuth } from "./../util/auth.js";

function DashboardPage(props) {
  return (
    <>
      <Navbar
        color="default"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
      <DashboardSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Dashboard"
        subtitle=""
      />
    </>
  );
}

export default requireAuth(DashboardPage);
