import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircle from "@material-ui/icons/CheckCircle";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  checkIcon: {
    width: "100%",
    color: "#4caf50",
    fontSize: "4rem"
  }
});

type Props = {
  open: any;
  close: any;
  classes: any;
};

const Modal: React.FunctionComponent<Props> = props => {
  const { open, close, classes } = props;
  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="success-dialog-title"
        aria-describedby="success-dialog-description"
      >
        <DialogTitle id="success-dialog-title">
          <span style={{ fontSize: "4rem" }}>Success! </span>
          <div className={classes.checkIcon}>
            <CheckCircle />
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="success-dialog-description">
            <span style={{ fontSize: "2rem" }}>
              Thank you for signing up. We promise we wo't let you down! We will
              notify you as soon as we are live, in the meantime start preparing
              for the coming good online business life.
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(Modal);
