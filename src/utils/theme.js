const theme = {
  colors: {
    blue_dark: "rgb(46, 113, 229)",
    blue_light: "rgb(66, 148, 255)",

    trasparent: "rgba(0, 0, 0, 0)",
    dark: "rgb(0, 0, 0)",
    light: "rgb(255, 255, 255)",

    dark_on_light_primary: "rgb(29, 30, 31)",
    dark_on_light_secondary: "rgb(52, 53, 54)",
    dark_on_dark_primary: "rgb(212, 212, 212)",
    dark_on_dark_secondary: "rgb(114, 114, 116)",
    light_on_dark_primary: "rgb(242, 242, 243)",

    cool_blue: "rgb(241, 248, 255)",
    cool_purple: "rgb(244, 236, 255)",
    cool_yellow: "rgb(255, 249, 207)",
    cool_pink: "rgb(255, 233, 241)",
    cool_green: "rgb(211, 253, 235)",

    bust_pink: "rgb(220, 71, 125)",
    bust_green: "rgb(0, 134, 97)",
    bust_purple: "rgb(132, 79, 186)",

    warning_l2: "#fcf6ea",
    warning_l1: "#f9eacd",
    warning: "#eaaa32",
    warning_d1: "#975b06",
    danger_l2: "#fcf0f2",
    danger_l1: "#ffd4d6",
    danger: "#f25054",
    danger_d1: "#ba2226",
    success_l2: "#ebfdf7",
    success_l1: "#c1f1e0",
    success: "#00bc7f",
    success_d1: "#007854",
  },

  font_sizes: {
    fs_default: "1rem",
  },

  font_weights: {
    fw_light: "300",
    fw_medium: "500",
    fw_semi_bold: "600",
    fw_bold: "700",
  },

  font_families: {
    ff_display: "Poppins, sans-serif",
    ff_body: "Open Sans, sans-serif",
    ff_mono: "Red Hat Mono, monospace",
  },

  size: {
    smallest: "25em", //275px
    smaller: "31.25em", //500px
    small: "37.5em", //600px
    medium: "56.25em", //900px
    large: "80em", //1300px
    larger: "90em", //1300px
    largest: "97em", //1500px
  },

  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    smaller: "only screen and (max-width: 31.25em)",
    small: "only screen and (max-width: 37.5em)",
    medium: "only screen and (max-width: 56.25em)",
    large: "only screen and (max-width: 80em)",
    larger: "only screen and (max-width: 90em)",
    largest: "only screen and (max-width: 97em)",
  },
};

export default theme;
