import React from "react";
import HeroSection from "./../components/HeroSection";
import SignInSide from "./../components/SignInSide";

function IndexPage(props) {
  return (
    <SignInSide
      title="Login Credentials"
      subtitle=""
      headerSize={5}
      textAlign="center"
      bgColor="default"
      size="medium"
      bgImage=""
      bgImageOpacity={1}
    />
  );
}

export default IndexPage;