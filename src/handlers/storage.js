import { v4 as uuidv4 } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../lib/conf";

const Storage = {
  uploadFile: async (media) => {
    try {
      const uniqueId = uuidv4(); // Generate unique identifier
      const mediaRef = ref(storage, `images/${uniqueId}_${media.title}`); // Include unique identifier in the path
      const snapshot = await uploadBytes(mediaRef, media.file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return { path: downloadURL, title: media.title, id: uniqueId }; // Return the unique identifier along with other data
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  },

  removeFile: async (media) => {
    try {
      // Create a reference to the file in Firebase Storage
      const fileRef = ref(storage, `images/${media.id}_${media.title}`);

      // Delete the file from Firebase Storage
      await deleteObject(fileRef);

      return "File removed successfully.";
    } catch (error) {
      console.error("Error removing file:", error);
      throw error;
    }
  },
};

export default Storage;
