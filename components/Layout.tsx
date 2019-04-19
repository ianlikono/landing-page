import * as React from "react";
import Header from "./sections/Header/Header";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = props => (
  <div>
    <Header />
  </div>
);

export default Layout;
