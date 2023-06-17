import React, { Component } from 'react';
import classes from './modal.css';
import axios from 'axios';
class FlightForm extends Component {
  state = {
    destinationName: '',
    airportArrivalName: '',
    arrivalDestinationName: '',
    departureAirportName: '',
    arrivalTime: '',
    departureTime: '',
    cost: '',
    capacity: '',
    isFormValid: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validateForm);
  };

  handleAddFlight = (event) => {
    event.preventDefault();
    // Perform the action for adding the flight
   var flight={
    airportDeparture
    : 
    {cityID: this.state.destinationName,
     name: this.state.departureAirportName},
   
    airportDestination
    : 
    {cityID: this.state.arrivalDestinationName,
       name: this.state.airportArrivalName },
   
    arrivalTime: this.state.arrivalTime,
   
    capacity: this.state.capacity,
    departureTime:this.state.departureTime,
    ticketPrice:this.state.cost
   
   }
    axios.post('http://localhost:8082/api/Flight/add',flight)
          .then(res => {
              const fli=res.data;
             this.setState({flights:fli})
             //this.state.flights=res.data;
             console.log(this.state)
          });
    console.log('Flight added:', this.state);
    // Reset the form
    this.setState({
      destinationName: '',
      airportArrivalName: '',
      arrivalDestinationName: '',
      departureAirportName: '',
      arrivalTime: '',
      departureTime: '',
      cost: '',
      capacity: '',
      isFormValid: false,
    });
  };

  validateForm = () => {
    const {
      destinationName,
      airportArrivalName,
      arrivalDestinationName,
      departureAirportName,
      arrivalTime,
      departureTime,
      cost,
      capacity,
    } = this.state;

    const isDestinationValid = destinationName.trim() !== '';
    const isAirportArrivalValid = airportArrivalName.trim() !== '';
    const isArrivalDestinationValid = arrivalDestinationName.trim() !== '';
    const isDepartureAirportValid = departureAirportName.trim() !== '';
    const isArrivalTimeValid = arrivalTime.trim() !== '';
    const isDepartureTimeValid = departureTime.trim() !== '';
    const isCostValid = !isNaN(cost) && cost !== '';
    const isCapacityValid = !isNaN(capacity) && capacity !== '';

    const isFormValid =
      isDestinationValid &&
      isAirportArrivalValid &&
      isArrivalDestinationValid &&
      isDepartureAirportValid &&
      isArrivalTimeValid &&
      isDepartureTimeValid &&
      isCostValid &&
      isCapacityValid;

    this.setState({ isFormValid });
  };

  render() {
    const {
      destinationName,
      airportArrivalName,
      arrivalDestinationName,
      departureAirportName,
      arrivalTime,
      departureTime,
      cost,
      capacity,
      isFormValid,
    } = this.state;

    return (
      <div className={classes.flightcard}>
      <form>
        <div className="form-container">
          <div className="form-row">
        <input className={classes.InputElement}
          type="text"
          name="destinationName"
          placeholder="Destination Name"
          value={destinationName}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div className="form-row">
        <input 
          type="text"
          name="airportArrivalName"
          placeholder="Airport Arrival Name"
          value={airportArrivalName}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div className="form-row">
        <input 
          type="text"
          name="arrivalDestinationName"
          placeholder="Arrival Destination Name"
          value={arrivalDestinationName}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div className="form-row">
        <input 
          type="text"
          name="departureAirportName"
          placeholder="Departure Airport Name"
          value={departureAirportName}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div className="form-row">
        <input
          type="datetime-local"
          name="arrivalTime"
          placeholder="Arrival Time"
          value={arrivalTime}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div className="form-row">
        <input
          type="datetime-local"
          name="departureTime"
          placeholder="Departure Time"
          value={departureTime}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div className="form-row">
        <input
          type="text"
          name="cost"
          placeholder="Cost"
          value={cost}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div className="form-row">
        <input
          type="text"
          name="capacity"
          placeholder="Capacity"
          value={capacity}
          onChange={this.handleInputChange}
          required
        />
        </div>
         <div className="form-row">
        <button type="submit" onClick={this.handleAddFlight} disabled={!isFormValid}>
          Add Flight
        </button>
        </div>
        </div>
      </form>
      </div>
    );
  }
}

export default (FlightForm);