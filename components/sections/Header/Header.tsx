import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import React, { useRef, useState } from "react";
import Dialog from "../Dialog/Dialog";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

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
  Wrapper,
  Error
} from "./headerStyles";
import validateEmail from "../../../utils/validateEmail";

const userSignUp = gql`
  mutation createUsersTable($createuserstableinput: CreateUsersTableInput!) {
    createUsersTable(input: $createuserstableinput) {
      id
      name
      email
    }
  }
`;

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
  const nameInput = useRef(null);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onRefButtonClicked = () => {
    nameInput.current.focus();
  };
  const onSignUpClicked = async sgnUpUser => {
    if (name.length <= 0) {
      setNameError(true);
    } else if (email.length <= 0) {
      setEmailError(true);
    } else {
      const valid = validateEmail(email);
      if (valid) {
        const response = await sgnUpUser({
          variables: {
            createuserstableinput: {
              name: name,
              email: email
            }
          }
        });
        setModalOpen(true);
        setEmail("");
        setName("");
      }
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onBlurEmail = () => {
    const valid = validateEmail(email);
    if (!valid) {
      setEmailError(true);
    }
  };

  const onEmailInputChange = e => {
    setEmailError(false);
    setEmail(e.target.value);
    const valid = validateEmail(email);
    if (!valid) {
      setEmailError(true);
    }
  };

  const onNameInputChange = e => {
    setNameError(false);
    setName(e.target.value);
  };
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
              <>
                <div role="button" onClick={onRefButtonClicked}>
                  <Fab
                    variant="extended"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                  >
                    <ButtonText>Sign Up For Preview</ButtonText>
                  </Fab>
                </div>
              </>
            ) : null}
          </ContentWrapper>
          <div>
            <Mutation mutation={userSignUp}>
              {(sgnUpUser, { loading, error }) => (
                <FormWrapper>
                  <FormHeader>
                    <FormHeaderParagraph>
                      It's Free For Life!!! Sign Up today and get notified once
                      we launch!
                    </FormHeaderParagraph>
                  </FormHeader>
                  <FormInput
                    onChange={e => onNameInputChange(e)}
                    value={name}
                    name="name"
                    ref={nameInput}
                    placeholder="Enter Name"
                  />
                  {nameError ? <Error>Please Enter your Name</Error> : null}
                  <FormInput
                    onChange={e => onEmailInputChange(e)}
                    value={email}
                    name="email"
                    onBlur={onBlurEmail}
                    error={emailError}
                    placeholder="Enter Email Address"
                  />
                  {emailError ? (
                    <Error>Please Enter a Valid Email</Error>
                  ) : null}
                  <>
                    <div
                      role="button"
                      onClick={() => onSignUpClicked(sgnUpUser)}
                    >
                      <Fab
                        disabled={loading}
                        variant="extended"
                        color="primary"
                        aria-label="Add"
                        className={classes.margin}
                      >
                        <ButtonText>Sign Up for preview</ButtonText>
                      </Fab>
                      <Dialog open={modalOpen} close={closeModal} />
                    </div>
                  </>
                </FormWrapper>
              )}
            </Mutation>
          </div>
        </Sections>
      </Wrapper>
    </MainWrapper>
  );
};
export default withStyles(styles)(Header);
