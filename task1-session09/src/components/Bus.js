import React from "react";
import Wheel from "./Wheel";

const Bus = (props) => {
  let wheels = [];

  for (let i = 0; i < props.numberOfWheels; i++) {
    wheels.push(<Wheel />);
  }

  return (
    <>
      <h2>Hello, I am a bus and I have {props.numberOfWheels} wheels!</h2>
      {wheels}
    </>
  );
};
export default Bus;
