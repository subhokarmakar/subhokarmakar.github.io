import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 700;
  color: var(--dark);
  letter-spacing: -0.08rem;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const Logo = () => {
  return <StyledLogo to="/">SubhoKarmakar.</StyledLogo>;
};
