import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 700px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 700px;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
    `}

    line-height: 1.4;

  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
      color: red;
      text-align: center;
    `}
  ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;
    `}
`;

export default Heading;
