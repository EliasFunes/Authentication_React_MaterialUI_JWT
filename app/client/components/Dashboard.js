import React from 'react';
import PropTypes from 'prop-types';
import  Card, {  CardContent, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const Dashboard = ({ secretData }) => (
    <Card className="container">
        <CardHeader title="Dashboard">
            You should get access to this page only after authentication.
        </CardHeader>
        <CardContent>
            {/*{secretData && <CardText style={{ fontSize:'16px', color:'green' }}>{secretData}</CardText>}*/}
            <Typography>
                You should get access to this page only after authentication.
            </Typography>
        </CardContent>
    </Card>
);

Dashboard.propTypes = {
    secretData: PropTypes.string.isRequired
};

export default Dashboard;