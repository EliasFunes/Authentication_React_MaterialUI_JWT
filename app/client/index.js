import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createMuiTheme} from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});


import Base from './components/Base';

//remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const render = ReactDom.render;

render(
    (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Base/>
            </Router>
        </MuiThemeProvider>
    ), document.getElementById('react-app')
);