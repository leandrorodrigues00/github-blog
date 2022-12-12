import styled from "styled-components";

export const SearchInputContainer = styled.div`
  margin-top: 12.25rem;
  display: flex;
  flex-direction: column;

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    border-radius: 6px;

    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};

    font-size: 1rem;
    line-height: 160%;

    color: ${(props) => props.theme["base-text"]};

    ::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    :focus {
      outline: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const SearchInputHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  span {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }
`;
