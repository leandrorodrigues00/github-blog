import styled from "styled-components";

export const PostsSummaryContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme["base-post"]};

  :hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
    transition: 0.6s;
  }
`;

export const PostsSummaryHeader = styled.header`
  display: flex;
  margin-bottom: 1.25rem;
  align-items: flex-start;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-title"]};

    max-width: 17.6875rem;
  }

  time {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }
`;
