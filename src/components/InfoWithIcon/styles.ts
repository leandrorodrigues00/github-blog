import styled from "styled-components";

interface InfoWithIconContainerProps {
  textColor: string;
}

export const InfoWithIconContainer = styled.div<InfoWithIconContainerProps>`
  display: flex;
  gap: 8px;
  align-items: center;

  p {
    color: ${({ textColor }) => textColor};
  }
  img {
    max-width: 18px;
  }
`;
