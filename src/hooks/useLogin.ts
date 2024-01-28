import Parse from "parse";
import { Error } from "parse";

export const useLogin = async (username: string, password: string) => {
  try {
    return await Parse.User.logIn(username, password).then((user) => {
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
