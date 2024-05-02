import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Skeleton from "./Skeleton";

function List({ pics }) {
  const [deletionMode, setDeletionMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDeletionMode = () => {
    setDeletionMode(!deletionMode);
  };

  //Setting the timings for skeleton
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="m-12">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          {pics.length > 0 && (
            <div className="ml-5">
              <Button
                onClick={toggleDeletionMode}
                className="bg-red-700 hover:bg-red-800"
                style={{ position: "absolute", top: "-40px", right: 0 }}
              >
                Delete Item
              </Button>
              {deletionMode && (
                <p>Tap on any image to remove it from Gallery</p>
              )}
            </div>
          )}
          <div className="m-5 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pics.map((item) =>
                loading ? (
                  <Skeleton key={item.id} />
                ) : (
                  <Card key={item.id} item={item} deletionMode={deletionMode} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
