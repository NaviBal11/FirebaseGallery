import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import GalleryContext from "../context/GalleryContext";

function UploadForm() {
  const { register, handleSubmit, reset } = useForm();
  const contextValue = useContext(GalleryContext);
  const { addPicture } = contextValue;

  const upload = (data) => {
    const { path, title } = data;
    const newItem = { file: path[0], title };
    addPicture(newItem);

    reset(); // Reset the form after successful upload
  };

  return (
    <div>
      <h1 className="font-normal text-2xl text-center p-4">Upload Image</h1>
      <form onSubmit={handleSubmit(upload)}>
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            placeholder="title"
            {...register("title", {
              required: "Title is required!!",
            })}
            className="pl-2"
          />

          <Input
            type="file"
            className="text-slate-500 file:mr-2 file:py-2 file:px-4 file:border-0 file:text-sm
         file:bg-slate-300 hover:file:bg-slate-400"
            {...register("path", { required: "Please upload image!!" })}
          />
          <div className="flex items-end justify-end">
            <Button
              className="bg-green-700 hover:bg-green-800 w-1/2 "
              type="submit"
            >
              Upload
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
