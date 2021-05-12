import React, { Component } from "react";
import "../../index.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

class Progress extends Component {
  static defaultProps = {
    text: null,
    value: null,
    color: "red",
    size: 200
  };

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          const percentage = isVisible ? this.props.value : 0;
          return (
            <CircularProgressbar
              styles={{
                root: {
                  width: this.props.size
                },
                path: {
                  stroke:
                    this.props.color === "red"
                      ? "rgba(192,3, 39,1)"
                      : "rgba(54,166,0,0.7)",
                  strokeLinecap: "round",
                  transition: "stroke-dashoffset 1s ease 0.5s"
                },
                trail: {
                  stroke: "rgba(0,0,0,0.3)",
                  strokeLinecap: "butt"
                },
                text: {
                  fill: "rgba(255,255,255,0.7)",
                  fontSize: "20px"
                }
              }}
              value={percentage}
              text={
                this.props.text != null ? this.props.text : `${percentage}%`
              }
            />
          );
        }}
      </VisibilitySensor>
    );
  }
}

export default Progress;
