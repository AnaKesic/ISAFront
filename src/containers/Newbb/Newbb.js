import React, { Component } from 'react';
import axios from 'axios'

class Newbb extends Component{

    state={

        name:'',
        address:{
            city:'',
            state:'',
            number:'',
            street:''
        },
        description:'',
        employees:[],
        appointments:[],
        showModal: false,
        newEmployee: {
          email: '',
          password: '',
          name: '',
          surname: ''
        }


    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    
      handleAddressChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
          ...prevState,
          address: {
            ...prevState.address,
            [name]: value
          }
        }));
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data, e.g., submit to the server

        const dto={
            name: this.state.name,
            address: this.state.address,
            description:this.state.description,
            employees:this.state.employees

        };
        axios.post('http://localhost:8090/api/bloodbank/addNew', dto)
        .then(res => {
           console.log(res.data)
        });
       
      };
    
      isFormValid = () => {
        const { name, address, description } = this.state;
        return name.trim() !== '' && address.city.trim() !== '' && address.state.trim() !== '' && description.trim() !== '';
      };
    
      handleAddEmployee = () => {
        this.setState({ showModal: true });
      };
    
      handleModalClose = () => {
        this.setState({ showModal: false });
      };
    
      handleNewEmployeeChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
          ...prevState,
          newEmployee: {
            ...prevState.newEmployee,
            [name]: value
          }
        }));
      };
    
      handleAddNewEmployee = () => {
        this.setState((prevState) => ({
          employees: [...prevState.employees, prevState.newEmployee],
          newEmployee: {
            email: '',
            password: '',
            name: '',
            surname: ''
          },
          showModal: false
        }));
      };
    
      render() {
        const { name, address, description, employees, showModal, newEmployee } = this.state;
        const isFormValid = this.isFormValid();
    
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              {/* Existing form fields */}
              <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={address.city}
            onChange={this.handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={address.state}
            onChange={this.handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={address.number}
            onChange={this.handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={address.street}
            onChange={this.handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
            </form>
    
            <button type="button" onClick={this.handleAddEmployee}>
              Add Employee
            </button>
    
            {employees.map((employee, index) => (
              <div key={index}>
                <p>Email: {employee.email}</p>
                <p>Name: {employee.name}</p>
                <p>Surname: {employee.surname}</p>
              </div>
            ))}
    
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={this.handleModalClose}>
                    &times;
                  </span>
                  <h2>Add Employee</h2>
                  <form>
                    <div>
                      <label>Email:</label>
                      <input
                        type="text"
                        name="email"
                        value={newEmployee.email}
                        onChange={this.handleNewEmployeeChange}
                      />
                    </div>
                    <div>
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={newEmployee.password}
                        onChange={this.handleNewEmployeeChange}
                      />
                    </div>
                    <div>
                      <label>Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={newEmployee.name}
                        onChange={this.handleNewEmployeeChange}
                      />
                    </div>
                    <div>
                      <label>Surname:</label>
                      <input
                        type="text"
                        name="surname"
                        value={newEmployee.surname}
                        onChange={this.handleNewEmployeeChange}
                      />
                    </div>
                    <button type="button" onClick={this.handleAddNewEmployee}>
                      Add Employee
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        );
      }

}
export default (Newbb)