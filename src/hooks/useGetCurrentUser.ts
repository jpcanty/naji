import Parse from "parse";

export const useGetCurrentUser = () => {
    const currentUser = Parse.User.current();
    return currentUser ? {username: currentUser?.getUsername(), email:currentUser?.getEmail(), firstName: currentUser?.get("firstName"), lastName: currentUser?.get("lastName")} : undefined;
}