import { renderToString } from 'react-dom/server'
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import routes from './routes';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import renderFullPage from '../renderFullPage';

import Base from '../../client/components/Base';

const express = require('express');

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

export default function router(req, res) {

    const match = routes.reduce((acc, route) => matchPath(req.url, {path:route, exact:true}) || acc, null);
    if(!match){
        res.status(404).send('page not found');
        return;
    }

    const context = {};
    global.navigator = {
        userAgent: req.headers['user-agent']
    };
    //const muiTheme = getMuiTheme({userAgent: req.headers['user-agent']});

    const html = renderToString(
            <MuiThemeProvider theme={theme}>
                <StaticRouter context={context} location={req.url}>
                    <Base/>
                </StaticRouter>
            </MuiThemeProvider>
        )

    res.status(200).send(renderFullPage(html));

}