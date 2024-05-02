import {
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../lib/conf";

const Gallery = {
  writeDoc: async (...args) => {
    try {
      const [data, collection_name] = args;
      const collectionRef = collection(db, collection_name);
      const docRef = doc(collectionRef);
      await setDoc(docRef, {
        path: data.path,
        title: data.title,
        id: data.id,
      });
      return "new doc successfully inserted";
    } catch (error) {
      console.log("Error inserting document:", error);
    }
  },
  readDoc: async (...args) => {
    try {
      const [collection_name] = args;
      const docs = [];
      const ref = collection(db, collection_name);
      const snapshots = await getDocs(ref);
      snapshots.forEach((doc) => {
        const d = { ...doc.data() };
        docs.push(d);
      });
      return docs;
    } catch (error) {
      console.log("Error reading document:", error);
    }
  },
  removeDoc: async (...args) => {
    try {
      const [path, collection_name] = args;

      const galleryRef = collection(db, collection_name);
      const q = query(galleryRef, where("path", "==", path));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      return "Document removed successfully.";
    } catch (error) {
      console.error("Error removing document:", error);
      throw error;
    }
  },
};

export default Gallery;
