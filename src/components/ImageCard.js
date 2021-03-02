import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef(); // React relies on createRef() to access DOM elements
  }

  // As images are still loading, the returned height without event listener would be 0
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const gridSpans = Math.ceil(height / 10);
    this.setState({ spans: gridSpans });
  };

  render() {
    console.log(this.props);
    const {
      // Use destructuring to avoid repetitions below
      description,
      urls: { regular },
    } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* ImageCard (child) receives props from ImageList (parent) and it's able to access their properties */}
        <img ref={this.imageRef} alt={description} src={regular}></img>
      </div>
    );
  }
}

export default ImageCard;
