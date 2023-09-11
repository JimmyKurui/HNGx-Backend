const http = require('http');
const url = require('url');
const fs = require('fs');

const { DateTime } = require('luxon');

/*  Payload requirments
    {
        "slack_name": "example_name",
        "current_day": "Monday",
        "utc_time": "2023-08-21T15:04:05Z",
        "track": "backend",
        "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
        "github_repo_url": "https://github.com/username/repo",
        "status_code": 200
    }
*/

const server = http.createServer((req, res) => {
        console.log('Server started');
        // Check for api path
        if(req.url.startsWith('/api')) {
            let params = url.parse(req.url, true).query
            // Check for query parameters
            if(params.track && params.slack_name) {
                let data = {
                    "slack_name": params.slack_name,
                    "current_day": DateTime.now().weekdayLong,
                    "utc_time": DateTime.utc().plus({minutes: 2}),    // Offset for +/- minutes
                    "track": params.track,
                    "github_file_url": "https://github.com/JimmyKurui/HNGx-Backend/blob/stage-one/server.js",
                    "github_repo_url": "https://github.com/JimmyKurui/HNGx-Backend/tree/stage-one",
                    "status_code": res.statusCode
                };
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(data));
            } else {
                // Bad Request Parameters
                res.statusCode = 400;
                res.setHeader('Content-Type', 'text/html')
                fs.readFile('./views/400.html', (err, data) => {
                    err ? console.log(err) : res.end(data.toString())
                })
            }
        } else {
            // Bad Request
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html')
            fs.readFile('./views/404.html', (err, data) => {
                err ? console.log(err) : res.end(data.toString())
            })
        }
    }
);

server.listen(443, 'localhost', () => {
    console.log('Listening for requests...')
});