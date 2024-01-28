import { useEffect, useState } from "react";
import { initUser, logout } from "./currentUserSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useLogout } from "../../hooks/useLogOut";
import { NoCurrentUser } from "./NoCurrentUser";

export const CurrentUser = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.value);
  
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    dispatch(initUser(useGetCurrentUser()));
  }, []);
  const isSignedIn = !!currentUser;

  const onLogout = () => {
    useLogout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="page">
      {isSignedIn ? (
        <div>
          <h1>You're signed in{currentUser.firstName ? " " + currentUser.firstName : null}</h1>
          <button onClick={onLogout}>Log out</button>
        </div>
      ) : (
        <NoCurrentUser />
      )}
    </div>
  );
};
