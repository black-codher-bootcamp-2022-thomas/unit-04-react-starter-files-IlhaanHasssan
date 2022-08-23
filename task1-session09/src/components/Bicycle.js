import React from "react";
import Wheel from "./Wheel";

const Bicycle = (props) => {
  let wheels = [];

  for (let i = 0; i < props.numberOfWheels; i++) {
    wheels.push(<Wheel />);
  }
  return (
    <>
    <h2>
      Good Morning, I am a Bicycle and I have {props.numberOfWheels} wheels!
    </h2>
    {wheels}
    </>
  )
  
};

export default Bicycle;
