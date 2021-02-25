import React from "react";
import ImageCard from "./ImageCard";

import "./ImageList.css";

const ImagesList = (props) => {
  console.log(props);
  // ImageList (parent) passes props to ImageCard (child) => See ImageCard
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImagesList;
