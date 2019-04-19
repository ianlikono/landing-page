import * as React from "react";
import { Wrapper } from "./styles";

type Props = {
  title?: string;
};

const Header: React.FunctionComponent<Props> = props => (
  <Wrapper>
    <h3>Header</h3>
  </Wrapper>
);

export default Header;