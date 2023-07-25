import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            Confirmpassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    isPaswordSame:true
                },
                valid: false,
                touched: false
            },
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Surname'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            jmbg: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'JMBG'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 13,
                    maxLenght:13,
                    isNumeric:true
                },
                valid: false,
                touched: false
            },
            phoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    isNumeric:true
                },
                valid: false,
                touched: false
            },
            adress: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Adress'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'State'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            job: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Job'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            jobDesc: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Job description'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
             gender: {
                elementType: 'radio',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Gender'
                },
                value: '',
                validation: {
                    required: true,
                    
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    }

    componentDidMount() {
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }
        if ( rules.isPaswordSame ) {
           isValid=value=== this.state.controls.password.value && isValid
        }
        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        var user={
            email: this.state.controls.email.value,
            password: this.state.controls.password.value,
            ime: this.state.controls.name.value,
            prezime: this.state.controls.surname.value,
            adresa: this.state.controls.adress.value,
            grad: this.state.controls.city.value,
            drzava: this.state.controls.state.value,
            telefon: this.state.controls.phoneNumber.value,
            pol: this.state.controls.gender.value,
            zanimanje: this.state.controls.job.value,
            infoZanimanje: this.state.controls.jobDesc.value,
            jmbg: this.state.controls.jmbg.value
        }
          this.props.register(user);
        //this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
    }

   

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    render () {
        const formElementsArray = [];

        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }
        
        const formElementsToRender = formElementsArray.slice(0, formElementsArray.length - 1);

        let form = formElementsToRender.map( formElement => (
            <div>
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
                </div>
        ) );

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                <div className="reg">
                <form onSubmit={this.submitHandler}>
                    {form}
               
                    <div className="form-group">
                        <label></label>
                        <div className="radio">
                        <label>Gender:</label>
                        <span >
                        <label>
                            <input
                            type="radio"
                            value="MUSKI"
                            checked={this.state.controls.gender.value === 'MUSKI'}
                            onChange={( event ) => this.inputChangedHandler( event, "gender" )}
                            />
                            Male
                        </label>
                        </span>
                        <span>
                        <label>
                            <input
                            type="radio"
                            value="ZENSKI"
                            checked={this.state.controls.gender.value === 'ZENSKI'}
                            onChange={( event ) => this.inputChangedHandler( event, "gender" )}
                            />
                            Female
                        </label>
                        </span>
                        </div>
                        </div>
                        <Button btnType="Success">SUBMIT</Button>

                        
                </form>
                </div>
                <Button 
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
        register:(user)=>dispatch(actions.register(user))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );