import React from "react";

const ImageCard = (props) => {
  console.log(props);
  const {
    // Use destructuring to avoid repetitions below
    description,
    urls: { regular },
  } = props.image;
  return (
    <div>
      {/* ImageCard (child) receives props from ImageList (parent) and it's able to access their properties */}
      <img alt={description} src={regular}></img>
    </div>
  );
};

export default ImageCard;
