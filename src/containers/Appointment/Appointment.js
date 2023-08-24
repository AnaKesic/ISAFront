import React, { Component } from 'react';

class Appointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: '',
      integerValue: '',
      comboBox1Value: ''
      
    };

    // Define options for the combo boxes
    this.comboBox1Options = ['Option 1', 'Option 2', 'Option 3'];

  }
  

  handleDateTimeChange = (event) => {
    this.setState({ dateTime: event.target.value });
  };

  handleIntegerChange = (event) => {
    this.setState({ integerValue: event.target.value });
  };

  handleComboBox1Change = (event) => {
    this.setState({ comboBox1Value: event.target.value });
  };

  handleComboBox2Change = (event) => {
    this.setState({ comboBox2Value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, you can send the data to the server here or do anything with it.
    console.log('Form data:', {
      dateTime: this.state.dateTime,
      integerValue: parseInt(this.state.integerValue),
      comboBox1Value: this.state.comboBox1Value,
      comboBox2Value: this.state.comboBox2Value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Date-Time Picker:</label>
          <input
            type="datetime-local"
            value={this.state.dateTime}
            onChange={this.handleDateTimeChange}
          />
        </div>

        <div>
          <label>Integer Field:</label>
          <input
            type="number"
            value={this.state.integerValue}
            onChange={this.handleIntegerChange}
          />
        </div>

        <div>
          <label>Combo Box 1:</label>
          <select value={this.state.comboBox1Value} onChange={this.handleComboBox1Change}>
            <option value="">Select an option</option>
            {this.comboBox1Options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Combo Box 2:</label>
          <select value={this.state.comboBox2Value} onChange={this.handleComboBox2Change}>
            <option value="">Select an option</option>
            {this.comboBox2Options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default (Appointment);
