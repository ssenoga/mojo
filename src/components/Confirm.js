import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import { List , ListItem } from 'material-ui/List';
import Card from '@material-ui/core/Card';
class Confirm extends Component {

    continue = e => { 
        this.props.nextStep();
        e.preventDefault();
    }

    btnBack = e =>{
        this.props.prevStep();
        e.preventDefault();
    }

    render() {
        const { values : { firstName, lastName, email, occupation , bio, city }} = this.props;
        return (
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Confirm Details' />
                    
                    <Card className='card'>
                    <List>
                        <ListItem 
                            primaryText='First Name'
                            secondaryText={firstName}
                        />
                    </List>

                    <List>
                        <ListItem 
                            primaryText='Last Name'
                            secondaryText={lastName}
                        />
                    </List>

                    <List>
                        <ListItem 
                            primaryText='Email'
                            secondaryText={email}
                        />
                    </List>

                    <List>
                        <ListItem 
                            primaryText='City'
                            secondaryText={city}
                        />
                    </List>

                    <List>
                        <ListItem 
                            primaryText='Occupation'
                            secondaryText={occupation}
                        />
                    </List>

                    <List>
                        <ListItem 
                            primaryText='Bio'
                            secondaryText={bio}
                        />
                    </List>
                    
                    <RaisedButton
                        label='Confirm'
                        primary={true}
                        onClick={this.continue}
                    />

                    <RaisedButton
                        label='Back'
                        secondary={true}
                        onClick={this.btnBack}
                    />
                    </Card>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


module.exports = Confirm;