import React from "react";
import HeroSection from "./../components/HeroSection";

function IndexPage(props) {
  return (
    <HeroSection
      bgColor="primary"
      size="large"
      bgImage="https://source.unsplash.com/FyD3OWBuXnY/1600x800"
      bgImageOpacity={0.2}
      title="We help you make money"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
    />
  );
}

export default IndexPage;
