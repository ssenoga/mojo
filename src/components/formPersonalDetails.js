import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton, Card } from 'material-ui';
class FormPersonalDetails extends Component {

    continue = e => { 
        this.props.nextStep();
        e.preventDefault();
    }

    btnBack = e =>{
        this.props.prevStep();
        e.preventDefault();
    }

    render() {
        const {values, handleChanges} = this.props;
        return (
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter Personal Details' />
                    <Card className='card'>
                    <TextField 
                        floatingLabelText='Occupation'
                        hintText='Enter your occupation'
                        onChange={handleChanges('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField 
                        floatingLabelText='City'
                        hintText='Enter your city'
                        onChange={handleChanges('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField 
                        floatingLabelText='Biography'
                        hintText='Enter your bio'
                        onChange={handleChanges('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton
                        label='Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />

                    <RaisedButton
                        label='Back'
                        secondary={true}
                        style={styles.button}
                        onClick={this.btnBack}
                    />
                    </Card>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

var styles = {
    button:{
        margin: 15
    }
}

module.exports = FormPersonalDetails;