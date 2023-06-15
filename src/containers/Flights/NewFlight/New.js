import React, { Component } from 'react';
import classes from'./modal.css';
import { connect } from 'react-redux';

class New extends Component {
    state = {
        controls: {
            dest1: {
                elementType: 'input',
                elementConfig: {
                    type: 'dest1',
                    placeholder: 'Departure city'
                },
                value: '',
                validation: {
                    required: true
                   
                },
                valid: false,
                touched: false
            },
            name1: {
                elementType: 'input',
                elementConfig: {
                    type: 'name1',
                    placeholder: 'Name of city'
                },
                value: '',
                validation: {
                    required: true
                    
                },
                valid: false,
                touched: false
            },
            dest2: {
                elementType: 'input',
                elementConfig: {
                    type: 'dest2',
                    placeholder: 'Arrival city'
                },
                value: '',
                validation: {
                    required: true
                    
                },
                valid: false,
                touched: false
            },
            price: {
                elementType: 'input',
                elementConfig: {
                    type: 'price',
                    placeholder: 'Price in $'
                },
                value: '',
                validation: {
                    required: true,
                   isNumeric:true
                },
                valid: false,
                touched: false
            },
            datetime1: {
                elementType: 'input',
                elementConfig: {
                    type: 'time1',
                    placeholder: 'Date and time of departure'
                },
                value: '',
                validation: {
                    required: true
               
                },
                valid: false,
                touched: false
            },
            datetime2: {
                elementType: 'input',
                elementConfig: {
                    type: 'pdatetime2',
                    placeholder: 'Date and time of arrival'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            pass: {
                elementType: 'input',
                elementConfig: {
                    type: 'passengers',
                    placeholder: 'number  of passengers'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
          
          
        },
        isSignup: true
    }
    

   
    render () {
   

  

   

   

   
  
        return(/*<div className={classes.flightcard}>
                                  
            <div className={classes.flightcardcontent}>
              <div className={classes.flightrow}>
                <div className={classes.flightfrom}>
                  <span className={classes.fromcode}>
                    <input type="text"></input>
                  </span>
                  <span className={classes.fromcity}>Departure date:</span>
                  <span className={classes.fromcity}>Departure time:</span>
                </div>
                <div className={classes.plane}>
                  <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt=""/>
                </div>
                <div className={classes.flightto}>
                  <span className={classes.tocode}></span>
                  <span className={classes.tocity}>Arrival date: </span>
                  <span className={classes.tocity}>Arrival time: </span>
                </div>
              </div>
              
              <div className={classes.flightdetailsrow}>
                          <div className={classes.flightoperator}>
                                 <span className={classes.title}></span>
                                
                          </div>
                          <div className={classes.flightnumber}>
                                 <span className={classes.title}>Price:</span>
                                 { <span className={classes.detail}>{ticketPrice}</span> }
                          </div>
                          <div className={classes.flightclass}>
                           {/* {this.props.isAuthenticated? <button className={classes.btnn}>Buy ticket</button> :null } }
                                
                          </div>
                          
             
           
       </div> 
       </div>
       </div>*/
       <div> anana

       </div>
      
)
   
}

};

export default New