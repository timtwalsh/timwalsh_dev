import styled, {keyframes} from "styled-components";

export const App = styled.div`
  text-align: left;
  background: black repeat-y;
`

export const Container = styled.div`
  background: white;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  max-width: 1920px;
  margin: 0 auto !important;
  float: none !important;
  @media screen and (max-width: 849px) {
      display: block;
  }
`

export const OffsiteLinks = styled.div`
  margin-left: 0;
  bottom: 0;
  display: inherit;
`


export const HeadingTag = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  color: #333;
`

export const Subheading = styled.div`
  margin-top: 2rem;
  font-family: 'Source Code Pro', sans-serif;
  color: #000;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  @media screen and (max-width: 849px) {
    width: 90%;
  }
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  padding: 0 3% 0 5%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 849px) {
    width: 100%;
    height: 40rem;    
  }
  @media screen and (max-width: 550px) {
    width: 80%;
    height: 40rem;    
  }
`

export const LeftContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  @media screen and (max-width: 849px) {
    position: static;
    margin-left: 3rem;
    margin-right: 1.5rem;
    max-width: 35rem;
    width: 100%;    
  };
  @media screen and (max-width: 550px) {
    position: static;
    margin-left: 3rem;
  }
`

export const RightContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 849px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`

const PulseScaleAnim = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
  }
`

export const ResumeButton = styled.div`
  display: inline-block;
  background-color: #fff;
  border: #333 solid;
  color: #333;
  width: 5rem;
  margin: .75rem 0 1rem 0;
  padding: .5rem;
  text-align: center;
  font-family: 'Source Code Pro', sans-serif;
  text-decoration: underline;
  font-weight: 500;
  font-size: 14px;
  animation: ${PulseScaleAnim} infinite 1s linear;
`

export const SocialLogo = styled.div`
  padding: .75rem .75rem .75rem 0;
`
export const FilterImg = styled.img`
  filter: invert(10%);
`