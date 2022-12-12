import styled from "styled-components";
import headerBG from "../../assets/header-bg.png";

export const HeaderContainer = styled.header`
  background: url(${headerBG});
  background-size: cover;
  height: 18.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin-bottom: 64px;
  }
`;
