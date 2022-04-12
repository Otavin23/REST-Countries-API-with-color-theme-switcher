import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 7px #d3d3d3;
  max-width: 100%;
  height: 65px;
  .logo {
    margin-left: 4rem;
    h1 {
      font-size: 25px;
      cursor: pointer;
    }
  }
  .trade-theme {
    display: flex;
    align-items: center;
    margin-right: 3.5rem;
    svg{
       cursor: pointer;
    }
    p {
      margin-left: 0.7rem;
      font-weight: 600;
    }
  }
`;
