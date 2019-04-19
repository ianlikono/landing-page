import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import * as React from "react";
import {
  ButtonText,
  ContentWrapper,
  FormHeader,
  FormHeaderParagraph,
  FormInput,
  FormWrapper,
  HeaderH1,
  Logo,
  MainWrapper,
  SecondaryParagraph,
  SecondaryText,
  Sections,
  Wrapper
} from "./headerStyles";

type Props = {
  classes: any;
};
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

const Header: React.FunctionComponent<Props> = props => {
  const { classes } = props;
  const matches = useMediaQuery("(min-width:1220.5px)");
  return (
    <MainWrapper>
      <Wrapper>
        <Logo />
        <Sections>
          <ContentWrapper>
            <HeaderH1>ECOMMERCE REIMAGINED!</HeaderH1>
            <SecondaryText>
              <SecondaryParagraph>
                Start your online business free with no capital or risk
                investment and make your dreams come true.
              </SecondaryParagraph>
            </SecondaryText>
            {matches ? (
              <Fab
                variant="extended"
                color="primary"
                aria-label="Add"
                className={classes.margin}
              >
                <ButtonText>Sign Up For Preview</ButtonText>
              </Fab>
            ) : null}
          </ContentWrapper>
          <div>
            <FormWrapper>
              <FormHeader>
                <FormHeaderParagraph>
                  It's Free For Life!!! Sign Up today and get notified once we
                  launch!
                </FormHeaderParagraph>
              </FormHeader>
              <FormInput placeholder="Enter Name" />
              <FormInput placeholder="Enter Email Address" />
              <Fab
                variant="extended"
                color="primary"
                aria-label="Add"
                className={classes.margin}
              >
                <ButtonText>Sign Up For Preview</ButtonText>
              </Fab>
            </FormWrapper>
          </div>
        </Sections>
      </Wrapper>
    </MainWrapper>
  );
};
export default withStyles(styles)(Header);
