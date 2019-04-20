import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgba(0, 183, 18, 1) 0%,
    rgba(90, 255, 21, 1) 35%
  );
  height: auto;
  width: 100%;
`;

export const FooterHeader = styled.h3`
  font-size: 3.8rem;
  line-height: 5.3rem;
  color: #333;
  font-family: Lato;
  font-weight: 300;
  display: flex;
`;

export const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  outline: ${props => (props.error ? "0.5px solid red" : "none")};
  width: 80%;
  &:active {
    border: none;
    outline: none !important;
  }
  &:focus {
    border: none;
    outline: none !important;
  }
`;

export const ButtonText = styled.div`
  background-color: inherit;
  color: inherit;
  font-size: 1.8rem;
  font-family: Lato;
  font-weight: 700;
`;

export const CopyRight = styled.p`
  line-height: 2.8rem;
  font-size: 2rem;
  color: #fff;
  font-family: Lato;
`;
export const Error = styled.p`
  color: red;
  margin-top: 0;
  font-size: 2rem;
`;
