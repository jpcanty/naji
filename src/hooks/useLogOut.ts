import Parse from "parse";

export const useLogout = async () => {
    await Parse.User.logOut();
    const currentUser = Parse.User.current(); // this will now be null
}