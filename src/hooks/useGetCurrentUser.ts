import Parse from "parse";

export const useGetCurrentUser = () => {
    return Parse.User.current();
}