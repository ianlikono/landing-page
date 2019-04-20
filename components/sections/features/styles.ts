import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FeaturesHeader = styled.h3`
  font-size: 3.8rem;
  line-height: 5.3rem;
  color: #333;
  font-family: Lato;
  font-weight: 300;
  display: flex;
`;

export const FeatureList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  max-width: 35rem;
  border: none;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  margin-top: 5rem;
`;

export const FeatureHeader = styled.div`
  margin-top: 3rem;
  font-weight: 300;
  font-size: 2rem;
  line-height: 2.8rem;
  color: $rgb(165, 165, 194);
  font-family: Lato;
  text-align: center;
`;

export const FeatureBody = styled.div`
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #333;
  font-family: Lato;
  font-weight: 300;
  text-align: center;
`;
