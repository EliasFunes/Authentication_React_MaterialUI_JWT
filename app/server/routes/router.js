import { renderToString } from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import routes from './routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import renderFullPage from '../renderFullPage';

import Base from '../../client/src/components/Base';

const express = require('express');
const router = express.Router();

router.get('*', (req, res) => {
    const match = routes.reduce((acc, route) => matchPath(req.url, {path:route, exact:true}) || acc, null);
    if(!match){
        res.status(404).send('the page not found');
    }else{


        const context = {};

        global.navigator = {
            userAgent: req.headers['user-agent']
        };
        const muiTheme = getMuiTheme({userAgent: req.headers['user-agent']});

        // injectTapEventPlugin();



        const html = renderToString(

            <MuiThemeProvider muiTheme={muiTheme}>
                <StaticRouter context={context} location={req.url}>
                    <Base/>
                </StaticRouter>
            </MuiThemeProvider>
        )

        res.status(200).send(renderFullPage(html));
    }
});

module.exports = router;