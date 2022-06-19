import styled from "styled-components";

export const LayoutStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 0%;
  margin: 0%;
  overflow: hidden;
  background-color: var(--light);
  overflow-x: hidden;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    height: auto;
  }
`;
