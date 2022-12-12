import styled from "styled-components";

export const PostCardContainer = styled.div`
  position: absolute;
  top: 208px;

  padding: 32px 32px;
  border-radius: 10px;

  background: ${(props) => props.theme["base-profile"]};

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 0.5rem;
  }
`;

export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  img {
    max-width: 12px;
  }

  a {
    color: ${(props) => props.theme["blue"]};

    display: flex;
    gap: 8px;

    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
  }
`;

export const PostCardFooter = styled.footer`
  display: flex;
  gap: 2rem;

  img {
    max-width: 18px;
  }
`;
