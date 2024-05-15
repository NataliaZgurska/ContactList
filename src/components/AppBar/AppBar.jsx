import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import clsx from 'clsx';

import css from '../Navigation/Navigation.module.css';
import css3 from '../AppBar/AppBar.module.css';
import css1 from '../UserMenu/UserMenu.module.css';
import css2 from '../AuthNav/AuthNav.module.css';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <header className={css3.header}>
      {/* <Navigation /> */}
      <nav>
        <NavLink to="/" className={getNavLinkClassName}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={getNavLinkClassName}>
            Contacts
          </NavLink>
        )}
      </nav>
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      {isLoggedIn && (
        <div className={css1.wrapper}>
          <p className={css1.welcome}>
            Welcome <span className={css1.username}>{user.name}</span>
          </p>
          <button
            type="button"
            className={css1.btn}
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      )}
      {!isLoggedIn && (
        <div className={css2.registrationLoginWrap}>
          <NavLink to="/register" className={getNavLinkClassName}>
            Registration
          </NavLink>

          <NavLink to="/login" className={getNavLinkClassName}>
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};
