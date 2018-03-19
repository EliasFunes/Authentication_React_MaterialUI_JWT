import { renderToString } from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import routes from '../../client/src/routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import renderFullPage from '../renderFullPage';

import Base from '../../client/src/components/Base.jsx';

export default function router(req, res) {
    const match = routes.reduce((acc, route) => matchPath(req.url, {path:route, exact:true}) || acc, null);

    if(!match){
        res.status(404).send('the page not found');
        return;
    }

    injectTapEventPlugin();
    const context = {};

    const html = renderToString(

        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <StaticRouter context={context} location={req.url}>
                <Base/>
            </StaticRouter>
        </MuiThemeProvider>
    )

    res.status(200).send(renderFullPage(html));
    return;
}