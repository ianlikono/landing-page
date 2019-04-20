import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import {
  ButtonText,
  CopyRight,
  FormHeader,
  FormHeaderParagraph,
  FormInput,
  FormWrapper,
  MainWrapper,
  Wrapper
} from "./style";

type Props = {
  classes: any;
};

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

const Footer: React.FunctionComponent<Props> = props => {
  const { classes } = props;
  return (
    <MainWrapper>
      <Wrapper>
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
        <CopyRight>&copy;agoraexpo 2019</CopyRight>
      </Wrapper>
    </MainWrapper>
  );
};

export default withStyles(styles)(Footer);
