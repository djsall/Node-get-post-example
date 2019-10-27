const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = __dirname + '/public/';
const port = 8080;

app.use(express.static(path));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(pathname + "index.html");
});
app.post('/post', (req, res) => {
	console.log(JSON.stringify(req.body));
	res.send({
		successful: 'post'
	});
});
app.get('/get', (req, res) => {
	res.send({
		successful: 'get'
	});
});

app.listen(port, () => {
	console.log('Example app listening on ' + port + ' port!');
});
