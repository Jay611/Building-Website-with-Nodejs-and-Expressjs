const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('x-server-date', new Date());
    return next();
});

app.get('/', (req, res, next) => {
    return res.send('Hello, I am a webserver');
});

app.get('/time', (req, res, next) => {
    return res.send(new Date().toString());
});

app.get('/hello', (req, res, next) => {
    if(!req.query.name){
        res.status(400).end();
    }
    return res.send(`Hello ${req.query.name}`);
});
// :name will provide the parameter in req.params
// routing middleware provide regular expression 
// /users?/:name -- matches '/user/James' and '/users/James'
// /user/:name? -- matches '/user' and optionally 'user/James'
app.get('/user/:name', (req, res, next) => {
    return res.send(`UserProfile of ${req.params.name}`);
});

app.listen(3000);