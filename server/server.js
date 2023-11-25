const path = require('path');
var express    = require("express");
var app = express();
const http = require('http').Server(app);

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.post('/api/example', function(req, res){
    res.json('example');
    console.log(req.body.data.data);
});

http.listen(3000, () => {
    console.log(`listening on *:${3000}`);
});