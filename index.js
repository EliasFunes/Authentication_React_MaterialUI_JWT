const express = require('express');

const app = express();

//tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

const port = 3000;

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})