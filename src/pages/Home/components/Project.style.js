import styled from "styled-components";

export const ProjectItem = styled.div`
    background: 
        radial-gradient(
        at bottom right,
        ${props => props.bgBottom || 'white'},
        transparent 100%
        ),
        radial-gradient(
        at bottom left,
        ${props => props.bgBottom || 'white'},
        transparent 100%
        ),
        radial-gradient(
        at top left,
        ${props => props.bgLeft || 'white'},
        transparent 66%
        ),
        radial-gradient(
        at top right,
        ${props => props.bgRight || 'white'},
        transparent 66%
        );
  color: ${props => props.fontColor || 'red'};
  font-family: 'Source Code Pro', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
`;

export const ProjectId = styled.div`
  padding-top: 1.5rem;
  padding-left: 1rem;
  font-family: 'Source Code Pro', sans-serif;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
`;

export const ProjectDesc = styled.div`
  padding-left: 1.5rem;
`;

export const ProjectHeader = styled.div`
  padding-left: 1rem;
  font-family: 'Source Code Pro', sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: ${props => props.fontColor || 'red'};
  `;


export const ProjectLogo = styled.div`
  margin: 2rem;
  height: 40rem;
  pointer-events: none;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
