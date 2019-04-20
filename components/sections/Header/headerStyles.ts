import styled from "styled-components";
import headerBg from "../../../static/images/header-bg.svg";
import LogoImage from "../../../static/images/logo-full.png";

export const Sections = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const MainWrapper = styled.section`
  margin-top: -20px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: url(${headerBg}) no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 80%;
`;

export const Logo = styled.div`
  background: url(${LogoImage}) no-repeat;
  background-position: -3.9rem 0px;
  background-size: 24.3rem 16rem;
  width: 16.4rem;
  height: 16rem;
`;

export const HeaderH1 = styled.div`
  font-size: 5.3rem;
  line-height: 6.9rem;
  color: rgb(255, 255, 255);
  font-family: Lato;
  font-weight: 300;
  height: auto;
  text-align: center;
`;

export const SecondaryText = styled.div`
  font-size: 2rem;
  line-height: 2.8rem;
  color: rgb(255, 255, 255);
  font-family: Lato;
  font-weight: 400;
  width: 37rem;
  height: auto;
`;

export const SecondaryParagraph = styled.p`
  text-align: left;
  line-height: 2.8rem;
  font-size: 2rem;
`;

export const ButtonText = styled.div`
  background-color: inherit;
  color: inherit;
  font-size: 1.8rem;
  font-family: Lato;
  font-weight: 700;
`;

export const FormWrapper = styled.div`
  width: 40rem;
  height: 35rem;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormHeader = styled.div`
  font-size: 2rem;
  line-height: 2.8rem;
  color: rgb(165, 165, 194);
  font-family: Lato;
  font-weight: 400;
  width: 100%;
  height: auto;
`;

export const FormHeaderParagraph = styled.p`
  text-align: center;
`;

export const FormInput = styled.input`
  font-size: 2rem;
  font-family: Lato;
  color: #333;
  border-radius: 0.5rem;
  border: none;
  position: relative;
  background: transparent;
  display: block;
  margin-bottom: 2rem;
  padding: 0.5em 0.25em;
  box-shadow: 0 0 1em 0.25em rgba(0, 0, 0, 0.2);
  touch-action: manipulation;
  background-color: #fff;
  background-image: none;
  width: 80%;
  outline: ${props => (props.error ? "0.5px solid red" : "none")};
  &:active {
    border: none;
    outline: none !important;
  }
  &:focus {
    border: 0.5px solid rgba(0, 183, 18, 1);
    outline: none !important;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 56.4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Error = styled.p`
  color: red;
  margin-top: 0;
  font-size: 2rem;
`;
