import React, { Component } from 'react';
import axios from 'axios'
import classes from './Flight.module.css';
import { format, parse } from 'date-fns';
import { connect } from 'react-redux';

class Flights extends Component {

       state={
        searchAirportDeparture: '',
        searchAirportDestination: '',
        searchArrivalTime: '',
        searchDepartureTime: '',
        searchNumOfCards: '',
        flights:[],
        showSpan:false,
        specialPrice:''
       }

       componentDidMount() {
        axios.get('http://localhost:8082/api/Flight/all')
          .then(res => {
              const fli=res.data;
             this.setState({flights:fli})
             //this.state.flights=res.data;
             console.log(this.state)
          });
      }
      
       handleAdd = (selectedFlight) => {
        var num="";
        {this.state.searchNumOfCards==''? num=1 : num=this.state.searchNumOfCards}
        var obj={
               FlightID:selectedFlight.id,
               PassengerID: localStorage.userId,
               num:num
        }
        axios.post('http://localhost:8082/api/Ticket/add',obj)
        .then(res => {
           
           
           //this.state.flights=res.data;
           console.log(res.data)
        });
        // Use the selectedFlight object to access the information of the clicked flight card
        console.log(selectedFlight);
        // Perform additional logic or actions based on the selected flight card
        // For example, you can dispatch an action, update state, or navigate to a new page
      };
    

      handleSearchAirportDepartureChange = (event) => {
        this.setState({ searchAirportDeparture: event.target.value });
      };
      
      handleSearchAirportDestinationChange = (event) => {
        this.setState({ searchAirportDestination: event.target.value });
      };
      
      handleSearchArrivalTimeChange = (event) => {
        this.setState({ searchArrivalTime: event.target.value });
      };
      
      handleSearchDepartureTimeChange = (event) => {
        this.setState({ searchDepartureTime: event.target.value });
      };
      
      handleSearchNumOfCardsChange = (event) => {
        this.setState({ searchNumOfCards: event.target.value });
      };

      handleSearch = () => {
        const {
          searchAirportDeparture,
          searchAirportDestination,
          searchArrivalTime,
          searchDepartureTime,
          searchNumOfCards,
          flights
        } = this.state;
         this.state.showSpan=true;
        
        if (
          searchAirportDeparture.trim() === '' ||
          searchAirportDestination.trim() === '' ||
          searchArrivalTime.trim() === '' ||
          searchDepartureTime.trim() === '' ||
          searchNumOfCards.trim() === ''
        ) {
          // Display an error message or handle the empty fields as per your requirement
          console.log('All fields are required');
          return;
        }
      
        const filteredFlights = flights.filter((flight) => {
          const { airportDeparture, airportDestination, arrivalTime, departureTime, capacity, ticketPrice } = flight;
          this.state.specialPrice= ticketPrice * Number(searchNumOfCards);
          // Filter by airportDeparture, airportDestination, and capacity
          const isValidAirportDeparture = airportDeparture.name.toLowerCase().includes(searchAirportDeparture.toLowerCase());
          const isValidAirportDestination = airportDestination.name.toLowerCase().includes(searchAirportDestination.toLowerCase());
          const isValidCapacity = searchNumOfCards === '' || capacity >= Number(searchNumOfCards);
      
          // Check arrival time and departure time if they are not empty
          let isValidArrivalTime = true;
          let isValidDepartureTime = true;
          if (searchArrivalTime !== '' && searchDepartureTime !== '') {
            const selectedArrivalTime = new Date(searchArrivalTime);
            const selectedDepartureTime = new Date(searchDepartureTime);
            const arr= new Date(arrivalTime);
            const dep = new Date(departureTime);
            isValidArrivalTime = selectedArrivalTime >= arr;
            isValidDepartureTime = selectedDepartureTime <= dep;
          }
      
          return isValidAirportDeparture && isValidAirportDestination && isValidArrivalTime && isValidDepartureTime && isValidCapacity;
        });
      
        // Update the state with the filtered flights
        this.setState({ flights:filteredFlights });
      };

