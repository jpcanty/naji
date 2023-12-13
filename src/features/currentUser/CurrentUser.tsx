import { useEffect } from "react";
import { initUser, logout } from "./currentUserSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useLogout } from "../../hooks/useLogOut";
import { useSignUp } from "../../hooks/useSignUp";
import logo2 from "../logo2.svg";

export const CurrentUser = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.value);
  useEffect(() => {
    dispatch(initUser(useGetCurrentUser()))
  }, []); 
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
    <div className="page">
      <h1>{email}</h1>
      <button onClick={onSignUp}>Sign up</button>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
};
