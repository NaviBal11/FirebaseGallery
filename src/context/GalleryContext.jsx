import React, { createContext, useState } from "react";
import Gallery from "../handlers/gallery";
import Storage from "../handlers/storage";

const { writeDoc, readDoc, removeDoc } = Gallery;
const { uploadFile, removeFile } = Storage;

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [pictures, setPictures] = useState([]);

  //Reading the docs from firebase and adding into the local state
  const fetchPictures = async () => {
    try {
      const fetchedPictures = await readDoc("stocks");
      setPictures(fetchedPictures);
    } catch (error) {
      console.error("Error fetching pictures:", error);
    }
  };

  //Adding new Item to firebase storage and to local state
  const addPicture = async (item) => {
    try {
      const uploadedFile = await uploadFile(item);

      await writeDoc(uploadedFile, "stocks");

      setPictures([...pictures, uploadedFile]);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  //Deleting the item from firebase and local state
  const removePicture = async (item) => {
    try {
      await removeFile(item);

      const updatedPictures = pictures.filter((pic) => pic.id !== item.id); // Filter based on ID
      setPictures(updatedPictures);
      await removeDoc(item.path, "stocks");
    } catch (error) {
      console.error("Error removing document and file:", error);
    }
  };

  return (
    <GalleryContext.Provider
      value={{
        pictures,
        fetchPictures,
        removePicture,
        addPicture,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContext;
