import React from "react";
import AuthSection from "./../components/AuthSection";
import Navbar from "./../components/Navbar";
import { useRouter } from "./../util/router.js";

function AuthPage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="default"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
      <AuthSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        type={router.query.type}
        providers={["google", "facebook", "twitter"]}
        afterAuthPath={router.query.next || "/dashboard"}
      />
    </>
  );
}

export default AuthPage;
