import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }
  *::-webkit-scrollbar {
    width: 0.3vw;
    height: 0.3vw;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background: rgba(var(--color-drk),0.2);
    border-radius: 5rem;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    box-sizing: border-box;
    width: 100%;

    --blue_dark: ${(props) => props.theme.colors.blue_dark};
    --blue_light: ${(props) => props.theme.colors.blue_light};

    --trasparent: ${(props) => props.theme.colors.trasparent};
    --dark: ${(props) => props.theme.colors.dark};
    --light: ${(props) => props.theme.colors.light};

    --dark_on_light_primary: ${(props) =>
      props.theme.colors.dark_on_light_primary};
    --dark_on_light_secondary: ${(props) =>
      props.theme.colors.dark_on_light_secondary};
    --dark_on_dark_primary: ${(props) =>
      props.theme.colors.dark_on_dark_primary};
    --dark_on_dark_secondary: ${(props) =>
      props.theme.colors.dark_on_dark_secondary};
    --light_on_dark_primary: ${(props) =>
      props.theme.colors.light_on_dark_primary};

    --cool_blue: ${(props) => props.theme.colors.cool_blue};
    --cool_purple: ${(props) => props.theme.colors.cool_purple};
    --cool_yellow: ${(props) => props.theme.colors.cool_yellow};
    --cool_pink: ${(props) => props.theme.colors.cool_pink};
    --cool_green: ${(props) => props.theme.colors.cool_green};

    --bust_pink: ${(props) => props.theme.colors.bust_pink};
    --bust_green: ${(props) => props.theme.colors.bust_green};
    --bust_purple: ${(props) => props.theme.colors.bust_purple};

    --warning_l2: ${(props) => props.theme.colors.warning_l2};
    --warning_l1: ${(props) => props.theme.colors.warning_l1};
    --warning: ${(props) => props.theme.colors.warning};
    --warning_d1: ${(props) => props.theme.colors.warning_d1};
    --danger_l2: ${(props) => props.theme.colors.danger_l2};
    --danger_l1: ${(props) => props.theme.colors.danger_l1};
    --danger: ${(props) => props.theme.colors.danger};
    --danger_d1: ${(props) => props.theme.colors.danger_d1};
    --success_l2: ${(props) => props.theme.colors.success_l2};
    --success_l1: ${(props) => props.theme.colors.success_l1};
    --success: ${(props) => props.theme.colors.success};
    --success_d1: ${(props) => props.theme.colors.success_d1};

    --fs_default: ${(props) => props.theme.font_sizes.fs_default};

    --fw_light: ${(props) => props.theme.font_weights.fw_light};
    --fw_medium: ${(props) => props.theme.font_weights.fw_medium};
    --fw_semi_bold: ${(props) =>
      props.theme.font_weights.fw_semi_bold};
    --fw_bold: ${(props) => props.theme.font_weights.fw_bold};

    --ff_display: ${(props) => props.theme.font_families.ff_display};
    --ff_body: ${(props) => props.theme.font_families.ff_body};
    --ff_mono: ${(props) => props.theme.font_families.ff_mono};

    @media ${(props) => props.theme.mediaQueries.largest} {
      font-size: 57.5%;
    }
    @media ${(props) => props.theme.mediaQueries.large} {
        font-size: 55%;
    }
  }

  body {
    background-color: ${(props) => props.theme.colors.wht};
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow: visible;
    scroll-behavior: smooth;
    font-family: Poppins, Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.font_sizes.font_size_default};
    font-weight: 400;
    line-height: 1.6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1rem 0;
    color:  ${(props) => props.theme.colors.dark};
    font-family: Poppins;
  }

  p {
    margin: 0 0 0.5rem 0;
    color:  ${(props) => props.theme.colors.dark};
    font-family: Poppins;
  }

  form,
  input,
  textarea,
  button,
  select,
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: Poppins;
  }

  button {
    outline: none;
    cursor: pointer;
    font-family: Poppins;
    color: ${(props) => props.theme.colors.dark};
  }

  ._container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  ._canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
