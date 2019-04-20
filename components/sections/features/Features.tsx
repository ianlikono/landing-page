import * as React from "react";
import { IconContext } from "react-icons";
import { FaBuromobelexperte, FaEdit } from "react-icons/fa";
import { IoIosMore, IoIosPeople } from "react-icons/io";
import {
  FeatureBody,
  FeatureHeader,
  FeatureItem,
  FeatureList,
  FeaturesHeader,
  Wrapper
} from "./styles";

const FeaturesSection: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <FeaturesHeader>Features</FeaturesHeader>
      <FeatureList>
        <FeatureItem>
          <FeatureHeader>Developed By Experts</FeatureHeader>
          <IconContext.Provider
            value={{ style: { color: "#4caf50", fontSize: "50px" } }}
          >
            <FaBuromobelexperte />
          </IconContext.Provider>
          <FeatureBody>
            Developed by people with alot of ecommerce experience and was
            tailored to solve most of the current common problems and problems
            that may occur in future.
          </FeatureBody>
        </FeatureItem>
        <FeatureItem>
          <FeatureHeader>Made For You Owned By You</FeatureHeader>
          <IconContext.Provider
            value={{ style: { color: "#4caf50", fontSize: "50px" } }}
          >
            <IoIosPeople />
          </IconContext.Provider>
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
          <IconContext.Provider
            value={{ style: { color: "#4caf50", fontSize: "50px" } }}
          >
            <FaEdit />
          </IconContext.Provider>
          <FeatureBody>
            Every business is covered from small businesses to large enterprise
            companies, no more worrying about time and money when you want to
            sell online.
          </FeatureBody>
        </FeatureItem>
        <FeatureItem>
          <FeatureHeader>More Than You Ever Imagined</FeatureHeader>
          <IconContext.Provider
            value={{ style: { color: "#4caf50", fontSize: "50px" } }}
          >
            <IoIosMore />
          </IconContext.Provider>
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

export default FeaturesSection;