      render() {
       //const { flights} = this.state.flights;
      
              
                      
                            return(    
                                   <React.Fragment>
                                    
          
          
          <div className={classes.searchContainer}>
          <div className={classes.fields}>
          <div className={classes.inputfield}>
          <input
            type="text"
            placeholder="Airport Departure"
            value={this.state.searchAirportDeparture}
            onChange={this.handleSearchAirportDepartureChange}
            required
          />
           <span> "jjkj" </span>
          </div>
          <div className={classes.inputfield}>
          <input
            type="text"
            placeholder="Airport Destination"
            value={this.state.searchAirportDestination}
            onChange={this.handleSearchAirportDestinationChange}
            required
          />
           <span> "jjkj" </span>
          </div>
          <div className={classes.inputfield}>
             <input
            type="datetime-local"
            placeholder="Departure Time"
            value={this.state.searchDepartureTime}
            onChange={this.handleSearchDepartureTimeChange}
            required
          />
          
          
          {(this.state.searchArrivalTime !== '' &&
            this.state.searchDepartureTime !== '' &&
            new Date(this.state.searchDepartureTime) > new Date(this.state.searchArrivalTime) )? 
              <label className={classes.validationError}>Departure time cannot be after arrival time</label>: 
              <span> "jjkj" </span>
          }
          </div>
          <div className={classes.inputfield}>
          <input
            type="datetime-local"
            placeholder="Arrival Time"
            value={this.state.searchArrivalTime}
            onChange={this.handleSearchArrivalTimeChange}
            required
          />
          {(this.state.searchArrivalTime !== '' &&
            this.state.searchDepartureTime !== '' &&
            new Date(this.state.searchArrivalTime) < new Date(this.state.searchDepartureTime)) ? 
              <label  className={classes.validationError}>Arrival time cannot be before departure time</label>:
              <span> "jjkj" </span>
          }
         </div>
         <div className={classes.inputfield}>
          <input
            type="number"
            placeholder="Number of Cards"
            value={this.state.searchNumOfCards}
            onChange={this.handleSearchNumOfCardsChange}
            required
          />
          {(this.state.searchNumOfCards !== '' &&
            (isNaN(this.state.searchNumOfCards) || Number(this.state.searchNumOfCards) <= 0)) ? 
              <label className={classes.validationError}>Number of cards must be a positive integer</label>:
              <span> "jjkj" </span>
          }
          </div>
          <div className={classes.inputfield}>
          <button onClick={this.handleSearch}>Search</button>
          <span> "jjkj" </span>
       </div>
        </div>
        </div>
                                   {this.state.flights.map(user => {
                                          const { airportDeparture,airportDestination,arrivalTime,capacity,deleted, departureTime,duration,id,ticketPrice}=user;
                                          var d1= new Date(arrivalTime);
                                          const datearr= format(d1,"dd.MM.yyyy");
                                          const timearr=format(d1,"hh:mm");

                                          var d2=new Date(departureTime);
                                          const datedep= format(d2,"dd.MM.yyyy");
                                          const timedep=format(d2,"hh:mm");
                                  return(<div className={classes.flightcard}>
                                  
                                   <div className={classes.flightcardcontent}>
                                     <div className={classes.flightrow}>
                                       <div className={classes.flightfrom}>
                                         <span className={classes.fromcode}>{airportDeparture.name}</span>
                                         <span className={classes.fromcity}>Departure date: {datearr}</span>
                                         <span className={classes.fromcity}>Departure time: {timedep}</span>
                                       </div>
                                       <div className={classes.plane}>
                                         <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt=""/>
                                       </div>
                                       <div className={classes.flightto}>
                                         <span className={classes.tocode}>{airportDestination.name}</span>
                                         <span className={classes.tocity}>Arrival date: {datearr}</span>
                                         <span className={classes.tocity}>Arrival time: {timearr}</span>
                                       </div>
                                     </div>
                                     
                                     <div className={classes.flightdetailsrow}>
                                                 <div className={classes.flightoperator}>
                                                        <span className={classes.title}></span>
                                                       
                                                 </div>
                                                 <div className={classes.flightnumber}>
                                                        <span className={classes.title}>Price: {ticketPrice}</span>
                                                        { this.state.showSpan ?<span className={classes.title}>Price for {this.state.searchNumOfCards}: {this.state.specialPrice} </span>:null}
                                                       
                                                        {/* <span className={classes.detail}>{ticketPrice}</span> */}
                                                 </div>
                                                 <div className={classes.flightclass}>
                                                  {(this.props.isAuthenticated && this.props.isUser)?  <button className={classes.btnn} onClick={() => this.handleAdd(user)}>Buy ticket</button> :null }
                                                       
                                                 </div>
                                                 
                                    
                                  
                              </div> 
                              </div>
                              </div>
                             
       ) })}
                              </React.Fragment>
                              
                            );
                       
                      


              
                
    
     }


}

const mapStateToProps = state => {
  return {

    isAuthenticated: state.auth.token !== null,
    isUser: state.auth.role==0
  }}
export default connect( mapStateToProps )( Flights )