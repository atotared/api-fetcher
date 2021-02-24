import React from "react";

const ImagesList = (props) => {
  console.log(props);
  const images = props.images.map(({ id, description, urls: { regular } }) => {
    // Use destructuring to avoid using image.id, image.description, etc. inside curly braces below
    return <img key={id} alt={description} src={regular}></img>;
  });

  return <div>{images}</div>;
};

export default ImagesList;
