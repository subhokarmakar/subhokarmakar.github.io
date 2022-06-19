import styled from "styled-components";
import { StyledText } from "../../ui/styled-texts/styled-texts";

const Banner = () => {
  const _textStyling = {
    _fontsize: "4rem",
    _fontweight: "var(--fw_bold)",
    _padding: "0",
    _margin: "0",
    _width: "auto",
    _height: "auto",
    _color: "var(--dark)",
    _textalign: "start",
    _lineheight: "unset",
    _letterspacing: "unset",
    _wordbreak: "unset",
    _texttransformation: "capitalize",
  };

  const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  padding: 0%;
  margin: 0%;
  background-color: var(--transparent);
  justify-content: flex-end;
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: ${(props) => props._justifycontentmobile};
  }
  `

  const _wrapperStyling = {
    _justifycontentmobile: "center"
  }

  return (
    <>
      <Wrapper>
        <StyledText {..._textStyling}>Blog.</StyledText>
      </Wrapper>
    </>
  );
};

export default Banner;
