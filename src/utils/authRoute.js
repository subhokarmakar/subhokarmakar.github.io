import { Redirect, Route } from "react-router"

const token = sessionStorage.getItem("token")

export const PrivateRoute = ({ children, path, ...rest }) => {
  return (
    <Route
      exact
      path={path}
      {...rest}
      render={({ location }) => {
        return token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}
