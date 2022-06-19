import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  background: var(--light);

  @media ${({ theme }) => theme.mediaQueries.mobile} {
  }
`;

export const StyledNav = styled.nav`
  align-items: center;
  background: var(--light);
  transition: none;
  display: flex;
  width: -webkit-fill-available;
  height: auto;
  padding: 18px 24px;
  justify-content: space-between;
  position: relative;
  z-index: 3;
`;

export const StyledHeaderSection = styled.div``;
