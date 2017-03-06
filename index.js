const http = require('http');

function requestHandler(request, response) {
    const headers = {
        'Server-Timing' : `
            sql-1=0.1; "MySQL lookup server",
            sql-2=0.9; "MySql Shard Server",
            fs=0.6; "File System",
            cache=0.3; "Cache",
            cpu=1.23; "Total CPU"
        `.replace(/\n/g, '')
    }
    response.writeHead(200, headers);
    response.write('Look at timings in developer tools, I have custom server timings');
    return setTimeout(_=>{
        response.end();
    }, 1230)
}

var server = http.createServer(requestHandler)

server.listen(3000);