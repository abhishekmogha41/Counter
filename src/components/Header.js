import classes from "./Header.module.css";
import { authAction } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authAction.logout());
  };

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={classes.header}>
      <h1>Nippon AudioTronix</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
      {!isAuth && (
        <nav>
          <ul>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
