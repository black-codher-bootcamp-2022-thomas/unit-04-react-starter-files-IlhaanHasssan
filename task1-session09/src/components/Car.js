import React from "react";
import Wheel from "./Wheel";

const Car = (props) => {
  let wheels = [];

  for (let i = 0; i < props.numberOfWheels; i++) {
    wheels.push(<Wheel />);
  }
  return (
    <>
      <h2> Hi, I'm a car! I have {props.numberOfWheels} wheels!</h2>
      {wheels}
    </>
  );
};

export default Car;
