import { Error } from "parse";
import Parse from "parse";

export const useSignUp = async () => {
  const user = new Parse.User();
  user.set("username", "my name");
  user.set("password", "my pass");
  user.set("email", "email@example.com");

  // other fields can be set just like with Parse.Object
  user.set("phone", "415-392-0202");
  try {
    return await user.signUp().then((user) => {
      return {
        username: user.getUsername(),
        email: user.getEmail(),
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
