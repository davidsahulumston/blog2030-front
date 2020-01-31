import React from "react";
import "./ImageList.css";
import archivo from "../../assets/file.png"

// Rendering individual images
const Image = ({ image }) => {
  return (
    image.src.includes("data:image") ?
    <div className="file-item">
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div> : <div className="file-item">
      <img alt={`archivo -`} src={archivo} className="file-img" />
    </div>

  );
};

// ImageList Component
const ImageList = ({ images }) => {
  
  // render each image by calling Image component
  const renderImage = (image, index) => {
    return (
      <Image
        image={image}
        key={`${image.id}-image`}
      />
    );
  };

  // Return the list of files
  return <section className="file-list">{images.map(renderImage)}</section>;
};

export default ImageList;