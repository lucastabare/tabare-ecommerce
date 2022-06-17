import { collection, getDocs, query, where } from "@firebase/firestore";
import { doc, getDod } from "@firebase/firestore";

import db from "../../firebaseConfig";

export const firestorefetch = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(collection(db, "products"), where("category", "==", idCategory));
  }
};
