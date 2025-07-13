import { db } from "../data/db.js";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const usersCollection = collection(db, "users");

const getUserById = async (id) => {
  const userDoc = await getDoc(doc(usersCollection, id));
  if (userDoc.exists()) {
    return { id: userDoc.id, ...userDoc.data() };
  } else {
    return null;
  }
};

const getAllUsers = async () => {
  const querySnapshot = await getDocs(usersCollection);
  let users = [];
  querySnapshot.forEach((docSnap) =>
    users.push({ id: docSnap.id, ...docSnap.data() })
  );
  return users;
};

const saveUser = async (user) => {
  const newUser = await addDoc(usersCollection, user);
  return newUser.id;
};

const deleteUser = async (id) => {
  const res = await deleteDoc(doc(usersCollection, id));
  console.log(res);
  return res
  p

}

export default { getUserById, getAllUsers, saveUser, deleteUser };
