import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Success extends Component {

    render() {
        
        return (
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Success Thank You' />
                    <h1>Thank You for regestering</h1>
                    <p>
                        We will contact you via the email
                    </p>
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

module.exports = Success;