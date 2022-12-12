import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  position: absolute;
  top: 13rem;

  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme["base-profile"]};
`;

export const ProfileCardContent = styled.div`
  display: flex;
  gap: 32px;
  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileCardInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 100%;
  min-height: 139px;
  justify-content: space-between;
  footer {
    display: flex;
    gap: 24px;
    margin-top: 24px;
  }
`;

export const ProfileCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 8px;
  }

  a {
    color: ${(props) => props.theme["blue"]};
    display: flex;
    gap: 8px;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 160%;
    font-weight: 700;

    :hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;
