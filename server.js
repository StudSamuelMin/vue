const config = require('./config')[process.env.NODE_ENV];
const express = require('express');
const http = require('http');
const path = require("path");
const fs = require("fs");

global.UPLOAD_PATH = path.join("upload/");
global.MEMBER_PHOTO_PATH = path.join("upload/memberPhoto");
fs.mkdirSync(MEMBER_PHOTO_PATH, {recursive : true});

const app = express();
const port = config.PORT;

const cors = require('cors');
let corsOptions = {
    origin : 'http://localhost:8181',
    credential : true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extened : true}));
app.use("/upload/memberPhoto", express.static("upload/memberPhoto"));

const autoRoute = require('./autoRoute');
autoRoute('/api', app);

const webServer = http.createServer(app);
webServer.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
