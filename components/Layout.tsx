import * as React from "react";
import FeaturesSection from "./sections/features/Features";
import Footer from "./sections/footer/Footer";
import Header from "./sections/Header/Header";
import { Wrapper } from "./styles";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = props => (
  <Wrapper>
    <Header />
    <FeaturesSection />
    <Footer />
  </Wrapper>
);

export default Layout;
