import React , { Component } from 'react';
import FormUserDetails from './formUserDetails';
import FormPersonalDetails from './formPersonalDetails';
import Confirm from './Confirm';
import Success from './Sucess';
class UserForm extends Component {

    state = {
        step : 1,
        firstName : '',
        lastName : '',
        email : '',
        occupation: '',
        city : '',
        bio : ''
    }

    //process to the next step
    nextStep = () =>{
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    //process to the prev step
    prevStep = () =>{
        console.log('child made a call');
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    //handle field changes
    handleChanges = input => e =>{
        this.setState({[input] : e.target.value});
    }

    render(){
        const { step } = this.state;
        const { firstName, lastName,email,city,bio,occupation} = this.state;
        const values = { firstName, lastName,email,city,bio,occupation};
        
        switch(step){
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChanges={this.handleChanges}
                        values={values}
                    />
                )
            
            case 2:
                return (
                    <FormPersonalDetails 
                        nextStep={this.nextStep}
                        handleChanges={this.handleChanges}
                        values={values}
                        prevStep={this.prevStep}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        values={values}
                        prevStep={this.prevStep}
                    />
                )
            case 4:
                return (
                    <Success                   
                    />
                )
        }
    }
}

export default UserForm;