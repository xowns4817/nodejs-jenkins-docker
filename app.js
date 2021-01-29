const express = require('express');
const app = express();

app.get("/test", function(req, res) {
    res.send("/test");
    console.log("test server 1");
});


app.get("/aaa", function(req,res) {
 res.send("/aaa");
})

app.get("/bbb", function(req, res) {
 res.send("/bbb");
})

app.listen(8000, function(req, res) {
    console.log("server on 8000!");
})
