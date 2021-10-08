const express = require('express');
const app = express();

app.listen(3000, ()=>{

    console.log('Listening...');

} );


// Root - Handle GET request
app.get( '/' , ( req, res, next ) => {
        
    // REQUEST: req - Object containing info about the request - console.dir(req);
    console.log("Got a request! Pathname: ", req.path);
    console.log("Hostname: ", req.hostname);
    console.log("URL: ", req.url);
    console.log("Headers: ", req.headers);
    console.log("Method: ", req.method);
    console.log("Params: ", req.query);             // local/param1/param1/
    console.log("Query String: ", req.query);      // local/param1/param1/?query1=yes&query2=no -> {query1 : 'yes', query2 : 'no' }
    console.log("Req Params: ", req.params);       // similar to req.query but used for matched routed -> https://stackoverflow.com/questions/18524125/req-query-and-req-param-in-expressjs
    console.log("Req Body: ", req.body);            // Available on some requests only, like POST for example 

    
    res.sendFile(`./index.html`, { root: __dirname } ); // Respond with html file - text/html
    
} );