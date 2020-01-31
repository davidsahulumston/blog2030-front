import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import "./DropZone.css";

const Dropzone = ({ onDrop, accept, maxSize, quantity }) => {
  // Initializing useDropzone hooks with options
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    rejectedFiles
  } = useDropzone({
    onDrop,
    accept,
    maxSize,
    quantity
  });
  const isFileTooLarge =
    rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */
  return (
    <div {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">
            Sueltala{" "}
            <span role="img" aria-label="caca">
              💩
            </span>
          </p>
        ) : (
          <p className="dropzone-content">
            Arrastra el tipo de archivo a subir o clickme tipo:{accept}
            <span role="img" aria-label="caca">
              🍑
            </span>
          </p>
        )}
        {isFileTooLarge && (
          <div className="text-danger mt-2">Esta muy grande<span role="img" aria-label="pepino">
           🥒
        </span>El archivo maximo es: {maxSize/1000000}mb</div>
        )}
        {/* {tooManyFiles && (
            <div className="text-danger mt-2">time to stop<span role="img" aria-label="pepino">
           😫
        </span>El numero archivo maximo es 4</div>
          )
        } */}
      </div>
    </div>
  );
};

export default Dropzone;
