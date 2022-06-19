import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
  font-size: ${(props) => props._fontsize};
  font-weight: ${(props) => props._fontweight};
  padding: ${(props) => props._padding};
  margin: ${(props) => props._margin};
  width: ${(props) => props._width};
  height: ${(props) => props._height};
  color: ${(props) => props._color};
  text-align: ${(props) => props._textalign};
  line-height: ${(props) => props._lineheight};
  letter-spacing: ${(props) => props._letterspacing};
  word-break: ${(props) => props._wordbreak};
  text-transform: ${(props) => props._texttransformation};
  background-color: ${(props) => props._backgroundcolor};
  border-radius: ${(props) => props._borderradius};
  border: ${(props) => props._border};
  cursor: pointer;
  text-decoration: none;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${(props) => props._fontsizemobile};
    margin: ${(props) => props._marginmobile};
    font-weight: ${(props) => props._fontweightmobile};
    padding: ${(props) => props._paddingmobile};
    text-align: ${(props) => props._textalignmobile};
    border-radius: ${(props) => props._borderradiusmobile};
    width: ${(props) => props._widthmobile};
`

export const StyledText = styled.h1`
  font-size: ${(props) => props._fontsize};
  font-weight: ${(props) => props._fontweight};
  padding: ${(props) => props._padding};
  margin: ${(props) => props._margin};
  width: ${(props) => props._width};
  height: ${(props) => props._height};
  color: ${(props) => props._color};
  text-align: ${(props) => props._textalign};
  line-height: ${(props) => props._lineheight};
  letter-spacing: ${(props) => props._letterspacing};
  word-break: ${(props) => props._wordbreak};
  text-transform: ${(props) => props._texttransformation};
  background-color: ${(props) => props._backgroundcolor};
  border-radius: ${(props) => props._borderradius};
  border: ${(props) => props._border};

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${(props) => props._fontsizemobile};
    margin: ${(props) => props._marginmobile};
    font-weight: ${(props) => props._fontweightmobile};
    padding: ${(props) => props._paddingmobile};
    text-align: ${(props) => props._textalignmobile};
    border-radius: ${(props) => props._borderradiusmobile};
    width: ${(props) => props._widthmobile};
  }
`

export const StyledAnchor = styled.a`
  font-size: ${(props) => props._fontsize};
  font-weight: ${(props) => props._fontweight};
  padding: ${(props) => props._padding};
  margin: ${(props) => props._margin};
  width: ${(props) => props._width};
  height: ${(props) => props._height};
  color: ${(props) => props._color};
  text-align: ${(props) => props._textalign};
  line-height: ${(props) => props._lineheight};
  letter-spacing: ${(props) => props._letterspacing};
  word-break: ${(props) => props._wordbreak};
  text-transform: ${(props) => props._texttransformation};
  background-color: ${(props) => props._backgroundcolor};
  border-radius: ${(props) => props._borderradius};
  border: ${(props) => props._border};
  cursor: pointer;
  text-decoration: none;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${(props) => props._fontsizemobile};
    margin: ${(props) => props._marginmobile};
    font-weight: ${(props) => props._fontweightmobile};
    padding: ${(props) => props._paddingmobile};
    text-align: ${(props) => props._textalignmobile};
    border-radius: ${(props) => props._borderradiusmobile};
    width: ${(props) => props._widthmobile};
  }
`
