import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useLogin } from "../../hooks/useLogin";
import { useSignUp } from "../../hooks/useSignUp";
import { initUser } from "./currentUserSlice";
import "./NoCurrentUser.css";

enum NoCurrentUserAction {
  SIGN_UP = "Sign Up",
  LOGIN = "Login",
}

type User = {
  username: string;
  password: string;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
};

export const NoCurrentUser = () => {
  const [action, setAction] = useState<NoCurrentUserAction>(
    NoCurrentUserAction.SIGN_UP
  );
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    firstName: undefined,
    lastName: undefined,
    email: undefined,
  });
  const dispatch = useAppDispatch();
  const signingUp = action === NoCurrentUserAction.SIGN_UP;
  const loggingIn = action === NoCurrentUserAction.LOGIN;
  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;
    setUser({ ...user, username });
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setUser({ ...user, password });
  };
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setUser({ ...user, email });
  };
  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const firstName = event.target.value;
    setUser({ ...user, firstName });
  };
  const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lastName = event.target.value;
    setUser({ ...user, lastName });
  };
  const validateEmail = (email: string | undefined) => {
    const re = /\S+@\S+\.\S+/;
    return !!email && re.test(email);
  };
  const validateLogin = (user: User) => {
    const isUsernameValid =
      user.username.replace(/ /g, "").match(user.username) &&
      user.username.length;
    const isPasswordValid =
      user.password.replace(/ /g, "").match(user.password) &&
      user.password.length;
    return isUsernameValid && isPasswordValid;
  };
  const validateSignUp = (user: User) => {
    const isFirstNameValid = !!user.firstName && user.firstName.trim().match(user.firstName); 
    const isLastNameValid = !!user.lastName && user.lastName.trim().match(user.lastName);
    return isFirstNameValid && isLastNameValid && validateLogin(user) && validateEmail(user.email);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (signingUp) {
      if (validateSignUp(user)) {
        useSignUp(user.username, user.password, user.email, user.firstName, user.lastName).then((user) => {
          if (user) dispatch(initUser(user));
        });
      } else {
        alert("Invalid username, password, first name, last name and/or email");
      }
    } else if (loggingIn) {
      if (validateLogin(user)) {
        useLogin(user.username, user.password).then((user) => {
          if (user) dispatch(initUser(user));
        });
      } else {
        alert("Invalid username and/or password");
      }
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>{action}</h1>
        {(loggingIn || signingUp) && (
          <label className="form-label" htmlFor="username">
            Username:
          </label>
        )}
        {(loggingIn || signingUp) && <br />}
        {(loggingIn || signingUp) && (
          <input
            type="text"
            spellCheck="false"
            autoComplete="off"
            id="username"
            name="username"
            onChange={onUsernameChange}
          />
        )}
        {(loggingIn || signingUp) && <br />}
        {(loggingIn || signingUp) && (
          <label className="form-label" htmlFor="password">
            Password:
          </label>
        )}
        {(loggingIn || signingUp) && <br />}
        {(loggingIn || signingUp) && (
          <input
            type="password"
            spellCheck="false"
            autoComplete="off"
            id="password"
            name="password"
            onChange={onPasswordChange}
          />
        )}
        {(loggingIn || signingUp) && <br />}
        {signingUp && (
          <label className="form-label" htmlFor="email">
            Email:
          </label>
        )}
        {signingUp && <br />}
        {signingUp && (
          <input
            type="text"
            id="email"
            spellCheck="false"
            autoComplete="off"
            name="email"
            onChange={onEmailChange}
          />
        )}
        {signingUp && <br />}
        {signingUp && (
          <label className="form-label" htmlFor="fname">
            First name:
          </label>
        )}
        {signingUp && <br />}
        {signingUp && (
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={onFirstNameChange}
          />
        )}
        {signingUp && <br />}
        {signingUp && (
          <label className="form-label" htmlFor="lname">
            Last name:
          </label>
        )}
        {signingUp && <br />}
        {signingUp && (
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={onLastNameChange}
          />
        )}{" "}
        {signingUp && <br />}
        <input type="submit" value="Submit" />
      </form>
      <ul className="no-current-user-action">
        <li>
          <input
            type="radio"
            id="SignUp"
            name="sign up"
            className={signingUp ? "selected-radio" : "unselected-radio"}
            onClick={() => {
              setAction(NoCurrentUserAction.SIGN_UP);
            }}
          />
          <label
            className={signingUp ? "selected-label" : "unselected-label"}
            htmlFor="SignUp"
          >
            Sign up
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="Login"
            name="login"
            className={loggingIn ? "selected-radio" : "unselected-radio"}
            onClick={() => {
              setAction(NoCurrentUserAction.LOGIN);
            }}
          />
          <label
            className={loggingIn ? "selected-label" : "unselected-label"}
            htmlFor="Login"
          >
            Login
          </label>
        </li>
      </ul>
    </div>
  );
};
