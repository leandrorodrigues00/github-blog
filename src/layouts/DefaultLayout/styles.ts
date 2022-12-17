import styled from "styled-components";

export const LayoutContainer = styled.div`
  > main {
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;

    @media (max-width: 50rem) {
      padding: 0 1rem;
    }
  }
`;
