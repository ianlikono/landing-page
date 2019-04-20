import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {
  ButtonText,
  CopyRight,
  FormHeader,
  FormHeaderParagraph,
  FormInput,
  FormWrapper,
  MainWrapper,
  Wrapper,
  Error
} from "./style";
import validateEmail from "../../../utils/validateEmail";

type Props = {
  classes: any;
};

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

const userSignUp = gql`
  mutation createUsersTable($createuserstableinput: CreateUsersTableInput!) {
    createUsersTable(input: $createuserstableinput) {
      id
      name
      email
    }
  }
`;

const Footer: React.FunctionComponent<Props> = props => {
  const { classes } = props;
  const [emailError, setEmailFooterError] = useState(false);
  const [nameFooterError, setNameFooterError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onSignUpClicked = async sgnUpUser => {
    if (name.length <= 0) {
      setNameFooterError(true);
    } else if (email.length <= 0) {
      setEmailFooterError(true);
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
      setEmailFooterError(true);
    }
  };

  const onEmailInputChange = e => {
    setEmailFooterError(false);
    setEmail(e.target.value);
    const valid = validateEmail(email);
    if (!valid) {
      setEmailFooterError(true);
    }
  };

  const onNameInputChange = e => {
    setNameFooterError(false);
    setName(e.target.value);
  };

  return (
    <MainWrapper>
      <Wrapper>
        <Mutation mutation={userSignUp}>
          {(sgnUpUser, { loading, error }) => (
            <FormWrapper>
              <FormHeader>
                <FormHeaderParagraph>
                  It's Free For Life!!! Sign Up today and get notified once we
                  launch!
                </FormHeaderParagraph>
              </FormHeader>
              <FormInput
                onChange={e => onNameInputChange(e)}
                value={name}
                name="name"
                placeholder="Enter Name"
              />
              {nameFooterError ? <Error>Please Enter your Name</Error> : null}
              <FormInput
                onChange={e => onEmailInputChange(e)}
                value={email}
                name="email"
                onBlur={onBlurEmail}
                error={emailError}
                placeholder="Enter Email Address"
              />
              {emailError ? <Error>Please Enter a Valid Email</Error> : null}
              <>
                <div role="button" onClick={() => onSignUpClicked(sgnUpUser)}>
                  <Fab
                    disabled={loading}
                    variant="extended"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                  >
                    <ButtonText>Sign Up for preview</ButtonText>
                  </Fab>
                  <Dialog open={modalOpen} close={() => closeModal()} />
                </div>
              </>
            </FormWrapper>
          )}
        </Mutation>
        <CopyRight>&copy;agoraexpo 2019</CopyRight>
      </Wrapper>
    </MainWrapper>
  );
};

export default withStyles(styles)(Footer);
