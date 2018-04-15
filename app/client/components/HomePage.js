import React from 'react';
import  Card, { CardContent, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const HomePage = () => (
    <Card className="container">
        <CardHeader title="React Application">
        </CardHeader>
        <CardContent>
            <Typography>
                This is the home Page.
            </Typography>
        </CardContent>
    </Card>
);

export default HomePage;