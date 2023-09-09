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
        let params = url.parse(req.url, true).query

        let data = {
            "slack_name": params.slack_name,
            "current_day": DateTime.now().day,
            "utc_time": DateTime.now().toISO(),
            "track": params.track,
            "github_file_url": "https://github.com/JimmyKurui/HNGx-Backend/blob/stage-one/server.js",
            "github_repo_url": "https://github.com/JimmyKurui/HNGx-Backend/tree/stage-one",
            "status_code": res.statusCode
        };

        res.end(JSON.stringify(data));
    }
);

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests...')
});