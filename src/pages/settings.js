import React from "react";
import Navbar from "./../components/Navbar";
import SettingsSection from "./../components/SettingsSection";
import { useRouter } from "./../util/router.js";
import { requireAuth } from "./../util/auth.js";

function SettingsPage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="default"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
      <SettingsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        section={router.query.section}
        key={router.query.section}
      />
    </>
  );
}

export default requireAuth(SettingsPage);
