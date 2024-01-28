import { render, screen, fireEvent } from "@testing-library/react";
import { CurrentUser } from "./CurrentUser";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("No user defined", () => {
  const initialState = { currentUser: { value: undefined } };
  const mockStore = configureStore();
  let store, wrapper;

  it("Shows sign up form by default", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CurrentUser />
      </Provider>
    );
    const h1Element = screen.getByRole("heading");
    expect(h1Element.textContent).toBe("Sign Up");
  });

  it("Shows login form when clicked", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CurrentUser />
      </Provider>
    );
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    const h1Element = screen.getByRole("heading");
    expect(h1Element.textContent).toBe("Login");
  });
});

describe("User defined", () => {
  const initialState = {
    currentUser: { value: { username: "lenjai", email: "lenaji@tancy.com"} },
  };
  const mockStore = configureStore();
  let store, wrapper;

  it('Shows "Youre logged in with first name"', () => {
    store = mockStore({...initialState,  currentUser: {value: {...initialState.currentUser.value, firstName: "Jelani", lastName: "Canty" }}});
    render(
      <Provider store={store}>
        <CurrentUser />
      </Provider>
    );

    const h1Element = screen.getByRole("heading");
    const buttonElement = screen.getByRole("button");
    expect(h1Element.textContent).toBe("You're signed in Jelani");
    expect(buttonElement.textContent).toBe("Log out");
  });
  
  it('Shows "Youre logged in"', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CurrentUser />
      </Provider>
    );

    const h1Element = screen.getByRole("heading");
    const buttonElement = screen.getByRole("button");
    expect(h1Element.textContent).toBe("You're signed in");
    expect(buttonElement.textContent).toBe("Log out");
  });
});
