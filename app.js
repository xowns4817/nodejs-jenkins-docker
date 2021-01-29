const express = require('express');
const app = express();

app.get("/test", function(req, res) {
    res.send("/test");
    console.log("test server 1");
});


app.get("/aaa", function(req,res) {
 res.send("/aaa");
})

app.get("/bbb", function(req, res) {222
 res.send("/bbb");
});

app.get("/ccc", function(req, res) {
    res.send("/ccc");
});

app.get("/ddd", function(req, res) {
    res.send("/ddd");
});

app.get("/eee", function(req, res) {
    res.send("/eee");
});


app.listen(8000, function(req, res) {
    console.log("server on 8000!");
})
