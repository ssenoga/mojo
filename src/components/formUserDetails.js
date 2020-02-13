/* eslint-disable */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton, Card } from 'material-ui';
class FormUserDetails extends Component {

    continue = e => {
        console.clear();
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChanges} = this.props;
        return (
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter User Details' />

                    <Card className='card'>
                    <TextField 
                        floatingLabelText='First Name'
                        hintText='Enter first name'
                        onChange={handleChanges('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                        floatingLabelText='Last Name'
                        hintText='Enter last name'
                        onChange={handleChanges('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField 
                        floatingLabelText='Email Address'
                        hintText='Enter email address'
                        onChange={handleChanges('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label='Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    </Card>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin: 15
    }
}

module.exports = FormUserDetails;