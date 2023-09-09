const http = require('http');
const url = require('url');
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
        console.log(req.url);
        if(req.url.startsWith('/api')) {
            let params = url.parse(req.url, true).query
            console.log(params);
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
                res.end(JSON.stringify(data));
            } else {
                res.statusCode = 400;
                res.end('Please add parameters: track and slack_name');
            }
        } else {
            res.statusCode = 404;
            res.end('Not Found: Check your request!');
        }
    }
);

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests...')
});