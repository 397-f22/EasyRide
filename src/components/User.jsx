import { useAuthState, addNewUser, useDbData } from "../utilities/firebase";

const AddUserDB = (user) => {
  if (user) {
    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      rides: "[]",
    };

    addNewUser(newUser);
  }
};

export const getUser = () => {
  const [users, error] = useDbData("/users");
  const [user] = useAuthState();

  if (user) {
    if (error) return error.toString();
    if (users === undefined) return "Loading...";
    if (!users) return "No user found";

    if (user.uid in users) {
      return users[user.uid];
    } else {
      AddUserDB(user);
      return users[user.uid];
    }
  }
};
