import { Logo } from "../../ui/logo/logo";
import { StyledButton } from "../../ui/styled-button/styled-button";
import {
  StyledHeader,
  StyledHeaderSection,
  StyledNav,
} from "../../ui/styled-header/styled-header";
import { StyledLink } from "../../ui/styled-texts/styled-texts";

const LINKS = [
  {
    id: 1,
    link: "/about-subho-karmakar",
    title: "about",
  },
  {
    id: 2,
    link: "/",
    title: "blog",
  },
  {
    id: 3,
    link: "/",
    title: "github",
  },
  {
    id: 4,
    link: "/",
    title: "linkedin",
  },
];

const Header = () => {
  const _sayHelloButtonStyling = {
    _fontsize: "1.4rem",
    _fontweight: "var(--fw_semi_bold)",
    _padding: "18px 24px",
    _margin: "0",
    _width: "auto",
    _height: "2.5rem",
    _backgroundcolor: "transparent",
    _color: "var(--dark_on_light_primary)",
    _border: "1px solid var(--dark_on_dark_primary)",

    _backgroundcolorhover: "var(--dark_on_dark_primary)",
    _colorhover: "var(--dark_on_light_primary)",
    _borderhover: "1px solid var(--dark_on_dark_primary)",

    _backgroundcolorfocus: "var(--dark_on_dark_primary)",
    _colorfocus: "var(--dark_on_light_primary)",
    _borderfocus: "1px solid var(--dark_on_dark_primary)",

    _fontsizemobile: "0.7rem",
    _paddingmobile: "0",
    _marginmobile: "0",
    _widthmobile: "20vw",
    _heightmobile: "5vh",
  };

  const _linksStyling = {
    _fontsize: "1.4rem",
    _fontweight: "var(--fw_semi_bold)",
    _padding: "0",
    _margin: "0 2rem 0 2rem",
    _width: "auto",
    _height: "auto",
    _color: "var(--dark_on_light_primary)",
    _textalign: "start",
    _lineheight: "1.2rem",
    _letterspacing: "unset",
    _wordbreak: "unset",
    _texttransformation: "capitalize",
  };

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <Logo />

          <StyledHeaderSection>
            {LINKS.map((item) => {
              return (
                <StyledLink
                  key={item.id}
                  to={item.link}
                  {..._linksStyling}
                >
                  {item.title}
                </StyledLink>
              );
            })}
          </StyledHeaderSection>

          <StyledButton {..._sayHelloButtonStyling}>
            Say Hello !
          </StyledButton>
        </StyledNav>
      </StyledHeader>

      {/* {searchModal === true && <SearchModal />} */}
    </>
  );
};

export default Header;
