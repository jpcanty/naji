import { initUser, logout } from "../features/currentUser/currentUserSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useLogout } from "../hooks/useLogOut";
import { useSignUp } from "../hooks/useSignUp";
import logo2 from "../logo2.svg";

export const User = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.value);
  const email = currentUser?.email ?? "no email";

  const onSignUp = () => {
    useSignUp().then((user) => {
      if (user) dispatch(initUser(user));
    });
  };
  const onLogout = () => {
    useLogout().then((unused) => {
      dispatch(logout());
    });
  };
  return (
    <header className="App-header">
      <h1>{email}</h1>
      <button onClick={onSignUp}>Sign up</button>
      <button onClick={onLogout}>Log out</button>
      <img src={logo2} className="App-logo" alt="app-logo" />
    </header>
  );
};
