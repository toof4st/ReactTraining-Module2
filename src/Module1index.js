import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = props => {
  return (
    <div className="App">
      <h2>Welcome to React Transportation</h2>
      The best place to buy vehicles online
      <Options />
      <Vehicles type="Cars" />
      <Vehicles type="Trucks" />
      <Vehicles type="Convertibles" />
    </div>
  );
};

const Options = props => {
  return (
    <div className="App">
      <h2>Choose Options</h2>
      <p>
        New Only{" "}
        <input
          type="checkbox"
          id="coding"
          name="interest"
          value="coding"
          checked
        />
      </p>
      <div>
        Select Type
        <select>
          <Option Name="All" />
          <Option Name="Cars" />
          <Option Name="Trucks" />
          <Option Name="Convertibles" />
        </select>
      </div>
    </div>
  );
};

const Option = props => {
  return <option value={props.Name}>{props.Name}</option>;
};

const Vehicles = props => {
  let vehicles = vehicleList.filter(v => v.type == props.type);
  const vehicleListItems = vehicles.map(vehicles => (
    <VehicleTable
      year={vehicles.year}
      model={vehicles.model}
      price={vehicles.price}
    />
  ));
  return (
    <div>
      <h2>{props.type}</h2>
      {vehicleListItems}
    </div>
  );
};

const vehicleList = [
  { type: "Cars", year: "2013", model: "A", price: "32000" },
  { type: "Cars", year: "2011", model: "B", price: "4400" },
  { type: "Cars", year: "2016", model: "B", price: "15500" },
  { type: "Trucks", year: "2014", model: "D", price: "18000" },
  { type: "Trucks", year: "2013", model: "E", price: "5200" },
  { type: "Convertibles", year: "2009", model: "F", price: "2000" },
  { type: "Convertibles", year: "2010", model: "G", price: "6000" },
  { type: "Convertibles", year: "2012", model: "H", price: "12500" },
  { type: "Convertibles", year: "2017", model: "M", price: "50000" }
];

const VehicleTable = props => {
  return (
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>{props.year}</td>
          <td>{props.model}</td>
          <td>${props.price}</td>
          <td>
            <button>Buy Now</button>
          </td>
        </tr>
      </table>
    </ul>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
