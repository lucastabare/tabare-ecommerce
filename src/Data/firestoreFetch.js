import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";

import db from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(
      collection(db, "products"),
      where("categoryProduct", "==", idCategory)
    );
  } else {
    q = query(collection(db, "products"), orderBy("name"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFirestore;
};
