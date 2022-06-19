import PropTypes from "prop-types";
import { LayoutStyledContainer } from "../../ui/styled-containers/styled-containers";

const Layout = ({ children }) => {
  return <LayoutStyledContainer>{children}</LayoutStyledContainer>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
