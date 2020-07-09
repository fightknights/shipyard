const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
const port = (process.env.PORT || process.env.VCAP_APP_PORT || 8080);

app.enable('trust proxy');

app.use(helmet());
app.use(express.static(__dirname + '/dist/shipyard'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/dist/shipyard/index.html'));
});

app.listen(port, function () {
    console.log("App listing on port:", port);
});