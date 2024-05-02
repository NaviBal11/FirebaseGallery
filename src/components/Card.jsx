import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import GalleryContext from "../context/GalleryContext";

function Card({ item, deletionMode }) {
  const contextValue = useContext(GalleryContext);
  const { removePicture } = contextValue;

  //handling the deletion
  const handleCardClick = (item) => {
    if (deletionMode) {
      removePicture(item);
    }
  };

  return (
    <div
      className={`w-64 shadow-md rounded-md relative ${
        deletionMode ? "cursor-pointer animate-pulse" : ""
      }`}
      onClick={() => handleCardClick(item)}
    >
      {deletionMode && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-transparent border-none text-white"
          style={{ width: "100px", height: "100px" }}
        >
          <TiDelete size={70} />
        </button>
      )}

      <div
        className="h-64 bg-cover bg-center rounded-t-md"
        style={{
          backgroundImage: `url(${item.path})`,
          width: "100%",
          height: "200px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="px-6 py-2 flex justify-between ">
        <div className="font-semibold text-xl mb-2">{item.title}</div>
      </div>
    </div>
  );
}

export default Card;
