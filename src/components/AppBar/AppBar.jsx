import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import clsx from 'clsx';
import css from '../AppBar/AppBar.module.css';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <header className={css.header}>
      {/* <Navigation /> */}
      <nav className={css.homeContactsWrap}>
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
        <div className={css.welcomeLogoutWrap}>
          <p className={css.welcome}>
            Welcome <span className={css.username}>{user.name}</span>
          </p>
          <button
            type="button"
            className={css.logoutBtn}
            onClick={() => dispatch(logout())}
          >
            <IoIosLogOut size={30} />
            <span className={css.tooltiptext}>LogOut</span>
          </button>
        </div>
      )}
      {!isLoggedIn && (
        <div className={css.registrationLoginWrap}>
          <NavLink to="/register" className={getNavLinkClassName}>
            SignIn
          </NavLink>

          <NavLink to="/login" className={getNavLinkClassName}>
            LogIn
          </NavLink>
        </div>
      )}
    </header>
  );
};
