import { Component } from "react";
import Button from "../Button";
import "./style.css";

class Slider extends Component {
  render() {
    const { SaveUp, ProductName, Description, ImgUrl } = this.props;
    return (
      <div className="background">
        <div className="container flex">
          <div className="slider flex">
            <div className="align flex">
              <div className="detail flex ">
                <p>{SaveUp}</p>
                <h1>{ProductName}</h1>
                <p>{Description}</p>
                <Button>SHOP NOW</Button>
              </div>
            </div>
            <div className="split"></div>
            <div className="flex img">
              <img src={ImgUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
