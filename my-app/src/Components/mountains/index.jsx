import React from "react";
export class Mountain extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.peak !== this.props.peak ||
      nextProps.mountain !== this.props.mountain ||
      nextProps.county !== this.props.county ||
      nextProps.height !== this.props.height ||
      nextProps.cottage !== this.props.cottage
    );
  }
  componentDidUpdate() {
    console.log("randare mountains");
  }
  render() {
    return (
      <div className="mountain-item">
        <span>Peak: {this.props.peak}</span>
        <span>Mountains: {this.props.mountain}</span>
        <span>County: {this.props.county}</span>
        <span>Height: {this.props.height}m</span>
        <span>
          Cottage:
          {this.props.cottage ? this.props.cottage : "There is no cottage!"}
        </span>
        <button onClick={() => this.props.addToCart(this.props.itemId)}>
          Get the trip
        </button>
      </div>
    );
  }
}