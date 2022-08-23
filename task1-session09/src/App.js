// import logo from './logo.svg';
import './App.css';
import Car from './components/Car'
import Bicycle from './components/Bicycle';
import Truck from './components/Truck';
import Skateboard from './components/Skateboard';
import Bus from './components/Bus';

function App() {
  return (

    <> <Car numberOfWheels="4" />
    <Bicycle numberOfWheels="2" />
    <Truck numberOfWheels="8" />
    <Skateboard numberOfWheels="4" />
    <Bus numberOfWheels="6" />
    </>
  );
}

export default App;
