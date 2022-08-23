import React from "react";
import Wheel from "./Wheel";

const Truck = (props) => {
  let wheels = [];
  for (let i = 0; i < props.numberOfWheels; i++) {
    wheels.push(<Wheel />);
  }
  return (
    <>
      <h2>Hola, I am a truck! and I have {props.numberOfWheels} wheels! </h2>
      {wheels}
    </>
  );
};

export default Truck;
