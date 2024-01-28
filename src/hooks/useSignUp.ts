import { Error } from "parse";
import Parse from "parse";

export const useSignUp = async (username: string, password: string, email: string | undefined,  firstName: string | undefined,  lastName: string | undefined) => {
  const user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("firstName", firstName);
  user.set("lastName", lastName);
  if (email) user.set("email", email);

  try {
    return await user.signUp().then((user) => {
      return {
        username: user.getUsername(),
        email: user.getEmail(),
        firstName: user.get("firstName"),
        lastName: user.get("lastName")
      };
    });
    // Hooray! Let them use the app now.
  } catch (error) {
    // Show the error message somewhere and let the user try again.
    if (error instanceof Error)
      alert("Error: " + error.code + " " + error.message);
    else alert("Error occurred");
  }
};
