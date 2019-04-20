import * as React from "react";
import NaturePeople from "@material-ui/icons/NaturePeople";
import More from "@material-ui/icons/More";
import Edit from "@material-ui/icons/Edit";
import People from "@material-ui/icons/People";
import { withStyles } from "@material-ui/core/styles";
import {
  FeatureBody,
  FeatureHeader,
  FeatureItem,
  FeatureList,
  FeaturesHeader,
  Wrapper
} from "./styles";

const styles = theme => ({
  checkIcon: {
    width: "100%",
    color: "#4caf50",
    fontSize: "8rem",
    textAlign: "center"
  }
});

const FeaturesSection: React.FunctionComponent = props => {
  const { classes } = props;
  return (
    <Wrapper>
      <FeaturesHeader>Features</FeaturesHeader>
      <FeatureList>
        <FeatureItem>
          <FeatureHeader>Developed By Experts</FeatureHeader>
          <div className={classes.checkIcon}>
            <NaturePeople style={{ fontSize: "6rem" }} />
          </div>
          <FeatureBody>
            Developed by people with alot of ecommerce experience and was
            tailored to solve most of the current common problems and problems
            that may occur in future.
          </FeatureBody>
        </FeatureItem>
        <FeatureItem>
          <FeatureHeader>Made For You Owned By You</FeatureHeader>
          <div className={classes.checkIcon}>
            <People style={{ fontSize: "6rem" }} />
          </div>
          <FeatureBody>
            Own your store and have it look and feel the way you want. No coding
            experience, no problem we got you covered. All you need is goods you
            want to sell and share with the world.
          </FeatureBody>
        </FeatureItem>
        <FeatureItem>
          <FeatureHeader>
            Easily Customizable To Meet Your Business Needs
          </FeatureHeader>
          <div className={classes.checkIcon}>
            <Edit style={{ fontSize: "6rem" }} />
          </div>
          <FeatureBody>
            Every business is covered from small businesses to large enterprise
            companies, no more worrying about time and money when you want to
            sell online.
          </FeatureBody>
        </FeatureItem>
        <FeatureItem>
          <FeatureHeader>More Than You Ever Imagined</FeatureHeader>
          <div className={classes.checkIcon}>
            <More style={{ fontSize: "6rem" }} />
          </div>
          <FeatureBody>
            From selling virtual products, physical products, exchange
            marketplace, coupons and all you have been wishing for is finally
            here!!!
          </FeatureBody>
        </FeatureItem>
      </FeatureList>
    </Wrapper>
  );
};

export default withStyles(styles)(FeaturesSection);
