import { db } from "../data/db.js";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

const getProductById = async (id) => {
  const productDoc = await getDoc(doc(productsCollection, id));
  if (productDoc.exists()) {
    return { id: productDoc.id, ...productDoc.data() };
  } else {
    return null;
  }
};

const getAllProducts = async () => {
  const querySnapshot = await getDocs(productsCollection);
  let products = [];
  querySnapshot.forEach((docSnap) =>
    products.push({ id: docSnap.id, ...docSnap.data() })
  );
  return products;
};

const saveProduct = async (product) => {
  const newProduct = await addDoc(productsCollection, product);
  return newProduct.id;
};

const deleteProduct = async (id) => {
  await deleteDoc(doc(productsCollection, id));
};

export default { getProductById, getAllProducts, saveProduct, deleteProduct };
