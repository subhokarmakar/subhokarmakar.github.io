import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: ${(props) => props._fontsize};
  font-weight: ${(props) => props._fontweight};
  padding: ${(props) => props._padding};
  margin: ${(props) => props._margin};
  width: ${(props) => props._width};
  height: ${(props) => props._height};
  background-color: ${(props) => props._backgroundcolor};
  color: ${(props) => props._color};
  border: ${(props) => props._border};

  text-transform: capitalize;
  border-radius: 2px;
  cursor: pointer;
  line-height: 0%;
  transition: all .25s ease;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props._backgroundcolorhover};
    color: ${(props) => props._colorhover};
    border: ${(props) => props._borderhover};
    transform: translateY(-3px);
  }

  &:focus {
    background-color: ${(props) => props._backgroundcolorfocus};
    color: ${(props) => props._colorfocus};
    border: ${(props) => props._borderfocus};
    transform: translateY(-3px);
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: ${(props) => props._fontsizemobile};
    padding: ${(props) => props._paddingmobile};
    margin: ${(props) => props._marginmobile};
    width: ${(props) => props._widthmobile};
    height: ${(props) => props._heightmobile};
    line-height: 1.2rem;
  }
`;

export const StyledButtonLink = styled(Link)`
  font-size: ${(props) => props._fontSize};
  font-weight: ${(props) => props._fontWeight};
  padding: ${(props) => props._padding};
  margin: ${(props) => props._margin};
  width: ${(props) => props._width};
  height: ${(props) => props._height};
  background-color: ${(props) => props._backgroundcolor};
  color: ${(props) => props._color};
  border: ${(props) => props._border};

  text-transform: capitalize;
  border-radius: 50rem;
  cursor: pointer;
  line-height: 0%;
  transition: all .25s ease;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props._backgroundcolorhover};
    color: ${(props) => props._colorhover};
    border: ${(props) => props._borderhover};
    transform: translateY(-5px);
  }

  &:focus {
    background-color: ${(props) => props._backgroundcolorfocus};
    color: ${(props) => props._colorfocus};
    border: ${(props) => props._borderfocus};
    transform: translateY(-5px);
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: ${(props) => props._fontsizemobile};
    padding: ${(props) => props._paddingmobile};
    margin: ${(props) => props._marginmobile};
    width: ${(props) => props._widthmobile};
    height: ${(props) => props._heightmobile};
    line-height: 1.2rem;
  }
`;
