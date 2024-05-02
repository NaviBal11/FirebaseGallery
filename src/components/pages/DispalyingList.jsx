import React, { useContext, useState, useEffect } from "react";
import List from "../List";
import UploadForm from "../UploadForm";
import Button from "../Button";
import GalleryContext from "../../context/GalleryContext";

function DisplayingList() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const contextValue = useContext(GalleryContext);
  const { pictures, fetchPictures } = contextValue;

  //fetching pictures for the very first time
  useEffect(() => {
    fetchPictures();
  }, []);

  //Toggle functionality whether to display "Add" or "Close"
  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className=" m-6 flex flex-col items-end justify-end">
        <div className="mr-12">
          <Button onClick={toggle} className="bg-green-700 hover:bg-green-800">
            {isCollapsed ? "Close" : "+ Add"}
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {isCollapsed && <UploadForm />}
      </div>
      <h1 className="font-extrabold font-serif text-4xl text-center p-5 m-2">
        Gallery
      </h1>
      <List pics={pictures} />
    </div>
  );
}

export default DisplayingList;
