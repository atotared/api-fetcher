import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.ImageRef = React.createRef(); // React relies on createRef() to access DOM elements
  }

  componentDidMount() {
    console.log(this);
  }

  render() {
    console.log(this.props);
    const {
      // Use destructuring to avoid repetitions below
      description,
      urls: { regular },
    } = this.props.image;
    return (
      <div>
        {/* ImageCard (child) receives props from ImageList (parent) and it's able to access their properties */}
        <img alt={description} src={regular}></img>
      </div>
    );
  }
}

export default ImageCard;
